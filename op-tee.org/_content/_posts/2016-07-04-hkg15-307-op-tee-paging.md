---
layout: post
title:  "HKG15-307: OP-TEE paging"
date:   2016-07-04 12:00:00
categories: Blog
image: /images/posts/hkg15-307-op-tee-paging-image.jpeg


---
OP-TEE has a pager which can use DDR as backing store to allow usage of more virtual memory than available system RAM. This session will explain what the pager is and how it’s implemented and which limitations it has. We will cover how the binary is partitioned to keep code needed by the pager separated from the rest of the code which is paged. With the pager it’s possible postpone allocation of stacks with the result of getting better performance when less stack is used while still being able to function with degraded performance when more stack is used.

{% include media.html media_url="https://www.youtube.com/embed/hCYjlBPxEbY" %}

--------

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/vqGtPdP9HDCR1U" %}

[HKG15-307: OP-TEE paging](https://www.slideshare.net/linaroorg/hkg15307-optee-paging) from [Linaro](http://www.slideshare.net/linaroorg)
