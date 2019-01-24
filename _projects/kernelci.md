---
project_id: "6"
title: KernelCI
description: |-
    Devicetree.org is a community effort by many companies and individuals to facilitate the future evolution of the Devicetree Standard.
keywords: LAVA, KernelCI, Linux, Kernel, CI, Continuous, Integration, specification, standards, upstream, rebuild, check
permalink: /engineering/projects/kernelci/
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsMsm3BVTtpDdRHUmeZTOSiW&playnext=1
type: linaro
sub_projects:
- project_email: kernelci-admin
  project_project_link_name: kernelci-admin
  project_maintainers: ''
  project_name: kernelci-admin
  project_patches_project_url: http://patches.linaro.org/api/projects/255/?format=json
  project_scm_project_url: ''
  project_project_url: https://github.com/kernelci/kernelci-admin
- project_email: kernelci-backend
  project_project_link_name: kernelci-backend
  project_maintainers: ''
  project_name: kernelci-backend
  project_patches_project_url: http://patches.linaro.org/api/projects/235/?format=json
  project_scm_project_url: ''
  project_project_url: https://github.com/kernelci/kernelci-backend
- project_email: kernelci-backend-config
  project_project_link_name: kernelci-backend-config
  project_maintainers: ''
  project_name: kernelci-backend-config
  project_patches_project_url: http://patches.linaro.org/api/projects/256/?format=json
  project_scm_project_url: ''
  project_project_url: https://github.com/kernelci/kernelci-backend-config
- project_email: kernelci-build
  project_project_link_name: kernelci-build
  project_maintainers: ''
  project_name: kernelci-build
  project_patches_project_url: http://patches.linaro.org/api/projects/234/?format=json
  project_scm_project_url: ''
  project_project_url: https://github.com/kernelci/kernelci-build
- project_email: kernelci-core
  project_project_link_name: kernelci-core
  project_maintainers: ''
  project_name: kernelci-core
  project_patches_project_url: http://patches.linaro.org/api/projects/257/?format=json
  project_scm_project_url: ''
  project_project_url: https://github.com/kernelci/kernelci-core
- project_email: kernelci-frontend
  project_project_link_name: kernelci-frontend
  project_maintainers: ''
  project_name: kernelci-frontend
  project_patches_project_url: http://patches.linaro.org/api/projects/236/?format=json
  project_scm_project_url: ''
  project_project_url: https://github.com/kernelci/kernelci-frontend
---
The importance of testing and continuous integration was recognized in the first year of Linaro. A team was established to build [Linaro's Automated Validation Architecture (LAVA)](/engineering/projects/lava/) and the engineering teams have used member hardware, virtual models and cloud services in this framework to test their work from the beginning.

In addition to validating coding with LAVA, the engineers need to integrate their code into upstream repositories, rebuild and check everything works correctly and this needs to happen continuously throughout the day. This process is called Continuous Integration and, between the end of 2013 and beginning of 2014, Linaro developed [KernelCI.org](https://kernelci.org/) to support this. Further information can be found on the site and the [KernelCI wiki page](http://wiki.kernelci.org/).
