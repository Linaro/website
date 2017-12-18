---
author: ard.biesheuvel
categories:
- blog
comments: true
date: 2017-01-26 08:44:07
keywords: Accelerated AES, arm64, Linux, kernel
layout: post
link: /blog/core-dump/accelerated-aes-for-the-arm64-linux-kernel/
slug: accelerated-aes-for-the-arm64-linux-kernel
tags:
- Core Dump
- AArch64
- AES
- arm
- kernel
- Linux
- linux kernel
title: Accelerated AES for the ARM64 Linux kernel
wordpress_id: 12087
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" url="https://www.google.com" %}

The ARMv8 architecture extends the AArch64 and AArch32 instruction sets with dedicated instructions for AES encryption, SHA-1 and SHA-256 cryptographic hashing, and 64×64 to 128 polynomial multiplication, and implementations of the various algorithms that use these instructions have been added to the ARM and arm64 ports of the Linux kernel over the past couple of years. Given that my main focus is on enterprise class systems, which typically use high end SoCs, I have never felt the urge to spend too much time on accelerated implementations for systems that lack these optional instructions (although I did contribute a plain NEON version of AES in ECB/CBC/CTR/XTS modes back in 2013). Until recently, that is, when I received a Raspberry Pi 3 from my esteemed colleague Joakim Bech, the tech lead of the Linaro Security Working Group. This system is built around a Broadcom SoC containing 4 Cortex-A53 cores that lack the ARMv8 Crypto Extensions, and as it turns out, its AES performance was dreadful.


## AES primer


The American Encryption Standard (AES) is a variant of the Rijndael cipher with a fixed block size of 16 bytes, and supports key sizes of 16, 24 and 32 bytes, referred to as AES-128, AES-192 and AES-256, respectively. It consists of a sequence of rounds (10, 12, or 14 for the respective key sizes) that operate on a state that can be expressed in matrix notation as follows:

{% include image.html name="blog-pic-1.jpg" alt="Blog Pic 1" %}

where each element represents one byte, in column major order (i.e., the elements are assigned from the input in the order a0, a1, a2, a3, b0, b1, etc)

Each round consists of a sequence of operations performed on the state, called AddRoundKey, SubBytes, ShiftRows and MixColumns. All rounds are identical, except for the last one, which omits the MixColumns operation, and performs a final AddRoundKey operation instead.


## AddRoundKey


AES defines a key schedule generation algorithm, which turns the input key into a key schedule consisting of 11, 13 or 15 _round keys_ (depending on key size), of 16 bytes each. The AddRoundKey operation simply xor’s the round key of the current round with the AES state, i.e.,


{% include image.html name="blog-pic-2.jpg" alt="Blog Pic 2" %}

where _rkN_ refers to byte N of the round key of the current round.


## SubBytes


The SubBytes operation is a byte wise substitution, using one of two S-boxes defined by AES, one for encryption and one for decryption. It simply maps each possible 8-bit value onto another 8-bit value, like below

{% include image.html name="blog-pic-3.jpg" alt="Blog Pic 3" %}


## ShiftRows


The ShiftRows operation is a transposition step, where all rows of the state except the first one are shifted left or right (for encryption or decryption, respectively), by 1, 2 or 3 positions (depending on the row). For encryption, it looks like this:

{% include image.html name="blog-pic-4.jpg" alt="Blog Pic 4" %}


## MixColumns


