---
author: webmaster
comments: false
date: 2013-04-25 16:45:10+00:00
layout: post
link: https://www.linaro.org/blog/releases-blog/linaro-13-04-released/
slug: linaro-13-04-released
title: Linaro 13.04 Released
wordpress_id: 2644
categories:
- Releases
---

<blockquote>

> 
> Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved. **~Mattie Stepanek**
> 
> 
</blockquote>




**The Linaro 13.04 release is now available for download!**




The 13.04 Linaro release highlights the focused efforts of all the Linaro Teams – Working Groups, Landing Teams and Platform Teams who have provided all the updates and new features that are integrated on top of Android, Ubuntu and OpenEmbedded during this release cycle.




The 13.04 release cycle has been one of the busiest and most productive cycles to date. There were 7 individual team releases during this cycle all of which help build the foundation of the Linaro 13.04 release. It is through the teamwork and collaboration between Linaro, its members and community that the achievements of each are unified in these monthly releases and continue to build the future of Linux on ARM.




Quality builds continue to be the foundation on which the future of Linux on ARM is being built, this quality is ensured through our testing and validation teams. Fedora support has been merged in LAVA and users can now submit LAVA jobs using a Fedora pre-built image. The QA Team announced that tests to cover big.LITTLE cluster init and shutdown have been added to the big.LITTLE core test suite and big.LITTLE extended test case scenarios have been implemented.




Our Builds and Baselines teams are the footers that support this foundation of collaboration and during the 13.04 release front, Dalvik VM unit test has now been automated and the native toolchain on Android has been updated to Linaro GCC 4.8. The Android tree has been updated to compile with GCC 4.8 based toolchains and all related changes have been upstreamed. The ARMv7 KVM enabled kernels intergrated into our pre-built images are now built daily and tested in Linaro's CI loop. The OpenEmbedded ARMv8 engineering build now provides 64bit HipHop VM requirements for porting and optimization purposes. The OpenEmbedded test cases have been automated and a current list of these tests can be found at:




[https://git.linaro.org/gitweb?p=qa/test-definitions.git;a=tree;f=openembedded](https://git.linaro.org/gitweb?p=qa/test-definitions.git;a=tree;f=openembedded)




The Linaro Kernel WG focused on the following areas during this release cycle: refactor EHCI controller code, depopulate Exynos/ux500/plat-nomadik, expand binder unit test, improve eMMC power management support, port some of the platforms to multi-platform support, Android upstreaming effort, and much more.




Additional highlights include the release of a big.LITTLE porting guide by the Power Management WG and Linaro GCC 4.8 by the Linaro Toolchain WG. To find out more about the highlights and a more detailed list of the updates, fixes, and features that were added this cycle please see the release notes.




Just a reminder that [registration](http://linaroconnect-lce13-eorg.eventbrite.com/) for [Linaro Connect Europe 2013](http://www.linaro.org/connect) which is being held in Dublin, Ireland at the Burlington Hotel on 8 - 12 July 2013 is [now open](http://linaroconnect-lce13-eorg.eventbrite.com/). Register and make your hotel reservations today. Additionally, the top level schedule of sessions is now coming together. A [schedule of events](http://lce-13.zerista.com/event?event_order=start&event_page=1&owner=other&owner_id=453800) can be found on the [Linaro Connect website](http://www.linaro.org/connect/).




We hope to see you in Dublin, where you too can be part of this amazing future of Linux on ARM.




**USING THE RELEASE:**




We encourage everybody to use the 13.04 release. The download links for all images and components are available on our downloads page:






	
  * 


[http://www.linaro.org/downloads/](http://www.linaro.org/downloads/)





See the detailed highlights of this release to get an overview of what has been accomplished by the Working Groups, Landing Teams and Platform Teams. The release details are linked from the “Details” column for each released artifact on the release information:

_ _

_ _

_ _



	
  * 


[http://wiki.linaro.org/Cycles/1304/Release#Release_Information](http://wiki.linaro.org/Cycles/1304/Release#Release_Information)





_ _

_ _

_ _


**USING THE ANDROID-BASED IMAGES**




The Android-based images come in three parts: system, userdata and boot. These need to be combined to form a complete Android install. For an explanation of how to do this please see:


_ _

_ _

_ _



	
  * 


[http://wiki.linaro.org/Platform/Android/ImageInstallation](http://wiki.linaro.org/Platform/Android/ImageInstallation)





_ _

_ _

_ _


If you are interested in getting the source and building these images yourself please see the following pages:


_ _

_ _

_ _



	
  * 


[http://wiki.linaro.org/Platform/Android/GetSource](http://wiki.linaro.org/Platform/Android/GetSource)






	
  * 


[http://wiki.linaro.org/Platform/Android/BuildSource](http://wiki.linaro.org/Platform/Android/BuildSource)





_ _

_ _

_ _


**USING THE UBUNTU-BASED IMAGES**




The Ubuntu-based images consist of two parts. The first part is a hardware pack, which can be found under the hwpacks directory and contains hardware specific packages (such as the kernel and bootloader). The second part is the rootfs, which is combined with the hardware pack to create a complete image. For more information on how to create an image please see:


_ _



	
  * 


[http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation](http://wiki.linaro.org/Platform/DevPlatform/Ubuntu/ImageInstallation)





_ _


**GETTING INVOLVED**




More information on Linaro can be found on our websites:


_ _



	
  * 


Homepage: [http://www.linaro.org](http://www.linaro.org/)






	
  * 


Wiki: [http://wiki.linaro.org](http://wiki.linaro.org/)





_ _


Also subscribe to the important Linaro mailing lists and join our IRC channels to stay on top of Linaro developments:


_ _



	
  * 


Announcements: [http://lists.linaro.org/mailman/listinfo/linaro-announce](http://lists.linaro.org/mailman/listinfo/linaro-announce)






	
  * 


Development: [http://lists.linaro.org/mailman/listinfo/linaro-dev](http://lists.linaro.org/mailman/listinfo/linaro-dev)





_ _


IRC:


_ _



	
  * 


#linaro on irc.linaro.org or irc.freenode.net






	
  * 


#linaro-android irc.linaro.org or irc.freenode.net





_ _


**KNOWN ISSUES WITH THIS RELEASE**




For any errata issues, please see:


_ _



	
  * 


[http://wiki.linaro.org/Cycles/1304/Release#Known_Issues](http://wiki.linaro.org/Cycles/1304/Release#Known_Issues)





_ _


Bug reports for this release should be filed in Launchpad against the individual packages that are affected. If a suitable package cannot be identified, feel free to assign them to:


_ _



	
  * 


[http://www.launchpad.net/linaro](http://www.launchpad.net/linaro)





