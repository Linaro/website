---
layout: post
title: Debugging Memory Tagging with LLDB 13
description: In this blog David Spickett looks at Memory Tagging (MTE) and the
  debugging features Linaro has added to LLDB 13.
date: 2022-04-21 12:12:50 +01:00
image: /assets/images/content/Banner_Linux_Kernel.jpg
tags:
  - LLDB
  - MTE
  - Memory Tagging
  - LLVM
  - Debugging
category: blog
author: david.spickett
---
LLDB is the LLVM project’s debugger (https://lldb.llvm.org/), supporting a wide range of platforms and architectures including Android and Linux running on AArch64.

Armv8.5-a added the Memory Tagging Extension (MTE) to AArch64 and LLDB 13 is the first version to support debugging Linux applications that use memory tagging. Including:

* Reading and writing memory tags.
* Detecting memory tagged memory regions.
* Annotating memory tagging faults.

(<https://releases.llvm.org/13.0.0/docs/ReleaseNotes.html#changes-to-lldb>)

In this post we’re going to talk about what Memory Tagging (MTE) is and demonstrate the debugging features Linaro has added to LLDB 13.

# What is Memory Tagging?

Let’s start with a problem memory tagging is designed to detect. Imagine you have 2 buffers in memory next to each other. You also have a pointer to the first buffer. This is what the memory layout looks like.

{% include image.html path="/assets/images/content/what-is-memory-tagging.png" alt="What is Memory Tagging" %}

Note that I’ve said “should not” be used. Lots of operations write some value, increment a pointer and loop again. Often the final value of the pointer in those functions can be just beyond the range it was intended for (like a C++ end iterator) or, if there are mistakes or a determined attacker, way off into memory it was never meant to access.

The core issue is that even if your intent was only to use the pointer to address Buffer 1, in reality there is no enforcement of this.

For example, you want to read a user name from a configuration file. You read the data as a null terminated string from the file and expect to get 64 characters max, so you allocate a 65 byte buffer (perhaps your frontend only has a 64 character wide input box).

This all works fine in normal circumstances but what if an attacker crafted their own configuration file with a > 64 character name? What would happen is that as you read the name you’d fill in your 64 character buffer and just keep on incrementing and writing memory until the null terminator was found.

So now the attacker can overwrite whatever is after that buffer. Sensitive variables, the return address, anything they want.

Of course there are existing defences and best practices for this. You could use safer versions of standard functions, use a language that encodes bounds somehow, or use safe (safer) containers like we have in C++. Even so, mistakes get made and porting to a new language has its own challenges so it’s not always an option.

So could we have the hardware check memory bounds for us? Yes we can, and we call it memory tagging.

Memory tagging allows you to tag areas of memory and tag pointers that should be used to access those areas. The tag of the pointer must match that of the memory being accessed. Let’s see how this helps the situation we talked about above. Here’s the same diagram with memory tags added.

{% include image.html path="/assets/images/content/what-is-memory-tagging-image-2.png" alt="What is Memory Tagging image 2" %}

Now what happens is when the pointer is incremented past Buffer 1 to point into Buffer 2, if someone tries to read or write using it, the access will fail. As we’ve deliberately tagged the memory after Buffer 1 with a tag that doesn’t match the pointer (not shown here but you would also do this to memory before Buffer 1, to prevent underflow).

Here’s how the hardware implements this. Tags come in pairs:

* A 4 bit (0-15) “logical tag” found in bits 59-56 of a pointer. Virtual addresses are usually 48 bits (up to 52 with extensions) so these bits are otherwise unused.
* A 4 bit “allocation tag” that is stored in a special section of memory for tag storage.

{% include image.html path="/assets/images/content/bit-layout-of-a-logically-tagged-pointer.png" alt="Bit layout of a logically tagged pointer" %}

Note: The above assumes you are only using memory tagging. The other unused bits can be used in other ways that are not covered by this article.

Special instructions are provided to get and set these tags (and they can be modified once set, or “unset” usually meaning set to 0).

Each pair of tags refers to a “granule” of memory, which is 16 bytes, aligned to 16 bytes. Meaning that bytes 0-15 is a granule, the next granule goes from bytes 16-31 and so on.

When there is an access to a granule the logical tag in the pointer is compared to the allocation tag of the granule. A mismatch means an exception, stopping the access (how you respond to that exception is up to you).

{% include image.html path="/assets/images/content/allocation-tag.png" alt="Allocation tag" %}

Note: You don’t have to explicitly give a pointer a logical tag for tag checking to occur. If the location has an allocation tag, a check will be done. Whatever is in bits 59-56 of the address will be used as the logical tag.

Of course software does have to do the initial tagging. After all, it knows where the buffers are. However compiler code generation and library support greatly reduces the effort needed.

# An Example Program

To give context to the new features in LLDB we’re going to first show you an application using memory tagging that has a bug. Then we’ll debug it using the new features.

The following example:

* Protects a section of a buffer using memory tagging.
* Accesses that section using a correctly tagged pointer.
* Accesses that section using an incorrectly tagged pointer, causing an exception.

Note: This is not real code, simply a minimal demo of memory tagging.

{% include image.html path="/assets/images/content/an-example-program.png" alt="An example program" %}

We’re going to give our incorrect pointer a tag of 2 so it matches none of the allocation tags.

Note: The program uses ACLE intrinsics that you can learn about at <https://developer.arm.com/documentation/101028/0012/10--Memory-tagging-intrinsics?lang=en>.

```
<source>

#include <arm_acle.h>
#include <asm/mman.h>
#include <string.h>
#include <sys/mman.h>
#include <sys/prctl.h>
#include <unistd.h>

int main(int argc, char const *argv[]) {
  if (prctl(PR_SET_TAGGED_ADDR_CTRL,
            PR_TAGGED_ADDR_ENABLE |
                // Synchronous tag fault exceptions
                PR_MTE_TCF_SYNC |
                // Allow all tags to be generated by the addg
                // instruction __arm_mte_increment_tag produces.
                (0xffff << PR_MTE_TAG_SHIFT),
            0, 0, 0)) {
    return 1;
  }

  char *mte_buf =
      mmap(0, sysconf(_SC_PAGESIZE), PROT_WRITE | PROT_READ | PROT_MTE,
           MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);
  if (mte_buf == MAP_FAILED)
    return 1;

  // We're going to tag 32 bytes with 1.
  // First set the logical tag in the pointer.
  mte_buf = __arm_mte_create_random_tag(mte_buf, ~(1 << 1));
  // Then the allocation tags.
  __arm_mte_set_tag(mte_buf);
  // 16 bytes is the tag granule size
  __arm_mte_set_tag(mte_buf + 16);

  // Give the incorrect pointer a logical tag of 2
  char *incorrect_tag_ptr = __arm_mte_create_random_tag(mte_buf, ~(1 << 2));

  // Should work
  memset(mte_buf, 1, 32);
  // Should fault
  memset(incorrect_tag_ptr, 1, 32);

  return 0;
}

<source ends>

Compile with:
aarch64-unknown-linux-gnu-gcc -march=armv8.5-a+memtag main.c -o prog -g
<or>
clang -target aarch64-linux-gnueabi -march=armv8.5-a+memtag main.c -o prog -g

(MTE was introduced in v8.5-a but is optional, so we have to add “+memtag”)
```

# The Result

```
$ ./prog
Segmentation fault
```

Oh no! Well actually, oh yes! Our example faulted as we intended. Let’s confirm we got things wrong in all the right ways.

# Catching the Problem in LLDB

```
$ ./bin/lldb <...>/prog
(lldb) target create "<...>/prog"
Current executable set to '<...>/prog' (aarch64).
(lldb) gdb-remote <...>
Process 175530 stopped
* thread #1, name = 'prog', stop reason = signal SIGSTOP
<...>
(lldb) c
Process 175530 resuming
Process 175530 stopped
* thread #1, name = 'prog', stop reason = signal SIGSEGV: sync tag check fault (fault address: 0x200fffff7ff9000 logical tag: 0x2 allocation tag: 0x1)
    frame #0: 0x0000fffff7ee3e94 libc.so.6`___lldb_unnamed_symbol2690 + 84
libc.so.6`___lldb_unnamed_symbol2690:
->  0xfffff7ee3e94 <+84>: str    q0, [x0]
<...>
```

We have the fault we expected. We tried to use a pointer logically tagged with 2, to access memory allocation tagged with 1.

# Finding the Root of the Problem

Let’s look at the instruction that faulted to get confirmation of what LLDB is telling us. You don’t need to do this yourself, this is just to show you what LLDB is automating for you.

```
libc.so.6`___lldb_unnamed_symbol2690:
->  0xfffff7ee3e94 <+84>: str    q0, [x0]
```

This instruction means “store the data in register q0 starting at the address in register x0”.

```
(lldb) register read v0 x0
      v0 = {0x01 0x01 0x01 0x01 0x01 0x01 0x01 0x01 0x01 0x01 0x01 0x01 0x01 0x01 0x01 0x01}
      x0 = 0x0200fffff7ff9000
```

Note: We’re using the “v” register name here because LLDB does not know about the “q” form. The result is the same for this purpose.

In v0 we see the 1 passed to memset repeated so that this store will write 16 bytes. The logical tag in x0 is 2. Exactly what the fault description showed us.

Going up one stack frame confirms the problem.

```
(lldb) up
frame #1: 0x0000000000400778 prog`main(argc=1, argv=0x0000fffffffff498) at main.c:40:3
   37     // Should work
   38     memset(mte_buf, 1, 32);
   39     // Should fault
-> 40     memset(incorrect_tag_ptr, 1, 32);
   41
   42     return 0;
   43   }
```

We successfully memset using the correctly tagged pointer and failed with the incorrectly tagged pointer.

For this example the journey ends here, just use the correct pointer. Let’s pretend it wasn’t that simple and see what new features LLDB 13 has to help you dig into the problem.

# MTE Features in LLDB 13

Note: Though AArch64 MTE is the only memory tagging scheme supported by LLDB at this time, the commands are generic. Support could be added for other schemes if there are contributors willing to do so.

## memory region

The first thing you might say is “is that memory even tagged?”. Especially if you’re using a library that has enabled tagging seamlessly for you. Let’s check which mapping it’s in.

```
(lldb) memory region incorrect_tag_ptr
[0x0000fffff7ff9000-0x0000fffff7ffa000) rw-
memory tagging: enabled
```

That last line is a new feature in 13. Here’s an untagged region for comparison.

```
(lldb) memory region main
[0x0000000000400000-0x0000000000401000) r-x /mnt/virt_root/mte_blog_post_program/prog PT_LOAD[0]
```

## memory tag read

The fault description gave us the allocation tag of one granule of memory. How do we see what the rest are set to? With a new command “memory tag read”.

```
(lldb) memory tag read incorrect_tag_ptr incorrect_tag_ptr+64
Logical tag: 0x2
Allocation tags:
[0xfffff7ff9000, 0xfffff7ff9010): 0x1 (mismatch)
[0xfffff7ff9010, 0xfffff7ff9020): 0x1 (mismatch)
[0xfffff7ff9020, 0xfffff7ff9030): 0x0 (mismatch)
[0xfffff7ff9030, 0xfffff7ff9040): 0x0 (mismatch)
```

Note: As memory tagging works in granules any address ranges will be expanded to cover those granules. Meaning that reading the tag for 1 byte is the same as reading the tag for all 16 bytes of its granule.

The output shows us what the hardware was expecting and indeed, none of them are 2. If we read via mte_buf which is correctly tagged, the markers will change.

```
(lldb) memory tag read mte_buf mte_buf+64
Logical tag: 0x1
Allocation tags:
[0xfffff7ff9000, 0xfffff7ff9010): 0x1
[0xfffff7ff9010, 0xfffff7ff9020): 0x1
[0xfffff7ff9020, 0xfffff7ff9030): 0x0 (mismatch)
[0xfffff7ff9030, 0xfffff7ff9040): 0x0 (mismatch)
```

This explains why the first memset worked. mte_buf is correctly tagged for the first 32 bytes. We now also know that if we had tried to set more than 32 bytes, we would have faulted earlier.

Note: From the processor’s point of view the two pointers point to the same place because the memory tags are ignored when finding the final location. So in both examples above you are reading the same allocation tags. LLDB is showing you what would happen if running code tried to use those pointers.

## memory tag write

So let’s assume we want this program to be successful at any cost. Can we just change the allocation tags to 2? Yes we can. First run until the faulting memset.

```
(lldb) b main.c:40
Breakpoint 1: where = prog`main + 188 at main.c:40:3, address = 0x0000000000400768
(lldb) c
Process 190332 resuming
Process 190332 stopped
* thread #1, name = 'prog', stop reason = breakpoint 1.1
    frame #0: 0x0000000000400768 prog`main(argc=1, argv=0x0000fffffffff498) at main.c:40:3
   37     // Should work
   38     memset(mte_buf, 1, 32);
   39     // Should fault
-> 40     memset(incorrect_tag_ptr, 1, 32);
   41
   42     return 0;
   43   }
