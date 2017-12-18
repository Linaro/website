---
author: chunyan.zhang
categories:
- blog
date: 2016-09-06 04:24:15
description: Read about System Trace Module (STM) which can not only collect trace
  data from software sources, but also monitor hardware events. Learn how to write
  traces to STM and how many approaches to do this, etc.
excerpt: Read about System Trace Module (STM) which can not only collect trace data
  from software sources, but also monitor hardware events. Learn how to write traces
  to STM and how many approaches to do this, etc.
layout: post
link: /blog/core-dump/stm-and-its-usage/
slug: stm-and-its-usage
tags:
- Core Dump
- CoreSight
- Linaro
- Linux
- Linux on ARM
- open source software
- openCSD
- OpenCSD library
- Opensource
title: System Trace Module (STM) and its usage
wordpress_id: 11549
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" url="https://wiki.linaro.org/CoreDevelopment" %}


## Introduction


System Trace Module (STM) is a kind of trace source device, which can not only collect trace data from software sources, but also monitor hardware events.

Any software program no matter where it is in kernel space or user space can write STM device with message string (i.e. trace data), like using print functions.  This article will mainly focus on software traces of STM - how to write traces to STM and how many approaches to do this, etc.

Each software or hardware trace source is assigned a unique pair of master and channel, so that a decoder can know which source the trace data come from by this.  As a kind of resource, the number of masters and channels are limited, for example there are 128 masters, each supporting 65,536 channels on ARM CoreSight STM, while Intel STH has up to 65,536 masters and up to 256 channels per master.

Unlike some traditional tracing approach which would lose all traces once system crashed since the traces are stored in system memory, tracing with STM can survive this kind of case because all traces collected via STM would end up in sink device which can be still alive even the system is dead so long as the hardware design allows it.There’s another benefit of using STM to collect software traces or monitor hardware events.  Since everything is logged to the same STM with timestamps, it is possible to correlate events happening in the entire system rather than being confined to the logging facility of a single entity.


## Terminology


<table class="table responsive-table">
<tbody >
<tr >

<td style="text-align: left;" markdown="1">
STM device
</td>

<td style="text-align: left;" markdown="1">
The STM hardware entity
</td>
</tr>
<tr >

<td style="text-align: left;" markdown="1">
stm_source device
</td>

<td markdown="1" >


A virtual device node from the view of sysfs, it is the interface




for collecting software traces via STM device



</td>
</tr>
</tbody>
</table>


## Scope


In this article we will start with two examples of using STM to collect software trace data and then will introduce more about how to do software tracing with STM, including how to config device tree for STM, how the policy of STM master/channel management works, together with an introduction of stm_source device, an explanation for mapping STM to user space and how to decode STM trace data, what’s the difference of masters on CoreSight STM.


## The typical use cases of STM


Let’s start with the kernel space, and then we will see how to use STM from user space.


### In kernel space


There’s an stm_console [1] which makes STM as an output of Linux console.  Startup the kernel compiled with CONFIG_STM_SOURCE_CONSOLE, you can see a console node under stm_source directory on the target:

_# ls /sys/class/stm_source/console/_

_power   stm_source_link   subsystem   uevent_

Once linked with a STM device, the stm_console will be one of outputs of the kernel console logs which will end up in the storage device connected with STM device, for example in ARM CoreSight architeture the operation would be like:

```
# echo 1 > /sys/bus/coresight/devices/10003000.etf/enable_sink
# echo 10006000.stm > sys/class/stm_source/console/stm_source_link
[   29.135746] coresight-tmc 10003000.etf: TMC enabled
[   29.140754] coresight-funnel 10001000.funnel: FUNNEL inport 4 enabled
[   29.147391] coresight-stm 10006000.stm: STM tracing enabled
```

Note: before linking stm_source with STM device, the sink device has to be enabled, which stores the trace data.

And then you will see the Write Pointer Register of sink device would be growing along with the message being logged to the console, in this case:


```
# cat sys/bus/coresight/devices/10003000.etf/mgmt/rwp
0x2258
```

To get the trace out and decoded, please refer to the section **Decoding traces with OpenCSD library **below**.


### In user space


There are two ways to collect traces with STM device in user space.  One is mmaping STM device to user space for zero-copy writing.  More details of this kind of use case, you can read the section **Mapping STM to user-space** below.

Another way is writing STM device directly, the user space code will look like:

```
trace_data[4] = {0x55555555, 0xaaaaaaaa, 0x66666666, 0x99999999};
fd = open(“/dev/10006000.stm”, O_RDWR | O_SYNC);
write(fd, trace_data, size);
close(fd);
```

The whole code of this example program can be found [5].


## **Device Tree configuration of STM**


The code below shows a typical STM device tree configurations:

```
stm@10006000 {
              compatible = "arm,coresight-stm", "arm,primecell";
              reg = <0 0x10006000 0 0x1000>,
                         <0 0x01000000 0 0x1800000>;
              reg-names = "stm-base", "stm-stimulus-base";
              clocks = <&clk26mhz>;
              clock-names = "apb_pclk";
              port {
                          stm_out: endpoint {
                                      remote-endpoint = <&funnel_in_port4>;
                          };
               };
};

```

Readers should’ve noticed that STM has two groups of reg addresses here, the first group obviously describes the area of STM registers, the second group whose ‘reg-name’ is ‘stm-stimulus-base’ describes the physical base address and the length of stimulus ports area, stimulus ports are also known as STM channels.

In the following examples of this article, I will use this STM, the whole code can be found here [2].


## STM source device


To collect software traces with STM from kernel space, stm_source device is a necessary component.  The 'stm_source' can be connected/disconnected to/from an STM device at runtime via sysfs interface, and writing to 'stm_source' actually ends up in the stm device that connected with it (finally ends up in the sink device which connected with STM device).  All registered stm_source devices can be found under ‘/sys/class/stm_source/’.

An important element of stm_source is 'stm_source_data', it includes two necessary properties which must be initialized before registering stm_source device:


  * stm_source name - it is just the file node name in sysfs.


  * channel numbers - it means this stm_source requests to be allocated how many channels when linking stm_source with STM device, then the driver of STM framework will look up and allocate this quantity of available channels for the stm_source according to STM master/channel management policy.




## STM master/channel management policy


The stm_source class has a set of masters and channels allocation and management policy.  Let’s go through the details from three parts below:


### 1. Allocate a range of channels from one master for stm_source

{% include image.html name="figure-1-stm-blog.jpg" alt="figure 1 stm blog" %}

Like the Figure-1 is showing, when linking stm_source with STM device, the program will poll all masters from either

1). the start master configured in the file named "masters" under the policy rule directory if there’s a policy rule under  _/config/stp-policy/_ which has the same name with the stm_source class device,

Or

2). the struct stm_data::sw_start which is configured in the initialization of STM device driver,

and then to see if there are free channels on the current first available master and the number of free continuous channels on this master must be larger than or equal to the quantity of required channels. The first eligible master and the range of channels will be allocated to this stm_source class device as its stimulus output ports.


### 2. Create policy rules on target


Mount the configfs at run time with:

```
mount -t configfs none /config
```

The directory 'stp-policy/' would appear under 'config/' then.

Create policy rule for given STM device like below:

```
mkdir /config/stp-policy/10006000.stm.xyz
```

Here ‘10006000.stm’ as an example is an STM device name which this policy applies to. ‘10006000.stm’ must be the same with an STM device name which can be found under /dev directory.  ‘xyz’ is an arbitrary string without dot, it is necessary and would be separated with device by a dot that’s why no dot is allowed in the arbitary string.  Neither ‘_10006000.stm.xyz.abc’_ nor ‘_10006000.stm’_ is a valid name for policy rules.

Create policy rules for a given stm_source class device like below:

```
mkdir /config/stp-policy/10006000.stm.my_policy/ftrace
```

Here ‘ftrace’ is a registered device of stm_source class. It can be used to write trace data into STM device and finally end up in the sink device once linked. Note that the rule's name must be same with the name of stm_source class device since we are creating policy for the given stm_source.

After created policy rule, there will be two files 'mastesr' and 'channels' under the directory of this rule, for example:

```
# cat /config/stp-policy/10006000.stm.my_policy/ftrace/masters
0 127
# cat /config/stp-policy/10006000.stm.my_policy/ftrace/channels
0 65535
```

These values mean the range of masters/channels which can be used on the stm_source device whose name is the same with the rule's name (i.e. ftrace in this case), the default values come from the configuration [3] of STM device (i.e. 10006000.stm in this case)

The files masters/channels are configurable and the rule would be applied on the stm_source class device when being linked with any STM device.