The MixColumns operation is also essentially a transposition step, but in a somewhat more complicated manner. It involves the following matrix multiplication, which is carried out in GF(2^8) using the characteristic polynomial 0x11b. (An excellent treatment of Galois fields can be found [here.](https://engineering.purdue.edu/kak/compsec/NewLectures/Lecture7.pdf))

{% include image.html name="blog-pic-5.jpg" alt="Blog Pic 5" %}

## Table based AES


The MixColumns operation is computationally costly when executed sequentially, so it is typically implemented using lookup tables when coded in C. This turns the operation from a transposition into a substitution, which means it can be merged with the SubBytes operation. Even the ShiftRows operation can be folded in as well, resulting in the following transformation:

{% include image.html name="blog-pic-6.jpg" alt="Blog Pic 6" %}


The generic AES implementation in the Linux kernel implements this by using 4 lookup tables of 256 32-bit words each, where each of those tables corresponds with a column in the matrix on the left, and each element N contains the product of that column with the vector { sub(N) }. (A separate set of 4 lookup tables based on the identity matrix is used in the last round, since it omits the MixColumns operation.)

The combined SubBytes/ShiftRows/MixColumns encryption operation can now be summarized as

{% include image.html name="blog-pic-7.jpg" alt="Blog Pic 7" %}


where tbIN refers to each of the lookup tables, (+) refers to exclusive-or, and the AES state columns are represented using 32-bit words.

Note that lookup table based AES is sensitive to cache timing attacks, due to the fact that the memory access pattern during the first round is strongly correlated with the key xor’ed with the plaintext, allowing an attacker to discover key bits if it can observe the cache latencies of the memory accesses.

Please refer to [this link](https://engineering.purdue.edu/kak/compsec/NewLectures/Lecture8.pdf) for more information about the AES algorithm.


## Scalar AES for arm64


The first observation one can make when looking at the structure of the lookup tables is that the 4 tables are identical under rotation of each element by a constant. Since rotations are cheap on arm64, it makes sense to use only a single table, and derive the other values by rotation. Note that this does not reduce the number of lookups performed, but it does reduce the D-cache footprint by 75%.

So for the v4.11 release of the Linux kernel, a [scalar implementation of AES](http://git.kernel.org/cgit/linux/kernel/git/ardb/linux.git/tree/arch/arm64/crypto/aes-cipher-core.S?h=crypto-arm-v4.11) has been queued for arm64 that uses just 4 of the the 16 lookup tables from the generic driver. On the Raspberry Pi 3, this code manages 31.8 cycles per byte (down from 34.5 cycles per byte for the generic code). However, this is still a far cry from the 12.9 cycles per byte measured on Cortex-A57 (down from 18.0 cycles per byte), so perhaps we can do better using the NEON. (Note that the dedicated AES instructions manage 0.9 cycles per byte on recent Cortex-A57 versions.)


## Accelerated AES using the NEON


The AArch64 version of the NEON instruction set has one huge advantage over other SIMD implementations: it has 32 registers, each 128 bits wide. (Other SIMD ISAs typically have 16 such registers). This means we can load the entire AES S-box (256 bytes) into 16 SIMD registers, and still have plenty of registers left to perform the actual computation, where the tbl/tbx NEON instructions can be used to perform the S-box substitutions on all bytes of the AES state in parallel.

This does imply that we will not be able to implement the MixColumns operation using table lookups, and instead, we will need to perform the matrix multiplication in GF(2^8) explicitly. Fortunately, this is not as complicated as it sounds: with some shifting, masking and xor’ing, and using a table lookup (using a permute vector in v14) to perform the 32-bit rotation, we can perform the entire matrix multiplication in 9 NEON instructions. The SubBytes operation takes another 8 instructions, since we need to split the 256 byte S-box lookup into 4 separate tbl/tbx instructions. This gives us the following sequence for a single inner round of encryption, where the input AES state is in register v0. (See below for a breakdown of the MixColumns transformation)

{% include image.html name="blog-pic-8.jpg" alt="Blog Pic 8" %}


Looking at the _instruction_ count, one would expect the performance of this algorithm to be around 15 cycles per byte when interleaved 2x or 4x (i.e., the code above, but operating on 2 or 4 AES states in parallel, to eliminate data dependencies between adjacent instructions). However, on the Raspberry Pi 3, this code manages only 22.0 cycles per byte, which is still a huge improvement over the scalar code, but not as fast as we had hoped. This is due to the micro-architectural properties of the tbl/tbx instructions, which take 4 cycles to complete on the Cortex-A53 when using the 4 register variant. And indeed, if we base the estimation on the _cycle_ count, by taking 4 cycles for each such tbl/tbx instruction, and 1 cycle for all other instructions, we get the more realistic number of 21.25 cycles per byte.

As a bonus, this code is not vulnerable to cache timing attacks, given that the memory access patterns are not correlated with the input data or the key.

This [code](http://git.kernel.org/cgit/linux/kernel/git/ardb/linux.git/tree/arch/arm64/crypto/aes-neon.S?h=crypto-arm-v4.11) has been part of the arm64 Linux kernel since 2013, but some improvements to it have been queued for v4.11 as well.


## Bit sliced AES using the NEON


The AES S-box is not an arbitrary bijective mapping, it has a carefully chosen structure, based again on finite field arithmetic. So rather than performing 16 lookups each round, it is possible to _calculate_ the subsitution values, and one way to do this is described in the paper [Faster and Timing-Attack Resistant AES-GCM](https://eprint.iacr.org/2009/129.pdf) by Emilia Kaesper and Peter Schwabe. It is based on _bit slicing_, which is a method to make hardware algorithms suitable for implementation in software. In the AES case, this involves _bit slicing_ 8 blocks of input, i.e., collecting all bits N of each of the 128 bytes of input into NEON register qN. Subsequently, a sequence of logic operations is executed on those 8 AES states in parallel, which mimics the network of logic gates in a hardware implementation of the AES S-box. While software is usually orders of magnitude slower than hardware, the fact that the operations are performed on 128 bits at a time compensates for this.

An implementation of AES using bit slicing is queued for v4.11 as well, which manages 19.8 cycles per byte on the Raspberry Pi 3, which makes it the preferred option for parallelizable modes such as CTR or XTS. It is based on the ARM implementation, which I ported from OpenSSL to the kernel back in 2013, in collaboration with Andy Polyakov, who authored the ARM version of the code originally. However, it has been modified to reuse the key schedule generation routines of the generic AES code, and to use the same expanded key schedule both for encryption and decryption, which reduces the size of the per-key data structure by 1696 bytes.

The code can be found [here](http://git.kernel.org/cgit/linux/kernel/git/ardb/linux.git/tree/arch/arm64/crypto/aes-neonbs-core.S?h=crypto-arm-v4.11).


## Conclusion


For the Raspberry Pi 3 (as well as any other system using version r0p4 of the Cortex-A53), we can summarize the AES performance as follows:

{% include image.html name="blog-pic-9.jpg" alt="Blog Pic 9" %}


## Appendix: Breakdown of the MixColumns transform using NEON instructions


{% include image.html name="blog-pic-10.jpg" alt="Blog Pic 10" %}