---
author: mike.leach
date: 2016-07-29 21:57:01+00:00
excerpt: This article will describe the programming and operation of the OpenCSD library
  in decoding CoreSight™ trace. Starting with a brief review of CoreSight technology
  and terminology, these elements will be related to the configuration of the library
  in order to successfully decode a captured trace stream.
layout: post
link: /blog/core-dump/opencsd-operation-use-library/
slug: opencsd-operation-use-library
title: OpenCSD – Operation and Use of the Library
wordpress_id: 11243
categories:
- blog
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
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" url="https://wiki.linaro.org/CoreDevelopment" %}


This article will describe the programming and operation of the OpenCSD library in decoding CoreSight™ trace. Starting with a brief review of CoreSight technology and terminology, these elements will be related to the configuration of the library in order to successfully decode a captured trace stream.

A brief exploration of the key programming APIs will be provided, along with a description of the test and example programs and the test data that drives these.


## **Introduction to the OpenCSD Library.**


The OpenCSD library is designed to allow a client application to decode trace streams generated through CoreSight trace hardware. The library may be built natively on an ARM target, or on a host PC running Linux or Windows. The main library and API is written in C++, with a C API wrapper library provided for situations where this is preferred, and to ease the integration with scripting languages. The library can be used for trace captured on target, or by an off target capture device.

The client application will configure the library according to the hardware settings of the CoreSight components which generated the trace. The client will also provide access to the memory images of the programs or regions traced in order for the trace decoding to correctly follow the traced instruction sequence.

Once the library is correctly configured, the client application can then push the captured binary trace data through the library, which will result in a series of output packets describing the state of the core executing the instructions, such as the exception level, instruction architecture and security state, the instruction ranges executed on the core,  and core events such as exceptions and interrupts.

The client application must then interpret these output packets to produce the desired information – for example, disassembling the instructions in the ranges indicated to provide the user with a view of the program execution.


## **A Review of CoreSight™ terms and components.**


A typical CoreSight system is shown in Figure 1.

The components can be classified as follows:-


  1. **Trace sources:** These are the ETMs (or PTM) attached to the Cortex cores which trace the execution of the program running on that core, or software trace sources such as the STM, which can be directly written to by software running on a core to provide “printf” like messaging.


  2. **Trace sinks:** These can be the on-chip buffers, such as the ETB which contains a small amount of dedicated RAM to save the trace, or the ETR, which co-operates with the system software to save trace data to system allocated memory. Additionally there may be a TPIU component (not shown), that can connect the trace to an off chip capture device.
The trace sink will format the incoming trace data into a CoreSight frame format, which associates trace source data with the Trace ID.


  3. **Trace Infrastructure:**  The funnels, CTIs (not shown) and  replicators (not shown) which direct and multiplex sources to sinks, and can be used to control events which control the capture of trace.

{% include image.html name="Picture1-core-dump.jpg" alt="Picture1"%}


Figure 1:  Typical CoreSight System.


The system software, or a program using the trace system, must program up the CoreSight components to generate trace as required. Each trace source is programmed with a CoreSight Trace ID, to allow the source to be identified when de-multiplexing the buffer and decoding the Trace.

{% include image.html name="image-1-core-dump.jpg" alt="image 1"%}


## **The Decode Process.**


The task of decoding the incoming trace stream is a three stage process.

  1. **De-multiplex** by Trace ID. The library provides a de-multiplexing component that will split the incoming frame formatted stream into individual Trace ID streams.


  2. **Packet Processing_:_** This converts the incoming Trace ID stream into a discrete set of trace packets according to the protocol defined by the trace source (ETMv3, ETMv4, PTM, STM).


  3. **Packet Decoding_:_** This interprets an incoming set of trace packets, removing protocol specific elements to produce the **generic output packets** that describe the operation of the trace source – for example the instructions executed by the core.


**_Note:_**_ Where a system has a single trace source that does not use a formatter, or trace data has been previously de-multiplexed into individual trace streams, then the library can be programmed without the de-multiplexing stage._


