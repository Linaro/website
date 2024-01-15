---
layout: post
title: Can we make AI Super?
date: "2019-11-20 10:24:06"
image: /assets/images/content/abstract1.jpg
tags:
  - Artificial Intelligence
  - Machine Learning
  - HPC
  - Supercomputers
category: blog
author: paul.isaacs
---

Linaro works with hardware vendors and software developers to help coordinate and build the toolkits for improved calculation libraries. We work to defragment the market by supporting ONNX, TFLite and TVM to translate to Arm NN supported inferencing optimised hardware. Linaro's HPC group aims to assist in optimising libraries and infrastructure dependencies that distribute the calculation requirements across servers, clusters, HPC nodes and supercomputers. But beyond Machine Learning and inferencing, where is the full scope of the truly cognitive AI? In this blog, Linaro's HPC Tech Lead Paul Isaac's talks about the history of AI and future opportunities made possible through super computing.

## **Can we make AI super?**

Over several millennia, human creativity has generated more than a thousand deities and doctrines, for which individuals and groups have chosen (or born into), to align with. The expectation that having faith will guide and help solve all problems. Are we looking towards AI to be the ultimate problem solver?

Technology is a modern term but applies equally to historic and current complex systems designed to aid physical or mental tasks. Technology, orders of magnitude greater than a culture has previously known, can appear to be some kind of magic. Depending on how the technology is wielded it can be a source of destruction or benefit. The complexities of faith in humanity can not easily be resolved to a binary-style paradigm upon which technology is based on for decision making. There are nuances, contexts, hyperbole, lies and buried within, truths.

Artificial Intelligence is a term first coined in the last 100 years to aspire to describe the potential of electromechanical technology to perform functions such that the outcome is an equivalence of human actions and thought processes. A system which can assist in the diagnosis of many ailments would appear as wizardry if introduced to tribes cut-off from the modern world.

If we are to believe the current hyperbole and inflationary ideas that media, in its many forms, including fictional Hollywood block-busters present to us, many might think Artificial Intelligence is on the brink of being solved… and taking over the world to establish itself as our overlord!

Linaro’s High Performance Computing Special Interest Group (HPC SIG) is nothing like an AI Overlord. We enable and validate the testing of HPC-related toolchains and libraries, through continuous integration (CI) processes, to ensure the end-user/researcher can perform their number crunching activities. Scenarios such as particle physics, planet formation, universe mapping and Machine Learning require enormous amounts of computational power that HPC and SuperComputer infrastructures enable. We do however, have a special interest in seeing where Artificial Intelligence development may lead us and whether the current path is the right one.

## Are we there yet?

Alan Turing in 1937 described how any problem having a logical solution can be reduced to a solution based upon a small set of simple instructions.

Claude Shannon in 1938 proved that Boolean Algebra, which was developed in the 1840’s & 50s, could help with practical problems of circuit design.

John von Neumann in 1945, defined the architecture of modern digital computers, which described the ability to store both data and program within the same memory system. He specifically differentiated the computation component from the storage component, or as we know them, CPU and RAM.

We have enjoyed over 70 years of this style of computation and we have achieved so much. Now we come to the crux of a problem that von Neumann set in motion. In von Neumann’s June 30, 1945 “First draft of a report on EDVAC”, he included an analogy between digital computing elements and biology’s neurons and synapses. von Neumann, based on MacCulloch & Pitts research, along with humanity in general, preferred to keep things simple. They did not consider the more ‘complicated’ aspects of how neurons function and chose instead to portray neurons as having minimal characteristics.

So, we have Turing solving all problems that have logical solutions; von Neumann simplifying neuron operation such that memory and computation are kept distinctly separate whilst controlled by synchronised events; and we have Shannon implementing boolean algebra to design circuits.

These are the foundations from which researchers have been developing artificial intelligence, with the expectations and hope of achieving strong, or generalised AI - that which is expected to equal or better incalculable rational/irrational logical/illogical and emotional human intelligence. Of course, we can have long discussions about the nuances of what defines intelligence. Is Google’s search engine intelligent? Or IBM’s Watson an expert because it won at Jeopardy? Does winning at a board game with fixed rules infer intellect?

Large high performance computing platforms, that consume kilowatts or even megawatts of power have not yet achieved the full dynamic and adaptable range of contexts and responses to situations with what we do in less than 20 watts - the biological power consumption of our brain. Perhaps now it starts to dawn on us that the over simplifications of the past have led us down a flawed route. But, all is not lost.

## What have we achieved?

Computationally, we now carry smartphones that have more processing power than systems that placed man on the moon. An often touted example. The same phones also carry out facial recognition, image rendering, voice recognition, are the edge connection to social media and occasionally are used to make telephone calls! Many of these activities have benefitted from research into artificial intelligence and artificial neural networks.

We must be wary of naming something with its final goal in mind during its early first steps. Artificial neural networks (ANN) groups many disparate algorithms and circuits under a banner suggesting they already imitate the intricacies of neural pathways. Neuroscientists are still discovering new attributes of neurons and how they might be interleaved and connected within the brain. Biology is never complete, especially when considering evolutionary activities.

We should ask, what level of abstraction from known neural activity is being imitated by the respective ANN? Is the ANN only an abstraction, assimilation, or parallels a specific sub-function?

