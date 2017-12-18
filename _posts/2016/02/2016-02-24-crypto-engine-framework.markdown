---
author: baolin.wang
categories:
- blog
date: 2016-02-24 00:03:51
description: "Recently I got some patches introducing the crypto engine framework
  merged into the crypto layer for v4.6, which are applied in Herbert Xu\xE2\x80\x99s
  git..."
keywords: Crypto Engine
layout: post
link: /blog/core-dump/crypto-engine-framework/
slug: crypto-engine-framework
tags:
- Core Dump
- crypto engine
- kernel
- Linux
- Linux on ARM
title: Crypto Engine Framework
wordpress_id: 9995
---

{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" url="https://wiki.linaro.org/CoreDevelopment" %}


**Introduction** Recently I got some patches introducing the crypto engine framework merged into the crypto layer for v4.6, which are applied in Herbert Xu’s git:  [http://git.kernel.org/cgit/linux/kernel/git/herbert/cryptodev-2.6.git](http://git.kernel.org/cgit/linux/kernel/git/herbert/cryptodev-2.6.git)

**Background** In crypto layer, the block cipher hardware engine driver fetches the request from dm-crypt into its queue to wait for its thread or workqueue to handle, and finalizes the request when finishing the encryption/decryption.

However, the old method needed each hardware engine driver to implement and maintain their own queue and thread for processing requests.  Previously the API provided helpers for only the queue itself (in crypto_enqueue_request() and crypto_dequeue_request()) but they don't help with the mechanics of driving the hardware (things like running the request immediately, DMA map it or providing a thread to process the queue in), even though a lot of that code really shouldn't vary that much from device to device.

**Introduce crypto engine framework** Therefore we provide a crypto engine framework that implements the queue and thread for pushing requests to the hardware, as the hardware becomes free so that drivers could use it. At the same time it can avoid some reduplicated code in hardware engine driver.

**How to use it** The section below shows how to integrate with the new crypto engine framework to make the omap aes driver be under utilized.

**(1) Remove the request queue and the thread/workqueue/tasklet which is used to queue requests in your driver, meanwhile add the 'crypto_engine' structure in your device descriptor structure.**

```
@@ -152,13 +153,10 @@ struct omap_aes_dev {
unsigned long           flags;
int                     err;
-       spinlock_t              lock;
-       struct crypto_queue     queue;
-
struct tasklet_struct   done_task;
-       struct tasklet_struct   queue_task;
struct ablkcipher_request       \*req;
+       struct crypto_engine            \*engine;
@@ -1177,9 +1160,6 @@ static int omap_aes_probe(struct platform_device \*pdev)
-       spin_lock_init(&dd->lock);
-       crypto_init_queue(&dd->queue, OMAP_AES_QUEUE_LENGTH);
@@ -1211,7 +1191,6 @@ static int omap_aes_probe(struct platform_device \*pdev)
tasklet_init(&dd->done_task, omap_aes_done_task, (unsigned long)dd);
-       tasklet_init(&dd->queue_task, omap_aes_queue_task, (unsigned long)dd);
```

**(2) Add some code to initialize the crypto engine.**
You can initialize the crypto engine with crypto_engine_alloc_init() function and remove it with crypto_engine_exit() function.

After the initialization for crypto engine, now you can start the crypto engine by calling crypto_engine_start(). If there are some errors or other problem during queuing requests, you can stop the engine by crypto_engine_stop() function.

Usually drivers need to provide a ‘prepare_crypt_hardware’ function to prepare the hardware when the hardware becomes active and an‘unprepare_crypt_hardware’ function to disable the hardware when there are no requests to do.

Drivers can also set ‘prepare_request’ member if they need do some preparation before handling the current request and undo it by setting ‘prepare_request’ when finalizing one request.

Drivers must also provide a function to handle each request by setting ‘crypt_one_request’.

```
@@ -1252,7 +1231,20 @@ static int omap_aes_probe(struct platform_device *pdev)
+       /* Initialize crypto engine */
+       dd->engine = crypto_engine_alloc_init(dev, 1);
+       if (!dd->engine)
+               goto err_algs;
+
+       dd->engine->prepare_request = omap_aes_prepare_req;
+       dd->engine->crypt_one_request = omap_aes_crypt_req;
+       err = crypto_engine_start(dd->engine);
+       if (err)
+               goto err_engine;
+
return 0;
+err_engine:
+       crypto_engine_exit(dd->engine);
@@ -1288,8 +1279,8 @@ static int omap_aes_remove(struct platform_device *pdev)
+       crypto_engine_exit(dd->engine);
```

**(3) Implement callbacks to prepare requests and encrypt one request.**

```
+static int omap_aes_prepare_req(struct crypto_engine *engine,
+                               struct ablkcipher_request *req)
+{
+       struct omap_aes_ctx *ctx = crypto_ablkcipher_ctx(
+                       crypto_ablkcipher_reqtfm(req));
+       struct omap_aes_dev *dd = omap_aes_find_dev(ctx);
+       struct omap_aes_reqctx *rctx;
+       int len;
-       req = ablkcipher_request_cast(async_req);
+       if (!dd)
+               return -ENODEV;
dd->req = req;
+       return omap_aes_write_ctrl(dd);
+}
+static int omap_aes_crypt_req(struct crypto_engine *engine,
+                             struct ablkcipher_request *req)
+{
+       struct omap_aes_ctx *ctx = crypto_ablkcipher_ctx(
+                       crypto_ablkcipher_reqtfm(req));
+       struct omap_aes_dev *dd = omap_aes_find_dev(ctx);
+
+       if (!dd)
+               return -ENODEV;
+
+       return omap_aes_crypt_dma_start(dd);
}
```

**(4) Modify the handle queue method replacing with crypto_transfer_request_to_engine() function.**
You can issue crypto_transfer_request_to_engine() function to add a request into the engine queue and wait for pushing the request by engine.

```
static int omap_aes_handle_queue(struct omap_aes_dev *dd,
struct ablkcipher_request *req)
{
-       struct crypto_async_request *async_req, *backlog;
-       struct omap_aes_ctx *ctx;
-       struct omap_aes_reqctx *rctx;
-       unsigned long flags;
-       int err, ret = 0, len;
-
-       spin_lock_irqsave(&dd->lock, flags);
if (req)
-               ret = ablkcipher_enqueue_request(&dd->queue, req);
-       if (dd->flags & FLAGS_BUSY) {
-               spin_unlock_irqrestore(&dd->lock, flags);
-               return ret;
-       }
-       backlog = crypto_get_backlog(&dd->queue);
-       async_req = crypto_dequeue_request(&dd->queue);
-       if (async_req)
-               dd->flags |= FLAGS_BUSY;
-       spin_unlock_irqrestore(&dd->lock, flags);
+               return crypto_transfer_request_to_engine(dd->engine, req);
-       if (!async_req)
-               return ret;
+       return 0;
+}
```

**(5) Modify the method to finalize one request replacing with crypto_finalize_request() function.**
When one request is finished encrypting or decrypting, you can finalize the request by crypto_finalize_request() function.

```
@@ -532,9 +530,7 @@ static void omap_aes_finish_req(struct omap_aes_dev *dd, int err)
-       req->base.complete(&req->base, err);
+       crypto_finalize_request(dd->engine, req, err);
}
```

Once all above modifications are completed, the crypto engine framework can work well on your driver.

**In the future**

**Current problem**
Users will use dm-crypt, which is a transparent disk encryption, to encrypt and decrypt block device. Refer to the link to see what is dm-crypt ([https://en.wikipedia.org/wiki/Dm-crypt](https://en.wikipedia.org/wiki/Dm-crypt)).

Now dm-crypt will send encryption or decryption requests to the crypto layer one block at a time, making each request 512 bytes long, which is a much smaller size for hardware engine, which means the hardware engine cannot deliver its best performance.

**Introduce bulk mode**
Some cipher hardware engines prefer to handle bulk block rather than one sector (512 bytes) created by dm-crypt, cause these cipher engines can handle the intermediate values (IV) by themselves in one bulk block. This means we can increase the size of the request rather than always 512 bytes and thus increase the hardware engine processing speed, which is the bulk mode for crypto engine framework what we want to introduce in the future.

There are more works that need to be investigated in the future, especially in below 3 problems:
1. Finding the best method to check the requests are compatible for merging requests.
2. Thinking of the request numbers on how much we were able to combine together for bulk mode.
3. How much benefit we can get from bulk mode.