## **Configuring the Library – Concepts.**


This section discusses the basic concepts involved in configuring the library for trace decode. API specifics are presented in the next section.

The library provides a decoder management component called a “**decode tree**”. This provides an API to create a connected set of decode components. **Figure 2** shows a configured decode tree inside a client application.

{% include image.html name="figure-2-core-dump.jpg" alt="figure 2"%}

Figure 2: Configured Decode Tree.


A decode tree is setup for a given trace sink, and the trace sources tracing into that sink. The arrangement of the decode tree therefore mirrors that of the CoreSight hardware in the system. The 

client program must have knowledge of the CoreSight hardware and configuration in order to correctly setup the trace decoder.

Configuration consists of a number of stages. First create a decode tree, which will automatically create a **_CoreSight_** **_frame de-multiplexor_** stage to interpret the CoreSight formatted trace frames and split these into individual Trace ID streams. This de-mux stage has output points for each possible Trace ID.

Next decoder elements need to be created for each trace source we are interested in decoding - this could be all the trace sources that are generating trace, or a subset of them. Decoders are created using the create decoder API function on the decode tree, which requires that appropriate **_decoder configuration information_** is supplied – including the Trace ID. Creating a decoder automatically connects it to the appropriate Trace ID data stream.

The decoder elements also require access to program memory to correctly follow the path of the executed instructions. The decode tree provides **_memory accessor_** interface to allow the client program to supply these memory areas.  

Finally, the client will implement a call-back interface to collect the **_generic trace element_** output, which will be attached to the decode tree.

The library is now ready for use and the client can begin pushing the trace data into the library using the **_data path_** API.


### **Decoder Configuration Information.**


Trace sources allow a number of different configuration options. These vary depending on the protocol type and version but can generally be classified into two groups:-


  1. Options that control the type and format of the trace packets generated. These are options that determine if cycle accurate trace is generated, if timestamps packets are generated or if certain protocol optimisations are used, and of course the programmed Trace ID. These trace options, in the form of the programmed register values, are required by the decoder in order to correctly decode the trace.


  2. Options that control the amount of trace generated, or the start and stop of trace generation. These are trace address filtering ranges, start and stop address enables and trace trigger events.  The registers that may be programmed to control these features are not required for decode.


The decoder API contains a structure for the required trace configuration registers that each protocol needs. When creating a decoder for a given trace source the client program will fill in this structure and pass it to the decode tree API. As the configuration contains the Trace ID, this decoder will be attached to the appropriate output on the de-multiplexor.

**Program Memory Accessor.****
**The packet decode elements that are responsible for following the program trace require access to the memory image of the traced program to analyse the opcodes executed. The memory accessor interface allows the client to provide direct memory access, access to saved memory buffers or file access to the program images.


## **The Decode Tree Configuration API.**


This section covers specific API functions and data types. Further API documentation is available in the source code, formatted for extraction by the ‘doxygen’ tool to create a reference manual.

{% include image.html name="figure-3-core-dump.jpg" alt="figure 3"%}


Figure 3 introduces some of the components and interface types used when connecting components within the decode tree. These connections are created automatically as the API is used to create the decoder objects within the tree. The diagram shows the path of the data through the decoder to the client application.


_**ITrcDataIn**_: Input interface to both the frame de-mux and the packet processor. This accepts raw byte data.

_**IPktDataIn<P>**_: Input interface to the packet decoder. Takes the protocol specific output packets from the packet processor and decodes the trace.

_**IInstrDecode**_:  Interface to the opcode analyser. Used by the packet decoder to determine the instruction types – branch, none-branch and possible branch target addresses when following the instruction execution path.

_**ITargetMemAccess**_: Provides an interface to memory images of the code executed in the trace run. Used by the packet decoder to follow the instruction execution path. These images may be in the form of files or memory buffers.

_**ITrcGenElemIn**_: This interface is provided by the client application – it accepts the generic trace packets from the decoder and analyses them according to its need. Packets from all the decoders in the tree are passed to a single interface instance in the client, the source of the packets is identified by Trace ID.