### 3. Allocate master/channels for applications






  1. Set the policy rule via ioctl() interface of STM device.  One rule would include the allocated master, the first assigned channel, the number of required channels.  More details about this would be introduced in the following section **Mapping STM to user-space.**


  2. If an application program doesn't set policy rule for itself, when the application writing data to STM via the system call - write() - of STM device, a rule named “default” will be applied, if the “default” policy cannot be found either, like what I wrote above, the initialized configuration of STM device will be applied.




## Mapping STM to user-space


Mapping STM stimulus ports area into user space is another usage of STM.  The patch [4] added supporting mmap for CoreSight STM should be in kernel 4.9.  A sample program of this can be found here [6] which was tested on Spreadtrum’s SC9836 [2] and ARM’s Juno platform.  It maps a page of channels (i.e. 16) to user space, and writes a set of given specific data to the mmap’ed area.

In this sample program, the size of mapped memory must be a multiple of page-size, so the user programs have to map many channels at one time, that’s saying if each channel takes 256 bytes and hardware page size is 4096 bytes, the users have to map at least 16 channels at one time.  To be sure which channels would be mmap’ed, the program has to set a policy of channels allocation for STM device before doing mapping activity.


## CoreSight STM specificity on masters


Different from Intel STH (Software Trace Hub), masters on CoreSight STM are not under software control, but have a hardwired association with processors, every processor connected with CoreSight STM in system has two master IDs for secure and non-secure modes.  When decoding CoreSight STM trace data, we can easily know which processor the trace comes from by master IDs.  Table-1 shows an example of part masters allocation on Juno.


<table class="table responsive-table" >
<tbody >
<tr >

<td markdown="1">
Processors
</td>

<td markdown="1">
master ID for

secure accesses
</td>

<td markdown="1">
master ID for

non-secure accesses
</td>
</tr>
<tr >

<td markdown="1">
Cortex-A57 core 0
</td>

<td markdown="1">
0
</td>

<td markdown="1">
64
</td>
</tr>
<tr >

<td markdown="1">
Cortex-A57 core 1
</td>

<td markdown="1">
1
</td>

<td markdown="1">
65
</td>
</tr>
<tr >

<td markdown="1">
Cortex-A53 core 0
</td>

<td markdown="1">
4
</td>

<td markdown="1">
68
</td>
</tr>
<tr >

<td markdown="1">
Cortex-A53 core 1
</td>

<td markdown="1">
5
</td>

<td markdown="1">
69
</td>
</tr>
<tr >

<td markdown="1">
Cortex-A53 core 2
</td>

<td markdown="1">
6
</td>

<td markdown="1">
70
</td>
</tr>
<tr >

<td markdown="1">
Cortex-A53 core 3
</td>

<td markdown="1">
7
</td>

<td markdown="1">
71
</td>
</tr>
<tr >

<td markdown="1">
Mali-T624 GPU
</td>

<td markdown="1">
32
</td>

<td markdown="1">
96
</td>
</tr>
<tr >

<td markdown="1">
Cortex-M3 SCP
</td>

<td markdown="1">
33
</td>

<td markdown="1">
97
</td>
</tr>
<tr >

<td markdown="1">
Expansion master 0
</td>

<td markdown="1">
34
</td>

<td markdown="1">
98
</td>
</tr>
<tr >

<td markdown="1">
Default master
</td>

<td markdown="1">
62
</td>

<td markdown="1">
126
</td>
</tr>
<tr >

<td markdown="1">
DAP-AXI-AP
</td>

<td markdown="1">
63
</td>

<td markdown="1">
127
</td>
</tr>
</tbody>
</table>
Table-1 CoreSight STM masters allocation on Juno


## Decoding traces with OpenCSD1 library


Once the traces have been exported via STM, we can simply dump the traces from the sink device connected with STM in CoreSight system with ‘dd’ command, for example on the platform [2], we use ETF as the sink device, the command would look like:

```
# dd if=/dev/10003000.etf of=cstraceitm.bin
[  308.645119] coresight-tmc 10003000.etf: TMC read start
[  308.651724] coresight-tmc 10003000.etf: TMC read end
64+0 records in
64+0 records out
32768 bytes (32.0KB) copied, 0.012942 seconds, 2.4MB/s
# ls -la cstraceitm.bin
-rw-r--r-- 1 0  0   32768 Jan  1 00:05 cstraceitm.bin
```

The output filename should be ‘cstraceitm.bin’ which matches the configuration of OpenCSD decoding library.  It stores the raw trace data which can be decoded by the decoding library.

