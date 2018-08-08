---
title: Engineering
layout: empty
permalink: /engineering/
js-package: engineering
css-package: engineering-landing
---
{% include breadcrumb.html %}
<div class="container-fluid" id="engineering-graphic" style="background-image:url({% asset_path 'engineering-bg.png' %})">
    <!-- Circular Background -->
    <div class="circle-background center-block" id="circles">
        <div class="circle-one">
            <div class="circle-two">
                <div class="circle-three"></div>
            </div>
        </div>
    </div>
    <!--- Top Engineering Icons Row -->
    <div class="row engineering-top-row">
        <div class="container">
            <div class="col-xs-6 col-sm-3 engineering-icon">
                <a href="/engineering/groups/ldcg/">
                    <img class="img-responsive lazyload" data-src="{% asset_path 'LDCG col.svg' %}" 
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                </a>
                <h3 class="group-title">Data Center & Cloud</h3>
            </div>
            <div class="col-xs-6 col-sm-3 engineering-icon">
                <a href="/engineering/groups/ledge/">
                    <img class="img-responsive lazyload" data-src="{% asset_path 'LEDGE col.svg' %}" 
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                </a>
                <h3 class="group-title">Edge & Fog Computing</h3>
            </div>
            <div class="col-xs-6 col-sm-3 engineering-icon">
                <a href="/engineering/groups/lcg/">
                    <img class="img-responsive lazyload" data-src="{% asset_path 'LCG col.svg' %}" 
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                </a>
                <h3 class="group-title">Consumer</h3>
            </div>
            <div class="col-xs-6 col-sm-3 engineering-icon">
                <a href="/engineering/groups/lite/">
                    <img class="img-responsive lazyload" data-src="{% asset_path 'LITE col.svg' %}" 
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                </a>
                <h3 class="group-title">IOT & Networking</h3>
            </div>
        </div>
    </div>
    <!--- Dividing Engineering Icons Row -->
    <div class="row engineering-dividing-row">
        <div class="container">
            <div class="mobile-center-icons">
                <div class="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4 text-center">
                    <div class="col-xs-offset-1 col-xs-10 col-sm-6 col-sm-offset-3">
                        <img id="hover-icon" class="center-block img-responsive lazyload" data-src="{% asset_path 'CoreLogo.svg' %}" 
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                        <span class="core-descriptor kernel">Kernel</span> 
                        <span class="core-descriptor toolchain">Toolchain</span> 
                        <span class="core-descriptor security">Security</span> 
                        <span class="core-descriptor power">Power</span> 
                        <span class="core-descriptor multimedia">Multimedia</span> 
                    </div>
                </div>
            </div>  
        </div>
    </div>
    <!--- Bottom Engineering Icons Row -->
    <div class="row engineering-bottom-row">
        <div class="container">
            <div class="col-xs-6 col-sm-3 engineering-icon">
                <a href="/sig/ltn/">
                    <img class="img-responsive lazyload" data-src="{% asset_path 'antenna col.svg' %}" 
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                </a>
                <h3 class="group-title">Telecom & Networking</h3>
            </div>
            <div class="col-xs-6 col-sm-3 engineering-icon">
                <a href="/engineering/incubators/autonomous-vehicles/">
                    <img class="img-responsive lazyload" data-src="{% asset_path 'AutoCol.svg' %}" 
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                </a>
                <h3 class="group-title">Autonomous Vehicles</h3>
            </div>
            <div class="col-xs-6 col-sm-3 engineering-icon">
                <a href="/engineering/incubators/machine-intelligence/">
                    <img class="img-responsive lazyload" data-src="{% asset_path 'Machine col.svg' %}" 
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                </a>
                <h3 class="group-title">Machine Intelligence</h3>
            </div>
            <div class="col-xs-6 col-sm-3 engineering-icon">
                <a href="/sig/hpc/">
                    <img class="img-responsive lazyload" data-src="{% asset_path 'HPCCol.svg' %}" 
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                </a>
                <h3 class="group-title">High Performance Computing</h3>
            </div>
        </div>
    </div>
</div>