_**IPktRawDataMon<P>**_: This interface is optionally provided by the client application if it wants to monitor the protocol specific packets generated by the packet processor, when the main output from the packet processor is directed to the packet decoder. The test program described below uses this interface to print such packets.


### **Configuration using the C++ API**


Configuration using the C++ API begins with the creation of a decode tree.

{% include image.html name="redo-box-1-core-dump.jpg" alt="Redo Box 1"%}


The flag [_OCSD_TRC_SRC_FRAME_FORMATTED_] tells the creation function to automatically set up the de-multiplexor for the CoreSight trace formatted frame. The second parameter tells the de-multiplexor that there are no frame syncs in the incoming raw trace stream (frame syncs are used when trace is output via a TPIU). This is by far the most common trace format when analysing trace captured on target. The library has a  built-in  ARM instruction set opcode analyser which will be created and automatically attached to the decoders.

Next the individual decoders are created. The creation of a decoder requires that the decoder configuration information is provided – this is in the form of the ocsd_xyz_cfg structures and classes. The client application must fill in the structure / class and pass this to the decoder creation API on the decoder tree.

{% include image.html name="box-3-core-dump.jpg" alt="Box 3"%}


Decoders are selected by name – those built-in to the library have defined names in the library headers  [e.g. _OCSD_BUILTIN_DCD_PTM_]. The API allows for the creation of a packet processor only (used for debugging trace hardware), or more usually a full packet processor / packet decoder pair [_OCSD_CREATE_FLG_FULL_DECODER_].


{% include image.html name="redo-box-2-core-dump.jpg" alt="Redo Box 2"%}


Having created all the required decoders, the next stage is to add the memory images to the memory access handler interface. Memory images can take a number of forms:

  * Simple memory dumps from the target system in form of contiguous binary files.


  * A memory buffer provided by the client application.


  * Program executable files or library .so files. The client must know the correct region within the file that contains the opcodes and the load address for the file.


  * A call-back function to access memory can be provided. This can be used to allow a client to provide custom memory image access, or if the decode is running on the target system then program memory can be accessed directly.


Each of these memory image scenarios has an associated memory accessor class, which contains the start address of the image in the target memory map and the method to read the image (which may be a file or a buffer).

Single or multiple memory accessors can be used, which are handed by the memory accessor mapper. This selects the correct memory accessor according to the address needed by the packet decoder. This relationship is shown in Figure 4.

API calls for to create the memory accessors and add them to the memory accessor mapper are provided on the Decode Tree.

{% include image.html name="figure-4-core-dump.jpg" alt="Figure 4"%}

Figure 4:  Memory Access Handler


Figure 4 shows a typical example – a trace session has been run tracing a program ‘my_prog’ which in turn loads ‘my_lib.so’. The client adds these as memory images using a file memory accessor object to the decode tree in order to correctly process the trace data. The example code below shows how this is achieved:

{% include image.html name="redo-box-3-core-dump.jpg" alt="Redo Box 3" %}

A memory  accessor  mapper is created in the decode tree. This needs to occur only once per decode tree. The file images are then added by populating the _ocsd_file_mem_region_t _structure. An array of these structures is passed to the memory accessor creation function which adds the accessor to the mapper.

The _OCSD_MEM_SPACE_ANY_ parameter tags this memory image as existing for any memory space. The memory image can be tagged as existing in secure memory space,  the non-secure memory space, or as in this case both.  When decoding the trace, the decoder will use the memory space according to the trace data. The example is created with the ‘any’ tag – indicating it is valid for any memory space that the trace covers. The memory mapper will handle selecting the correct memory image according to address range and memory space when a memory request arrives from the decoder. The narrowest memory space will take priority over a more general one – overlapping memory ranges are only allowed if the memory spaces are different.

Finally, the client must also provide the interface that will receive the generic  output packets from the decoders.

{% include image.html name="redo-box-4-core-dump.jpg" alt="Redo Box 4" %}

The decode tree is now ready to process trace data.

### **Configuration using the C API**

