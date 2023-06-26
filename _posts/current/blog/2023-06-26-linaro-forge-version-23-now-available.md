---
layout: post
title: Linaro Forge Version 23 Now Available
description: In this blog we talk about the new Linaro Forge Version 23 release
  and all the improvements that have been introduced. Read more here!
date: 2023-06-26 09:18:18 +01:00
image: /assets/images/content/Toolchain_72.jpg
tags:
  - Linaro Forge
  - HPC
category: blog
author: Beau_Paisley
---
The Forge team is pleased to announce our first major release as part of Linaro.  This release includes myriad enhancements, improvements, and fixes and we are proud to have it out the door on time with all of the commitments that were made long before Linaro was a twinkle in our eye.  Moving to Linaro created a lot of unforeseen tasks such as setting up new laptops, learning new IT systems, new employee paperwork,  etc. but the team knuckled down and got it done.   This blog will provide a survey of the new capabilities and you can expect to see more in depth details in the future.  We encourage you to reach out to the team at **sales@forge.linaro.com** for a personal in-depth overview of what’s new.

## Rebranding

New logos, new colorways, and it all looks really cool!  For support please reach us now at **support@forge.linaro.com**. Find us on the web now at, [www.linaroforge.com](www.linaroforge.com) 

## The Continued Democratization of HPC with Python

The Forge team has been following the adoption of Python in HPC for many years now.   Early in that journey we added the key capabilities to enable those early adopters to debug their Python HPC  code with DDT.  In the intervening years we have expanded the capabilities in DDT and added Python support in our performance tools.  With the release of version 23, Python support is now a first class citizen with very robust support.   Users experienced at using our tools with C/C++ and FORTRAN codes will find that most of the functionality that they are used to is there and now just works.

### DDT Enhancements for Python

DDT has improvements to existing Python capabilities and many additions.

* Sparklines for Python variables
* Tracepoints
* Viewing variables with the Multi-Dimensional array viewer
* Halting on uncaught Python exceptions
* Improved evaluation of Matrix and Record Array objects
* Show f-string variables in the current line tab of the variable view



### Performance Engineering Tools Enhancements for Python

Categorization of time spent in the Python interpreter has been added to the Performance Report output.   This is particularly useful for Python driven HPC workloads because this often involves making sure you are using your C or FORTRAN compiled frameworks such as numpy or cupy correctly.   If you think it is easy to misunderstand your overall application performance with C or FORTRAN, it’s even easier in Python HPC!  Support of the allinea_start_sampling() and allinea_stop_sampling() functions in .py scripts has been added.   These routines have been important for a long time in compiled codes that have expensive setup or cleanup phases.  These routines are even more important in Python codes where understanding different  phases of your application may require more focused analysis.

{% include image.html path="/assets/images/content/linaro-performance-reports-release-23.png" alt="linaro performance reports linaro forge release 23.png" %}  

Performance Reports can now be generated directly from the MAP user interface.  Export the report as HTML, TXT or CSV and then open directly with your favorite viewing tool.

{% include image.html path="/assets/images/content/opening-performance-report-in-your-browser.png" alt="opening performance report in your browser" %}  

Performance Reports can still be generated with the perf-report tool from the command line but this direct access from the MAP interface greatly streamlines the workflow supporting good performance engineering methodology.

The text version of the Performance Report output is also now available in the Program Details dialog.   A lot of performance engineering workflows involve looking at runs with different configurations and the inclusion of this data greatly simplifies that analysis.

{% include image.html path="/assets/images/content/text-version-of-linaro-performance-reports.png" alt="text version of linaro performance reports" %}  

## Other Performance Engineering Tool Enhancements

The CPU name is now included in the Performance Reports and MAP metadata output.   With the growing number of CPU brands and families in use at HPC centers this information has become even more important for performance comparisons.

{% include image.html path="/assets/images/content/linaro-performance-reports-release-23-image-2.png" alt="linaro performance reports linaro forge release 23 image 2" %}  

The architecture and usability of DDT and MAP has been highly optimized over the years to support large scale SPMD (single process multiple data) applications.  As we have been watching the evolving design of HPC codes take on other design paradigms we have been evolving our tools to support those models.   With this release, MAP has made several user interface enhancements to simplify the analysis of OpenMP threaded codes, non OpenMP threaded codes and GPU codes. 

## Currency 

Forge is a complex and mature product that works in environments with many interacting technologies.  Keeping the tools stable and robust with all of the changing versions of compilers, OpenMP libraries, MPI systems, etc. takes a lot of ongoing in-depth work that does not appear as new functionality to every user.   Please see the release notes in the distribution for all of these changes.

## Continuing the Journey

To obtain more information on Forge please visit us at <https://www.linaroforge.com>.  If you would like to schedule an overview presentation  of our tools, or a detailed brief of what’s new in this release  please contact the Forge sales team at **sales@forge.linaro.com**.   And, if you think that this blog was even half as worthwhile as a tabloid at the grocery check out, please hit the like and subscribe buttons.  Or, at least  make sure to [subscribe to our newsletter](https://linaro.us3.list-manage.com/subscribe?u=14baaae786342d0d405ee59c2&id=bcfa4abc8f) to hear about more in the future.