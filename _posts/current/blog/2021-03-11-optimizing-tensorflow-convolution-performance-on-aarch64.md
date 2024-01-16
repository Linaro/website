---
layout: post
title: Optimizing TensorFlow Convolution Performance on Aarch64
description: In this blog, Linaro engineer Everton Constantino talks about how
  Linaro improved TensorFlow convolution performance on Aarch64.
date: 2021-03-11 10:19:36
image: /assets/images/content/machine_intelligence_cover.jpg
tags:
  - Windows On Arm
  - Artificial Intelligence
  - Machine Learning
  - AArch64
related_projects:
  - AI
category: blog
author: everton.constantino
---
# Introduction

Google’s [Tensorflow](https://github.com/tensorflow/tensorflow) is the industry standard for AI/ML and has been around since 2015. From cellphones to industrial applications, it has a ubiquitous presence wherever machine learning, especially deep neural networks, is required. As Linaro is always investing in the growth of Arm’s ecosystem, a great amount of time is being spent producing a better optimized and higher performance version of Tensorflow. Here we discuss how this was achieved improving general matrix multiplication times on Eigen. Using our experimental branch Tensorflow is able to achieve up to 7% better performance on one of [MLPerf](https://mlcommons.org/en/) benchmarks and up to 15% on basic matrix multiplication benchmarks.

Tensorflow’s name comes from the mathematical object called tensors. They are algebraic objects that define multi-linear transformations between vector spaces. As fancy as that sounds, vectors and matrices can be seen as rank 1 and 2 tensors respectively. Images are an example of tensors, an image of width W, height H and 3-channels of colour (R, G, B), is a rank-3 tensor (WxHx3). Usually, neural networks with images as inputs are of a particular type called CNN, convolutional neural networks.

## Convolution in Tensorflow

In Tensorflow the convolution is done via a sequence of reshape and contract operations which boils down to usual matrix multiplication. In order for this transformation to give appropriate results, a well known conversion step known as im2col is applied which projects higher ranking tensors into matrices. The classical im2col algorithm requires a considerable amount of memory usage because of it’s redundant nature, the diagram below outlines the general procedure. 

{% include image.html path="/assets/images/content/im2col-algorithym.png" alt="im2col algorithym" %}

Tensorflow uses a hybrid alternative with virtual tensors. Once the projection is done, general matrix multiplication can be used to calculate the convolution. This is usually a very fast alternative to directly calculating the convolution because gemm libraries are highly optimized.

This approach moves the core of the computation outside of Tensorflow directly into [Eigen](https://www.google.com/url?q=https://eigen.tuxfamily.org/index.php?title%3DMain_Page&sa=D&source=editors&ust=1615459359355000&usg=AOvVaw3DidHfVjbmXgD0liFjP1tf), the linear algebra library used to perform the matrix multiplication. 

## Eigen’s matrix multiplication

Eigen is an easy to use open source C++ highly-templated linear algebra library. Implemented closely, the current matrix multiplication algorithm  follows [Goto’s seminal paper](https://www.cs.utexas.edu/users/flame/pubs/GotoTOMS_final.pdf) (Goto). The idea is to break both matrices to be multiplied into a set of blocks and panels to optimize cache performance. The paper outlines just how to perform the blocking procedure. However, the packing of blocks to the gemm kernel is not completely described since that is highly architecture dependent. Here is where our work started.The current implementation was optimized some years ago, taking Intel’s Haswell CPU into account and failing to meet peak performance on current Arm processors.

Several papers already discuss how the memory layout of data can affect load/store times. Although it is widely believed that random access memory latency time is independent of the location of data, this is a misconception. As on hard drives, [RAM also benefits from sequential access](https://developers.redhat.com/blog/2019/04/02/how-data-layout-affects-memory-performance/), and not only that, but usual cache policies are better behaved if sequential access is used. 

The first step of the process was to enhance sequential access on the kernel. For that it was required to redesign Eigen’s packing. We had another reason in mind though, as Linaro looks to the future, we know that Arm is moving towards a new set of matrix multiplication instructions. We therefore needed to give room to other operations inside the kernel beyond the inner product and for that, the packing layout needed to change.

Once in control of the packing, the next step was to look into NEON’s SIMD instructions. For that we rewrote the micro-kernels, enhancing maintainability and flexibility. This gave us the opportunity to explore the pipeline better, now having an approach that resembles [OpenBLAS](https://github.com/xianyi/OpenBLAS) with 4x4, 8x4, 12x4 and 16x4 micro-kernels. 

Careful use of perf along with a deep knowledge of Arm’s CPU architecture resulted in a version better suited to both cache and pipeline exploitation. Of course, our new approach opens doors to further optimization, as mentioned earlier our branch is only experimental in nature at the time.

## Results

The machine used to test was a Cavium ThunderX1 with 16Gb of RAM. The matrix multiplication performance measurements were done via google benchmark on both float32 square and rectangular matrices ranging from 8x8x8 to 4096x4096x4096. Just matrix multiplication, depending on the shape of both matrices, saw an improvement ranging from 5% to 15%. Tensorflow numbers were extracted from a subset of the MLPerf benchmarks and saw up to 7% improvement. 

The experiment consisted of a classification task taken from resnet50. We executed each test 1024 times for Tensorflow taken from master at 02/02/2021 and compiled with the current Eigen archive and then the same source code with our updated GEMM kernel. Average execution time per run for master was 0.37 seconds with a standard deviation of 0.005 against our version with 0.34 seconds and standard deviation of 0.005 as well. The total execution time for master was 377.38 seconds and on our version 353.96 seconds. Basic statistical tests reject the null hypothesis.

{% include image.html path="/assets/images/content/mlperf-convolution-benchmark.png" alt="MLPerf Convolution benchmark" %}

### Conclusion and future work

Exploring a CPU’s top performance is never an easy task, requiring lots of knowledge and research. Matrix multiplication is one of the only examples of an algorithm that can really stress the CPU reaching more than 90% of usage, so knowing every detail from pipelining to the memory model and beyond is essential.Linaro showed it has done just that. 

This work also opens the door to explore new instructions, like matrix multiplication specific instructions and plants the seed on Eigen to support mixed precision. The lack of support for mixed precision  requires Tensorflow to resort to other libraries since quantization on neural networks is more and more important.

#### Bibliography

Goto, Kazushige. “Anatomy of High Performance Matrix Multiplication.” ACM Transactions on Mathematical Software, https://www.cs.utexas.edu/users/flame/pubs/GotoTOMS_final.pdf.

[Click here](https://www.linaro.org/contact/) to contact us to find out more about Linaro.