We become wary of over-used terminology. How many times can a new ANN be introduced as the latest and greatest if its step change over the predecessor is minute? This is an example for the overarching title Artificial Intelligence too. We do not want a third ‘Winter of AI’ (The Winters of ‘70s-80s and late 80s/early 90s occurred due to over-hype/under-delivery and subsequent failure to secure significant further research funding).

Machine Learning, a subset of Artificial Intelligence, computes models that can be used to create probability matches when comparing something known with something new. However, the something new might only vary in a nuanced way and yet not fit a model at all. This is where the number and variety of example entries in a training dataset can help build a model that has a higher accuracy level than another.

For example, a model built from a training set of cat images that happens to cover the majority of domestic varieties might fail if presented with a Manx cat (tail-less). In this instance the model would have to be scrapped and rebuilt from scratch with a new set including sufficient variations of tailless cats for the model to be improved. Processing sets of hundreds of thousands or millions of images to build a model is not the timely arena for low-power small form-factor devices. However, once the model has been built, deployment for inferencing can suit such devices.

The Internet of Things (IoT) introduces the ability to perform AI inferencing at the edge of data networks. That is, AI is the overall topic, but inferencing is at a most basic level of comparing inputs to pre-calculated models, pattern-matching. Arm’s Ethos NPU series is specifically designed for throughput and performance efficiency in this area. Using the ArmNN SDK mobile app developers can embed a minimal codebase to enable inferencing solutions.

Having alluded to the need for comprehensive computing functions to be available in building new models, this points to having server-capable hardware. Systems that can run for days/months uninterrupted to carry out pattern identification. Searching through the possible permutations to align particular features to mathematically described splines/planes/hyperplanes requires bulk transformation operations suited to silicon designed for the task. Previously, the CPU has been the computational workhorse. But, due to the SIMD nature of the transformations, this operation fits well with GPUs, where rotating an image correlates directly to spline/plane manipulation.

GPUs provide more functions than purely SIMD operation and consume significant power. Whilst GPUs are used as the mainstay for Machine Learning there has been a rise in dedicated transformation hardware. ML accelerators primarily focus on the multiply-accumulate cycle of the calculation. Differing approaches are whether the operation requires transfer of the data to the accelerator first or whether the calculation can be carried out in-situ in memory.

Clustering servers together extends the server-based ML model creation to distribute the significant number of calculations required amongst multiple nodes of the cluster. Each of those nodes may be assisted by hardware accelerators. Multiple models can be created simultaneously by balancing the computation resources for each model across available nodes. This works well when the calculations can be segmented into sub-groups without dependencies.

High Performance Computing (HPC) further extends the cluster environment to distribute the significant number of calculations required amongst multiple nodes, which may number in their 10’s to 100’s. Each of those nodes may be assisted by hardware accelerators. HPC also enables multiple models to be created simultaneously by balancing the computation resources for each model across available nodes. Due to the RDMA capability in a HPC, cross-dependency calculations can be carried out and therefore larger and more complex models can be processed.

The performance of supercomputers are on the cusp of providing 1018 operations per second which when searching for patterns amongst massive datasets significantly helps. Supercomputers increase the scale of operational capability compared to HPC, often having thousands of CPU cores to perform calculations.

ARM-cpu based solutions currently being introduced, combine aspects of the processing capability of dedicated GPUs and placed within the same silicon as the generalised compute functions. Whilst System-on-Chip is not a new concept, directly integrating the highly parallelised SIMD calculation functions within the CPU’s instruction set aims to significantly boost performance in mathematical bulk transformation operations.

Announcements from Fujitsu of new customers for systems based on their A64FX processor with Support Vector Extensions and Intel’s next generation of Xeon CPU which embed their ‘Nervana’ technology bring about the next step in CPU development. Dedicated Machine Learning accelerator hardware from the likes of Habana, Graphcore, Google et al all build towards more intensive Machine Learning, and perhaps AI.

## Are we on the verge of a Super AI?

We have concentrated on highlighting that simply having the tag of AI does not mean that the functionality being delivered is the entire scope of AI. In fact, as is the case with the vast majority of ‘AI’ tagged activities, the focus is on the subset, Machine Learning model creation and then inferencing using the built models.

## The Future, TBD!

Human ingenuity continues to push the boundaries of our physical world and now builds virtual worlds that can be used to explore beyond the constraints of known physics. We have created so much physically and ethereally. Will we mimic our neural pathways to create an AI which we might call ‘super’, Super AI soon? Probably, but not through Machine Learning alone. New computing architectures and approaches are demanded in areas such as Oscillatory networks, Reservoir computing, Generative Adversarial Networks, Spiking Neural Networks, Neuromorphic computing, Autonomic Asynchronous Recursive Neuromorphic Networks.

Linaro's HPC Group will be working in this space to ensure those new methods have a stable high performing computational environment from which to explore the art of the possible. Afterall, calculating a brain that has 86 billion neurons and countless more synaptic connections that from somewhere within, consciousness emerges…

For more information on Linaro’s HPC Group, current and upcoming activities, [check out this presentation](https://www.youtube.com/watch?v=xhzlV91l-zU) I recently gave at the Arm HPC User Group, an event co-located with SC19.
