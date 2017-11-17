---
layout: linaro-home
css-pack: home
js-package: home
home: true
nav-light: true
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
                <a href="https://www.linaro.org/services/" alt="Linaro Connect">
                    <img src="{% asset_path 'linaro-home-page-graphic-01.png'%}" class="img-responsive" alt="Linaro Connect">
                </a>
            </div>
            <div class="item home-page-slider-item">
                <a href="https://www.linaro.org/events/armhpcjapan2017/" alt="96boards">
                    <img src="{% asset_path 'linaro-home-page-graphic-02.png'%}" class="img-responsive" alt="96boards ">
                </a>
            </div>
            <div class="item home-page-slider-item">
                <a href="https://www.96boards.org" alt="Arm HPC Workshop">
                    <img src="{% asset_path 'linaro-home-page-graphic-03.png'%}" class="img-responsive" alt="Arm HPC Workshop">
                </a>
            </div>
            <div class="item home-page-slider-item">
                <a href="http://connect.linaro.org" alt="Linaro Developer Services">
                    <img src="{% asset_path 'linaro-home-page-graphic-04.png'%}" class="img-responsive" alt="Linaro Developer Services">
                </a>
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