Configuration using the C API follows the same pattern as with the C++ API. Many of the C API functions serve as wrappers for the C++ API equivalents.

Create a decode tree – will return a handle for the tree or 0 on failure.


{% include image.html name="box-7-core-dump.jpg" alt="Box 7 " %}


Create decoders, using the handle supplied in the create tree operation:-

{% include image.html name="redo-box-5-core-dump.jpg" alt="Box 5 " %}


It should be noted here that the creation function returns the Trace ID that the decoder is associated with. This is extracted from the configuration data and may be used in other C API calls for operations related to this specific decoder.

Add the memory images for the trace decoding. One key difference here is that the mapper is created automatically on the first “add image” call on the decode tree.

{% include image.html name="redo-box-6-core-dump.jpg" alt="Box 6" %}


The output interface is provided by registering a call-back function.

{% include image.html name="redo-box-7-core-dump.jpg" alt="Box 7" %}

## **The Trace Data Path and API**


The decode tree provides a single input interface for the raw trace data (**_ITrcDataIn_)**, and a single output interface for the decoded trace in the form of generic trace packets (_**ITrcGenElemIn**_).

The input interface defines a series of data path operations that are used to control the processing of the trace data on the configured decoder. The interface function on _**ITrcDataIn**_ is:-


```c
ocsd_datapath_resp_t TraceDataIn( const ocsd_datapath_op_t op,

    const ocsd_trc_index_t  index,

    const uint32_t  dataBlockSize,

    const uint8_t * pDataBlock,

    uint32_t  *numBytesProcessed)

```


The _ocsd_datapath_op_t op _parameter defines the operation for the current call. The data path  response type returned (_ocsd_datapath_resp_t_) will inform the next operation required.  A single byte of data input to the decoder can result in multiple output packets, so a response mechanism provides the ability for downstream processing to tell the input operation to WAIT.

The index parameter defines the byte index within the captured trace data being processed that is the start of the data block passed into the decoder  - as defined by the _pDataBlock_ and _dataBlockSize_ parameters. This allows large trace data files to be read in smaller blocks, and also allows for the fact that all of the supplied block may not be processed if a WAIT response is seen. The _numBytesProcessed_ parameter returns the actual amount of the incoming block that is processed.

The equivalent C API function contains the same set of parameters, plus a decode tree handle:

```c
ocsd_datapath_resp_t ocsd_dt_process_data(const dcd_tree_handle_t handle,

    const ocsd_datapath_op_t op,

    const ocsd_trc_index_t index,

    const uint32_t dataBlockSize,

    const uint8_t *pDataBlock,

    uint32_t *numBytesProcessed)
```

The data path operations are shown in the table below:-

{% include image.html name="data-ops-table-1.jpg" alt="data ops table 1" %}

The data path response types are shown below:-

{% include image.html name="data-resp-table-2.jpg" alt="data resp table 2" %}


If a fatal error occurs then the client may look at the last logged error to determine the cause (the decode tree API provides a getLastError function).  Depending on the nature of the error the decoder may be able to be re-used by sending the _OCSD_OP_RESET_ operation through the input interface.

The operation parameter is propagated through to the packet decoder stage, but not to the output interface.

The interface function on the generic packet output (_**ITrcGenElemIn**_)  interface is:-


```c
ocsd_datapath_resp_t TraceElemIn(const ocsd_trc_index_t   index_sop,

    const uint8_ttrc_chan_id,

    const OcsdTraceElement & elem)
```

The _index_sop_ parameter is the byte index within the captured trace buffer for the trace protocol packet that generated the output packet. As a single protocol packet can generate a number of output packets this may be the same for a number of packets.

The _trc_chan_id_ is the Trace ID of the trace source that generated the packet, and elem is the output packet itself.

This interface returns a data path response type, allowing the client analyser to cause the processing to WAIT, if for example it is buffering packets and needs to process the current batch before continuing,  or signal an error using a _FATAL code._

The client is responsible for ensuring that the correct operations are used, including the WAIT / FLUSH requirements. The test programs give an example of correctly driving the decode tree.


