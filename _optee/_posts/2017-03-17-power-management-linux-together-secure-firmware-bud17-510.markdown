---
layout: post
title:  "Power management in Linux together with secure firmware – BUD17-510"
date:   2017-03-17 12:00:00
categories: Blog

image: /images/posts/power-management-linux-together-secure-firmware-bud17-510-image.jpeg

---
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="lazyload embed-responsive-item" width="560" height="315"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.youtube.com/embed/MNvTBGNQRDY" frameborder="0"
    allowfullscreen></iframe>
</div>

On a device it’s not uncommon to share power domains between secure and non-secure side, for example between a TEE and Linux kernel. With that comes some challenges that needs to be taken care of and that is the theme for this presentation. We’ve identified a couple of challenges when it comes to power management and security. One case is when sharing power resources (clock, power domains, …) between secure and non-secure devices. Another is to make a proper shutdown and boot-up sequence (CPU on/off etc) and finally there has been some concerns regarding the latency when communicating with PSCI. In this session we would like to highlight those and discuss what the short and long term plans are.

<div class="embed-responsive embed-responsive-16by9">

<iframe src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="//www.slideshare.net/slideshow/embed_code/key/xIRI2KnLUplfd9" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/linaroorg/bud17510-power-management-in-linux-together-with-secure-firmware" title="BUD17-510: Power management in Linux together with secure firmware" target="_blank">BUD17-510: Power management in Linux together with secure firmware</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/linaroorg">Linaro</a></strong> </div>
</div>
**Speakers:** Vincent Guittot, Joakim Bech  
**Track:** Security  
**Session ID:** BUD17-510  
