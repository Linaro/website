---
title: Arm HPC Japan 2017
layout: default
date: 2017-12-12 09:00:00+00:00
permalink: /events/armhpcjapan2017/
css-package: arm-hpc
image:
    name: arm-hpc-workshop-japan_website-banner-top.png
    path: /assets/images/content/arm-hpc-workshop-japan_website-banner-top.png
    featured: true
event: true
---
{% include breadcrumb.html %}

<div class="container-fluid" id="content-container">
<div class="row no-padding arm-hpc-row top">
    <div class="container">
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% asset_path 'arm-hpc-workshop-japan_website-banner-top.png' %}" alt="Arm HPC Workshop Top Banner" class="img-responsive lazyload center-block"/>
    </div>
</div>

<div class="row arm-hpc-row main">
<div class="container">


<ul class="nav nav-tabs" role="tablist" id="tabbed_nav">
  <li role="presentation" class="active">
    <a href="#welcome" role="tab" data-toggle="tab">
        Welcome
    </a>
  </li>
  <li role="presentation">
    <a href="#schedule" role="tab" data-toggle="tab">
        Schedule
    </a>
  </li>

  <li role="presentation">
    <a href="#accomodation" role="tab" data-toggle="tab">
        Accomodation
    </a>
  </li>
</ul>

<div class="tab-content" id="tabbed_nav_content"><!--Start Tab Content-->

<div role="tabpanel" class="tab-pane tab-pane-legal active" id="welcome">


<div class="col-sm-6" markdown="1">