## **The Library Test Programs and Test Data.**


The test programs are used for testing the library components and APIs, and are also source code examples of how to the use the library.


### **Test Data**


The library source ships with some test data in the _**\snapshots**_ directory. This data is trace captured from target systems and saved in a “snapshot” format – an ARM DS-5 open standard1 format that provides sufficient information to decode the captured trace. The snapshot consists of a set of _**.ini**_ files and binary data that provide:


  * Configuration of the ETM/PTM registers.
  * Core architecture and type.
  * Binary files with captured trace data from the trace buffers in the system.
  * Binary files with memory image dumps from the trace run.
  * The connections between cores / ETMs & PTMs and trace buffers.


### **trc_pkt_lister****: The C++ library test program.**


This program is used to test the core C++ library functionality by decoding the snapshot formatted test data.

The program will decode all the trace sources in a given buffer, for which it can find a valid decoder. The default operation is to print out the protocol packets from the packet processor stage only, but options can be provided to run the packets through the packet decoder stage and print out the generic packets, or do both operations. The data is printed to screen and/or a text file, and options are available to filter the output by Trace ID.

The program uses the _snapshot_parser_lib__ library_, which contains the code to interpret the snapshots, and build a decode tree using this information. The _CreateDcdTreeFromSnapShot__ class_ performs this task. The _CreateDcdTreeFromSnapShot::createDecodeTree_ function performs many of the configuration tasks described above.

The main body of the test program (_trc_pkt_lister.cpp_) processes the command line options then calls the snapshot parser to read the snapshot accordingly and then create a decode tree. Once the decode tree has been created, then the output interfaces (packet protocol elements or generic elements) are connected to functions to print out the packets generated by the program.

All the packet type classes in the decode library contain a function that will produce a string representation of the packet. This way it is easy to visualise packets and debug trace or trace decoders.

Once all elements are configure the test program will push the trace data through the library to generate the output files.

An example command line, running the test program on the Juno R1 snapshot, filtering for a single trace ID is as follows:-

_**trc_pkt_lister -ss_dir ../../../snapshots/juno_r1_1 -decode -id 0x10**_

The _–decode_ option forces a full decode, the –id option is a Trace ID filter. Full information about the available options can be found using the programs _–help_ option.

This will produce an output file – defaulting to _trc_pkt_lister.ppl_, a small portion of the output is shown below, both the packet processor ETMv4 specific packets  (highlighted in blue), and the generic trace decoder output packets (highlight in red).


```c
Idx:1643; ID:10; [0x00 0xf7 0x95 0xa2 0xa5 0xdb ]; I_NOT_SYNC : I Stream not synchronised
Idx:1650; ID:10; [0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x80 ]; I_ASYNC : Alignment Synchronisation.
Idx:1662; ID:10; [0x01 0x01 0x00 ]; I_TRACE_INFO : Trace Info.
Idx:1666; ID:10; [0x9d 0x00 0x35 0x09 0x00 0xc0 0xff 0xff 0xff ]; I_ADDR_L_64IS0 : Address, Long, 64 bit, IS0.; Addr=0xFFFFFFC000096A00;
Idx:1675; ID:10; [0x04 ]; I_TRACE_ON : Trace On.
Idx:1676; ID:10; [0x85 0x00 0x35 0x09 0x00 0xc0 0xff 0xff 0xff 0xf1 0x00 0x00 0x00 0x00 0x00 ]; I_ADDR_CTXT_L_64IS0 : Address & Context, Long, 64 bit, IS0.; Addr=0xFFFFFFC000096A00; Ctxt: AArch64,EL1, NS; CID=0x00000000; VMID=0x0000;
Idx:1692; ID:10; [0xf7 ]; I_ATOM_F1 : Atom format 1.; E

Idx:1675; ID:10; OCSD_GEN_TRC_ELEM_TRACE_ON( [begin or filter])
Idx:1676; ID:10; OCSD_GEN_TRC_ELEM_PE_CONTEXT((ISA=Unk) EL1N; 64-bit; VMID=0x0; CTXTID=0x0; )

Idx:1692; ID:10; OCSD_GEN_TRC_ELEM_INSTR_RANGE(exec range=0xffffffc000096a00:[0xffffffc000096a10] (ISA=A64) E ISB )

Idx:1693; ID:10; [0x9d 0x30 0x25 0x59 0x00 0xc0 0xff 0xff 0xff ]; I_ADDR_L_64IS0 : Address, Long, 64 bit, IS0.; Addr=0xFFFFFFC000594AC0;
Idx:1703; ID:10; [0xf7 ]; I_ATOM_F1 : Atom format 1.; E

Idx:1703; ID:10; OCSD_GEN_TRC_ELEM_ADDR_NACC( 0xffffffc000594ac0 )

```

