---
layout: post
title: Type Tracking Using Arm Memory Tagging
description: >
  Memory Tagging is for memory safety. At least, that is the intention. What if
  you ignore all the advice and use memory tags for your own data? In this
  article I will show you how to do that. It seems like a bad idea, but you
  might be surprised by the results.
date: 2024-04-08 09:17:02 +00:00
image: /assets/images/content/Code_Image_Core_tech.jpg
tags:
  - Arm
  - AArch64
  - Memory Tagging
  - MTE
  - Top Byte Ignore
  - TBI
  - Garbage Collection
category: blog
author: alan.bennett
---
# Memory Tagging is (Usually) For Memory Safety

AArch64’s Memory Tagging Extension (MTE) has a clear purpose. Memory safety.

By adding tags to memory and the pointers used to access that memory, a processor can check the use of that memory. A pointer to a buffer is tagged with the same tag as the buffer itself. If a buffer overflow occurs the processor will raise an exception because the memory outside the buffer has a different tag.

The [Chromium project found](https://www.chromium.org/Home/chromium-security/memory-safety/) that 70% of their security issues were memory safety problems. That is why it is so important to have efficient ways to detect them.

However, this article is not about memory safety. This article is about throwing out memory safety so you can instead store type information in memory tags.

If you want to know about memory safety, you can stop here and instead read my previous [article on MTE](https://www.linaro.org/blog/debugging-memory-tagging-with-lldb-13/).

If you are still here, remember that this is an experiment and an unusual way to learn about MTE. Any criticism here should not be applied to MTE’s intended purpose, only the use case presented here.

Source code for the interpreter shown in this article is available for the original [TBI only](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/tree/main) version and this new [TBI+MTE](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/tree/memory_tagged/) version (both MIT licensed).

# Famous Last Words

I previously wrote an [article](https://www.linaro.org/blog/top-byte-ignore-for-fun-and-memory-savings/) about a [LISP](https://en.wikipedia.org/wiki/Lisp_(programming_language)) interpreter that uses AArch64’s Top Byte Ignore (TBI) feature. TBI allows it to compress the size of its symbols by storing their properties inside pointers to the values of the symbols.

It reminded me of LISP machines that had [tagged memory](https://dl.acm.org/doi/10.1145/327070.327133). Those tags were used to store type information and other metadata. I wondered if I could use MTE to do the same; use the memory tag as symbol metadata but at the cost of discarding memory safety.

At the time, I thought it was not possible:

“The pitfall is that to access tagged memory on AArch64 you need to have the correct tag in the pointer. If it does not match the stored memory tag, you get an exception. Meaning you would have to store your metadata in both the pointer and the memory it points to. So they are not “extra” bits, just another place to put the same bits.”

I was wrong. Tag checking is in fact optional and I will show you how to make use of that.

Note: In the quote above, “extra” ignores the cost of enabling memory tagging in your system’s design. I will assume you already have a system with MTE, and come back to those costs in the conclusion.

Should anyone disable tag checking? You would think not, but it turns out I am not the first person to think along these lines. Konstantin Serebryany’s [paper](https://www.usenix.org/system/files/login/articles/login_summer19_03_serebryany.pdf) on memory tagging says this:

“Other clever ways to use MTE will likely be discovered. MTE may allow building debuggers with infinite hardware watchpoints, efficient race detectors, or faster garbage collectors.”

# MTE: On the Shoulders of TBI

If you want to go deep into MTE and TBI you can read my [previous](https://www.linaro.org/blog/debugging-memory-tagging-with-lldb-13/) [articles](https://www.linaro.org/blog/top-byte-ignore-for-fun-and-memory-savings/) on them. I am recapping the basics here, which are all you need to know for this article.

Top Byte Ignore is quite literal. When enabled, the top byte of a pointer is ignored by the processor. So you can put anything you want there without causing problems. This has many implications but for now think of them as “free bits” for you to use.

<br>
<table style="width: 100%; border-collapse: collapse; border: solid rgb(5, 5, 5);">
    <tbody>
        <tr>
            <td style="width: 33.3011%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><b><span style="font-size:11pt;">Bits 63-56</span></b></p>
            </td>
            <td style="width: 33.3011%; border: solid rgb(5, 5, 5); text-align: center; vertical-align: middle;">
                <p><b><span style="font-size:11pt;">Bits 55-48</span></b></p>
            </td>
            <td style="border: solid rgb(5, 5, 5); text-align: center; width: 33.3333%; vertical-align: middle;"><b><span style="font-size:11pt;">Bits 47-0</span></b><br></td>
        </tr>
        <tr>
            <td style="width: 33.3011%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><span style="font-size:11pt;">Top Byte</span></p>
            </td>
            <td style="width: 33.3011%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><span style="font-size:11pt;">Unused</span></p>
            </td>
            <td style="border: solid rgb(5, 5, 5); width: 33.3333%; text-align: center;"><span style="font-size:11pt;">48 Bit Virtual Address</span><br></td>
        </tr>
    </tbody>

</table> <br>
<div style=" font-size: 14px; text-align: center;">Figure 1: Pointer contents when using TBI
</div>

<br>Crucially these are not like “free bits” you get from alignment assumptions. You can assume that a pointer to a 4 byte aligned address has its 2 least significant bits set to 0. So you can put 2 bits of your own data there, as long as you remove them before using the pointer. In contrast, when using TBI you do not ever need to remove your data from the pointer.

The same applies to the “Unused” bits between the end of the top byte and the start of the virtual address. Though these are generally unused (the virtual address can be extended) they are still counted for addressing purposes. So again you could use those bits, but you would have to remove them every time you use the pointer to access memory.

<br>
<table style="width: 100%; border-collapse: collapse; border: solid rgb(5, 5, 5);">
    <tbody>
        <tr>
            <td style="width: 25%; border: solid rgb(5, 5, 5);"><strong><span style="font-size:11pt;">Bits 63-60</span></strong><br></td>
            <td style="width: 25%; border: solid rgb(5, 5, 5);">
                <p><strong><span style="font-size:11pt;">Bits 59-56</span></strong></p><br>
            </td>
            <td style="width: 25%; border: solid rgb(5, 5, 5);">
                <p><strong><span style="font-size:11pt;">Bits 55-48</span></strong></p><br>
            </td>
            <td style="width: 25%; border: solid rgb(5, 5, 5);">
                <p><strong><span style="font-size:11pt;">Bits 47-0</span></strong></p><br>
            </td>
        </tr>
        <tr>
            <td style="width: 25%; border: solid rgb(5, 5, 5);">
                <p><span style="font-size:11pt;">Top Nibble Ignore</span></p><br>
            </td>
            <td style="width: 25%; border: solid rgb(5, 5, 5);">
                <p><span style="font-size:11pt;">Logical Memory Tag</span></p><br>
            </td>
            <td style="width: 25%; border: solid rgb(5, 5, 5);"><span style="font-size:11pt;">Unused</span><br></td>
            <td style="width: 25%; border: solid rgb(5, 5, 5);">48 Bit Virtual address</td>
        </tr>
    </tbody>

</table> <br>
<div style=" font-size: 14px; text-align: center;">Figure 2: Pointer contents when using TBI and MTE
</div>

Memory tagging builds on TBI by using the bottom 4 bits of that top byte to store a 4 bit “logical tag” as shown in Figure 2.

This is paired with an “allocation tag” which is stored in separate tag memory. When you access memory the two tags are compared. If they are different, an exception is raised.

<br>
<table style="width: 100%; border-collapse: collapse; border: solid rgb(5, 5, 5);">
    <tbody>
        <tr>
            <td style="width: 50%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><strong><span style="font-size:11pt;">Buffer 1</span></strong></p><br>
            </td>
            <td style="width: 50%; border: solid rgb(5, 5, 5); text-align: center;">
                <p><strong><span style="font-size:11pt;">Buffer 2</span></strong></p><br>
            </td>
        </tr>
        <tr>
            <td style="width: 50%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><span style="font-size:11pt;">Allocation tag: 1</span></p><br>
            </td>
            <td style="width: 50%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><span style="font-size:11pt;">Allocation tag: 2</span></p><br>
            </td>
        </tr>
        <tr>
            <td style="width: 50%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><span style="font-size:11pt;">Logical tag 1</span></p><br>
            </td>
            <td style="width: 50%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><span style="font-size:11pt;">Logical tag 1</span></p><br>
            </td>
        </tr>
        <tr>
            <td style="width: 50%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><span style="font-size:11pt;">Pass</span></p><br>
            </td>
            <td style="width: 50%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><strong><span style="font-size:11pt;">Exception!</span></strong></p><br>
            </td>
        </tr>
    </tbody>

</table> <br>
<div style=" font-size: 14px; text-align: center;">Figure 3: Memory accesses using MTE
</div>

That is the intended use of MTE, memory safety. Imagine one of those buffers is for a username and you forget to limit the number of characters copied into it. With MTE, you can prevent a buffer overflow that would otherwise cause a security issue.

Luckily for us, this tag checking can be disabled. Why is that allowed? One reason is to allow porting of applications that are not yet memory safe. You can fix a memory safety issue and then run without tag checks to make sure the application still functions properly. Then turn the tag checks back on to find the next issue.

In the usual combination of TBI and MTE, the “top byte” is cut down to a “top nibble” of 4 bits. That does not apply here because without tag checking enabled, you do not need to put the logical tag in the top byte.

# TBI LISP

The original TBI only demo aimed to reduce the number of slots used in a symbol table as much as possible. Mainly by reference counting. Why should “(+ 1 1 1)” make 3 copies of “1”, when instead you could reference the same copy 3 times.

In addition to a reference count, you need the symbol’s type. So I split the top byte into 4 bits of reference count and 4 bits of type.

<br>
<table style="width: 100%; border-collapse: collapse; border: solid rgb(5, 5, 5);">
    <tbody>
        <tr>
            <td style="width: 24.9182%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><b><span style="font-size:11pt;">Bits 63-56</span></b></p>
            </td>
            <td style="width: 24.9182%; border: solid rgb(5, 5, 5); text-align: center; vertical-align: middle;">
                <p><b><span style="font-size:11pt;">Bits 59-56</span></b></p>
            </td>
            <td style="border: solid rgb(5, 5, 5); text-align: center; width: 24.9182%; vertical-align: middle;"><b><span style="font-size:11pt;">Bits 55-48</span></b><br></td>
            <td style="border: solid rgb(5, 5, 5); text-align: center; width: 33.3333%; vertical-align: middle;; width: 25.0000%;"><b><span style="font-size:11pt;">Bits 47-0</span></b><br></td>
        </tr>
        <tr>
            <td style="width: 24.9182%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><span style="font-size:11pt;">Reference count</span></p>
            </td>
            <td style="width: 24.9182%; border: solid rgb(5, 5, 5);">
                <p style="text-align: center;"><span style="font-size:11pt;">Type</span></p>
            </td>
            <td style="border: solid rgb(5, 5, 5); width: 24.9182%; text-align: center;"><span style="font-size:11pt;">Unused</span><br></td>
            <td style="border: solid rgb(5, 5, 5); width: 33.3333%; text-align: center;; width: 25.0000%;"><span style="font-size:11pt;">Address of the symbol&rsquo;s value</span><br></td>
        </tr>
    </tbody>
</table> <br>
<div style=" font-size: 14px; text-align: center;">Figure 4: Layout of Symbol pointer using TBI only
</div>

Reference count and type had a range of 0-15. Reference count of 0 meant a symbol could be destroyed. The type values were 0 for UnsignedInt and 1 for String.

# Taking the Safety Off

The new plan is to use both MTE and TBI with the symbol pointers. The type of the symbol will be stored in the allocation tag, leaving the whole top byte free for reference counting. So instead of only 15 references, you can have up to 255.

To make that work you need to disable tag checking in the memory where the symbol values are allocated. Since there is no longer a logical tag in the pointer and only by chance could the bottom 4 bits of the reference count match the allocation tag and pass the tag check.

<br>
<div align="left">
    <table style="border: none; border-collapse: collapse; width: 100%;">
        <tbody>
            <tr>
                <td style="border:  solid rgb(0, 0, 0); width: 34.7791%; text-align: center;">
                    <p><strong><span style="font-size:11pt;">Tag Memory</span></strong></p>
                </td>
                <td colspan="3" style="border:  solid rgb(0, 0, 0); width: 65.0572%; text-align: center;">
                    <p><strong><span style="font-size:11pt;">Pointer</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="border:  solid rgb(0, 0, 0); width: 34.7791%; text-align: center;">
                    <p><strong><span style="font-size:11pt;">Allocation Tag</span></strong></p>
                </td>
                <td style="border:  solid rgb(0, 0, 0); width: 21.4492%; text-align: center;">
                    <p><strong><span style="font-size:11pt;">Bits 63-56</span></strong></p>
                </td>
                <td style="border:  solid rgb(0, 0, 0); text-align: center; width: 21.595%;">
                    <p><strong><span style="font-size:11pt;">Bits 55-48</span></strong></p>
                </td>
                <td style="border:  solid rgb(0, 0, 0); text-align: center; width: 22.0131%;">
                    <p><strong><span style="font-size:11pt;">Bits 47-0</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="border:  solid rgb(0, 0, 0); width: 34.7791%; text-align: center;">
                    <p><span style="font-size:11pt;">Type</span></p>
                </td>
                <td style="border:  solid rgb(0, 0, 0); width: 21.4492%; text-align: center;">
                    <p><span style="font-size:11pt;">Reference Count</span></p>
                </td>
                <td style="border:  solid rgb(0, 0, 0); text-align: center; width: 21.595%;">
                    <p><span style="font-size:11pt;">Unused</span></p>
                </td>
                <td style="border:  solid rgb(0, 0, 0); text-align: center; width: 22.0131%;">
                    <p><span style="font-size:11pt;">Virtual Address</span></p>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</table> <br>
<div style=" font-size: 14px; text-align: center;">Figure 5: Layout of Symbol pointer when using TBI and MTE
</div>

One thing you are not required to do, but this interpreter will do, is starting the type numbering at 1 instead of 0. This is because the convention (it is not hardware enforced) is that a memory tag of 0 means that tagged memory has just been allocated, or has had its tag reset to 0 where it previously had a non-zero tag. Sometimes referred to as “untagging”.

Any pointer to allocated memory will have a non-zero tag. Therefore setting the memory’s tag back to 0 invalidates all the pointers previously given out to the program. This prevents exploits like “use after free”. Where memory is accessed after it has been freed, corrupting new allocations that may now occupy that memory.

Tag checking is disabled, so you do not have to do this “untagging”. I am choosing to do it to clearly show how symbol garbage collection works later in this article. Deleted symbols’ memory locations will have their memory tags reset to 0.

# Tagged Allocations

The core of the interpreter is the Symbol and SymbolTable classes. The SymbolTable is a vector of Symbols. Symbols are the pointer sized value you saw earlier.

Each symbol has to allocate storage for the actual value of the symbol, so the next step is to substitute in an allocator that also tags memory.

What I have written is very simple, just enough to get the demo working. The MTE specific operations are provided by the [Arm C Language Extensions](https://developer.arm.com/documentation/101028/0012/10--Memory-tagging-intrinsics) (ACLE).

Note: If you want to see more “standard” memory allocator (though without memory tagging), check out my Arm Learning Paths [“Write a Dynamic Memory Allocator”](https://learn.arm.com/learning-paths/cross-platform/dynamic-memory-allocator/) and [“Adding Memory Tagging to a Dynamic Memory Allocator”](https://learn.arm.com/learning-paths/laptops-and-desktops/memory-tagged-dynamic-memory-allocator/).

In summary:

* [tagged_heap_init](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/blob/0daeeb3a7715a99356451bd62651c6006667faf9/TaggedStorage.cpp#L44)  does a one time setup and is called from [main](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/blob/0daeeb3a7715a99356451bd62651c6006667faf9/main.cpp#L49):
* * Allocate a large chunk of tagged memory using mmap and the PROT_MTE flag to enable memory tagging.
  * Ignore tag faults in this memory by using the PR_MTE_TCF_NONE option.
* [tagged_malloc](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/blob/0daeeb3a7715a99356451bd62651c6006667faf9/TaggedStorage.cpp#L91) replicates malloc, with an extra argument to pass in the new allocation tag.
* [tagged_free](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/blob/0daeeb3a7715a99356451bd62651c6006667faf9/TaggedStorage.cpp#L114) replaces free, with an extra argument which is the size of the allocation to free. Since the interpreter knows what type it is freeing, the allocator does not have to keep track of this.
* Allocations always continue forwards (sometimes referred to as a “bump allocator”).
* tagged_free does not “free” memory, it just sets the allocation tags to 0.
* All new and delete calls in the interpreter will be replaced with tagged_malloc and tagged_free.

Allocation tags apply to “granules” and a “granule” is 16 bytes of memory. This means that each symbol must allocate at least 16 bytes, or a multiple of 16 bytes. So all our UnsignedInts will take up more memory than they need to, as will many other types (more on this in the conclusion).

The final step was to rewrite [Symbol::GetType](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/blob/0daeeb3a7715a99356451bd62651c6006667faf9/Symbol.cpp#L145) to read back the allocation tag from tag memory instead of masking the pointer.

With the allocator in place you can use the 4 bit memory tag plus the top byte you already had. For a total of 12 “free” bits of metadata.

## Example Allocation

In this example there is an UnsignedInt symbol (type value = 1) with value 99 and a reference count of 25.

<div align="left">
    <table style="border: none; border-collapse: collapse; margin-right: calc(0%); width: 100%;">
        <tbody>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 36.1551%; text-align: center;">
                    <p><strong><span style="font-size:11pt;">Bits 63-56</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.848%; text-align: center;">
                    <p><strong><span style="font-size:11pt;">Bits 55-48</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 29.9593%; text-align: center;">
                    <p><strong><span style="font-size:11pt;">Bits 47-0</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 36.1551%; text-align: center;">
                    <p><span style="font-size:11pt;">Reference count of 25 (0x19)</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.848%; text-align: center;">
                    <p><span style="font-size:11pt;">Unused</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 29.9593%; text-align: center;">
                    <p><span style="font-size:11pt;">Pointer to allocator storage offset 0x00.&nbsp;</span></p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<p style="text-align: center;"><span style="font-size:11pt;">Figure 6: Symbol pointer</span></p>
<br>
<div align="left">
    <table style="border: none; border-collapse: collapse; margin-right: calc(0%); width: 100%;">
        <tbody>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 29.6407%; text-align: center;">
                    <p><strong><span style="font-size:11pt;">Address (relative)</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 42.7681%; text-align: center;">
                    <p><strong><span style="font-size:11pt;">Allocation Tag</span></strong><strong><span style="font-size:11pt;"><br></span></strong><strong><span style="font-size:11pt;">(Type Value)</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center; width: 27.5561%;">
                    <p><strong><span style="font-size:11pt;">Value</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 29.6407%; text-align: center;">
                    <p><span style="font-size:11pt;">0x00</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 42.7681%; text-align: center;">
                    <p><span style="font-size:11pt;">1</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center; width: 27.5561%;">
                    <p><span style="font-size:11pt;">99</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 29.6407%; text-align: center;">
                    <p><span style="font-size:11pt;">0x08</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 42.7681%; text-align: center;">
                    <p><span style="font-size:11pt;">1</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center; width: 27.5561%;">
                    <p><span style="font-size:11pt;">0</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 29.6407%; text-align: center;">
                    <p><span style="font-size:11pt;">0x10</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 42.7681%; text-align: center;">
                    <p><span style="font-size:11pt;">0</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center; width: 27.5561%;">
                    <p><span style="font-size:11pt;">?</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 29.6407%; text-align: center;">
                    <p><span style="font-size:11pt;">&hellip;</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 42.7681%; text-align: center;">
                    <p><span style="font-size:11pt;">0</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center; width: 27.5561%;">
                    <p><span style="font-size:11pt;">?</span></p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<p style="text-align: center;"><span style="font-size:11pt;">Figure 7: Symbol memory allocation</span></p>
</p>

<br>In Figure 7 you can see that:

* The size of the UnsignedInt has been rounded up to 16 bytes (1 granule).
* The first 16 bytes of memory are tagged with 1 which is the type value for UnsignedInt. 
* The value at offset 0x00 is 99, and the next 8 bytes are unused since our numbers are only 8 bytes (uint64_t in C terms).
* A slot follows at offset 0x10, which remains tagged with 0 because it is not in use.

That is the theory, now for the reality.

# Examples

## Type Errors

Expression: (+ 1 “abc”)

Result: “Error: All arguments to + must be the same type”

This example:

* Uses both the UnsignedInt (type=1) and String (type=2) type values.
* Cleary does a type check.
* Has 2 symbols with 2 different literal values (1 and “abc”).

Note: If you want to follow along, you will have to have at least [LLDB 13](https://github.com/llvm/llvm-project/releases/tag/llvmorg-13.0.1) and be running in a system simulator like qemu-system-aarch64. As qemu-aarch64 does not support the memory tagging debug protocol packets at this time.

You will stop in [do_plus](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/blob/0daeeb3a7715a99356451bd62651c6006667faf9/Execute.cpp#L28) which is where the type error is raised, then step to the type check itself.

<p><br></p>
<pre><span style="font-size:9pt;">if (std::adjacent_find(arguments.cbegin(), arguments.cend(),</span>
<span style="font-size:9pt;">                        [&amp;symbol_table](SymbolIndex lhs, SymbolIndex rhs) {</span>
<span style="font-size:9pt;">                          return symbol_table.GetSymbol(lhs).GetType() !=</span>
<span style="font-size:9pt;">                                 symbol_table.GetSymbol(rhs).GetType();</span>
<span style="font-size:9pt;">                        }) != arguments.end())</span>
<span style="font-size:9pt;">   return &quot;All arguments to + must be the same type&quot;;</span></pre><br>

This code walks all the arguments to “+”. Whatever the type of the first argument is, all of the subsequent arguments should have that same type. In this case the first argument is an UnsignedInt, so the next one should also be an UnsignedInt. It is actually a String, so the type check fails.

The core of the check is [Symbol::GetType](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/blob/0daeeb3a7715a99356451bd62651c6006667faf9/Symbol.cpp#L145):

<p><br></p>
<pre><span style="font-size:9pt;">SymbolType Symbol::GetType() const {</span>
<span style="font-size:9pt;">  return static_cast&lt;SymbolType&gt;((reinterpret_cast&lt;uintptr_t&gt;(__arm_mte_get_tag(</span>
<span style="font-size:9pt;">                                      reinterpret_cast&lt;void *&gt;(m_value))) &gt;&gt;</span>
<span style="font-size:9pt;">                                  REFCOUNT_LSB) &amp;</span>
<span style="font-size:9pt;">                                 0xf);</span>
<span style="font-size:9pt;">}</span></pre>
<p><br></p>

__arm_mte_get_tag is an ACLE function that produces the instruction [“ldg”](https://developer.arm.com/documentation/ddi0602/2023-06/Base-Instructions/LDG--Load-Allocation-Tag-). It takes a pointer to an address and returns that same pointer with its logical tag set to the allocation tag of the memory it points to. The interpreter then shifts and masks the result to get just the tag.

You can use the debugger to confirm what the error told us. Our first argument, “1”, will be index 0 in the symbol table.

`(lldb) p/x symbol_table.GetSymbol(0)`

`(const Symbol)  (m_value = 0x0100fffff7fed000)`

It contains a pointer with some part of the top byte set. This is the reference count of 1. Not to be confused with the type value of UnsignedInt, which is also 1. The type value is in the allocation tag, as shown below.

`(lldb) memory read 0x0100fffff7fed000 --show-tags -c 32`

`0xfffff7fed000: 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................ (tag: 0x1)`

`0xfffff7fed010: 61 62 63 00 00 00 00 00 00 00 00 00 00 00 00 00  abc............. (tag: 0x2)`

On the first line (offset 0x00) you will see an allocation tag (the type value) of 1, with the literal value 1 set in the first byte of memory.

Each line is 16 bytes (1 granule), so the second line will be a different symbol. This must be index 1, “abc”. You can see the stored ASCII characters on line 2 (offset 0x10).

You can also get to this second symbol’s allocation from the symbol table, where it will be index 1.

`(lldb) p/x symbol_table.GetSymbol(1)`

`(const Symbol)  (m_value = 0x0100fffff7fed010)`

It has a reference count of 1, as you would expect. There is no sign of the type value (2) in the top byte, as that is stored in the allocation tag. Following this pointer you get to the same location as before, where “abc” is stored.

`(lldb) p/x (const char*)symbol_table.GetSymbol(1).m_value`

`(const char *) 0x0100fffff7fed010 "abc"`

From this you can see how the interpreter can take arguments as indexes into the symbol table, use those to find the symbol’s type from the allocation tag and perform a type check.

## Reference Counting

Storing the type in the allocation tag means you can have much larger reference counts than if you had to share the top byte. I will not show the limit of that (it is tested [here](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/commit/8679b1d0d1a1f22c39116624ead50d262910d2b2#2b02418196b18e5b2b610661283933c0715abfee_129_128) if you are really interested), only a minimal example of reference counting.

Expression: (+ 1 1)

Our first stop is when the first 1 is allocated, at the end of [consume_unsigned_integer](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/blob/0daeeb3a7715a99356451bd62651c6006667faf9/Parser.cpp#L66). Here you see the new symbol with a reference count of 1 set in the top byte.

`(lldb) p/x m_symbol_table.GetSymbol(0)`

`(const Symbol)  (m_value = 0x0100fffff7fed000)`

``\
The allocation for the Symbol has an allocation tag of 1, which matches its UnsignedInt type value of 1.

`(lldb) memory read 0x0100fffff7fed000 --show-tags -c 32 -f bytes`

`0xfffff7fed000: 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 (tag: 0x1)`

You will not get a type error this time, so you can continue until after the type check in [do_plus](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/blob/0daeeb3a7715a99356451bd62651c6006667faf9/Execute.cpp#L28).

`(lldb) p symbol_table.m_symbols.size()`

`(std::vector<Symbol>::size_type) 1`

``\
You still have 1 symbol, which is expected as you should not need another Symbol for the second 1.

`(lldb) p/x symbol_table.GetSymbol(0)`

`(const Symbol)  (m_value = 0x0200fffff7fed000)`

Indeed you see that reference count has changed. The top byte now has the value 2 since you are representing 2 “1”s with 1 Symbol. Of course 1+1 is 2 and you will need a new Symbol for that.

`(lldb) memory read 0x0100fffff7fed000 --show-tags -c 32 -f bytes`

`0xfffff7fed000: 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 (tag: 0x1)`

`0xfffff7fed010: 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 (tag: 0x1)`

\
Stepping over the “+”, you see that “2” appears in memory on the second line above (offset 0x10). This is the result of “1+1”.

Now that “+” has finished, it no longer needs its arguments. For each argument of the “+” you decrement that argument’s reference count by 1. In this case both arguments are the same symbol so you start with a reference count of 2, 2 - 1 - 1 = 0, so there are no remaining references to the “1” symbol.

This means you can delete the symbol. Here an earlier detail is important. I chose to start type values at 1 so that 0 could be used as the “untagged” allocation tag value.

\
`(lldb) memory read 0x0100fffff7fed000 --show-tags -c 32 -f bytes`

`0xfffff7fed000: 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 (tag: 0x0)`

`0xfffff7fed010: 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 (tag: 0x1)`

\
Freeing the symbol calls tagged_free which resets the memory tag to 0 for the memory on the first line above (offset 0x00). You see that the result “2” remains undisturbed on the second line (offset 0x10) with the expected tag 1.

In our case this “untagging” step is not required as you have disabled tag checks. It is purely to aid debugging and demonstrating the interpreter.

# Conclusion

Should you do this? Probably not, but perhaps not never.

The first drawback is that everything must be aligned and expanded to a 16 byte granule. That is 2 times the size of our uint64_t UnsignedInt, and any String not a multiple of 16 bytes will also be wasting space.

You could mitigate this by having a smarter allocator that can pool the same types to be next to each other, as shown in Figure 8.

<br><div align="left">
    <table style="border: none; border-collapse: collapse; margin-right: calc(0%); width: 100%;">
        <tbody>
            <tr>
                <td rowspan="2" style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Address</span></strong></p>
                </td>
                <td colspan="2" style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Tagged Allocator</span></strong></p>
                </td>
                <td colspan="2" style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">&ldquo;Smart&rdquo; Tagged Allocator</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Tag</span></strong></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Contents</span></strong></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Tag</span></strong></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Contents</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">0x00</span></strong></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">1</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">UnsignedInt 1</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">1</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">UnsignedInt 1</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">0x08</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">1</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center;"></td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">1</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">UnsignedInt 2</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">0x10</span></strong></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">1</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">UnsignedInt 2</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">2</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">String &ldquo;abc&rdquo;</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">0x18</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">1</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center;"></td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">2</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center;"></td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">0x20</span></strong></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">2</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">String &ldquo;abc&rdquo;</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">0</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center;"></td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">0x28</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">2</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center;"></td>
                <td style="border: solid #000000 1pt;">
                    <p style="text-align: center;"><span style="font-size:11pt;">0</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); text-align: center;"></td>
            </tr>
        </tbody>
    </table>
</div>
<p style="text-align: center;"><span style="font-size:11pt;">Figure 8: Improved layout by sharing granules</span></p>

Though this can also be done without memory tagging by having one allocation area per type and checking what area the pointer points to. Is a range check going to be faster than pulling the allocation tag from tag memory? Hard to say without access to a specific implementation.

16 byte alignment also means that all pointers’ 4 least significant bits will be 0. So you could use those bits instead of the allocation tag. This means masking a few more times than you would have done tag lookups, but it could run on systems without MTE, including non-Arm systems.

Of course all this requires completely disabling the memory safety benefits of MTE. If you were willing to give up the “extra” bits and include the type value in the pointer instead, you could enable tag checking again. However you would need some intelligence in the allocator to recover the memory safety benefits.

The allocator used here does not attempt to separate two allocations of the same type. So an overflow from one into the other will not be detected as the allocation tags will be the same.

<p style="text-align: center;"></p>
<div align="left">
    <table style="border: none; border-collapse: collapse; margin-right: calc(0%); width: 100%;">
        <tbody>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.9312%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Memory Offset</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.8949%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">0x00</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 32.0403%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">0x10</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.9312%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Symbol Name</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.8949%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">A</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 32.0403%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">B</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.9312%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Symbol Type</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.8949%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">String</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 32.0403%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">String</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.9312%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Allocation Tag</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 33.8949%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">2</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 32.0403%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">2</span></p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<p style="text-align: center;"><span style="font-size:11pt;">Figure 9: Sequential allocation of identical symbol types</span></p>

In figure 9 you can see that when using a pointer to symbol A, a program could overflow into symbol B without an exception being raised. You can mitigate this by interleaving types in memory but you are limited by the order in which the interpreter asks for them to be allocated. So you may need expensive fragmenting steps to ensure a safe layout.

Notice that the goal here is keeping values of the same type away from each other and I just talked about doing the opposite to mitigate a different issue. Once you have decided that memory tags are something more than arbitrary values, you have to work very hard to keep the memory safety benefits.

If you want to buck convention despite all that, you could use all the previously mentioned techniques and get 16 bits of metadata in total. Top byte, plus the 4 bit allocation tag, plus 4 least significant bits from alignment. Which application needs that? Not sure but whatever it is, it would likely have a low memory budget. 

<br>
<div align="left">
    <table style="border: none; border-collapse: collapse; margin-right: calc(0%); width: 100%;">
        <tbody>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 19.2754%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Tag Memory</span></strong></p>
                </td>
                <td colspan="4" style="border: 1pt solid rgb(0, 0, 0); width: 80.628%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Pointer</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 19.2754%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Allocation Tag</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 20.1902%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Top Byte</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 20.0174%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Unused</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 19.8392%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Virtual Address</span></strong></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 20.6439%;">
                    <p style="text-align: center;"><strong><span style="font-size:11pt;">Bits 3-0</span></strong><strong><span style="font-size:11pt;"><br></span></strong><strong><span style="font-size:11pt;">(known to be 0)</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 19.2754%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">4 bits</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 20.1902%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">8 bits</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 20.0174%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">N/A</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 19.8392%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">N/A</span></p>
                </td>
                <td style="border: 1pt solid rgb(0, 0, 0); width: 20.6439%;">
                    <p style="text-align: center;"><span style="font-size:11pt;">4 bits</span></p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<p style="text-align: center;"><span style="font-size:11pt;">Figure 10: Available bits when using TBI, MTE and alignment assumptions</span></p>

Finally, I made an assumption earlier that you already have a system with MTE. If you were instead designing a system from scratch you would have to consider the cost of enabling MTE.



The biggest question is where to store the tags. The architecture does not tell designers exactly how to store allocation tags, but one suggested method using a [portion of your Dynamic Random-Access Memory](https://www.youtube.com/watch?v=qzQNoYwcH2g&t=290s) (DRAM). If you wanted to tag all your memory and achieve the LISP machine dream I referenced earlier, it would be a 3% overhead (1 extra byte per 32 bytes).



If you want to learn more about the intended uses of MTE you can read the [“Memory Tagging Extension User Guide for Android Developers”](https://community.arm.com/arm-community-blogs/b/operating-systems-blog/posts/new-mte-user-guide). Even if you are not an Android developer, it is a good overview. You can also experiment on Linux using QEMU.



The source code for what I have shown is available [here](https://gitlab.com/Linaro/tcwg/tbi_lisp/-/tree/memory_tagged) under the MIT licence. If you want to try a production quality implementation of tagged memory allocation, I suggest GLIBC’s [tagging options](https://www.gnu.org/software/libc/manual/html_node/Memory-Related-Tunables.html). [This paper](https://arxiv.org/abs/2209.00307) also includes a survey of existing MTE enabled allocators.



If you want to write your own allocator, Arm has Learning Paths on [writing a dynamic memory allocator](https://learn.arm.com/learning-paths/cross-platform/dynamic-memory-allocator/) and [adding memory tagging to an allocator](https://learn.arm.com/learning-paths/laptops-and-desktops/memory-tagged-dynamic-memory-allocator/).



If you want to know more about Linaro’s work enabling new Arm features, check out the [LLVM](https://linaro.atlassian.net/wiki/spaces/LLVM/overview?homepageId=23494132193) and [GNU](https://linaro.atlassian.net/wiki/spaces/GNU/overview) project pages. Alternatively you can reach out on our public mailing list linaro-toolchain@lists.linaro.org or privately via support@linaro.org.