```

Then use the new “memory tag write” command to update the allocation tags.

```
(lldb) memory tag write incorrect_tag_ptr 2 2
(lldb) memory tag read incorrect_tag_ptr incorrect_tag_ptr+64
Logical tag: 0x2
Allocation tags:
[0xfffff7ff9000, 0xfffff7ff9010): 0x2
[0xfffff7ff9010, 0xfffff7ff9020): 0x2
[0xfffff7ff9020, 0xfffff7ff9030): 0x0 (mismatch)
[0xfffff7ff9030, 0xfffff7ff9040): 0x0 (mismatch)
```

The program should now exit successfully when we continue.

```
(lldb) c
Process 175596 resuming
Process 175596 exited with status = 0 (0x00000000)
```

The example above uses a start address and a list of tag values. The command can also repeat a pattern of tags across a range. I could have done this instead:

```
(lldb) memory tag write incorrect_tag_ptr 2 --end-addr incorrect_tag_ptr+32
```

That repeats the tag 2 as many times as there are granules between the start and end address. This also works for patterns. Here I’m setting the tags of the whole memory allocation to a cycling incrementing pattern.

```
(lldb) memory tag write mte_buf 0 1 2 3 4 5 6 7 -end-addr mte_buf+4096
(lldb) memory tag read mte_buf mte_buf+256
Logical tag: 0x1
Allocation tags:
[0xfffff7ff9000, 0xfffff7ff9010): 0x0 (mismatch)
[0xfffff7ff9010, 0xfffff7ff9020): 0x1
[0xfffff7ff9020, 0xfffff7ff9030): 0x2 (mismatch)
<...>
[0xfffff7ff9080, 0xfffff7ff9090): 0x0 (mismatch)
[0xfffff7ff9090, 0xfffff7ff90a0): 0x1
[0xfffff7ff90a0, 0xfffff7ff90b0): 0x2 (mismatch)
```

Useful if you want to clear tags or set some recognisable default values.

# Future Work

## Memory Tags in “memory read” Output

Note: This is included in LLDB 14, which was unreleased at time of writing (https://releases.llvm.org/14.0.0/docs/ReleaseNotes.html#changes-to-lldb).

Use the new “--show-tags” argument to print out the allocation tags in line with the memory contents.

```
(lldb) memory read mte_buf mte_buf+32 -f "x" -s8 --show-tags
0x900fffff7ff8000: 0x0000000000000000 0x0000000000000000 (tag: 0x0)
0x900fffff7ff8010: 0x0000000000000000 0x0000000000000000 (tag: 0x1)
```

Note: -f “x” -s8 is not required, just added to print values as 8 byte hex numbers for cleaner results.

## Memory Tagging in Core Files

A core file is a dump of the process state at a certain point. Agreement has been reached about the form MTE state will take in these files and a future version of LLDB will support reading memory tags from core files.

## LLDB API features

LLDB has a scripting language API which is primarily used with Python (<https://lldb.llvm.org/use/python.html>).

We have been working on API additions for memory tagging but lack a concrete use case at this time. If you have an interest in API support you may wish to try out the prototype and give us feedback.

We have a branch [(https://github.com/DavidSpickett/llvm-project/tree/lldb-mte-api-14.0.1)](https://github.com/DavidSpickett/llvm-project/tree/lldb-mte-api-14.0.1) and an LLVM 14.0.1 based release package for AArch64 Linux (<https://people.linaro.org/~david.spickett/clang+llvm-14.0.1-aarch64-unknown-linux-gnu.tar.xz>) that includes the changes.

(note that the branch includes the example scripts, so you will need that even if you’re using the prebuilt files)

Either way, if you have an interest in memory tagging features for scripting or IDE support please contact us (linaro-toolchain@lists.linaro.org).

For more information on LLVM toolchain work at Linaro see <https://linaro.atlassian.net/wiki/spaces/LLVM/overview>.