This part of the output shows the point where the decoder finds a synchronisation point in the trace stream. We can see the ETMv4 ASYNC, TRACE_INFO, address and context packets which set the core state and start address for the trace session.  This will cause the output of the OCSD_GEN_TRACE_ELEM_ON() and OCSD_GEN_TRC_ELEM_PE_CONTEXT() packets.

The next packet (ATOM_F1) indicates a waypoint in the waypoint trace (_for information on waypoint trace see the ETMv4 documentation_). The decoder will then follow the memory image from the start address until it finds the first instruction that is a waypoint. This will generate the OCSD_GEN_TRC_ELEM_INSTR_RANGE() packet indicating execution of all instructions from the start address (0xffffffc000096a00), up to but not including the range end address (0xffffffc000096a10).

This next output portion shows that a single byte packet can result in multiple generic output packets and many lines of instruction execution decoded:

```c
Idx:1737; ID:10; [0xfd ]; I_ATOM_F3 : Atom format 3.; ENE

Idx:1737; ID:10; OCSD_GEN_TRC_ELEM_INSTR_RANGE(exec range=0xffffffc000083280:[0xffffffc000083284] (ISA=A64) E BR  )
Idx:1737; ID:10; OCSD_GEN_TRC_ELEM_INSTR_RANGE(exec range=0xffffffc000083d40:[0xffffffc000083d9c] (ISA=A64) N BR  )
Idx:1737; ID:10; OCSD_GEN_TRC_ELEM_INSTR_RANGE(exec range=0xffffffc000083d9c:[0xffffffc000083dac] (ISA=A64) E iBR b+link )

```

The single ATOM packet represents 3 waypoint instructions. This results in 3 traced ranges;  with 1, 23 and 4 instructions executed.


### **c_api_pkt_print_test** **: The C API test program**


This test program checks the correct function and implementation of the C API wrapper library and interfaces.

It is more limited in functionality that the C++ test program – it will decode only a single trace ID source, and has the paths to the snapshot directories hard coded in, selecting an appropriate test snapshot according to the protocol decoder under test.

By default the program will decode ETMv4, trace ID 0x10 – selecting the Juno r1 snapshot.

Alternate protocols can be tested using command line options – with additional options used to test the different memory accessor API calls.

The output is a text file (_c_api_test.log_), similar to that created by the C++ test program.


## **Conclusions**


This article has described the operation of the OpenCSD library and some of the main API functions that may be used for configuration of the library and the decoding of CoreSight trace data.

The “decode tree” is the key abstraction provided to configure and use the library in order to decode data from a trace sink.

The library source code has inline documentation that may be extracted using the ‘doxygen’ tool for more detailed information on the API functions covered and the additional APIs available.

Information on the CoreSight components and trace protocols mentioned here is available from the ARM website. A document describing the DS-5 “snapshot” format is due to be published shortly.

This article has covered configuring the existing trace decoders built into the library for the currently supported set of ARM trace protocols. A future article in this series on OpenCSD will cover adding additional decoders into the library to cope with new or custom trace protocols or for other specialised decode. These custom decoders can either be compiled in as part of the C++ library, using the existing base infrastructure, or as an external binary implementation using an external registration API in the C API interface.


* * *

  1.  To be published soon
