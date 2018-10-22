---
title: Linaro Developer Services
description: |-
    Members currently working with Linaro and how to become a member of Linaro.
layout: empty
permalink: /services/
js-package: membership
css-package: services
image:
    name: LinaroDSVertical.png
    path: /assets/images/content/LinaroDSVertical.png 
---
<div class="container-fluid" id="why-join-container"  style="background-image: url('/assets/images/content/membership-bg.jpg');">
    <div class="row overlay" id="developer-services">
        <div class="container text-center">
            <img data-src="/assets/images/content/LinaroDSVerticalAlt2.png" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  class="fly center-block lazyload img-responsive services-img" alt="Linaro Developer Services Logo"/>
            <p class="fly center-block">
                We are the <span class="bold">Arm software experts</span>
                and we are available to help you.
            </p>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row" id="projects">
        <div class="container">
            <div class="col-xs-12 text-center">
                <h2>Linaro Members:</h2>
            </div>
        </div>
        <div class="owl-carousel owl-theme" id="projects-slider">
            {% assign linaro-members = "" | split: ',' %}
            {% for each in site.data.members %}
                {% for member in each.members %}
                    {% unless linaro-members contains member %}
                        {% assign linaro-members = linaro-members | push: member %}
                    {% endunless %}
                {% endfor %}
            {% endfor %}
            {% assign sorted-linaro-members = linaro-members | sort: 'name' %}
            {% for member in sorted-linaro-members %}
            <a href="{{member.url}}" target="_blank">
                <div class="item project-item">
                    <div class="project-image lazyload" style="background: url('/assets/images/members/{{member.image}}') no-repeat center center;
                    background-size: contain; -webkit-background-size: contain; -moz-background-size: contain; -o-background-size: contain;"></div>
                </div>
            </a>
            {% endfor %}
        </div>
    </div>
    <div class="row padded-row" id="key-factors">
        <div class="container">
            <h2 class="text-center fly">Key Benefits</h2>
            <div class="col-xs-12 col-sm-4 fly key-factor text-center">
                <div class="key-factor-block fly">
                    <span class="key-factor-title">
                        Efficiently support the latest technology features upstream
                    </span>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 fly key-factor text-center">
                <div class="key-factor-block fly">
                    <span class="key-factor-title">
                        Reduce burden of post-release software updates and support
                    </span>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 fly key-factor text-center">
                <div class="key-factor-block fly">
                    <span class="key-factor-title">
                        Available to both Linaro Member and non-Member companies
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="row padded-row" id="services">
        <div class="container">
            <h2 class="text-center fly">Developer Services</h2>
            <div class="honeycomb">
                <div class="ibws-fix">
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro Developer Services has significant experience securing Arm systems; including secure boot, working with Trustzone, porting OP-TEE and working with Trusted Applications.">
                        <div class="hexagontent">
                            <a href="/services/security/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_Security.svg" 
                                alt="Security Services"/>
                            </a>
                        </div>
                    </div>
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro Developer Services has broad experience helping companies plan and implement the right bootloader architecture for their commercial product platform.">
                        <div class="hexagontent">
                            <a href="/services/bootloaders/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_Bootloaders.svg" 
                                alt="Bootloader Services"/>
                            </a>
                        </div>
                    </div>
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro Developer Services has deep and wide kernel engineering and maintenance expertise.">
                        <div class="hexagontent">
                            <a href="/services/kernel-lts/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_kernels.svg" 
                                alt="Kernel Services"/>
                            </a>
                        </div>
                    </div>
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro Developer Services has extensive experience aiding customers with BSP maintenance, optimization and builds.">
                        <div class="hexagontent">
                            <a href="/services/bsp-builds-support/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_builds.svg" 
                                alt="Build Services"/>
                            </a>
                        </div>
                    </div>
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro has a world class team with deep understanding of the Arm architecture and Linux power management framework.">
                        <div class="hexagontent">
                            <a href="/services/power-management/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_power.svg" 
                                alt="Power Services"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="ibws-fix">
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro Developer Services has a wealth of experience with Linaro’s 96Boards program. We have developed the complete BSP for several boards and have provided aid to many other board and SoC manufacturers.">
                        <div class="hexagontent">
                            <a href="/services/96boards/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_96boards.svg" 
                                alt="96Boards Services"/>
                            </a>
                        </div>
                    </div>
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro has world class teams with deep understanding of the Arm architecture and Arm toolchain (GNU toolchain and LLVM).">
                        <div class="hexagontent">
                            <a href="/services/toolchain-optimization-services/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_toolchain.svg" 
                                alt="Toolchain Optimization Services"/>
                            </a>
                        </div>
                    </div>
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Developer Services has extensive experience successfully building working relationships with open source communities.">
                        <div class="hexagontent">
                            <a href="/services/open-source-consultancy/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_consultancy.svg" 
                                alt="Open Source Consultancy Services"/>
                            </a>
                        </div>
                    </div>
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro Developer Services provides comprehensive continuous integration (CI) testing for client’s development and product software">
                        <div class="hexagontent">
                            <a href="/services/testing-validation-services/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_validation.svg" 
                                alt="Testing and Validation Services"/>
                            </a>
                        </div>
                    </div>
                    <div class="hexagon fly" data-toggle="tooltip" data-container="body" data-placement="top" title="Linaro Developer Services provides customized training on a variety of topics.">
                        <div class="hexagontent">
                            <a href="/services/hands-on-training/">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_training.svg" 
                                alt="Hands on Training Services"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
<div class="container-fluid">
    <div class="row padded-row" id="membership-levels">
        <div class="container">
            <h2 class="text-center fly">About</h2>
<div markdown="1" class="fly">
We at Linaro Developer Services are Arm software engineering experts. We pride ourselves on the breadth of our hands-on experience and knowledge, depth of our capabilities, quality of our work and professionalism of the engagements with our customers.

Open Source software is our culture and we have helped many customers work with open source software communities. We also routinely work with customers under non-disclosure on confidential development projects.

Linaro plays an influential and key leadership role across the Arm ecosystem, developing optimized software for advanced Arm technologies in every
segment. Linaro Developer Services make that expertise available to you for use on your project.
</div>
        </div>
    </div>
    <div class="row padded-row" id="get-in-touch">
        <div class="container text-center">
            <h2>Get in Touch.</h2>
            <div class="get-in-touch" id="contact-btn">
                <a href="mailto:contact@linaro.org?subject=Linaro.org%20-%20Developer%20Services" class="fly btn btn-primary btn-two">Contact Us</a>
            </div>
        </div>
    </div>
</div>