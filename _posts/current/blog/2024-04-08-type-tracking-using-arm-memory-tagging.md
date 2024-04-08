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

<p><br></p>
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