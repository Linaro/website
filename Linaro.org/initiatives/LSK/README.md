# LSK

### Introduction
Linaro Stable Kernel (LSK) aims to provide a stable basis for system integration of ARM hardware, integrating Linaro developed features available in mainline with kernel.org Long Term Stable (LTS) releases to allow integration of those features in production systems. 
Most LSK features can be disabled at either build or run time so are included as part of the core LSK functionality. To support those feature sets which have substantial impacts on the kernel and cannot be disabled at build or run time the LSK is provided in multiple flavours. Currently these are: 
"Core" - LTS + features which can be runtime disabled 
"Android" - Core + additional changes from AOSP
"RT" - Core + the RT patch set adding realtime features 
The number of flavours is kept to a minimum in order to make selection simpler. As much as possible is in the core LSK in order to ensure that features are as widely available as possible. 
Currently the LSK release in Development phase is base based on kernel version v4.1/v4.4. Note: details for maintenance mode LSK versions can be found below. 

### Objective
Linaro Stable Kernel (LSK) aims to provide a stable basis for system integration of ARM hardware, integrating Linaro developed features available in mainline with kernel.org Long Term Stable (LTS) releases to allow integration of those features in production systems. 

### Communication/Support (Links to IRC, Mailing list etc)
Linaro Kernel mailing list <linaro-kernel AT lists DOT linaro DOT org>
LSK Tech Lead: Mark Brown <broonie AT linaro DOT org>
LSK Engineer: Alex Shi <Alex.Shi AT linaro DOT org>
https://support.linaro.org/

### Community Information (Links to external site such as collaborate, jira, github, documentation etc)
Source Repository: git://git.linaro.org/kernel/linux-linaro-stable.git 
WIKI: https://wiki.linaro.org/LSK

### Governance eg: TSC, (If there is one)
TSC

### Media (Video/Presentation)

