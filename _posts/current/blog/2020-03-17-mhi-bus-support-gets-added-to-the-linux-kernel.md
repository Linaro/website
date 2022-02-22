---
layout: post
title: MHI bus support gets added to the Linux kernel
description: This article will briefly talk about the internals of MHI and its
  implementation in the Linux kernel.
date: 2020-03-17 08:37:59
image: /assets/images/content/code.jpg
tags:
  - Linux Kernel
  - Qualcomm
category: blog
author: manivannan.sadhasivam
---
Greg Kroah Hartman once said, “Buses are hard and complex. It is hard to write a bus. But it turns out that there are one or two new buses every kernel release”.

Recently, [a patch series](https://lkml.org/lkml/2020/1/23/249) was posted to LKML for adding MHI (Modem Host Interface) bus support to the Linux kernel. This article will briefly talk about the internals of MHI and its implementation in the Linux kernel.

MHI is a communication protocol used by the host processors to control and communicate with modems over high speed bus interface like PCI-E or shared memory. The MHI protocol has been designed and developed by Qualcomm Innovation Center, Inc., for use in their modems like SDX20/24. The protocol aims to improve the communication between host processors and external modems. Modem chipsets have become quite complex as they perform several functions, such as downloading the firmware from host processor, controlling the wireless transceivers, receiving and processing the commands from host, handling multiple networking protocols, etc... In order to efficiently control and interact with the modem chipsets, MHI provides a comprehensive solution as a whole.

Qualcomm has [patented](https://patents.google.com/patent/US9594718B2/en) this protocol and deployed it in a wide range of devices running Linux based OS. Even though the MHI protocol is closely tied with PCI-E, it is possible to use other physical interfaces as well.

In 2018, Qualcomm made [a first attempt](https://lkml.org/lkml/2018/4/26/1159) at upstreaming this protocol to the Linux kernel. That effort didn't go far and it was discontinued after a couple of iterations. This work has now been revived by Linaro, addressing the concerns raised by the upstream maintainers for the initial submission by Qualcomm.

### MHI Internals

The MHI specification is proprietary and is not made available to the public. But, a reasonable effort has been made to document the protocol in the [recently submitted patch series](https://lkml.org/lkml/2020/1/23/250). The below content can be read in conjunction with the kernel documentation for MHI.

### Channels

The core part of MHI are logical channels, which are used to transfer data packets such as IP packets, modem control messages and diagnostic messages between host and modem via high speed physical interfaces such as PCI-E or shared memory. These logical channels act like unidirectional data pipes between host and modem device. In a typical usecase, there will be an MHI implementation running on both ends and they exchange information over these logical channels. Since these channels are unidirectional, 2 channels are required for bi-directional communication between host and modem device. There can be a maximum of 256 logical channels in a system.

The channel configuration is static, which means the purpose of channel is fixed and will not be changed during runtime. The below picture illustrates the exchange of messages over IPCR channel with PCI-E as the physical interface.

![](/assets/images/content/ipcr-channel.png "ipcr-channel")

```c
struct mhi_chan {
    const char *name;
    struct mhi_ring buf_ring;
    struct mhi_ring tre_ring;
    u32 chan;
    u32 er_index;
    u32 intmod;
    enum mhi_ch_type type;
    ...
    struct mhi_device* mhi_dev;
    ...
}
```

The above structure represents an MHI channel in the kernel. Note the `*mhi_dev` pointer in the structure. It will point to the MHI device created for this channel when MHI is in AMSS (Advanced Mobile Subscriber Station) or SBL (Secondary Bootloader) states. Most of the fields for this structure will some from `struct mhi_channel_config` available in the controller driver.

### Events

MHI events are the interrupts coming from the client device (e.g. the modem). The client device generates events for MHI state transitions, error conditions, completion messages to the host. The MHI events are generated using the Event Ring (ER), which essentially is a data structure available in the host memory, mapped for the device. The events’ rings are organized as circular queues of Event Descriptors (ED). Each event descriptor defines one event that is communicated from the device to the host through an actual physical interface such as PCI-E. Each event ring has an associated interrupt (MSI in case of PCI-E). The number of interrupts may be limited in the host processor, therefore multiple event rings may share available interrupts to accommodate more events.

```c
struct mhi_event {
    struct mhi_controller *mhi_cntrl;
    struct mhi_chan* mhi_chan; /*dedicated to channel */
    u32 er_index;
    u32 intmod;
    u32 irq;
    int chan; /* this event ring is dedicated to a channel (optional) */
    u32 priority;
    ...
};
```

The above structure represents an MHI event in the kernel. Note that there is an IRQ field for each event, which can be unique or shared. This IRQ will be used by the modem for sharing events to the host in the form of event rings. When an event gets added to the event ring, the IRQ associated with the event ring will be asserted in the host. Most of the fields for this structure will come from `struct mhi_event_config` available in the controller driver.

### MHI Power Management

The MHI power management (PM) is handled by the MHI stack. The MHI power management is about controlling the MHI states of the host and device. Following are the available MHI PM states:

#### MHI_STATE_RESET

Reset is the default MHI state after power-up. MHI can also enter reset state later on, when either the host or device request reset such as after encountering an error. During this state, the device software will initialize and set relevant MMIO registers internally.

#### MHI_STATE_READY

Once the device comes out of reset and is ready, it will set READY field in the MMIO register indicating that it is ready to accept MHI operations. The MHI stack running on the host will detect this change. In response, the host will prepare data structures and initialize the MHI MMIO register space.

#### MHI_STATE_M0

MHI is running and operational on both host and the device. Now the host can start channels by issuing channel start command. In this state, the device can switch its EE (Execution Environment) to SBL, AMSS states and start generating events to the host.

#### MHI_STATE_M1

MHI operation is suspended by the device. This state is entered when the device detects inactivity at the physical interface for a preset time and also the DEVICE_WAKE signal is deasserted by the host.

#### MHI_STATE_M2

MHI is in low power state. MHI operation is suspended and the device may enter lower power mode.

#### MHI_STATE_M3

MHI operation is stopped by the host. This state is entered when the host suspends MHI operation.

### MHI Firmware Download

MHI supports downloading the device firmware over BHI (Boot Host Interface) protocol. The MHI stack assumes that there can only 2 types of firmware downloaded to the device, AMSS, and SBL. The firmware name should be provided by the controller driver as below:

```c
mhi_ctrl->fw_image = "amss.bin";
```

It should be noted that there can only be one firmware supplied at a time. If the device requires both AMSS and SBL images to be downloaded, then both firmware needs to be clubbed into a single firmware file, or another protocol is required to supplement the loading of additional firmware files. For the first case, additional properties shall be provided by the controller driver as below:

```c
mhi_ctrl->sbl_size = SZ_512K;
mhi_ctrl->fbc_download = true;
```

This specifies that the MHI stack needs to do full image download with the size of SBL image specified using `sbl_size`.

### MHI Bus Topology

MHI bus implementation in the Linux kernel has 3 major components:

1. MHI Device
2. MHI Controller
3. MHI Driver

#### MHI Device

MHI device is the logical device which is created for MHI controllers and channels. For the channels, there can either be a single MHI device for each channel (Uni-directional) or per channel pair (Bi-directional). This configuration will be determined by the MHI controller drivers. The MHI devices for the controllers are created during controller registration and the devices for channels are created when MHI is in AMSS state or SBL state.

```c
struct mhi_device {
    const struct mhi_device_id *id;
    const char* chan_name;
    struct mhi_controller *mhi_cntrl;
    struct mhi_chan* ul_chan;
    struct mhi_chan *dl_chan;
    struct device dev;
    enum mhi_device_type dev_type;
    int ul_chan_id;
    int dl_chan_id;
    u32 dev_wake;
};
```

The above structure represents an MHI device in the kernel. There is a `struct device` present for each MHI device and all available devices will be enumerated in sysfs under `/sys/bus/mhi/devices/`.

#### MHI Controller

The MHI controller is the MHI bus master in charge of managing the interactions with the client devices, such as modems. Each MHI client device will have a controller driver which will declare the MHI channels, events and IRQs, and will manage the power management operations of the client device.

```c
struct mhi_controller {
    struct device *cntrl_dev;
    struct mhi_device *mhi_dev;
    void __iomem *regs;
    void __iomem *bhi;
    void __iomem *bhie;
    void __iomem *wake_db;

    dma_addr_t iova_start;
    dma_addr_t iova_stop;
    const char *fw_image;
    const char *edl_image;
    size_t rddm_size;
    size_t sbl_size;
    ...
};
```

The above structure represents an MHI controller in the kernel. Note the `cntrl_dev` pointer in the structure, which is used to pass the underlying transport's (e.g. PCI-E) device pointer to the MHI stack. Since the MHI stack itself is not involved in the physical data transmission, it relies on the existing physical interfaces to do DMA mapping, runtime PM handling of the device etc. Also, each controller will have a `mhi_dev` associated with it, which will be the child device of physical bus device as per the device model.

Note that for the `struct device` created for controllers, there are no drivers to bind to. For this reason, the callbacks which are required to be present in the driver structure will be present in the `struct mhi_controller` itself.

#### MHI Driver

MHI drivers are client drivers which bind to MHI devices. The client drivers are used to send or receive upper protocol packets such as IP packets, modem control messages over the MHI bus. Each client driver will declare the MHI channels it binds to. As MHI devices are registered by the MHI core, MHI drivers are loaded, matched and probed in line with other busses.

For instance, below is the channel declaration of the [QRTR MHI client driver](https://lkml.org/lkml/2020/1/31/316) included in the patch submission:

```c
static const struct mhi_device_id qcom_mhi_qrtr_id_table[] = {
        { .chan = "IPCR" },
        {}
};
MODULE_DEVICE_TABLE(mhi, qcom_mhi_qrtr_id_table);
```

So the client driver binds to IPCR (IPC Router) channel. Note that, there can either be one MHI device per channel, or one for the MHI channel pair. This entirely depends on the controller driver configuration.

```c
struct mhi_driver {
    const struct mhi_device_id *id_table;
    int (*probe)(struct mhi_device *mhi_dev,
             const struct mhi_device_id *id);
    void (*remove)(struct mhi_device *mhi_dev);
    void (*ul_xfer_cb)(struct mhi_device *mhi_dev,
               struct mhi_result *result);
    void (*dl_xfer_cb)(struct mhi_device *mhi_dev,
               struct mhi_result *result);
    void (*status_cb)(struct mhi_device *mhi_dev, enum mhi_callback mhi_cb);
    struct device_driver driver;
};
```

The above structure represents an MHI driver in the kernel. There is a `struct device_driver` for each MHI driver so that it can bind to the corresponding `struct device`. Also, there are few callbacks available which are required by the MHI stack. So a client driver should pass relevant functions for these. The purposes of these callbacks are explained below:

| Name         | Description                                                                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `probe`      | MHI client driver's probe function called during `mhi_driver_register`                                                                                            |
| `remove`     | MHI client driver's remove function called during `mhi_driver_unregister`                                                                                         |
| `ul_xfer_cb` | Callback used by the MHI stack to notify the client driver of the uplink transfer status. This callback will be executed for both transfer success and failure.   |
| `dl_xfer_cb` | Callback used by the MHI stack to notify the client driver of the downlink transfer status. This callback will be executed for both transfer success and failure. |
| `status_cb`  | Callback used by the MHI stack to notify client driver of events such as pending data, state transition etc...                                                    |

The registered client drivers will be available in sysfs under: `/sys/bus/mhi/drivers/`

### Conclusion

I hope that this article provided a good overview of MHI protocol and its implementation in the Linux kernel. Reviews are actively ongoing for this patchset and things are looking good for merging this in one of the upcoming releases.

For more information on Linaro and the work we do, do not hesitate to [get intouch](https://www.linaro.org/contact/).