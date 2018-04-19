---
title: About
description: |-
    Linaro’s mission is to lead collaboration in the ARM ecosystem by bringing together industry and the open source community to work on key projects, deliver great tools, reduce industry wide fragmentation and redundant effort, and provide common software foundations for all. The mission is not exclusive to ARM – Linaro can work on other architectures and technologies where the work benefits Linaro members and the ARM ecosystem.
permalink: /about/
js-package: about
css-package: about
layout: default
---
<div class="container-fluid">
    <div class="row about-content">
        <div class="container">
          <h1 class="text-center">About Linaro</h1>
          <p class="text-center about-top-text">
            Linaro’s mission is to lead collaboration in the ARM ecosystem by bringing together industry and the open source community to work on key projects, 
            deliver great tools, reduce industry wide fragmentation and redundant effort, and provide common software foundations for all. 
          </p>
          
          <div class="timeline-carousel owl-carousel">                    
              <div class="owl-item__inner">
                  
              </div>
          </div>
          <p>
            The mission is not exclusive to ARM – Linaro can work on other architectures and technologies where the work benefits Linaro members and the ARM ecosystem.
          </p>

          <p>
            Member companies fund Linaro and provide a significant proportion of its engineering resources as assignees who work full time on Linaro projects and member engineers who work on member-sponsored projects. Linaro’s engineering team, including contributed member resources, consists of about 300 software developers. Linaro engages with the broader open source community on a daily basis on IRC, mailing lists and at industry events, including at its own Linaro Connect events. The work page provides an overview of, and links to more information about, Linaro’s organization, groups, projects and initiatives.
          </p>

          <h2>Many hands make light work</h2>
          <p>
              The members determine what work is done by the Linaro engineering team. As the number of Linaro members increases, the company’s capacity to provide engineering solutions grows and so the return on a member’s investment increases. This results in more common engineering work being completed by the Linaro engineers, enabling the members to focus more of their own resources on innovation and differentiation.
          </p>
          <p>
              Linaro’s work is at the heart of all modern Linux-based devices running on ARM processors, including Android smartphones and tablets. As markets for ARM processors develop, new opportunities for collaborative engineering are created around Linux and other open source operating systems. These opportunities include software stacks and tools in mobile, networking, servers, the digital home and IoT.
          </p>
        </div>
    </div>

    <div class="row linaro-timeline">
        <article class="timeline">
          <h4>Timeline</h4>
          <div class="timeline-carousel owl-carousel">      
                      
            {% assign news = site.data.timeline | sort: 'date' %}
            
            {% for news-posting in news  %}
            
            <div class="owl-item__inner">
                <div class="timeline-item">
                    <div class="date-wrap">
                        <span class="date">{{ news-posting.date | date: "%Y"}}</span>
                    </div>
                    <div class="text-wrap">
                        <strong>{{ news-posting.date | date: "%B %Y"}}</strong>
                        <p>
                            {{ news-posting.text | strip_html | truncatewords:30 }}
                        </p>
                        {% if news-posting.link %}
                        <a href="{{new-posting.link}}">Read more</a>
                        {% endif %}
                    </div>
                </div>
            </div>
        
            {% endfor %}
          
          </div> <!-- // timeline-carousel -->
          <div class="timeline-bar"></div>
      </article>
    </div>
    <div class="row employee-map">
        <div class="container text-center">
            <h1 id="we-are-global">We are global</h1>
            <p class="center employee-map-text">
              Linaro’s mission is to lead collaboration in the ARM ecosystem by bringing together industry and the open source community to work on key projects, 
              deliver great tools, reduce industry wide fragmentation and redundant effort, and provide common software foundations for all.
            </p>
             
             {% include about-world-map.html %}
            
            <div class="col-sm-4 linaro-office hidden-xs cambridge">
                <div class="office cambridge">
                    <ul>
                        <li><strong>Cambridge, UK</strong></li>
                        <li>Harston Mill, Royston Rd</li>
                        <li>Cambridge, UK</li>
                        <li>CB22 7GG</li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-4 linaro-office hidden-xs boston">
                <div class="office boston">
                    <ul>
                        <li><strong>Boston, USA</strong></li>
                        <li>Harston Mill, Royston Rd</li>
                        <li>Cambridge, UK</li>
                        <li>CB22 7GG</li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-4 linaro-office hidden-xs shanghai">
                <div class="office shanghai">
                    <ul>
                        <li><strong>Shanghai, China</strong></li>
                        <li>Harston Mill, Royston Rd</li>
                        <li>Cambridge, UK</li>
                        <li>CB22 7GG</li>
                    </ul>
                </div>
            </div>
            
            <div class="office-carousel owl-carousel visible-xs">                    
                <div class="owl-item__inner">
                    <div class="col-xs-12 no-padding linaro-office visible-xs cambridge">
                        <div class="office cambridge">
                            <ul>
                                <li><strong>Cambridge, UK</strong></li>
                                <li>Harston Mill, Royston Rd</li>
                                <li>Cambridge, UK</li>
                                <li>CB22 7GG</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="owl-item__inner">
                    <div class="col-xs-12 no-padding linaro-office visible-xs boston">
                        <div class="office boston">
                            <ul>
                                <li><strong>Boston, USA</strong></li>
                                <li>Harston Mill, Royston Rd</li>
                                <li>Cambridge, UK</li>
                                <li>CB22 7GG</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="owl-item__inner">
                    <div class="col-xs-12 no-padding linaro-office visible-xs shanghai">
                        <div class="office shanghai">
                            <ul>
                                <li><strong>Shanghai, China</strong></li>
                                <li>Harston Mill, Royston Rd</li>
                                <li>Cambridge, UK</li>
                                <li>CB22 7GG</li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div> <!-- // timeline-carousel -->
            
            <div class="col-xs-12 remote-teams">
                <h5>Remote Team</h5>
            </div>
            
            
            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 remote-teams hidden-xs">
                <ul>
                    <li>Australia</li>
                    <li>Brazil</li>
                    <li>Canada</li>
                    <li>China</li>
                    <li>Denmark</li>
                    <li>Finland</li>
                </ul>
            </div>
            
            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 remote-teams hidden-xs">
                <ul>
                    <li>France</li>
                    <li>Germany</li>
                    <li>India</li>
                    <li>Italy</li>
                    <li>Japan</li>
                    <li>Latvia</li>
                </ul>
            </div>
            
            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 remote-teams hidden-xs">
                <ul>
                    <li>Luxembourg</li>
                    <li>Mexico</li>
                    <li>Netherlands</li>
                    <li>Pakistan</li>
                    <li>Romania</li>
                    <li>Russia</li>
                </ul>
            </div>
            
            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 remote-teams hidden-xs">
                <ul>
                    <li>Serbia</li>
                    <li>Spain</li>
                    <li>Sweden</li>
                    <li>Switzerland</li>
                    <li>Taiwan</li>
                    <li>UK</li>
                </ul>
            </div>
            
            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 remote-teams hidden-xs">
                <ul>
                    <li>Ukraine</li>
                    <li>USA</li>
                </ul>
            </div>
            
            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 remote-teams hidden-xs">
            </div>
            
            <div class="remote-team-carousel owl-carousel visible-xs">                    
                <div class="owl-item__inner">
                    <div class="col-xs-6 remote-teams">
                        <ul>
                            <li>Australia</li>
                            <li>Brazil</li>
                            <li>Canada</li>
                            <li>China</li>
                            <li>Denmark</li>
                            <li>Finland</li>
                        </ul>
                    </div>

                    <div class="col-xs-6 remote-teams">
                        <ul>
                            <li>France</li>
                            <li>Germany</li>
                            <li>India</li>
                            <li>Italy</li>
                            <li>Japan</li>
                            <li>Latvia</li>
                        </ul>
                    </div>
                </div>
                
                <div class="owl-item__inner">
                    <div class="col-xs-6 remote-teams">
                        <ul>
                            <li>Luxembourg</li>
                            <li>Mexico</li>
                            <li>Netherlands</li>
                            <li>Pakistan</li>
                            <li>Romania</li>
                            <li>Russia</li>
                        </ul>
                    </div>
                    
                    <div class="col-xs-6 remote-teams">
                        <ul>
                            <li>Serbia</li>
                            <li>Spain</li>
                            <li>Sweden</li>
                            <li>Switzerland</li>
                            <li>Taiwan</li>
                            <li>UK</li>
                        </ul>
                    </div>
                </div>
                
                <div class="owl-item__inner">
                    <div class="col-xs-6 remote-teams">
                        <ul>
                            <li>Ukraine</li>
                            <li>USA</li>
                        </ul>
                    </div>
                    
                </div>
            </div> <!-- // timeline-carousel -->
            
            
            
           
        </div>
    </div>
    
    <div class="row organisation-sections">
        <div class="container">
            <div class="organisation-carousel owl-carousel visible-xs">                    
                <div class="owl-item__inner">
                    <div class="col-xs-12 no-padding">
                        <div class="organisation-section">
                            <h3>Board of Directors</h3>
                            <p>
                                The Board is the principal decision making body and 
                                focuses on ensuring the organization is moving toward 
                                its strategic mission through a combination of industry
                            </p>
                            <a class="btn btn-primary section-btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div class="owl-item__inner">
                    <div class="col-xs-12 no-padding">
                        <div class="organisation-section">
                            <h3>Technical Steering Committee</h3>
                            <p>
                                The Linaro Office of the CTO (OCTO) supports the TSC
                                 in determining Linaro’s technical strategy, ensuring 
                                 technical coherency across Linaro’s engineering activities
                            </p>
                            <a class="btn btn-primary section-btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div class="owl-item__inner">
                    <div class="col-xs-12 no-padding">
                        <div class="organisation-section">
                            <h3>Executive Team</h3>
                            <p>
                                The management team work with the Technical Steering
                                 Committee and Linaro members to translate strategy 
                                 and resources into deliverables. They are responsible for the...
                            </p>
                            <a class="btn btn-primary section-btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div class="owl-item__inner">
                    <div class="col-xs-12 no-padding">
                        <div class="organisation-section">
                            <h3>Office of the CTO</h3>
                            <p>
                                The Linaro Office of the CTO (OCTO) supports the TSC
                                 in determining Linaro’s technical strategy, ensuring
                                  technical coherency across Linaro’s engineering activities
                            </p>
                            <a class="btn btn-primary section-btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
              
            </div> <!-- // timeline-carousel -->
            
            
            <div class="col-sm-6 hidden-xs">
                <div class="organisation-section">
                    <h3>Board of Directors</h3>
                    <p>
                        The Board is the principal decision making body and 
                        focuses on ensuring the organization is moving toward 
                        its strategic mission through a combination of industry
                    </p>
                    <a class="btn btn-primary section-btn">
                        Learn More
                    </a>
                </div>
            </div>
            <div class="col-sm-6 hidden-xs">
                <div class="organisation-section">
                    <h3>Technical Steering Committee</h3>
                    <p>
                        The Linaro Office of the CTO (OCTO) supports the TSC
                         in determining Linaro’s technical strategy, ensuring 
                         technical coherency across Linaro’s engineering activities
                    </p>
                    <a class="btn btn-primary section-btn">
                        Learn More
                    </a>
                </div>
            </div>
            <div class="col-sm-6 hidden-xs">
                <div class="organisation-section">
                    <h3>Executive Team</h3>
                    <p>
                        The management team work with the Technical Steering
                         Committee and Linaro members to translate strategy 
                         and resources into deliverables. They are responsible for the...
                    </p>
                    <a class="btn btn-primary section-btn">
                        Learn More
                    </a>
                </div>
            </div>
            <div class="col-sm-6 hidden-xs">
                <div class="organisation-section">
                    <h3>Office of the CTO</h3>
                    <p>
                        The Linaro Office of the CTO (OCTO) supports the TSC
                        in determining Linaro’s technical strategy, ensuring
                        technical coherency across Linaro’s engineering activities
                    </p>
                    <a class="btn btn-primary section-btn">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    </div>
        
    
    
    
</div>