---
title: Linaro Developer Services
description: |-
    Members currently working with Linaro and how to become a member of Linaro.
layout: empty
permalink: /services/
js-package: membership
css-package: services
---
<div class="container-fluid" id="why-join-container"  style="background-image: url('/assets/images/content/membership-bg.jpg');">
    <div class="row overlay padded-row" id="developer-services">
        <div class="container text-center">
            <img data-src="/assets/images/content/LinaroDSVerticalAlt2.png" class="center-block lazyload img-responsive services-img" alt="Linaro Developer Services Logo"/>
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
            <h2 class="text-center fly">Developer Services</h2>
            <div class="honeycomb">
                <div class="ibws-fix">
                    <div class="hexagon fly">
                        <div class="hexagontent">
                            <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_Security.svg" 
                            alt="Security Services"/>
                        </div>
                    </div>
                    <div class="hexagon fly">
                        <div class="hexagontent">
                            <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_Bootloaders.svg" 
                            alt="Bootloader Services"/>
                        </div>
                    </div>
                    <div class="hexagon fly">
                        <div class="hexagontent">
                            <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_kernels.svg" 
                            alt="Kernel Services"/>
                        </div>
                    </div>
                    <div class="hexagon fly">
                        <div class="hexagontent">
                            <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_builds.svg" 
                            alt="Build Services"/>
                        </div>
                    </div>
                    <div class="hexagon fly">
                        <div class="hexagontent">
                            <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_power.svg" 
                            alt="Power Services"/>
                        </div>
                    </div>
                </div>
                <div class="ibws-fix">
                    <div class="hexagon fly">
                        <div class="hexagontent">
                            <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_96boards.svg" 
                            alt="96Boards Services"/>
                        </div>
                    </div>
                    <div class="hexagon fly">
                        <div class="hexagontent">
                            <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_toolchain.svg" 
                            alt="Toolchain Optimization Services"/>
                        </div>
                    </div>
                    <div class="hexagon fly">
                        <div class="hexagontent">
                            <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_consultancy.svg" 
                            alt="Open Source Consultancy Services"/>
                        </div>
                    </div>
                    <a href="/services/testing-validation-services/">
                        <div class="hexagon fly">
                            <div class="hexagontent">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_validation.svg" 
                                alt="Testing and Validation Services"/>
                            </div>
                        </div>
                    </a>
                    <a href="/services/hands-on-training/">
                        <div class="hexagon fly">
                            <div class="hexagontent">
                                <img class="lazyload img-responsive" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/assets/images/content/DeveloperServices-icons_training.svg" 
                                alt="Hands on Training Services"/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row padded-row" id="members-and-partners">
        <div class="container">
            <h2 class="text-center fly">Members & Partners</h2>
                {% assign linaro-members = "" | split: ',' %}
                {% assign boards-members = "" | split: ',' %}
                {% for each in site.data.members %}
                    {% if each.id != "boards-ai" and each.id != "boards-mezzanine" and each.id != "boards-mp" and each.id != "boards-sc" %}
                        {% for member in each.members %}
                            {% unless linaro-members contains member %}
                                {% assign linaro-members = linaro-members | push: member %}
                            {% endunless %}
                        {% endfor %}
                    {% else %}
                        {% for member in each.members %}
                            {% unless boards-members contains member %}
                                {% assign boards-members = boards-members | push: member %}
                            {% endunless %}
                        {% endfor %}
                    {% endif %}
                {% endfor %}
                {% assign sorted-linaro-members = linaro-members | sort: 'name' %}
                {% assign sorted-boards-members = boards-members | sort: 'name' %}
        </div>
    </div>
    <div class="row">
        <div class="container linaro-members ">
            <h2 class="text-center fly">Linaro</h2>
            {% for member in sorted-linaro-members %}
                <div class="col-xs-6 col-sm-3 col-md-2 member-col fly">
                    <a href="{{member.url}}">
                        <div class="member lazyload" style="background-image: url('/assets/images/members/{{member.image}}');"></div>
                    </a>
                </div>
            {% endfor %}
            <div class="col-xs-12 text-center">
                <p class="center-block">
                To view Linaro members by level of engagement, click <a href="/members-by-group/">here</a>.
                </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="container boards-members fly">
            <h2 class="text-center">96Boards</h2>
            {% for member in sorted-boards-members %}
                <div class="col-xs-6 col-sm-3 col-md-2 member-col">
                    <a href="{{member.url}}">
                        <div class="member lazyload" style="background-image: url('/assets/images/members/{{member.image}}');"></div>
                    </a>
                </div>
            {% endfor %}
        </div>
        <div class="container text-center">
            <p class="center-block">
            To view 96Boards members by level of engagement, click <a href="/members-by-group/">here</a>.
            </p>
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
        <div class="container">
            <h2 class="text-center fly">Get in Touch</h2>
            <div class="get-in-touch">
                <p>
                
                </p>
            </div>
        </div>
    </div>
</div>