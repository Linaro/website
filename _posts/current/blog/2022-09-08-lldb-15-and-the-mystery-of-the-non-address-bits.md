---
layout: post
title: LLDB 15 and the Mystery of the Non-Address Bits
description: In this article David talks about the work Linaro has done on
  non-address bits in LLDB.
date: 2022-09-08 02:17:07 +01:00
image: /assets/images/content/Banner_Linux_Kernel.jpg
tags:
  - LLDB
  - LLVM
  - Memory Tagging
  - Toolchain
  - MTE
category: blog
author: david.spickett
---
You’ve got a brand new Arm system. Lucky you! You reach for your favourite tools from the LLVM project. Including the debugger, [LLDB](https://lldb.llvm.org/).

You’re debugging a simple C program and something odd happens.

```
(lldb) p buf
(char *) $0 = 0xa951fffff7ff8000 ""
(lldb) memory read buf
0xfffff7ff8000: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
```

Where did the upper bits of the pointer go? It was 0xa951fffff7ff8000, then it was 0xfffff7ff8000.

If you use a 64 bit Arm system that has [Top Byte Ignore](https://developer.arm.com/documentation/den0024/a/ch12s05s01), [Pointer Authentication](https://community.arm.com/arm-community-blogs/b/architectures-and-processors-blog/posts/armv8-a-architecture-2016-additions) or [Memory Tagging](https://www.linaro.org/blog/debugging-memory-tagging-with-lldb-13/), this might happen to you. Have no fear! Nothing is wrong and this can all be explained.

Linaro has been contributing to LLDB since 2015 and most recently we, along with the LLDB community, have been focused on handling “non-address bits”. That’s what we’re going to delve into in this post.

For the full list of changes in LLDB 15 go to https://releases.llvm.org/15.0.0/docs/ReleaseNotes.html#changes-to-lldb.

# What are Non-Address Bits?

The first thing to know is that the system I used in that example has 48 bit virtual addresses, which is set at the hardware level.

Why not 64? Well, the likelihood of a single process actually wanting to map 2^64 bytes (16384 petabytes) of memory is zero (corrupted parameters passed to malloc don’t count). To give you an idea of scale, the AArch64 based [Fugaku super computer](https://www.fujitsu.com/global/about/innovation/fugaku/specifications/) has 4.8 petabytes of memory and that is split across 158,976 nodes (32GiB per node).

Even if you would benefit from the capacity, what about the power use, the cost, the physical size of the modules? How will you get all that data into a core quickly? How many cores will share access to the memory and how will you stop them conflicting?

Ultimately would you rather have many nodes with a smaller amount of memory each, for much simpler handling of all those concerns? This is what leads to the decision that 64 bits of virtual address space isn’t needed.

Note: There is the option to go to 52 bit by using the Large Virtual Address (LVA) extension, taking us up to 4 petabytes. Not quite 1 Fugaku.

With 48 bits we can address 256 terabytes of memory which is going to be more than enough for most applications. Which gives us some free bits in our pointers along with a host of hardware design benefits I’m not qualified to talk about.

The 16 free bits can be used for:

* [Top byte ignore](https://developer.arm.com/documentation/den0024/a/ch12s05s01) (aka TBI). An Armv8-a feature where the top byte of the pointer is ignored by the hardware.
* [Memory Tagging](https://community.arm.com/arm-community-blogs/b/architectures-and-processors-blog/posts/enhanced-security-through-mte) (aka MTE). An Armv8.5-a feature uses that top byte to store a 4 bit tag. This tag is used to detect memory safety issues. I wrote about this previously in “[Debugging Memory Tagging with LLDB 13](https://www.linaro.org/blog/debugging-memory-tagging-with-lldb-13/)”.
* [Pointer Authentication](https://community.arm.com/arm-community-blogs/b/architectures-and-processors-blog/posts/armv8-a-architecture-2016-additions) (aka PAuth). An Armv8.3-a feature that allows you to sign a pointer so that it can be verified at a later time. This uses the remaining unused bits.

All of that is done without increasing the program’s memory usage. Take MTE for example, one software equivalent is [Address Sanitizer](https://source.android.com/docs/security/test/asan) (ASAN). ASAN has a memory usage overhead on the order of 2x (though MTE does have its own costs outside of memory usage).

# Back to the Point(er)

Let’s look at the layout of a pointer on this system.

{% include image.html path="/assets/images/content/layout-of-a-pointer-.png" alt="Image of a layout of a pointer" %}

Plugging in the address from the example in the introduction, we get:

* Top 4 bit tag 0xa
* Memory tag 0x9
* Pointer signature 0x51
* Virtual address 0xfffff7ff8000

So now you see how LLDB went from a pointer with value 0xa951fffff7ff8000 to reading memory at 0xfffff7ff8000.

LLDB refers to these non virtual address bits as “non-address bits”. Whenever it needs to know the real address a pointer refers to, it removes them. The obvious case is when accessing memory but this applies in many more situations.

# How Can I Use Non-Address Bits?

The simplest way to do this is to write a program targeting an AArch64 Linux system. Top Byte Ignore has always been [enabled for user space](https://www.kernel.org/doc/Documentation/arm64/tagged-pointers.txt) and you can use it on existing v8.0-a hardware. TBI can be used with pointer arithmetic directly from C.

```
#include <stdint.h>
 
void* tag_ptr(void* ptr, uint8_t tag) {
   uintptr_t ptr_p  = (uintptr_t)ptr;
   uintptr_t tag_p  = (uintptr_t)tag << 56;
   uintptr_t mask_p = (uintptr_t)0xff << 56;
   return (void*)((ptr_p & ~mask_p) | tag_p);
}
 
int main() {
   char buf[5];
   char* tagged_ptr = (char*)tag_ptr(buf, 0xcd);
   // Use the pointer as normal, no masking needed.
   *tagged_ptr = '?';
   return 0;
}
```

[Clang’s MemTagSanitizer](https://llvm.org/docs/MemTagSanitizer.html) uses Memory Tagging to protect stack allocations. This requires QEMU (setup guide for that [here](https://lldb.llvm.org/use/qemu-testing.html)). There are also [intrinsics](https://developer.arm.com/documentation/101028/0013/?lang=en) for MTE and you can fall back to assembly if needed.

Clang compiling for Armv8.3-a can [protect return addresses automatically](https://clang.llvm.org/docs/ClangCommandLineReference.html#cmdoption-clang-mbranch-protection) using Pointer Authentication. There are currently no intrinsics for this so assembly is your only other option. Running the programs requires QEMU or a device such as an M1 Macbook.

Note: Parts of pointer authentication are allocated as hint instructions. This means that if the hardware doesn’t support them they function as nops. Don’t be fooled by that.

# My Program Already Uses Those Bits!

When I talk in this post about non-address bits I’m focusing on the bits defined and handled by the hardware.

Software has been using de facto non-address bits for a long time. Imagine you have an object that you know will be allocated on a 4 byte boundary. That means that the bottom 2 bits of its address will always be 0. That is, unless we decide to put some information there.

You might call this “software defined” non-address bits. Making use of bits we know won’t hold useful information and as such, we can reconstruct them as needed.

Of course if we wanted to then read this object we’d have to remove the bottom 2 bits. That’s the crucial difference between this “software defined” scheme and the hardware defined non-address bits. With the latter, you don’t have to modify the pointer before use (pointer authentication aside, that’s a special case).

These software defined schemes aren’t prohibited by the hardware having any of the non-address bit extensions. Existing programs will run as before. What can cause issues is when you try to mix the extensions with these ad-hoc schemes without due care.

Take pointer authentication. I could decide to sign all the return addresses within my language interpreter but keep my custom pointer tagging scheme for pointers to the interpreter’s state. As long as I don’t mix the two, everything is fine.

Using hardware non-address bits can range from protecting a single pointer to using a whole new [Application Binary interface](https://developer.apple.com/documentation/security/preparing_your_app_to_work_with_pointer_authentication) (ABI), depending on the system’s needs.

# How Do I Debug This?

If you’re using any of these extensions, update to LLDB 15 for the best experience (and raise issues for the bad parts!). LLDB will handle all this for you.

As ever though, just because a tool does the work for you doesn’t mean you shouldn’t have an idea of what that work is. Let’s look at a few examples of non-address bits in action.

# Memory Access

We started this post with an example of what is (as you now know) expected to happen on a system with non-address bits. Even if it is surprising at first. However, that was with LLDB 15.

What do things look like with previous versions of LLDB? For this example I’m [using this source file](https://github.com/llvm/llvm-project/blob/9a976f36615dbe15e76c12b22f711b2e597a8e51/lldb/test/API/linux/aarch64/non_address_bit_memory_access/main.c) and one thing to note is that it uses Top Byte Ignore and Pointer Authentication at the same time.

This is important because parts of TBI have worked with LLDB going back quite a while. This is mostly because Linux kernel interfaces (so far) accept pointers with those bits set. For pointer authentication, that’s not the case.

Ordinary running code has to “authenticate” the pointer, which if successful, zeros the signature bits. Therefore LLDB has to do the same before asking the kernel for memory.

## Memory Access With LLDB 10

```
(lldb) p buf
(char *) $5 = 0x0000fffff7ff9000 "LLDB"
(lldb) p buf_with_non_address
(char *) $6 = 0xff24fffff7ff9000 ""
```

We have two pointers with the same virtual address. However the second fails to read what it points to. This is because LLDB 10 isn’t aware that there are non-address bits to remove.

```
(lldb) memory read buf buf+8
0xfffff7ff9000: 4c 4c 44 42 00 00 00 00                          LLDB....
(lldb) memory read buf_with_non_address buf_with_non_address+8
error: memory read failed for 0xff24fffff7ff9000
```

If we ask for a memory read we find that buf works but buf_with_non_address fails to read at all. If you think about the layers involved here, it’ll all make sense.

LLDB 10 has sent the whole pointer to ptrace then the kernel has tried to read the memory at that address. The core ignores the top byte, leaving us with 0x24fffff7ff9000. This is greater than the mappable memory range (remember that we have 48 bit virtual addresses) so of course the read fails.

## Memory Access With LLDB 15

```
(lldb) p buf
(char *) $0 = 0x0000fffff7ff9000 "LLDB"
(lldb) p buf_with_non_address
(char *) $1 = 0xff75fffff7ff9000 "LLDB"
```

The second pointer now dereferences correctly because LLDB 15 knows to remove the non-address bits.

```
(lldb) memory read buf buf+8
0xfffff7ff9000: 4c 4c 44 42 00 00 00 00                          LLDB....
(lldb) memory read buf_with_non_address buf_with_non_address+8
0xfffff7ff9000: 4c 4c 44 42 00 00 00 00                          LLDB....
```

The two memory reads now give the same result, because they’re reading the same location and LLDB 15 knows this.

# Memory Regions

The most obvious change is that with LLDB 15 you can find what memory region a pointer refers to, regardless of the non-address bits.

```
(lldb) memory region buf_with_non_address
[0xff24fffff7ff9000-0xffffffffffffffff) –
```

Above is what happened prior to LLDB 15. Of course we show you an unmapped region because the pointer is outside the range of mappable memory.

```
(lldb) memory region buf_with_non_address
[0x0000fffff7ff9000-0x0000fffff7ffa000) rw- /dev/zero (deleted)
```

Now LLDB 15 is ignoring the non-address bits, so we get the correct region.

The less obvious change is more a side effect than a feature but it’s good to think through nevertheless.

It’s important to know here that the “memory region” command returns all mapped regions and the gaps between them. So what we see below is the stack, which is mapped, then unmapped space to the end of memory.

```
(lldb) memory region --all
<...>
[0x0000fffffffdf000-0x0001000000000000) rw- [stack]
[0x0001000000000000-0xffffffffffffffff) —
```

At least that’s what you see when there are no non-address bits. LLDB thinks you’ve got a 64 bit virtual address so of course 0xF…F is the end of mappable memory.

```
[0x0000fffff8000000-0x0000fffffffdf000) ---
[0x0000fffffffdf000-0x0001000000000000) rw- [stack]
```

Then we do the same with a 48 bit virtual address. See how mappable memory ends with the end of the stack? Makes sense. The end of the stack has bit 48 set as it’s one beyond the range of the 48 bit virtual address.

This is unlikely to catch anyone out but at least you won’t think your memory has gone missing. Plus, it is more accurate. You never could map above bit 47 so that “unmapped” space was really “unmappable” space this whole time.

# Memory Read Caching

Reading memory is expensive. Whether that’s repeated system calls or sending packets to a debug target an ocean away. That’s why LLDB includes a memory cache (unrelated to the CPU’s own caches).

When the program you’re debugging is halted, LLDB knows that memory can only change if LLDB is the one doing that change. So the result of every memory read is kept until there is reason to think that the memory content has changed.

There are 2 main ways this happens. First is when there is a write to a specific range of memory. For example you “memory write some_buf”. LLDB will clear all lines in the memory cache for that range, then send the write on its way to the target. Next time you read “some_buf”, LLDB will do a new memory read for that range and put the result in the cache.

The second case is when the program resumes. At this point the program’s code could be (and almost certainly is) modifying memory. LLDB doesn’t make any attempt to track that. Only when the program halts again will we start to fill the (now empty) memory cache.

How do non-address bits come into this? Without non-address bits we have a 1 to 1 mapping between pointer values and addresses in the cache.

With non-address bits, we may have multiple pointer values pointing to the same address in the cache as long as their virtual addresses are the same. If the cache doesn’t know this, we’ll waste a lot of time re-reading memory that we already have because it thinks they’re distinct locations.

LLDB 15’s memory cache has been updated to be non-address bit aware and avoid that issue.

```
(lldb) log enable gdb-remote packets
(lldb) p mte_buf
lldb             <  21> send packet: $xfffff7ff8000,200#ff
lldb             < 516> read packet: <...>
(char *) $3 = 0xa900fffff7ff8000 ""
(lldb) p mte_buf
(char *) $4 = 0xa900fffff7ff8000 ""
(lldb) p mte_buf_alt_tag
(char *) $5 = 0xba00fffff7ff8000 ""
```

* LLDB reads mte_buf (“send packet:”) and caches the result (from “read packet:”).
* Next time it wants to read mte_buf it gets it from the cache.
* If we use a pointer with different non-address bits, it’s also read from the cache because the virtual address is the same.

Prior to LLDB 15, this would have resulted in 2 reads for the same location. Which isn’t the end of the world, unless your debug target is on the other end of the world!

This applies to memory writes also. A write via mte_buf_alt_tag would clear cached content for mte_buf and mte_buf_alt_tag because they’re pointing to the same virtual address.

# Signed Function Pointers

This feature was [contributed by Jason Molenda](https://reviews.llvm.org/D115431).

```
(lldb) p fn_ptr
(char (*)(size_t, int)) $0 = 0x003d0000004006ac (actual=0x00000000004006ac a.out`checked_mmap at main.c:13:48)
```

We have a signed (pointer authenticated) function pointer, which you see first. Then the virtual address along with the symbol that resolves to.

Prior to LLDB 15 it would have told you it had no idea what this points to. Hopefully you already knew what it was supposed to be!

This isn’t an issue if you’re looking up a known function in your binary. It is if you’ve got a function pointer set in a struct somewhere. On top of that your ABI might mandate that all function pointers be signed and you’d hit this all the time!

# Backtrace

This was [implemented by Omair Javaid](https://reviews.llvm.org/D99944) back in [LLDB 13](https://releases.llvm.org/13.0.0/docs/ReleaseNotes.html#changes-to-lldb), but it fits the theme so I’ve included it here.

This is another angle on the previous situation. Remember that you can use pointer authentication to sign all your return addresses? Well a return address is really just a function pointer.

If we’re in the middle of a function our return address will be on the stack in its signed form. LLDB can’t just use it like that, it has to remove the non-address bits to continue the backtrace.

```
(lldb) dis
test.o`b:
    0x400588 <+0>:  paciasp
    0x40058c <+4>:  stp    x29, x30, [sp, #-0x10]!
    0x400590 <+8>:  mov    x29, sp
    0x400594 <+12>: bl     0x40057c                  ; c at test.c:1:14
    0x400598 <+16>: nop
->  0x40059c <+20>: ldp    x29, x30, [sp], #0x10
    0x4005a0 <+24>: retaa
```

Above you can see that when we entered “b()” we used the instruction “paciasp”. This signs the return address (in x30) with a modifier, which is the stack pointer’s value. Then the two registers are stored on the stack. We’re about to reload those registers then authenticate the return address with “retaa” (return and authenticate).

```
(lldb) bt
* thread #1, name = 'test.o', stop reason = instruction step over
  * frame #0: 0x000000000040059c test.o`b at test.c:2:21
    frame #1: 0x00000000004005b4 test.o`a at test.c:3:16
    frame #2: 0x00000000004005d0 test.o`main at test.c:4:14
    frame #3: 0x0000fffff7e7f090 libc.so.6`__libc_start_main + 232
    frame #4: 0x000000000040049c test.o`_start at start.S:92
```

Backtrace looks just like normal thanks to LLDB removing the non-address bits from the stored return address (“unsigning” it if you will, but not actually authenticating it).

```
(lldb) memory read $sp $sp+16 -s8 -f uint64_t
0xfffffffff310: {0x0000fffffffff320}
0xfffffffff318: {0x006c0000004005b4}
```

If we read the stack contents manually we can see first the frame pointer then the signed return address (that “6c” in the upper bits). Without LLDB removing the signature we have no hope of backtracking from here.

# Extension Specific Features

There are situations where you do want to see a subset of the non-address bits. For example, if you’re debugging the use of a non-address bit extension like Memory Tagging. For extension specific features, LLDB will show the relevant bits.

```
(lldb) memory tag read mte_buf_alt_tag
Logical tag: 0xa
Allocation tags:
[0xfffff7ff8000, 0xfffff7ff8010): 0x0 (mismatch)
```

The logical tag is part of the pointer, so this has been shown separately and the addresses shown later do not include any non-address bits. Non-address bits (like the logical tag) are a property of a pointer, not of the memory it points to. Non-address bits aside from the logical tag are ignored because they don’t relate to MTE.

```
(lldb) c
Process 175530 resuming
Process 175530 stopped
* thread #1, name = 'prog', stop reason = signal SIGSEGV: sync tag check fault (fault address: 0x200fffff7ff9000 logical tag: 0x2 allocation tag: 0x1)
    frame #0: 0x0000fffff7ee3e94 libc.so.6`___lldb_unnamed_symbol2690 + 84
libc.so.6`___lldb_unnamed_symbol2690:
->  0xfffff7ee3e94 <+84>: str    q0, [x0]
```

In some cases we decided to show the raw pointer value with annotations. In the case above we know the fault is due to memory tagging. However, given how many segfaults happen because of corrupted pointers, LLDB shows the full value of the pointer as well as the memory tagging specific information.

# Corrupted Pointer or Non-Address Bits?

All these examples are all well and good but we have situations where these non-address bits get set by mistake. You get your pointer arithmetic wrong, you copy the wrong data type over a function pointer etc.

This makes for a frustrating situation for developers. What if I corrupted a pointer with no non-address bits used, to look like one that did use non-address bits? Can I tell what happened?

Not right away. Since the debugger is going to remove non-address bits for you, a lot could slip by until the program fails at runtime. For example, what if you accidentally set the memory tag on a pointer. How can you tell it’s accidental? This is where knowing how these LLDB features work helps you.

“memory read” is going to work regardless. LLDB doesn’t need a correct tag to read memory. What you could do is do “memory tag read”. This would either tell you that the memory was untagged or that the tags didn’t match (or if you’re really unlucky you’ll hit the 1/16 chance where they do).

From there it’s up to you the developer to know the context. Were you expecting this memory to be tagged, were you expecting this pointer to be tagged?

# In Conclusion

If you’re using any non-address bit features you should be using LLDB 15. It has many improvements to the debug experience and I hope this post has given you the knowledge to make the most of it.

LLDB’s handling of non-address bits is based on early development with these features. In some cases only on virtual platforms like QEMU.

That isn’t going to perfectly match the developer experience as physical hardware becomes available. So if you find something that doesn’t make sense to you, please raise [an issue](https://github.com/llvm/llvm-project/issues) or email linaro-toolchain@lists.linaro.org. All feedback is welcome!

A﻿nd for more information on Linaro's Arm LLVM Toolchain Enablement & CI project, click [here](https://linaro.atlassian.net/wiki/spaces/LLVM/overview).