---
layout: linaro-home
js-package: home
home: true
nav-light: true
css-include: main-home
---
<div class="row">
    <div class="jumbotron text-center homepage-jumbotron" id="homepage-jumbotron" style="background: linear-gradient(
                 rgba(20,20,20, .5),
                 rgba(20,20,20, .5)),
                 url('{% asset_path 'linaro-home-v2.jpg' %}') no-repeat center center scroll;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;">
    <div class="container">
        <div class="caption">
          <h2 class="linaro-sub-title fade-in-one">Leading software collaboration in the </h2>
          <h1 class="linaro-title fade-in-two"><span class="linaro-green">Arm Ecosystem</span></h1>
        </div>
          <div class="linaro-home-slider-buttons col-md-8 col-md-offset-2 fade-in-three">
              <div class="col-md-12">
                  <a href="/about/" class="btn btn-linaro-home" >Learn More</a>
                  <a href="/members/" class="btn btn-linaro-home" >Members</a>
              </div>
          </div>
    </div>
</div>
</div>



<div class="row" id="main-content-container">
    <div class="container home-inline-carousel">
        <div class="owl-carousel owl-theme" id="home-carousel">
            <div class="item home-page-slider-item">
                <div class="main-slider-image"><img  class="lazyload" data-src="{% asset_path 'services-home-page.png' %}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
                <div class="col-xs-12 home-page-slider-info">
                    <div class="home-page-slider-image">
                        <img class="lazyload logo" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
                        data-src="{% asset_path 'developer-services-logo.png' %}"/>
                    </div>
                    <div class="home-page-slider-text text-center">
                    <span class="developer-services-line-1">Advanced Developer Software Services</span><br>
                    <span class="developer-services-line-2">Including SoC and MCU upstreaming</span>
                    </div>
                </div>
                <div class="home-page-slider-button text-center">
                    <a href="/services/" class="btn btn-linaro-home services">
                        Learn more
                    </a>
                </div>
            </div>
            <div class="item home-page-slider-item">
                <div class="main-slider-image"><img  class="lazyload" data-src="{% asset_path 'hpc-home-page.png' %}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
                <div class="col-xs-12 home-page-slider-info">
                    <div class="home-page-slider-text">
                        <span class="arm-hpc-japan-slide-line-1">ARM HPC Workshop</span><br>
                        <span class="arm-hpc-japan-slide-line-2">
                            BY RIKEN AICS AND LINARO
                            <div class="arm-hpc-divider"></div>
                        </span>
                        <span class="arm-hpc-japan-slide-line-3">12-13th DEC 2017 - AKIHABARA HALL, TOKYO </span>
                    </div>
                </div>
                <div class="home-page-slider-button hpc">
                    <a href="/events/armhpcjapan2017/" class="btn btn-linaro-home">
                        Learn more
                    </a>
                </div>
            </div>
            <div class="item home-page-slider-item">
                <div class="main-slider-image"><img  class="lazyload" data-src="{% asset_path '96boards-home-page.png' %}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
                <div class="col-xs-12 home-page-slider-info">
                    <div class="home-page-slider-image">
                        <img class="lazyload logo" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
                        data-src="{% asset_path 'developer-services-logo.png' %}"/>
                    </div>
                    <div class="home-page-slider-text text-center">
                        <span class="96boards-slider-line-1">Developer & Prototype on the</span> <br>
                        <span class="96boards-slider-line-2">Latest Arm Technology</span>
                    </div>
                </div>
                <div class="home-page-slider-button text-center">
                    <a href="/initiatives/96boards/" class="btn btn-linaro-home 96boards">
                        Learn more
                    </a>
                </div>
            </div>
            <div class="item home-page-slider-item">
                <div class="main-slider-image"><img  class="lazyload" data-src="{% asset_path 'connect-home-page.png' %}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
                <div class="col-xs-12 home-page-slider-info">
                    <div class="home-page-slider-image">
                        <img class="lazyload logo" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
                        data-src="{% asset_path 'developer-services-logo.png' %}"/>
                    </div>
                    <div class="home-page-slider-text text-center">
                        <span class="linaro-connect-slide-text">
                            Linaro Connect brings together engineers and industry experts to discuss, learn, network and push new technologies forward.
                        </span>
                    </div>
    
                </div>
                <div class="home-page-slider-button text-center">
                    <a href="/initiatives/connect/" class="btn btn-linaro-home connect">
                        Learn more
                    </a>
                </div>
            </div>
            
        </div>
        
    </div>
</div>

