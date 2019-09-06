---
title: Upstream Projects
description: |-
    Linaro focuses much of its engineering work on contributing to existing upstream projects like the Linux Kernel and GNU Compiler Collection (GCC).
keywords: Arm, GCC, GNU, Compiler, Automated, Validation, Architecture, Linux, Kernel, 96Boards
permalink: /engineering/projects-temp/
project: false
css-package: projects
layout: jumbotron-container
jumbotron:
    triangle-divider: true
    title: Upstream Projects
    description: ""
    include: projects-jumbotron-include.html
    background-image: /assets/images/content/engineering-bg.jpg
---
When a suitable target project doesn't exist, Linaro may create one. The first of these was the [Linaro Automated
Validation Architecture](https://validation.linaro.org/)(LAVA) - Linaro needed a test and
validation architecture for internal use and decided to create this as an open source project. The list of initiatives
continues to grow and now includes software projects, an open hardware specification
([96Boards](http://www.96boards.org/)) and Linaro's bi-annual event ([Linaro Connect](http://connect.linaro.org/)).

Below is a list of all the open source upstream projects we contribute to and/or maintain. Click on the project to find out more
and view stats on contributions.

<div class="projects">
{% assign projects = site.projects | where: 'project', 'true' %}
{% for project in projects %}
    {% assign projectTextSize = project.title | size %}
    {% unless project.project_stats == "false" %}
        {% unless project.display == "false" %}
            <a hreff="{{project.url}}">
                <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 project-item {% if projectTextSize > 13 %}small-text{% endif %}">
                    {{project.title}} {% if project.project_stats != "false"%}<i class="fa fa-area-chart" aria-hidden="true"></i>{% endif %}
                </div>
            </a>
        {% endunless %}
    {% endunless %}
{% endfor %}
</div>

<br>

<div class="projects">
{% assign projects = site.projects | where: 'project', 'true' %}
{% for project in projects %}
    {% assign projectTextSize = project.title | size %}
    {% if project.project_stats == "false" %}
    {% unless project.display == "false" %}
    <a hreff="{{project.url}}">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 project-item {% if projectTextSize > 13 %}small-text{% endif %}">
            {{project.title}}
        </div>
    </a>
    {% endunless %}
    {% endif  %}
{% endfor %}
</div>
