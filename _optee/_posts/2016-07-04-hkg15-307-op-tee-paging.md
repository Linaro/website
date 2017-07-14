---
layout: post
title:  "HKG15-307: OP-TEE paging"
date:   2016-07-04 12:00:00
categories: Blog
image: /images/posts/hkg15-307-op-tee-paging-image.jpeg


---
OP-TEE has a pager which can use DDR as backing store to allow usage of more virtual memory than available system RAM. This session will explain what the pager is and how it’s implemented and which limitations it has. We will cover how the binary is partitioned to keep code needed by the pager separated from the rest of the code which is paged. With the pager it’s possible postpone allocation of stacks with the result of getting better performance when less stack is used while still being able to function with degraded performance when more stack is used.

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="lazyload embed-responsive-item" width="560" height="315"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://www.youtube.com/embed/hCYjlBPxEbY" frameborder="0"
    allowfullscreen></iframe>
</div>

--------

<div class="embed-responsive embed-responsive-16by9">
    <iframe src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="//www.slideshare.net/slideshow/embed_code/key/vqGtPdP9HDCR1U" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/linaroorg/hkg15307-optee-paging" title="HKG15-307: OP-TEE paging" target="_blank">HKG15-307: OP-TEE paging</a> </strong> from <strong><a target="_blank" href="https://www.slideshare.net/linaroorg">Linaro</a></strong> </div>
</div>

[HKG15-307: OP-TEE paging](https://www.slideshare.net/linaroorg/hkg15307-optee-paging) from [Linaro](http://www.slideshare.net/linaroorg)