<div class="row" id="groups_home_block">
    <div class="container">
    
        <div class="col-md-5ths col-xs-12 group_block leg">
            <div class="row  group_header leg">
                <div class="col-xs-3 group_icon center-block">
                    <picture>
                      <source srcset="{% asset_path 'LEG-logo.svg' %}" media="(min-width: 992px)" />
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% asset_path 'LEG-logo.svg' %}" class="lazyload img-responsive group_icon_img center-block"/>
                    </picture>
                </div>
                <div class="col-xs-9 group_title">
                    <span class="main-title">LEG</span>
                    <span class="sub-title">Enterprise</span>
                </div>
            </div>
            <div class="row group_content leg">
                <div class="col-xs-12 group_content leg">
                    <p>
                        Software Defined Storage & Infra-
                        structure (SDS/SDI), Big Data
                        (Hadoop/Hive/ Spark/Ambari),
                        DPDK & SnabbSwitch, HPC, AI/ML
                    </p>
                </div>
            </div>
        </div>
        
        
        
        <div class="col-md-5ths col-xs-12 group_block lng">
            <div class="row  group_header lng">
                <div class="col-xs-3 group_icon center-block">
                    <picture>
                      <source srcset="{% asset_path 'LNG-logo.svg' %}" media="(min-width: 992px)" />
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% asset_path 'LNG-logo.svg' %}" class="lazyload img-responsive group_icon_img center-block"/>
                    </picture>
                </div>
                <div class="col-xs-9 group_title">
                    <span class="main-title">LNG</span>
                    <span class="sub-title">Networking</span>
                </div>
            </div>
            <div class="row group_content lng">
                <div class="col-xs-12 group_content ">
                    <p>
                        Networking,
                        OpenDataPlane (ODP),
                        SmartNIC
                    </p>
                </div>
            </div>
        </div>
        
        <div class="col-md-5ths col-xs-12 group_block lhg">
            <div class="row  group_header lhg">
                <div class="col-xs-3 group_icon center-block">
                    <picture>
                      <source srcset="{% asset_path 'LHG-logo.svg' %}" media="(min-width: 992px)" />
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% asset_path 'LHG-logo.svg' %}" class="lazyload img-responsive group_icon_img center-block"/>
                    </picture>
                </div>
                <div class="col-xs-9 group_title">
                    <span class="main-title">LNG</span>
                    <span class="sub-title">Networking</span>
                </div>
            </div>
            <div class="row group_content lhg">
                <div class="col-xs-12 group_content">
                    <p>
                        Networking,
                        OpenDataPlane (ODP),
                        SmartNIC
                    </p>
                </div>
            </div>
        </div>
        
        <div class="col-md-5ths col-xs-12 group_block lmg">
            <div class="row  group_header lmg">
                <div class="col-xs-3 group_icon center-block">
                    <picture>
                      <source srcset="{% asset_path 'LMG-logo.svg' %}" media="(min-width: 992px)" />
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% asset_path 'LMG-logo.svg' %}" class="lazyload img-responsive group_icon_img center-block"/>
                    </picture>
                </div>
                <div class="col-xs-9 group_title">
                    <span class="main-title">LMG</span>
                    <span class="sub-title">Networking</span>
                </div>
            </div>
            <div class="row group_content lmg">
                <div class="col-xs-12 group_content">
                    <p>
                        Networking,
                        OpenDataPlane (ODP),
                        SmartNIC
                    </p>
                </div>
            </div>
        </div>
        
        <div class="col-md-5ths col-xs-12 group_block lite">
            <div class="row  group_header lite">
                <div class="col-xs-3 group_icon center-block">
                    <picture>
                      <source srcset="{% asset_path 'LITE-logo.svg' %}" media="(min-width: 992px)" />
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{% asset_path 'LITE-logo.svg' %}" class="lazyload img-responsive group_icon_img center-block"/>
                    </picture>
                </div>
                <div class="col-xs-9 group_title">
                    <span class="main-title">LITE</span>
                    <span class="sub-title">IoT/Embedded</span>
                </div>
            </div>
            <div class="row group_content lite">
                <div class="col-xs-12 group_content">
                    <p>
                        Networking,
                        OpenDataPlane (ODP),
                        SmartNIC
                    </p>
                </div>
            </div>
        </div>
        
        
        
        
        
    </div>
</div>


<div class="row" id="blogs_home_block">
    <div class="container">
        <div class="col-xs-12 text-center">
            <h1 class="blogs_home_block_text"> Latest News & Blogs </h1>
        </div>
        
        {% assign posts = site.posts | where: "featured_on_home", "true" | limit: 3%}
        
        {% for post in posts %}
            <div class="col-xs-12 col-sm-4">
                <div class="blogs_home_block_post">
                    <a href="{{post.url}}">
                        <h3 class="blogs_home_block_post_title">{{post.title}}</h3>
                    </a>
                </div>
            </div>
        {% endfor %}
        
        <div class="col-xs-12 text-center">
            <a href="/hub/" class="btn btn-linaro-home dark">Read More</a>
        </div>

    </div>
</div>
