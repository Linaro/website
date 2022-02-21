---
title: "IPA: Enabling Data Connectivity on the Snapdragon Compute Platform
  [Linaro Connect Tech Webinar]"
event: IPA-webinar
description: In this Linaro Connect Tech Webinar, Alex Elder will provide a
  general hardware overview and speak about the upstream IPA Linux kernel
  driver. Register now!
location: "Online "
date: 2022-01-21 04:35:34 -05:00
event_date: 2022-03-03 04:35:34 -05:00
event_end_date: 2022-03-04 04:36:51 -05:00
image: /assets/images/content/techwebinars_events_page-1-.jpg
event_type: webinar
---
# IPA: Enabling Data Connectivity on the Snapdragon Compute Platform - Linaro Connect Tech Webinar

**Speaker:**

* Alex Elder, Senior Engineer at Linaro

**Format:** Zoom webinar, Youtube livestream\
**Cost:** Free\
**Availability:** Open to public\
**When:** March 3 at 5pm UTC (9am PST / 12pm EST / 5pm UTC / and 6pm CET)\
**Language:** English \
**Register:** below or via this [link](https://www.cognitoforms.com/Linaro1/LinaroTechWebinarIPAEnablingDataConnectivityOnTheSnapdragonComputePlatform)

If you cannot attend on March 3 at 5pm GMT, please complete the registration to receive an email with the session recording. 

**Webinar Description:** 

The Qualcomm Snapdragon Compute Platforms are a family of SoCs\
designed for use in Chromebook and Windows laptops.  Each includes\
an embedded modem that provides Internet access using 4G and 5G\
cellular networks.  Communication between the main applications\
processor (AP) and modem is provided by the IP Accelerator (IPA).\
\
5G modems can supply data to the AP at multi-gigabit per second\
rates, and receiving such data can place a high processing load on\
the AP.  The IPA efficiently moves packets between the AP and modem,\
and is able to process them as they pass through.  This processing\
(including checksum offload and aggregation) reduces the AP cost of\
handling modem data, and reduces power consumption in the process.\
\
For Chrome OS, an upstream Linux driver works together with the\
modem to manage the IPA hardware.  This joint management scheme\
permits the IPA hardware to be suspended when not in use, leading\
to further power savings.  To achieve this the Linux IPA driver\
operates with some awareness of modem state, and is involved\
whenever the modem starts, stops, or crashes.\
\
The IPA hardware places some unusual requirements on its Linux\
driver.  Initialization must be performed in stages, starting with\
fairly primitive configuration which then permits "higher level"\
setup to be done.  When the modem boots, the Linux driver works with\
the modem to coordinate shared access to IPA.  Once operational,\
the IPA acts much like any other network device, though it sometimes\
must respond to modem state changes.\
\
This talk will discuss the Qualcomm IPA, which is the conduit that\
carries cellular data packets between the AP and modem on Qualcomm\
Snapdragon Compute Platforms.  After providing a general hardware\
overview, the talk will turn to the upstream IPA Linux kernel\
driver.  This will include the driver initialization sequence,\
including the synchronization steps that allow the AP and modem to\
jointly manage IPA state.  The talk will conclude with a discussion\
of development underway to enable more advanced capabilities that\
IPA can provide.

**Register by completing the form below:**

<div class="cognito">
<script src="https://www.cognitoforms.com/s/KvRQmIn2dku6k6gGP711jw"></script>
<script>Cognito.load("forms", { id: "25" });</script>
</div>