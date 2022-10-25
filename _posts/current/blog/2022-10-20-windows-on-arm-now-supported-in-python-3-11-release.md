---
layout: post
title: "Windows on Arm now supported in Python 3.11 Release "
description: "In this blog we talk about the Python 3.11 release which supports
  Windows on Arm. "
date: 2022-10-20 10:26:27 +01:00
image: /assets/images/content/blog_python_woa.jpg
tags:
  - Python
  - Windows on Arm
  - Python 3.11
category: blog
author: pierrick_bouvier
---
# Introduction

If developers are exploring Windows on Arm and native development, they will be pleased to hear that Python, the most widely-used programming language, now has native support for Arm platforms. Starting with python 3.11, [an official installer](https://www.google.com/url?q=https://www.python.org/ftp/python/3.11.0/python-3.11.0-arm64.exe&sa=D&source=docs&ust=1666699288024817&usg=AOvVaw00yiqc79eiBrZfTL2ocsj5) for Windows on Arm is now available. It’s a great time for developers to start their journey targeting Windows on Arm.

Python has been very successful thanks to its rich ecosystem, and especially pip packages (<https://pypi.org/>). Some packages use native code (mostly C/C++), which usually involve some efforts to enable a new platform.

In the last months, Linaro has been contributing to several key packages, and provided a CI machine to [build and test](https://buildbot.python.org/all/#/builders/729) for Windows on Arm. In this blog we talk about the work involved in making the official installer for Windows on Arm available and how you can get set up. 

# CPython

[CPython](https://www.google.com/url?q=https://github.com/python/cpython/&sa=D&source=docs&ust=1666699350663733&usg=AOvVaw3qdlM8XIn4LjZTn45HBmt3) is the official implementation for Python and its standard library. It’s written in C and Python.

Starting with version 3.8, experimental support for Windows on Arm was [added](https://bugs.python.org/issue36941), and it was possible to download it using [Nuget](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28657680903/Pre-release+Python+Installation#Download-from-NuGet) or [build it from source](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28657680903/Pre-release+Python+Installation#Compile-from-source) directly.

With the release of Python 3.11, Windows on Arm is now listed as a supported platform ([Tier 3](https://peps.python.org/pep-0011/#tier-3)), and an installer is now available [here](https://www.google.com/url?q=https://www.python.org/ftp/python/3.11.0/python-3.11.0-arm64.exe&sa=D&source=docs&ust=1666699288024817&usg=AOvVaw00yiqc79eiBrZfTL2ocsj5). Great time for Pythonistas using a WoA machine 🐍🥳🐍! Note: This is still an experimental support, and some bugs can be present.

Python is using buildbot for its [CI](https://buildbot.python.org/all/#/). Thanks to Linaro’s lab, we could provide a Surface Pro X to run a worker, that is now officially supporting [this](https://buildbot.python.org/all/#/builders/729) platform.

# User’s perspective

## Big picture

Most of the software used in the python community is available through pip.

Projects can be packaged in *wheels* that can contain compiled code, making it easy and fast to install for users. A wheel can be platform agnostic (if the package is pure python), or platform specific.

When installing a package using **pip install mypackage**, pip automatically installs the packages and its dependencies for you. In this order, it will try to:

* Find a platform agnostic wheel
* Find a platform specific wheel
* Build from source code

## Build environment

To be able to install a package using C/C++ code, you’ll need to install *[Visual Studio Community](https://visualstudio.microsoft.com/fr/vs/community/)* (available for free). You just need to select “Desktop development with C++” workflow, and everything should be installed correctly. From there, pip will be able to compile packages that do not offer wheels.

Some python packages require additional tools and libraries for compilation. A few examples are CMake, LLVM, Rust, etc. Having them installed in your environment will help pip to install packages without any additional manual steps. You can refer to [Linaro's wiki page](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28594241585/Package+building+tutorial) that lists instructions and additional requirements for those.

# Maintainer’s perspective

When porting to a new platform, you have to choose between a native and a cross compilation workflow. That’s what we present in this section. More detailed information is available on [our wiki](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28598239406/Python).

If your library is a pure python one, you’re good to go. If you depend on C/C++ code, keep on reading.

## When porting is needed

If your package is a pure python one, there is nothing to do. Pip can create and use “none” packages that don’t target a specific architecture, and they can be created from any machine. If that’s the case, you can skip this whole section.

However, if you are using native code, through C/C++ for instance, you’ll have to make it work for Windows on Arm. Keep on reading to discover possible solutions.

## Going native

The good news is that everything is already handled in Python. It will correctly compile your package, without any further work needed. What’s more, working natively allows you to run tests. However, accessing a Windows on Arm machine might be the tough part. As of today, there is no “free” solution for that, you’ll have to invest in some technology:

### Physical machines

* Any Windows on Arm Laptop/Tablet ( for example, the [Microsoft Surface Pro X](https://www.microsoft.com/en-us/d/surface-pro-x/8xtmb6c575md?activetab=pivot%3aoverviewtab), Lenovo Thinkpad X13s, HP Elite Folio, Samsung Galaxy Book Go)
* Now available: [Microsoft Volterra](https://blogs.windows.com/windowsdeveloper/2022/05/24/create-next-generation-experiences-at-scale-with-windows/). A great devkit for developers.
* Raspberry Pi 4: Small but cheap and flexible to use. Here is [how to install Windows on it](https://www.tomshardware.com/how-to/install-windows-11-raspberry-pi). 

Apple M1: You can run a Windows on Arm machine for free and easily using [UTM](https://mac.getutm.app/). Pricey but might be worth it if you need to support that platform, too.

### Cloud

Since April 2022, it’s possible to run [Windows on Arm on Azure](https://azure.microsoft.com/en-us/blog/now-in-preview-azure-virtual-machines-with-ampere-altra-armbased-processors/).

### CI/CD

So far, there is no platform supporting Windows on Arm as a runner (in particular, it is lacking on GitHub and Azure DevOps). However, you can still set up your own machine and register it as a self hosted runner for your favourite environment. We tried that for GitHub, Azure DevOps, and Gitlab and it’s working well.

### Cross compilation

If you can’t have a dedicated machine, you can still try to cross compile your package. However, you’ll lose the ability to run tests.

To enable cross compilation, some environment variables control:

* How to compile a single C/C++ file ([VSCMD_ARG_TGT_ARCH](https://setuptools.pypa.io/en/latest/history.html#v57-2-0))
* How to package libraries in a wheel file ([SETUPTOOLS_EXT_SUFFIX](https://setuptools.pypa.io/en/latest/history.html#v57-4-0))

Both are now handled by [setuptools](https://github.com/pypa/setuptools) (>=57.4.0). In short, python distutils is now deprecated (with plans to remove it  in python 3.12) and will be replaced by setuptools (details [here](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28593914166/setuptools-distutils)).

To cross compile you have to set this environment:

```
# ensure minimal version of setuptools is available
python -m pip install "setuptools>=57.4.0"
# use distutils coming from setuptools (will be default in python 3.12)
set SETUPTOOLS_USE_DISTUTILS=local
# controls how to compile one file
set VSCMD_ARG_TGT_ARCH=arm64
# how to name library file in wheel (set cp3XX for your python version)
set SETUPTOOLS_EXT_SUFFIX=.cp311-win_arm64.pyd
```

From there, you can create a wheel by using **pip wheel**, as usual. More [tips](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28700082189/Tips+and+tricks+for+porting+to+win-arm64) and [build instructions per package](https://linaro.atlassian.net/wiki/spaces/WOAR/pages/28594241585/Package+building+tutorial) are provided on [our wiki](https://linaro.atlassian.net/wiki/spaces/WOAR/overview).

#### Limitations

As seen above, your project should be using setuptools (with a recent enough version).

Alas some projects are blocked by that: notably [numpy](https://github.com/numpy/numpy). They are now working to move away from old distutils package.

In general, python 3.12 support should be the last step to make sure all packages can be easily cross compiled, as it will be mandatory to use setuptools.

#### cibuildwheel

This is a convenient tool that allows you to create wheels for different architectures, automatically. [This PR](https://github.com/pypa/cibuildwheel/pull/1144) adds support for cross compiling to win-arm64, and should be merged soon.

#### Examples

Some projects who started cross compiling for win-arm64:

* [pywin32](https://github.com/mhammond/pywin32/blob/90c31cba7a3948b484e426a5673b0dbc61254f22/.github/workflows/main.yml#L64)
* [libclang](https://github.com/sighingnow/libclang/blob/8f64e5bc1a2bc9ddebf0cd262d096f5c262757dc/.github/workflows/libclang-windows-aarch64.yml)
* [maturin](https://github.com/PyO3/maturin/blob/main/.github/workflows/release.yml)

## Work in Progress

* cibuildwheel: PR to cross compile for win-arm64
* Numpy: moving from distutils to meson, should enable cross compilation
* PyTorch : Linaro is working to enable Windows on Arm platform (status)
* Anaconda and Conda-forge: we have been discussing with Anaconda and conda-forge community to enable Windows on Arm platform. This is now in progress: stay tuned!

## That’s all folks!

This concludes our tour of Python for Windows on Arm. Even though the path to support all python packages is still long, there are plenty of packages already available. This effort will be continued, and python 3.12 should be the last step to democratise this, thanks to setuptools usage becoming mandatory. Considering Python is the most used programming language, a lot of developers will have the opportunity to program with Python on Windows on Arm natively.

Microsoft and Linaro will continue to be involved in this enablement, and keep helping communities to enable Python for Windows on Arm. 

For more information on Linaro’s Windows on Arm Project and how to get involved, go to [our Project page](https://www.linaro.org/windows-on-arm/).