---
author: joakim.bech
date: 2016-02-10 13:54:07+00:00
layout: post
link: /blog/core-dump/testing-a-trusted-execution-environment/
slug: testing-a-trusted-execution-environment
title: Testing a Trusted Execution Environment
wordpress_id: 9949
categories:
- blog
tags:
- Core Dump
---
{% include image.html name="core-dump.png" lightbox_disabled="True" alt="Core Dump Banner" url="https://wiki.linaro.org/CoreDevelopment" %}

  * Background
  * Linaro gets into the picture
  * Software components
  * Host application
  * Test Trusted Applications
  * What about the tests coming from GlobalPlatform?
  * Licenses
  * Shortcomings and future improvements
  * Final words


Why you need to test your software is quite obvious and therefore this blog post will not be about that, instead I’ll talk a little bit about how we are testing [OP-TEE](https://github.com/OP-TEE) using a tool called xtest ([optee_test](https://github.com/OP-TEE/optee_test)). I will also talk about what components are involved, what kind of tests are performed, what is missing, etc. But first let’s start with a short background.


# Background


Just as the other components in OP-TEE the test framework also has origins from ST-Ericsson and STMicroelectronics. A couple of years ago, when OP-TEE was being developed, the developers were engaged in GlobalPlatform testing, in the so called TestFest (for simplicity let’s call it OP-TEE even though it strictly isn’t correct, since back then the TEE solution didn’t really have a name, it was the ST-Ericsson TEE solution). At this time there were no official test suite nor compliance program ready and the goals with the TestFests were twofold, first to ensure that the different TEE vendors respective TEE solution was behaving according to the specification, secondly that the test tool(s) and the specifications themselves were correct. At the same time as this work took place there were quite a few “standalone” test cases being implemented as a complement to the GlobalPlatform tests. The nature of those were more to address the missing pieces in GlobalPlatform and to test corner cases, hardware- and extended features. So side by side the engineers at ST-Ericsson were running their own tests as well as the tests provided by the ones in charge of GlobalPlatform compliance program.

{% include image.html name="figure1.png" alt="figure1" %}

**Figure 1: Output from xtest**


# Linaro gets into the picture


When Linaro got involved in the development of OP-TEE we also had a need for testing the code we are developing and at the same time we would like to give our members the ability to use a suitable test framework. The only problem was that the test cases coming from GlobalPlatform couldn’t be shared with anyone (including Linaro) since to get access to those, a company either had to be a member of GlobalPlatform or it had to purchase the needed files directly from GlobalPlatform. Therefore the engineers from ST immediately started working on separating  the tests implemented by themselves from the ones that they had gotten from GlobalPlatform. When that job was completed, they shared their own developed tests with Linaro engineers and the members of Linaro. This piece of test code is what we today refer to when saying “**the standard test**” and that is also what you can find on GitHub since a couple of months ago on the OP-TEE project in the git called [optee_test](https://github.com/OP-TEE/optee_test). That repository **is no longer private to** Linaro and its members.



For OP-TEE development we have configured our repositories at GitHub so that a pull request will trigger a [Travis](https://travis-ci.org/OP-TEE) job which in turn would automatically trigger builds for all supported platforms. In addition to that we always will automatically run xtest using QEMU ([here](https://travis-ci.org/OP-TEE/optee_os/builds/102096254#L4514-L4526) is an example of how that could look like). In the long run we would like to also start using our own Linaro infrastructure (Jenkins + LAVA) as a complement to Travis so that we could do automatic testing on all the devices we are supporting in OP-TEE.


# Software components


The test framework consists of a [host application](https://github.com/OP-TEE/optee_test/tree/master/host/xtest), which is a normal user space application running in Linux. This is the piece of software that initiates and runs the actual tests and gathers test results etc. When it comes to Linux kernel there are no changes at all. It’s still the same TEE driver in use that is responsible for transporting the data back and forth between normal world, user space and secure world. Likewise on the secure side, there are no changes to the secure OS itself (TEE core). Instead all the code specific totesting will be performed as a set of different Trusted Applications (I’ll go more into details further down in this blog post).




## Host application


The host application, which by the way is the one we call “xtest”, has been divided into a couple of different files where each file corresponds to a certain area or feature. As of writing this, you will find the following files for the host application (there are a few more files, but those other files are the application and test framework itself):




  * [xtest_1000.c](https://github.com/OP-TEE/optee_test/blob/master/host/xtest/benchmark_1000.c): contains the **OS related** tests _–_ basic OS features, panics, wait functionality, RPC messaging, signature header verification tests by loading a fake and a corrupt Trusted Application. It also tests invalid memory access and concurrent usage of Trusted Applications.


  * [xtest_4000.c](https://github.com/OP-TEE/optee_test/blob/master/host/xtest/regression_4000.c): contains all **crypto** related testing. It is basically testing crypto APIs that are exposed to the Trusted Application via the GlobalPlatform Internal TEE core specification.


  * [xtest_5000.c](https://github.com/OP-TEE/optee_test/blob/master/host/xtest/regression_5000.c): this file have tests for **shared memory** handling.


  * [xtest_6000.c](https://github.com/OP-TEE/optee_test/blob/master/host/xtest/regression_6000.c): contains test for **storage**, which exercises the GlobalPlatform secure storage API as well as the underlying “POSIX” file system API.


  * [xtest_7000.c](https://github.com/OP-TEE/optee_test/blob/master/host/xtest/regression_7000.c): This also contains tests for shared memory etc. However, this is something that will only be used when having access to and enabling the tests coming from GlobalPlatform (more on that further down in this blog post).


  * [xtest_10000.c ](https://github.com/OP-TEE/optee_test/tree/master/host/xtest)has test code containing **extensions** going beyond the GlobalPlatform specifications. For example, this is where we are testing key derivation functionality like PBKDF2, HKDF and Concat KDF.


  * [xtest_20000.c ](https://github.com/OP-TEE/optee_test/tree/master/host/xtest)this file also has tests related to storage, but this time those are more aimed at the **secure storage** implementation as such and they verify that files are actually being written to the file system, checking that they haven’t been corrupted and that they are being deleted etc. As an example, when initiating a store operation from secure world there should be file(s) created in Linux and accessible at **_/data/tee/{directory}/{filename}/block.xxx_**.


  * [xtest_benchmark_1000.c](https://github.com/OP-TEE/optee_test/blob/master/host/xtest/benchmark_1000.c): This is so far the only file related to **benchmarking** and it contains a couple of benchmark tests for the **secure storage** implementation.




The main function could be found in the file [xtest_main.c](https://github.com/OP-TEE/optee_test/blob/master/host/xtest/xtest_main.c). This file basically just lists all test cases that should be enabled, and parses a few command line arguments followed by starting the actual tests. If you dive into the test code itself, you will see that the test framework itself implements macros that are used to evaluate if the test has passed or failed. You will, for example, frequently see ADBG_EXPECT_TEEC_SUCCESS, ADBG_EXPECT, ADBG_EXPECT_TEEC_ERROR_ORIGIN, ADBG_EXPECT_TRUE and ADBG_EXPECT_TEEC_RESULT everywhere in the test code. There are others, but those are the most commonly used.



On a top level, a test case is added using the macro ADBG_CASE_DEFINE and that is what you can see on the top in each and every file listed above. As arguments, this macro takes a test label, a function pointer, a title, a short description of what it **is** testing, requirement ID and a short description of **how** it will be tested. As an example, have a look at _XTEST_TEE_10001_ which is defined [here](https://github.com/OP-TEE/optee_test/blob/master/host/xtest/). As you can see, this particular test is supposed to test functionality related to key derivation.



Within each test you can define sub-tests and to do so you have to wrap your code in-between Do_ADBG_BeginSubCase() and Do_ADBG_EndSubCase() calls. This isn’t something you strictly need to do, but it is a nice way of splitting up the tests into manageable sections, that will help better pinpointing where something went wrong in case of a test case failure. The number of tests and subtests is also something that will be presented when all test cases have been run (see Figure 3 further down).


## Test Trusted Applications


As I’ve mentioned above, all code related to testing could be found within a set of Trusted Applications. Below is a list of the Trusted Applications that are used by xtest.


  * [**concurrent**](https://github.com/OP-TEE/optee_test/tree/master/ta/concurrent): The concurrent Trusted Application is responsible for testing the ability to run several Trusted Applications simultaneously – a feature that has been [merged](https://github.com/OP-TEE/optee_os/pull/536/commits) into OP-TEE quite recently. For the host application you will find this application’s code in the [xtest_1000.c](https://github.com/OP-TEE/optee_test/blob/master/host/xtest/regression_1000.c#L156-L165) file.


  * ****[**create_fail_test**](https://github.com/OP-TEE/optee_test/tree/master/ta/create_fail_test)**:** This is a tiny little TA used solely to test OP-TEE’s behaviour when loading a corrupt or fake Trusted Application.****


  * [**crypt**](https://github.com/OP-TEE/optee_test/tree/master/ta/crypt): Despite the fact that there is the crypto API defined by GlobalPlatform, in OP-TEE, this particular Trusted Application also contains an AES-ECB and a SHA-256 (224) implementation within the TA itself, that is mostly due to historic reasons. But the majority of the entry points are calling GlobalPlatform Internal API functions. This Trusted Application tests MAC, AAED, hashes, ciphers, random number generator etc.


  * [**os_test**](https://github.com/OP-TEE/optee_test/tree/master/ta/os_test): Mainly tests OS related features such as memory access rights, properties, time API and floating point operations as well as the MPA library (implementing big numbers).


  * [**rpc_test**](https://github.com/OP-TEE/optee_test/tree/master/ta/rpc_test): Test that the RPC mechanism and loading of other Trusted Applications are working properly. It does this by letting the TA itself calling functionality in the crypt TA which will trigger loading of the crypt TA using RPC messages.


  * [**sims**](https://github.com/OP-TEE/optee_test/tree/master/ta/sims): Testing the Single Instance and Multiple Session features specified by GlobalPlatform.


  * [**storage**](https://github.com/OP-TEE/optee_test/tree/master/ta/storage): Contains tests related to the (secure) storage functionality. It tests all the functions of the GlobalPlatform specification that cover the so called “Persistent Objects”. On a high level or in Unix terms, this can be seen as the POSIX API (in reality there is a POSIX level behind the GP interfaces).


  * [**storage_benchmark**](https://github.com/OP-TEE/optee_test/tree/master/ta/storage_benchmark): As the name indicates, this TA benchmarks storage operations. It reads and writes data of various chunk sizes and then in the end creates a performance report.

# What about the tests coming from GlobalPlatform?


The compliance test suite ([GlobalPlatform TEE Initial Configuration Compliance Test Suite v1.1.0.4](http://globalplatform.org/storecontent.asp?show=configurations)) that can be purchased from GlobalPlatform (free for GP members) consists of a _compliance adaptation layer specification_ that needs to be implemented to run the tests. It also contains a set of configuration files, more specifically – XML files specifying how functions should be called, what parameters to pass to them and what kind of test results to expect, i.e., you will **not** get any actual code that is ready to be compiled. How those XML files will end up being used is up to the end user. What we did early on was to configure xtest, so that it would be easy to extend it later to also include the compliance test suite from GlobalPlatform. So by putting the XML files on a certain [path](https://github.com/OP-TEE/optee_test#extended-test-global-platform-tests), using the adaptation layer, installing a couple of tools ([xalan](https://xalan.apache.org)) and running make with the “patch” as an argument, there will be a set of new Trusted Applications as well as patch xtest itself to also include the compliance tests. I.e., the XML files will be transformed into C code in this step. After performing that step you will not only run the so called standard test, but you will also run the compliance tests from GP in the same run.

{% include image.html name="figure2.png" alt="figure2" %}

**Figure 2: xtest overview**


# Licenses


One has to be careful when working with xtest, since there are different licenses in use in different areas. In general we usually use BSD Clause-2 license for most of our code. But in this case, when it comes to test related code, we’re using both BSD Clause-2 and GPLv2 license. All code running on secure side in the standard tests (Trusted Applications) are using the BSD Clause-2 license while the code running in normal world is using GPLv2 license. The same is true for the code used when extending xtest, however we must also follow the license stated by GlobalPlatform (GlobalPlatform Compliance License Agreement). In figure 2 below, you can see more clearly how xtest is divided and what licenses are in use.


# Shortcomings and future improvements


Today xtest is a test framework that does API testing of the exposed functionality for the Client API and for the Internal Core API. It contains quite a few test cases. Running the standard test on QEMU (Intel Core i5-4670K CPU @ 3.40GHz) results in the following:

{% include image.html name="figure3.png" alt="figure3" %}


**Figure 3: xtest standard test result**

If you also enable the GP compliance tests, then you get even better coverage. So the APIs as such are being thoroughly tested and that is all good. However! Since it is security we’re dealing with here, we still have a lot to do when it comes to performing a focused security testing. There exist both concepts and tools and even companies solely dedicated to white box testing, where the goal is to find bugs and potential vulnerabilities in the code. For example, over the years people have found numerous bugs in Linux kernel by using [Trinity](http://codemonkey.org.uk/projects/trinity) ([fuzz tester](https://en.wikipedia.org/wiki/Fuzz_testing)). With Trinity the main goal isn’t strictly about enhancing security but rather to ensure that the system calls in Linux kernel are robust. A crash ([Linux kernel oops](https://en.wikipedia.org/wiki/Linux_kernel_oops)) can in some cases also be an entrance point for a kernel exploit and therefore it is still important to find and fix issues discovered by such tools as Trinity. Having something similar running on the secure side would probably be really useful. We have heard that GlobalPlatform will include fuzz testing in a new test suite that is currently being developed (draft is available for GP members here [TEE Security Test Suite v0.1.0](https://www.globalplatform.org/complianceupdates.asp)).



There are also [side channel attacks](https://en.wikipedia.org/wiki/Side-channel_attack). Some side channel attacks, like power analysis, cannot be done in software only, but still it would be worth adding tests covering such cases when possible. For example, [timing attacks](https://en.wikipedia.org/wiki/Timing_attack) are something one can do using only software and having test cases automatically performing timing attacks would be very useful. Since we mainly use ARM TrustZone™ it would also be worth adding tests covering the boundaries between the two worlds. I.e add tests that ensure that memory is or isn’t accessible from the other side. There are some memory region tests in xtest already today, but it would be great to  add more tests in this area. With some imagination one could also start to play with [TrustZone Address Space Controller](https://www.arm.com/markets/trustzone-controllers.php) and add tests that ensure that the configuration of that system IP behaves as expected.


# Final words


I hope this post gave a useful  introduction to xtest and explained how we are testing OP-TEE. xtest sources  is also a good source to look at if you want to know more about how to write Trusted Applications and how to use the GlobalPlatform APIs. We are continuously adding tests and hopefully sooner than later we will also address the shortcomings mentioned above. But since most of it is open source and thereby freely available, we would be more than happy seeing people with experience in this area getting involved by giving feedback, coming up with ideas and maybe even submitting patches that improve xtest.
