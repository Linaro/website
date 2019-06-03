---
title: The emerging AI Deep Learning Neural Network Ecosystem and why we need to collaborate
author: linaro
layout: post
date: 2018-09-07 09:00:00+00:00
description: >-
  Linaro will be hosting an AI and Neural Networks on Arm Summit at the upcoming Linaro Connect Vancouver 2018 in one weeks time. This blog lists some of the great sessions being presented.
categories: Blog
tags: Arm, Linaro, Machine Learning, AI, Deep Learning, Neural Networks
image:
  featured: true
  path: /assets/images/blog/OSSNA.jpg
---
The AI deep learning neural network ecosystem is just getting started and has similar implications with open source as GPU and video accelerators had in the early days with user space drivers, binary blobs, proprietary APIs and all possible ways to protect their IPs. Together with other players in the Arm ecosystem, Linaro wants to create a common open source framework to manage multiple NN accelerators while at the same time avoiding modifications to deep learning frameworks with multiple forks. The Machine Intelligence Initiative at Linaro has been set up with this purpose in mind - to help reduce the risk of fragmentation in the Deep learning NN acceleration ecosystem. 

Last week Andrea Gallo, VP of Segment Groups and Strategic Initiatives at Linaro, presented a talk on Deep Learning Neural Network Acceleration at the Edge. To view the slides from his presentation click [here](https://events.linuxfoundation.org/wp-content/uploads/2017/11/Deep-Learning-Neural-Network-Acceleration-at-the-Edge-Andrea-Gallo-Linaro.pdf).

**Want to learn more? Join us at the AI and Neural Networks on Arm Summit!**

If you would like to find out more about Linaro’s work in Machine Intelligence on Arm and how to get involved, join us at Linaro Connect Vancouver 2018 in a week’s time. We will be hosting an AI and Neural Networks on Arm Summit at the Hyatt Regency Vancouver on Wednesday 19 September 2018. You can attend the summit for just $45.

To register, click [here](https://connect.linaro.org/ai-neural-networks-arm-summit/)!

There will be sessions on the latest AI technologies available in edge and consumer devices from the Arm ecosystem and how these accelerate deep learning applications leveraging the most widely adopted AI frameworks. Here are some of the great sessions we’ve got lined up:

**[Artificial Intelligence Strategy: Digital Transformation Through Deep Learning](https://connect.linaro.org/resources/yvr18#chris-benson)**

Chris Benson, AI & Digital Transformation Strategist, Solution Architect and Keynote Speaker/Evangelist  

If the last decade was about mobile first, the next decade will be about AI first. Within the worlds of artificial intelligence and machine learning, deep learning is where a continual stream of the most exciting advancements are being made – self-driving cars, self-organizing drone swarms, computer vision, conversational interfaces, autonomous robots, speech recognition, emotion recognition, and much more. It is amazing AI that works today, and it is the driving force behind the current AI revolution. Deep learning will impact nearly every industry on the planet, driving digital transformation for years to come, with countless opportunities to take advantage of this technology. Over the next decade, deep learning inferencing models will become common microservices within enterprises architectures. Software engineers will be expected to design, develop, and deploy deep learning microservices into production – in the cloud, on the edge, into mobile IoT devices, and into the everyday autonomous robots that will become ubiquitous in our lives.

Significant progress has been made in various software components such are SDEI, SPM, StandaloneMM and APEI driver that are required to put together support for RAS error injection and error handling on enterprise platforms. This proposal for presentation takes a deep dive on the technical details of integrating these components to create an end-to-end RAS solution with emphasis on details about error injection, firmware-first error handling methodology, CPER record creation and notifying linux using SDEI interface about the RAS events for further processing. Arm’s SGI-575 FVP platform is the first to create this solution and audience can gain insights into the technical details and challenges of enabling this solution for other platforms.

**[Enabling Machine Learning to Explode with Open Standards and Collaboration](https://connect.linaro.org/resources/yvr18#jem-davies)**

Jem Davies, VP, Fellow and GM, Machine Learning Group at Arm

It’s impossible to become an expert in machine learning(ML). Many “domain-specific” technologies are driven by a handful of use cases, but machine learning is so pervasive in applications that it’s unachievable to master it. To add to this complexity, it’s the ML “wild west” with competing approaches, multiple de facto standards and several standards efforts producing many different ‘versions’ of neural networks and operators to support. Arm believes that the way through is to develop open standards and collaborate on common-core technologies which enable developers to move faster. Connecting them to the right platform in a consistent way, and allowing them to focus on delivering their solution rather than fighting with practicalities. With the collaboration of ML framework developers, hardware developers and the Arm platform, a consistent software platform and developer experience across a huge range of devices can be developed to unlock experts in each and every field that machine learning touches.

**[Edge AI with Linaro](https://yvr18.pathable.com/meetings/740404)**

Including an overview of how to create IoT devices for rapid deployment, Gumstix CEO, Gordon Kruberg, will demonstrate how to create a device running a DNN and show remotely performed visual servoing. The AeroCore for DragonBoard was the first drone and robotics mezzanine board designed by Gumstix for 96Boards, built with the Geppetto online design-to-order system. This presentation will show the latest generation of the AeroCore for Dragonboard for a set of 96Boards running DNN.

**[Arm NN intro](https://yvr18.pathable.com/meetings/890145)**

An overview of the Arm NN design and codebase, what interfaces exist and why, and how people are using it today. We’ll also discuss upcoming features that Arm are contributing to this codebase.

**[TVM compiler stack and ONNX support](https://yvr18.pathable.com/meetings/890159)**

As an open source deep learning compiler driven by the community, TVM is evolving quickly and well received by the industry. In this session, the architecture of the TVM stack will be introduced first, including some important features added recently such as AutoTVM and VTA (Versatile Tensor Accelerator) support. Then the build and deployment of deep learning models with TVM will be talked about, and ONNX (Open Neural Network eXchange format) is one of the model formats supported by TVM stack. Besides unified model format and operator definitions, ONNXIFI (ONNX Interface for Framework Integration) is another initiative from the ONNX community to define a cross-platform API, and how to fit TVM stack into ONNXIFI seems an interesting topic to discuss as well.

**[ONNC (Open Neural Network Compiler) for ARM Cortex-M](https://yvr18.pathable.com/meetings/890162)**

The Open Neural Network Compiler (ONNC) project aims to provide a compiler to connect Open Neural Network Exchange Format (ONNX) to every deep learning accelerator (DLA). ONNX is a standard format for representing deep learning models that enables models to be correctly transferred between frameworks, like caffe, CNTK, mxnet, pytorch and TensorFlow. ONNX guarantees interoperability between frameworks, however, the industry still needs a backer to guarantee executability between DLAs - to ensure every DLA can execute ONNX models correctly. ONNC is such a backer for DLA vendors. It is a kind of cross compiler that transforms ONNX models into binary machine code of DLAs. Every DLA has its own unique and delicate design in its memory for fast data movement. A compiler must provide sufficient flexibility to handle with the wide range of varieties. ONNC leverages the IR design of ONNX and provides rich and effective algorithms to eliminate overhead of data movement. And the best is that DLA vendors can easily reuse these algorithms by just describing its own unique physical cost model. Skymizer hopes DLA vendors can be free from re-inventing these intricated optimization algorithms.

In this talk, we not only introduce ONNC framework, we will dive into ONNC internals. We will explain our plan to support uTensor backend for ARM Cortex-M and discuss some technical issues.

**[AI Alive: On Device and In-App](https://yvr18.pathable.com/meetings/890163)**

ThunderSoft has been working on AI for recent years. This presentation will share some results of AI work. First of all, give a general introduction about the current status of AI. For the current messy AI market, whatever AI chip, algorithm, framework or application, what challenges are we facing? Then introduce what kind of services and solutions we can provide for resolving some real issues such as defects inspection in industrial and meanwhile, show the architecture of our AI system. Finally, give some use cases for your reference which focus on some details about three products(Thunder Visual Inspection, Face SDK, and AI Kit) which are based on ML/DL technology. For Thunder Visual Inspection, will give a solution to resolve visual inspection issues through combining deep learning, image processing, even if other computer vision related technologies together. For face SDK, will show the software architecture and interfaces. This part will take a deep dive into how to build face SDK and implement the integration of algorithms and AI models on top of some existed AI Engine(SNPE, Tensorflow Lite etc.). AI development Kit based on Qualcomm SDM845 is extremely powerful for AI development. In this part, hardware specification and software capability will be listed.

To find out more about the Machine Intelligence initiative at Linaro, click [here](/engineering/artificial-intelligence/).









 

  





