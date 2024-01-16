---
layout: post
title: "Top Byte Ignore For Fun and Memory Savings "
description: In this article, David Spickett talks about how Top Byte Ignore
  works and how to use it. Read more here!
date: 2023-02-08 09:32:00 +00:00
image: /assets/images/content/Code_Image_Core_tech.jpg
tags:
  - Top Byte Ignore
  - LLVM
  - GNU
  - AArch64
  - VirtIO
  - Toolchain
category: blog
author: david.spickett
---
[Top Byte Ignore](https://developer.arm.com/documentation/den0024/a/ch12s05s01) (TBI) is a feature of Armv8-a AArch64 that allows software to use unused pointer bits to store data without having to hide them from the hardware. Reducing memory use, software overhead and programmer frustration.

We talked about it briefly in a [previous post](https://www.linaro.org/blog/lldb-15-and-the-mystery-of-the-non-address-bits/), here we’re going into more detail. How TBI works, how to use it and finally, whether its tradeoffs are worth it for your applications.

We will walk through one such application, for which there is [source code](https://gitlab.com/Linaro/tcwg/tbi_lisp) so you can experiment for yourself.

## What is Top Byte Ignore?

When TBI is enabled the processor ignores the top byte of addresses. That sounds dangerous and it would be, if there was anything useful in there.

Most AArch64 systems use 48 bit virtual addresses. This leaves 16 bits unused but not ignored by the processor. They can be any value but are still interpreted as part of the address.

48 bits is a compromise based on the amount of virtual memory a process on a typical core is going to use. It allows us to have 256 terabytes of virtual memory.

**Note**: There is a 52 bit option but even then there are 12 bits free. Enough for TBI.

These unused bits are handled in Linux by expecting that addresses will have the unused bits all set to 0 or all set to 1. Putting the address in [user space or kernel space respectively](https://docs.kernel.org/arm64/memory.html).

When TBI is enabled the top byte isn’t part of the address anymore and can be set to any value. The following unused byte is handled as before.

This means that all the pointers shown below point to the same memory location when TBI is enabled. Underscores indicate the boundary between the top byte, the following unused byte and the virtual address.

```
0x00_00_123456789ABC
0x12_00_123456789ABC
0xFF_00_123456789ABC
```

The first value is your typical pointer with a top byte of 0. Pointers 2 and 3 change the top byte but the following byte and the virtual address remain the same. Therefore all 3 are equivalent.

Why is this good? We can put data in that top byte and crucially, won’t have to remove it every time we use the pointer. The following shows what you need to do without the aid of TBI.

```
#include <stdint.h>

typedef int* TaggedIntPtr;

int getInt(TaggedIntPtr ptr) {
   ptr = (TaggedIntPtr)((uintptr_t)ptr & ~((uintptr_t)0xFF << 56));
   return *ptr;
}
```

That’s a lot of masking to do for a dereference, which is a very common operation. With TBI it’s a lot simpler:

```
int getInt(TaggedIntPtr ptr) {
   return *ptr;
}
```

Just use the pointer. The processor does the masking for you, that’s the key advantage of TBI.

## Where Can You Use TBI?

TBI is [enabled for Linux userspace](https://www.kernel.org/doc/Documentation/arm64/tagged-pointers.txt) on any AArch64 platform. If you don’t have access to hardware QEMU can be used to emulate it.

Apple Silicon devices also appear to enable this for user space in MacOS. I successfully tested on an M1 Pro Macbook Pro. However unlike Linux, I could find no official statement of support so do not assume this will always be the case.

## An Ad Hoc Poorly Defined LISP

We’re going to look at a building block of an imaginary [LISP interpreter](https://en.wikipedia.org/wiki/Lisp_(programming_language)). One which can benefit from TBI.

We want to evaluate an expression like this:

```
(+ 1 (+ 1 2) (+ 3 5))
```

We expect to get the result 12.

The key properties of our LISP:

* Each function argument or function result will be called a “symbol”.
* Those symbols are always unnamed. We will not support, for example,  “(let foo = 1…”.
* Supported data types are:

  * 32 bit unsigned integers stored directly in the symbol.
  * Null terminated strings of varying length, which are heap allocated and pointed to by the symbol.
* The only supported function is “+”.
* “+” can only add operands of matching types. Integer + integer is ok, integer plus string is not.

Some of those restrictions are arbitrary and others have a purpose that will become clear later. A real interpreter has much more to handle, we’re just cherry picking parts to support the example.

## The Symbol Table

As we parse the source code, we’re going to find function arguments. Those arguments can be functions themselves, or constant values. We will need something to record and reference them. That thing is the symbol table.

For simplicity’s sake let's execute functions as we go. So we are never putting a function into the symbol table, only its result. Which is a value.

How big will this table get? Take this expression:

```
(+ 1 1 1 1 1 1 1 1 1 1)
```

Do we want to create 10 unique entries for the value 1, when we know they are essentially constants? Let’s say that we don’t. We can’t afford to use that much memory.

A solution to this is reference counting. Instead of 10 copies of 1, we can have 1 copy which is referenced 10 times. Anything that has its reference count decremented to 0 can be overwritten by the next new symbol that we find.

Now remember that we also want to type check our arguments. So in this case we have to record that 1 is in fact, an integer.

With all that, this is a symbol table entry:

{% include image.html path="/assets/images/content/symbol-table-entry-.png" alt="Symbol table entry" %}

We’ll use that symbol index (the index of the entry in the table) to reference the symbol. For example:

```
(+ 1 2)
```

1 will be symbol index 0 and 2 will be symbol index 1. The result of the function will be symbol index 0, the slot having been freed when we decremented the reference count of both arguments to 0.

Now we know how the symbol table should function, we’ll talk through 3 possible ways to implement it:

* Without Top Byte Ignore
* With Memory Tagging
* With Top Byte Ignore

## The Standard Approach

With no TBI and no bit level techniques this is what a Symbol table entry could be:

```
#include <stdint.h>

struct Symbol {
   uintptr_t value;
   uint8_t type;
   uint8_t reference_count;
} __attribute__((packed));
```

I’ve used the “packed” attribute. Without it this structure takes up 16 bytes due to the 6 bytes of padding added after “reference_count”. “packed” tells the compiler to put all the fields as close together as possible giving a size of 10 bytes.

There are reasons not to do that (misaligned access can be slower) but for a fair comparison we’re going for the lowest memory use.

Anything wrong with this approach? Not from a high level. We have easy access to the type and reference count and there’s no operation we can’t do. Nothing prevents us from putting this struct in an array to create the symbol table.

However, I think we can do better than 10 bytes per symbol.

## Memory Tagging

You might know that AArch64 has a Memory Tagging extension (which I wrote about [here](https://www.linaro.org/blog/debugging-memory-tagging-with-lldb-13/)). You might not know that tagged memory isn’t a new idea.

During the heyday of LISP (so I’m told) there were machines specifically designed to run it. These machines encoded aspects of the language into the Instruction Set Architecture (ISA). Much like today’s machines are sometimes described as “C machines”.

One example was the Symbolics 3600. Which had a “36 bits processor (32 bits data, 4 bits tag)” (see, [page 7](http://www.bitsavers.org/pdf/symbolics/3600_series/3600_TechnicalSummary_Feb83.pdf)). That extra 4 bits was used to store metadata for the LISP runtime. In addition, common operations on them were assigned specific instructions.

AArch64’s memory tagging also adds a 4 bit tag to the memory. Could we think of that tag in the same way? Is AArch64 + 4 = AArch68? Not quite, though that would have made a great title for this post!

The pitfall is that to access tagged memory on AArch64 you need to have the correct tag in the pointer. If it doesn’t match the stored memory tag, you get an exception. Meaning you’d have to store your metadata in both the pointer and the memory it points to. So they are not “extra” bits, just another place to put the same bits.

You could try duplicating the type between the pointer and the stored memory tag. For instance what if you did type checking using the pointers in debug or interpreted mode, then relied on the memory tags in a faster, ahead of time compiled mode.

For our purposes that’s all beside the point. We’re out to save space in the symbol table so let’s stick with tagging the pointer. Turns out that’s not a new idea either, and we can use TBI to do just that.

## TBI For the Symbol Table

With TBI here’s what an entry looks like:

```
#include <stdint.h>

typedef uintptr_t Symbol;
```

On AArch64 this is 8 bytes saving 2 bytes per entry compared to the packed struct without TBI.

It’s not as simple as the storage makes it look. Here’s how the value is used:

{% include image.html path="/assets/images/content/tbi-for-symbol-table-.png" alt="TBI for symbol table" %}

Now you see why I specified that integers would be stored directly in the table and that they would be 32 bit. If they were 64 bit we would not be able to store them in the table because the top byte would corrupt their value (if this was [Zig](https://ziglang.org/documentation/0.4.0/#Primitive-Types) we could use “u56”).

It also highlights how this packing scheme can hold those small values locally and use pointers to the heap for anything larger. In a similar vein to the “small string optimisation” you might have heard of for C++’s std::string. Where short strings can be stored on the stack in the memory normally used for the size and pointer to the heap.

I must however acknowledge the limitations of this Symbol format for any serious use:

* You can only have 16 types.
* You can have a maximum reference count of 15. After that you must make a new copy of the symbol.
* Any type that is greater than 56 bits will require a heap allocation, e.g. uint64_t.
* Using this format in addition to memory tagging is possible but requires careful consideration.

We can mitigate those in various ways but that’s not the point here. The point is that by applying TBI to our symbol table we can fit many more symbols into a given amount of memory.

Of course we need some complexity to get data in and out of this value. Here’s a sampling of the accessors:

```
uint8_t getType(const Symbol* sym) {
   return *sym >> 60;
}

uint8_t getReferenceCount(const Symbol* sym) {
   return (*sym >> 56) & 0xF;
}

uint32_t getUnsignedInteger(const Symbol* sym) {
   // Note: Type checking not shown.
   return *sym & UINT32_MAX;
}

const char* getString(const Symbol* sym) {
   // Note: Type checking not shown.
   return (const char*)*sym;
}
```

You can of course hide a lot of this behind some Application Programming Interface (API). As is done in the [source code](https://gitlab.com/Linaro/tcwg/tbi_lisp) accompanying this post.

## ABI Issues

I just showed you some tempting memory savings. With benefits come costs and TBI is no exception.

If you look at the current [ABI for AArch64](https://github.com/ARM-software/abi-aa/blob/main/aapcs64/aapcs64.rst) you will find just a couple of mentions of tagged pointers ([here](https://github.com/ARM-software/abi-aa/blob/main/aapcs64/aapcs64.rst#pointers), [here](https://github.com/ARM-software/abi-aa/blob/main/aapcs64/aapcs64.rst#memory-addresses)). Where it says that the use of tagged addresses is platform specific.

**Correction:** A previous version of this article referred to an old version of the Linux documentation that did not include the Tagged Address ABI. This has been corrected and the text updated to reflect that.

For example a Linux syscall that takes a user space pointer. Can you leave your top byte data in it? Yes, if you opt into the Tagged Address ABI.

From the [Linux documentation](https://www.kernel.org/doc/Documentation/arm64/tagged-pointers.rst):
“For these reasons, when the AArch64 Tagged Address ABI is disabled, passing non-zero address tags to the kernel via system calls is forbidden, and using a non-zero address tag for sp is strongly discouraged.”

Opting into the ABI is described [here](https://www.kernel.org/doc/Documentation/arm64/tagged-address-abi.rst). From experience I know that if you do not do so, some syscalls will work but others will not. Why is that the case and why would you want an ABI just for this?

It depends on what that syscall does with your pointer. Let’s consider a common operation, perhaps you want to compare the position of two items in an array.

```
bool greater_than(void* lhs, void* rhs) {
   return (uintptr_t)lhs > (uintptr_t)rhs;
}
```

Now consider what happens when those pointers have their top byte set. Let’s bring back the pointers from earlier.

```
1.0x00_00_123456789ABC
2.0x12_00_123456789ABC
3.0xFF_00_123456789ABC
```

We’ll call the function with pointer 3 as “lhs” and pointer 2 as “rhs”. The compiler does not know that we’re using TBI so the casting and comparison works as normal (more on toolchain issues later). The assembly looks like this:

```
greater_than:
       cmp     x1, x0
       cset    w0, cc
       ret
```

Therefore the function returns true because the top byte of pointer 3 is greater than the top byte of pointer 2. We know that this isn’t right because they point to the same location. Clearly we did not intend to include the top byte in the calculation.

**Note**: Having different top bytes for pointers into the same object is improbable but not impossible. Take this as an extreme (and potentially undefined behaviour) example for illustration purposes.

This is the key problem passing tagged pointers to syscalls, libraries, etc. If they don’t specifically clean the pointers then you will get unpredictable results. This is why Linux has required that anyone doing a syscall should opt into the Tagged Address ABI, or remove the bits themselves.

Some places do this scrubbing. One example is [here](https://sourceware.org/git/?p=glibc.git;a=blob;f=sysdeps/aarch64/multiarch/memcpy_a64fx.S;h=c4eab06176d9ff67d3a2de2e2e168b00d8ce87b2;hb=HEAD) (search for “/* Clear special tag bits”). However that’s just one function in glibc. There are many more and checking that they all do this is likely not viable.

So I scared you with all that but is there a solution? Yes, mostly. Make sure that when tagged pointers leave your control (leave the symbol table in our case) that they have the top byte cleared.

Take our string data type. The symbol is a pointer to the heap that we got from malloc. We will want to free that once the reference count becomes 0.

On Linux with glibc 2.31 I was able to pass the tagged pointer directly to free. However doing so is in fact [undefined behaviour](https://en.cppreference.com/w/c/memory/free). Pointers passed to free are expected to be the same value as generated by malloc.

**Note**: glibc 2.33 [supports](https://www.gnu.org/software/libc/manual/html_node/Memory-Related-Tunables.html) memory tagging where it is available. This means invoking the undefined behaviour using the 4 tag bits would be an error. The other 4 bits, your mileage may vary.

On Mac OS it rejected the pointer, deciding to define the behaviour as a runtime error.

This could be solved with the following:

```
void free_str(const char* str) {
  free((void*)((uintptr_t)str & ~((uintptr_t)0xFF << 56)));
}
```

Whether that overhead is worth it, we’ll talk about later.

## Bit-Fields: More Than Meets The Eye

It’s very tempting to define Symbol using C’s bit-fields and a union for the values.

```
struct Symbol {
  union {
      struct {
          uint8_t type: 4;
          uint8_t reference_count: 4;
          uint64_t unused: 56;
      } metadata;
      union {
          struct {
              uint32_t unused;
              uint32_t unsigned_integer;
          };
          const char * string_ptr;
          uintptr_t raw;
      } value;
  };
};
_Static_assert(sizeof(struct Symbol) == 8);
```

This is great because you can just do “symbol.metadata.type” and the compiler will generate the masking for you. However, some aspects of bit field layout are implementation defined.

Each bit field sits within a “unit” of storage. If the next bit field fits into that unit, it will be packed into the unit. If it cannot fit, it is implementation defined whether it is simply moved to the next unit or can straddle two units.

When one or more bit fields are in the same unit, the ordering within that unit is implementation defined. Meaning, does the first bit field start at the most significant bit, or the least significant bit?

Some of these choices are influenced by the platform’s ABI (AArch64’s is [here](https://github.com/ARM-software/abi-aa/blob/main/aapcs64/aapcs64.rst#818bit-fields)). For a single toolchain on a single platform for a single layout, it is likely that the choices will remain constant. For cross platform use it’s a risk.

Bit fields or otherwise, find ways to assert early and often that you have the layout you need.

You might be wondering why we care. If the layout changes that’s fine as long as we don’t share runtime data across platforms, right? Imagine the compiler decided to put “unused” first. We would be writing our type and refcount over the top of the virtual address instead of into the free bits.

**Note:** Endian also plays a role here, the same advice applies.

## Portability

This article focuses on AArch64 Linux but what does it look like when you add this to a cross platform code base?

The first thing you will need is a compile time switch telling you whether you have hardware assisted TBI or emulated TBI. Where emulated TBI is masking off the upper bits manually before any dereference. An example of which is [LLVM’s PointerIntPair](https://llvm.org/doxygen/classllvm_1_1PointerIntPair.html#details) (though it uses the lowest bits instead).

TBI does not apply to the AArch32 state (32 bit code running on Armv8). Even if it could work, our 32 bit unsigned integers would be corrupted by using it.

For non Arm architectures, the proposed [RISC-V J extension](https://github.com/riscv/riscv-j-extension) includes a similar feature. Others may exist.

## Tools

TBI can be used from C without any special tools support. However that does not mean that the compiler is aware that you are using TBI. At this time there’s no compiler mode that will preserve the top byte, but it won’t go out of its way to remove it.

This may change in future as handling of capability systems like [CHERI](https://www.cl.cam.ac.uk/research/security/ctsrd/cheri/) enters upstream compilers. Capabilities force us to accept that pointers are no longer simple integers and this change will hopefully improve TBI handling also.

For debugging, LLDB 15 fully supports “non-address bits” which includes TBI. I wrote a lot more about this [here](https://www.linaro.org/blog/lldb-15-and-the-mystery-of-the-non-address-bits/). If you prefer GDB, use anything after 8.1.

Using a TBI aware debugger will let you use your pointers without worrying about what is stored in the top byte. Back to our example, it would let you directly print strings whose pointers are stored in the symbol table. Other debuggers may try to dereference the raw pointer and fail to read the memory.

## Is It Worth It?

There are 2 factors:

* How critical is memory use?
* How much of your software stack do you control?

The first is going to apply to constrained environments or programs with many repeated objects. Putting a LISP interpreter on a small embedded device is the perfect combination of those 2 things.

The second factor can be restated as “how much do you rely on the platform ABI?”. The best cases are kernels and deeply embedded systems. Where internally you adhere to your own ABI and sanitise it on the boundaries. In the latter, you often control the rest of the software stack too.

Anything that has to run on many architectures with many ABIs, the reward is reduced.

My recommendation would be to look at existing pointers within structures if you want to experiment with TBI. Things that are easily isolated and already well tested.

If TBI being platform specific worries you, perhaps look into exploiting the alignment of data types instead. This itself is not free of ABI issues but it is more portable and could be later replaced with TBI if you see a good benefit.

If you want an existing project that uses TBI, the full source of the use case described in this post can be found [here](https://gitlab.com/Linaro/tcwg/tbi_lisp). Another thing to check out is the Hardware Assisted Address Sanitizer ([HWASAN](https://clang.llvm.org/docs/HardwareAssistedAddressSanitizerDesign.html)). Worst case, you find some bugs!

If you want to follow Linaro’s work to support TBI and extensions like it, check out the [LLVM](https://linaro.atlassian.net/wiki/spaces/LLVM/overview) and [GNU](https://linaro.atlassian.net/wiki/spaces/GNU/overview) projects. If you have any questions, please contact us at **linaro-toolchain@lists.linaro.org**.