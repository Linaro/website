---
author: peter.maydell
categories:
- blog
comments: true
date: 2015-06-22 23:02:00
description: "Over the years I\xE2\x80\x99ve picked up a few tricks for tracking down
  problems in QEMU, and it seemed worth writing them up."
excerpt: 'Peter Maydell  talks about some helpful tricks for debugging QEMU - rr that
  he has learned working with it. '
layout: post
link: /blog/core-dump/tricks-for-debugging-qemu-rr/
slug: tricks-for-debugging-qemu-rr
tags:
- Core Dump
- arm
- Linaro
- qemu
- QEMU-rr
title: "Tricks for debugging QEMU \u2014 rr"
wordpress_id: 8764
---

Over the years I’ve picked up a few tricks for tracking down problems in QEMU, and it seemed worth writing them up. First on the list is a tool I’ve found relatively recently: [rr, from the folks at Mozilla.](http://rr-project.org/)

rr is a record-and-replay tool for C and C++: you run your program under the recorder and provoke the bug you’re interested in. Then you can debug using a replay of the recording. The replay is deterministic and side-effect-free, so you can debug it as many times as you want, knowing that even an intermittent bug will always reveal itself in the same way. Better still, rr recently gained support for reverse-debugging, so you can set a breakpoint or watchpoint and then run time backwards to find the previous occurrence of what you’re looking for. This is fantastic for debugging problems which manifest only a long time after they occur, like memory corruption or stale entries in cache data structures. The idea of record-and-replay is not new; where rr is different is that it’s very low overhead and capable of handling complex programs like QEMU and Mozilla. It’s a usable production quality debug tool, not just a research project. It has a few rough edges, but the developers have been very responsive to bug reports.

Here’s a worked example with a real-world bug I tracked down last week. (This is a compressed account of the last part of a couple of weeks of head-scratching; I have omitted various wrong turns and false starts…)

I had an image for QEMU’s Zaurus (“spitz”) machine, which managed to boot the guest kernel but then got random segfaults trying to execute userspace. Use of git bisect showed that this regression happened with [commit 2f0d8631b7](http://git.qemu.org/?p=qemu.git;a=commitdiff;h=2f0d8631b7;hp=2e1198672759eda6e122ff38fcf6df06f27e0fe2). That change is valid, but it did vastly reduce the number of unnecessary guest TLB flushes we were doing. This suggested that the cause of the segfaults was a bug where we weren’t flushing the TLB properly somewhere, which was only exposed when we stopped flushing the TLB on practically every guest kernel-to-userspace transition.

Insufficient TLB flushing is a little odd for an ARM guest, because in practice we end up flushing all of QEMU’s TLB every time the guest asks for a single page to be flushed. (This is forced on us by having to support the legacy ARMv5 1K page tables, so for most guests which use 4K pages all pages are “huge pages” and take a less efficient path through QEMU’s TLB handling.) So I had a hunch that maybe we weren’t actually doing the flush correctly. OK, change the code to handle the “TLB invalidate by virtual address” guest operations so that they explicitly flush the whole TLB — bug goes away. Take that back out, and put an assert(0) in the cputlb.c function that handles “delete a single entry from the TLB cache”.  This should never fire for an ARM guest with 4K pages, and yet it did.

At this point I was pretty sure I was near to tracking down the cause of the bug; but the problem wasn’t likely to be near the assertion, but somewhere further back in execution when the entry got added to the TLB in the first place. Time for rr.

Recording is simple: just rr record qemu-system-arm args.... Then rr replay will start replaying the last record, and by default will drop you into a gdb at the start of the recording. Let’s just let it run forward until the assertion:

{% include image.html name="code-section-1.7.jpg" alt="code section 1.7" %}

Looking back up the stack we find that we were definitely trying to flush a valid TLB entry:

{% include image.html name="code-section-2.7.jpg" alt="code section 2.7" %}

and checking env->tlb_flush_mask and env->tlb_flush_addr shows that QEMU thinks this address is outside the range covered by huge pages. Maybe we miscalculated them when we were adding the page? Let’s go back and find out what happened then:

{% include image.html name="code-section-3.7.jpg" alt="code section 3.7" %}

(Notice that we hit the assertion again as we went backwards over it, so we just repeat the reverse-continue.) We stop exactly where we want to be to investigate the insertion of the TLB entry. In a normal debug session we could have tried restarting execution from the beginning with a conditional breakpoint, but there would be no guarantee that guest execution was deterministic enough for the guest address to be the same, or that the call we wanted to stop at was the only time we added a TLB entry for this address. Stepping forwards through the tlb code I notice we don’t think this is a huge page at all, and in fact you can see from the function parameters that the size is 1024, not the expected 4096. Where did this come from? Setting a breakpoint inarm_cpu_handle_mmu_fault and doing yet another reverse-continue brings us to the start of the code that’s doing the page table walk so we can step forwards through it. (You can use rn and rs to step backwards if you like but personally I find that a little confusing.). Now rr has led us to the scene of the crime it’s very obvious that the problem is in our handling of an XScale-specific page table descriptor, which we’re incorrectly claiming to indicate a 1K page rather than 4K.  [Fix that](http://lists.gnu.org/archive/html/qemu-devel/2015-05/msg05956.html), and the bug is vanquished.

Without rr this would have been much more tedious to track down. Being able to follow the chain of causation backwards from the failing assertion to the exact point where things diverged from your expectations is priceless. And anybody who’s done much debugging will have had the experience of accidentally stepping or continuing one time too often and zooming irrevocably past the point they wanted to look at — with reverse execution those errors are easily undoable.

I can’t recommend rr highly enough — I think it deserves to become a standard part of the Linux C/C++ developer’s toolkit, as valgrind has done before it.

_Originally posted at [https://translatedcode.wordpress.com/2015/05/30/tricks-for-debugging-qemu-rr/](https://translatedcode.wordpress.com/2015/05/30/tricks-for-debugging-qemu-rr/)_