**Arm HPC Workshop** _by RIKEN AICS and Linaro on 12-13th Dec 2017 – [Room 5A on 5F, Akihabara Hall, Tokyo](http://www.akibahall.jp/data/access_eng.html)._
How does the Arm-Powered supercomputing future look and how can you prepare for it? The Arm HPC Workshop will bring together the leading Arm vendors, end users and the open source development community in Tokyo, to discuss the latest products, developments and open source software support. <span id="SPAN_7">Topics of focus are, but not limited to:</span>

*   Compilers including GCC, LLVM, C++, Fortran, optimisations, benchmarking and general support
*   OS and Runtime
*   Tools
*   Math Libraries
*   Orchestration
*   Machine Learning

**For End Users**: In the Arm HPC Workshop you will hear from Arm Members and their Partners, information about new trends, technologies and products for the planning and operation of an Arm-Powered supercomputer.

**For Arm Members and Partners**: The Arm HPC Workshop is a two day conference to provide training and discussion panels for Arm-Powered solutions and offerings for all aspects of HPC including Server, Networking, Storage and Development.

**You can expect**:

*   Exciting best practices and technology outlooks with peers from the Arm ecosystem
*   Unique opportunities to network with current Arm users, vendors and the developer community
*   We are looking forward to your visit!

**Arm HPC Workshop**

*   Cost (Free)
*   Sponsorship options available
*   Session slots available – (Complete the form on this page)

[Information Page](https://linaro.co/hpc2017) (This page)

**Thanks to our sponsors**

{% include image.html name="arm-hpc-workshop-japan_sponsors.png" alt="Arm HPC Workshop Japan Sponsors" class="center-block" lightbox_disabled="true" %}

</div>

<div class="col-sm-6">

<div class="alert alert-arm-hpc" role="alert" markdown="1">

**Tickets are sold out for 2017 Arm HPC Workshop in Japan.**

For more info contact marketing@linaro.org

</div>  

<hr>

{% include media.html media_url="https://www.youtube.com/embed/videoseries?list=PLKZSArYQptsMFnRpO8jCzyXpH7J8IgCXv" %}
<hr />
</div>
</div>
<div role="tabpanel" class="tab-pane tab-pane-legal" id="schedule" markdown="1">
## Day 1

{:.table.responsive-table}
|Start Time|End Time|Title|Reserved for|Presentation|
|----------|--------|-----|------------|------------|
|09:00||Room Opens for Setup|||
|09:15|09:30|Welcome Note|David Rusling CTO, Linaro|[Slides](https://www.slideshare.net/linaroorg/linaro-hpc-workshop-note)|
|09:30|09:55|[Introduction of Post-K development](/blog/arm-hpc-workshop-sessions-and-speakers/#1)|Yutaka Ishikawa (RIKEN)|[Slides](https://www.slideshare.net/linaroorg/introduction-of-postk-development)|
|10:00|10:25|[Post-K: Building the Arm HPC Ecosystem](/blog/arm-hpc-workshop-sessions-and-speakers/#2)|Kouichi Hirai (Fujitsu)|[Slides](https://www.slideshare.net/linaroorg/postk-building-the-arm-hpc-ecosystem-84025150)|
|10:30|10:55|[Arm tools and roadmap for SVE compiler support](/blog/arm-hpc-workshop-sessions-and-speakers/#3)|Richard Sandiford, Florian Hahn (Arm)|[Slides](https://www.slideshare.net/linaroorg/arm-tools-and-roadmap-for-sve-compiler-support)|
|11:00|11:20|AM Coffee Break|||
|11:30|11:55|[HCQC : HPC Compiler Quality Checker](/blog/arm-hpc-workshop-sessions-and-speakers/#4)|Masaki Arai (Fujitsu)|[Slides](https://www.slideshare.net/linaroorg/hcqc-hpc-compiler-quality-checker)|
|12:00|12:25|[State of the Scalasca Toolset](/blog/arm-hpc-workshop-sessions-and-speakers/#5)|Itaru Kitayama (RIKEN)||
|12:30|13:20|Lunch|||
|13:30|13:55|[Porting and Optimization of Numerical Libraries for Arm SVE](/blog/arm-hpc-workshop-sessions-and-speakers/#6)|Toshiyuki Imamura (RIKEN), Tetsuzou Usui (Fujitsu)|[Slides](https://www.slideshare.net/linaroorg/porting-and-optimization-of-numerical-libraries-for-arm-sve)|
|14:00|14:25|[An Evaluation of EasyBuild for Open Source Software Deployment](/blog/arm-hpc-workshop-sessions-and-speakers/#7)|Takahiro Ogura (RIKEN)|[Slides](https://www.slideshare.net/linaroorg/an-overview-of-the-ihkmckernel-multikernel-operating-system)|
|14:30|14:55|[An Overview of the IHK/McKernel Multi-kernel Operating System](/blog/arm-hpc-workshop-sessions-and-speakers/#8)|Balazs Gerofi (RIKEN)|[Slides](https://www.slideshare.net/linaroorg/an-overview-of-the-ihkmckernel-multikernel-operating-system)|
|15:00|15:20|PM Coffee Break|||
|15:30|15:55|[Compilation of COSMO for GPU using LLVM](/blog/arm-hpc-workshop-sessions-and-speakers/#9)|Tobias Grosser (Scalable Parallel Computing Laboratory (SPCL))|[Slides](https://www.slideshare.net/linaroorg/compilation-of-cosmo-for-gpu-using-llvm)|
|16:00|16:25|[Involvement in OpenHPC](/blog/arm-hpc-workshop-sessions-and-speakers/#10)|Takeharu Kato (Fujitsu)|[Slides](https://www.slideshare.net/linaroorg/involvement-in-openhpc)|
|16:30|17:00|Breakdown/clean up||
|18:00|Dinner|Sponsored by Fujitsu and Linaro||

## Day 2

{:.table.responsive-table}
|Start Time|End Time|Title|Reserved for|Presentation|
|----------|--------|-----|------------|------------|
|09:00||Room Opens for Setup|||
|09:15|09:30|Welcome Note|Kanta Vekaria, Head of HPC, Linaro||
|09:30|10:20|[Cyber-physical System and Industrial Applications of Large-Scale Graph Analysis and Optimization Problem](/blog/arm-hpc-workshop-sessions-and-speakers/#11)|Katsuki Fujisawa, (IMI) of Kyushu University||
|10:30|10:55|[New Process/Thread Runtime](/blog/arm-hpc-workshop-sessions-and-speakers/#12)|Atsushi Hori (RIKEN)|[Slides](https://www.slideshare.net/linaroorg/new-processthread-runtime)|
|11:00|11:20|AM Coffee Break|||
|11:30|11:55|[An evaluation of LLVM compiler for SVE with fairly complicated loops](/blog/arm-hpc-workshop-sessions-and-speakers/#13)|Hiroshi Nakashima (Kyoto Univ.)|[Slides](https://www.slideshare.net/linaroorg/an-evaluation-of-llvm-compiler-for-sve-with-fairly-complicated-loops)|
|12:00|12:25|[Oopstreaming](/blog/arm-hpc-workshop-sessions-and-speakers/#14)|Renato Golin (Linaro)|[Slides](https://www.slideshare.net/linaroorg/oopstreaming)|
|12:30|13:20|Lunch|||
|13:30||[Programming Languages & Tools for Higher Performance & Productivity](/blog/arm-hpc-workshop-sessions-and-speakers/#15)|Hitoshi Murai (RIKEN)|[Slides](https://www.slideshare.net/linaroorg/programming-languages-tools-for-higher-performance-productivity)|
|||[Advantages of the Compiler for Post-K computer](/blog/arm-hpc-workshop-sessions-and-speakers/#16)|Shun Kamatsuka (Fujitsu)|
||14:25|[Overview of Programming Assistance Tools for Post-K computer](/blog/arm-hpc-workshop-sessions-and-speakers/#17)|Tomotake Nakamura (Fujitsu)|[Slides](https://www.slideshare.net/linaroorg/postk-building-the-arm-hpc-ecosystem-84548777)|
|14:30|14:55|[The perfect mix: SUSE’s HPC, Arm and Containers](/blog/arm-hpc-workshop-sessions-and-speakers/#18)|Vojtech Pavlik (Suse)||
|15:00|15:20|PM Coffee Break|||
|15:30|15:55|[OpenMP Extension for Explicit SIMD Programming using Arm SVE](/blog/arm-hpc-workshop-sessions-and-speakers/#19)|Jinpil Lee (RIKEN)||
|16:00|16:25|[Performance evaluation with Arm HPC tools for SVE](/blog/arm-hpc-workshop-sessions-and-speakers/#20)|Miwako Tsuji (RIKEN), Yuetsu Kodama (RIKEN)|[Slides](https://www.slideshare.net/linaroorg/performance-evaluation-with-arm-hpc-tools-for-sve)|
|16:30|16:40|Closing Note|David Rusling CTO, Linaro||
|16:40|17:00|Breakdown/clean up|||

**Thanks to our sponsors**

{% include image.html name="arm-hpc-workshop-japan_sponsors.png" alt="Arm HPC Workshop Japan Sponsors"  lightbox_disabled="true" %}

</div>
<div role="tabpanel" class="tab-pane tab-pane-legal" id="accomodation" markdown="1">
# Accommodation:

* * *

If you are travelling and need accommodation, here is a list of local hotels:

*   [Hotel Ryumeikan Ochanomizu Honten](https://www.tripadvisor.com/Hotel_Review-g1066443-d320598-Reviews-Hotel_Ryumeikan_Ochanomizu_Honten-Chiyoda_Tokyo_Tokyo_Prefecture_Kanto.html)
*   [Hotel Metropolitan Tokyo Marunouchi](https://www.tripadvisor.com/Hotel_Review-g1066443-d653033-Reviews-Hotel_Metropolitan_Tokyo_Marunouchi-Chiyoda_Tokyo_Tokyo_Prefecture_Kanto.html)
*   [Hotel Niwa Tokyo](https://www.tripadvisor.com/Hotel_Review-g1066443-d1475716-Reviews-Hotel_Niwa_Tokyo-Chiyoda_Tokyo_Tokyo_Prefecture_Kanto.html)
*   [Akihabara Washington Hotel](https://www.tripadvisor.com/Hotel_Review-g1066443-d598313-Reviews-Akihabara_Washington_Hotel-Chiyoda_Tokyo_Tokyo_Prefecture_Kanto.html)

**Thanks to our sponsors**

{% include image.html name="arm-hpc-workshop-japan_sponsors.png" alt="Arm HPC Workshop Japan Sponsors"  lightbox_disabled="true" %}

</div>

</div><!--End Tab Content-->


</div><!--End Container-->
</div><!--End Row-->

<div class="row no-padding arm-hpc-row bottom">
    <div class="container">
        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% asset_path 'arm-hpc-workshop-japan_website-banner-base.png' %}" alt="Arm HPC Workshop Japan Bottom Banner" class="img-responsive lazyload center-block"/>
    </div>
</div>
</div>