Download the openCSD source code from [7], and build it according to the direction of “Off Target OpenCSD Compilation” on HOWTO.md, then you will see:

```
opencsd/decoder$ ls lib/linux64/dbg/
libcstraced.a  libcstraced_c_api.a  libcstraced_c_api.so  libcstraced.so
opencsd/decoder$ ls tests/bin/linux64/dbg/
libcstraced_c_api.so  libcstraced.so  simple_pkt_print_c_api  trc_pkt_lister
```

The ‘trx_pkt_lister’ is the program for decoding STM traces, copy the trace binary got with ‘dd’ command above  (i.e. ‘cstraceitm.bin’) to the decoding test snapshots directory, then we can decode the traces:

```
opencsd/decoder$ cp cstraceitm.bin tests/snapshots/stm_only/
opencsd/decoder$ export LD_LIBRARY_PATH=./lib/linux64/dbg/
opencsd/decoder$ ./tests/bin/linux64/dbg/trc_pkt_lister -ss_dir tests/snapshots/stm_only/ -src_name ETB_1 | vim -
```

The decoded trace data will look like below:

```
Trace Packet Lister: CS Decode library testing
-----------------------------------------------_

Library Version : 0.003

Test Command Line:-
./tests/bin/linux64/dbg/trc_pkt_lister   -ss_dir  tests/snapshots/stm_only/  -src_name  ETB_1_

Trace Packet Lister : reading snapshot from path tests/snapshots/stm_only/
Using ETB_1 as trace source
Trace Packet Lister : STM Protocol on Trace ID 0x1
Idx:0; ID:20;   ASYNC:Alignment synchronisation packet.
Idx:11; ID:20;  VERSION:Version packet.; Ver=3
Idx:13; ID:20;  FREQ:Frequency packet.; Freq=0Hz
Idx:21; ID:20;  M8:Set current master.; Master=0x41
Idx:22; ID:20;  D32TS:32 bit data; with timestamp.; Data=0x55555555; TS=0x00000000E05CF92E ~[0xE05CF92E]
Idx:37; ID:20;  D32:32 bit data.; Data=0xaaaaaaaa
Idx:41; ID:20;  D32:32 bit data.; Data=0x66666666
Idx:46; ID:20;  D32:32 bit data.; Data=0x99999999
Idx:51; ID:20;  FLAG:Flag packet.
ID:20   END OF TRACE DATA
Trace Packet Lister : Trace buffer done, processed 32768 bytes.
```

The above trace data was just decoded from the sample program [6], the red numbers were just what the sample program wrote.  From the decoded trace data, we can see these traces came from master 0x41 of STM whose trace id is 0x1.  Each trace package has a timestamp, and ends up with a flag packet.


## Final words


I hope this post provided an useful introduction to STM and presented how to use it clearly.  One work related to STM is still ongoing,  which I have been doing - Ftrace integration with STM, function traces can be exported via STM once this work is done.  At this moment the 5th iteration [8] for this feature has been released.

[1] [http://lxr.free-electrons.com/source/drivers/hwtracing/stm/console.c?v=4.7](http://lxr.free-electrons.com/source/drivers/hwtracing/stm/console.c?v=4.7)

[2] [http://lxr.free-electrons.com/source/arch/arm64/boot/dts/sprd/sc9836.dtsi?v=4.3#L178](http://lxr.free-electrons.com/source/arch/arm64/boot/dts/sprd/sc9836.dtsi?v=4.3#L178)

[3] [http://lxr.free-electrons.com/source/drivers/hwtracing/coresight/coresight-stm.c](http://lxr.free-electrons.com/source/drivers/hwtracing/coresight/coresight-stm.c)

[4] [https://patchwork.kernel.org/patch/9189197/](https://patchwork.kernel.org/patch/9189197/)

[5] [https://git.linaro.org/people/zhang.chunyan/sample-app.git](https://git.linaro.org/people/zhang.chunyan/sample-app.git) branch stm-write-sample

[6] [https://git.linaro.org/people/zhang.chunyan/sample-app.git](https://git.linaro.org/people/zhang.chunyan/sample-app.git) branch stm-mmap-sample

[7] [https://github.com/Linaro/OpenCSD](https://github.com/Linaro/OpenCSD)

[8] [https://lkml.org/lkml/2016/8/30/83](https://lkml.org/lkml/2016/8/30/83)


* * *


  1. OpenCSD is an open source CoreSight Trace Decode library [7], there are two articles introduced OpenCSD in Linaro Core Dump