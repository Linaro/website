---
layout: post
title: "How to set up VS Code for LLVM development "
description: >
  In this blog, Senior Engineer Omair Javaid describes how to set up VS Code for
  LLDB/LLVM development on remote Linux and Windows machines. More importantly
  this how-to guide will help you set up native LLVM toolchain for C++
  development on Windows on Arm platform.
date: 2021-11-08 01:36:21 +00:00
image: /assets/images/content/code_highway-2-.jpg
tags:
  - WoA
  - Windows on Arm
  - LLVM
  - LLDB
category: blog
author: Omair.Javaid@linaro.org
---
## Introduction

Visual Studio Code is a highly configurable IDE and nearly all its settings and user interface can be modified according to most use-cases. It provides the ability to extend its features through third-party extensions which help add support for languages, debuggers, and various tools required for most development workflows. VS Code IDE provides an extensive set of extensions for editing and debugging C++ applications. Most importantly it can be used for LLVM development on remote machines seamlessly providing local quality development experience.
In the past, most of our LLVM development was targeted for Arm/Linux and the command line mostly deemed enough with occasional use of Eclipse IDE mostly for its C++ indexing. This changed when we started developing LLVM support for Windows on Arm and needed native Windows IDE that can support remote LLVM development with relatively fast indexing capabilities, a very good GIT integration, out of the box terminal support etc. We also wanted to enable integration of various LLVM tools with visual studio to facilitate developers using a Windows on Arm machine.

This blog describes how to set up VS Code for LLDB/LLVM development on remote Linux and Windows machines. More importantly this how-to will help you setup native LLVM toolchain for C++ development on Windows on Arm platform.

{% include image.html path="/assets/images/content/visual-studio-image-1.png" alt="Visual Studio Image" %}

## Installation setup

The steps described in this document are tested to run on Ubuntu 18.04, however they are equally applicable on any platform that VS Code supports. [Download and install the latest version of visual studio code](https://code.visualstudio.com/download). For LLVM development workflow, we will install the following additional VS Code extensions:

* **ms-vscode.cpptool**s Adds C/C++ language support 
* **ms-python.python** Adds Python language support
* **ms-vscode.cmake-tools** Adds Cmake based configuration support
* **xaver.clang-format** Adds clang-format support
* **ms-vscode-remote.remote-ssh** Adds support to use any remote machine for development providing close to local quality development experience.

Extensions can be installed in the following ways:

* **From Windows CMD or Linux terminal** by using: code --install-extension <extension-name>
* **From VS Code Quick Open** (Ctrl+P) and ext install <extension-name>
* **From VS Code marketplace** GUI (Ctrl + shift + X) and search/install all required extensions.

{% include image.html path="/assets/images/content/visual-studio-installation-set-up.png" alt="Visual Studio Installation Set Up Image" %}

## Setting up remote connection

VS Code enables you to open remote workspace folders on local machines, allowing [a seamless development experience](https://code.visualstudio.com/docs/remote/ssh). We need to have a working SSH (Secure Shell) connection between the host and [Windows](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse) or Linux remote machines. 

If a working SSH connection has been set up and SSH configuration has been written to .ssh/config, we can go ahead and connect to the remote workspace by opening VS Code Quick Open (Ctrl + Shift + P) and Remote-SSH: Connect to host option.

{% include image.html path="/assets/images/content/setting-up-remote-connection-1.png" alt="Setting up remote connection image 1" %}

We will get a drop down list of all the hosts configured in .ssh/config file.  Alternatively, VS code also provides an option “Add new ssh host” which will take remote ssh information from the user and write appropriate ssh config for later use.

{% include image.html path="/assets/images/content/setting-up-remote-connection-2.png" alt="Setting up remote connection image 2" %}

## Setting up LLVM development

In most use-cases we will open our project source code directory in VS Code which will serve as our [VS Code workspace](https://code.visualstudio.com/docs/editor/workspaces). VS Code workspace root directory contains a .vscode folder that hosts the user configured workspace specific settings for the current project. These settings include editor, compiler, debugger and various other use-case specific configuration files written in JSON or YAML.
For the purpose of LLVM development I have written configuration files required for configuring, building and running LLVM using cmake, compiler settings for various target platforms and debugger configurations. These configurations can be found in .vscode in [this github repository](https://github.com/omjavaid/llvm-dev/). Download the .vscode folder containing LLVM JSON configs and include it into your llvm-project root directory. A brief description on working of each of these files below:

* [cmake-kits.json](https://github.com/omjavaid/llvm-dev/blob/master/.vscode/cmake-kits.json) [A cmake-kit file](https://vector-of-bool.github.io/docs/vscode-cmake-tools/kits.html) allows for writing project specific compiler configurations for various use cases.
* [cmake-variants.json](https://github.com/omjavaid/llvm-dev/blob/master/.vscode/cmake-variants.json) [cmake-variants file](https://vector-of-bool.github.io/docs/vscode-cmake-tools/variants.html) contains a set of project specific build configurations called variants. These are mostly environment variables and configuration flags passed to cmake.
* [launch.json](https://github.com/omjavaid/llvm-dev/blob/master/.vscode/launch.json) Contains [debug configuration information](https://code.visualstudio.com/docs/editor/debugging) for the current project.
* [settings.json](https://github.com/omjavaid/llvm-dev/blob/master/.vscode/settings.json) is a project specific settings file used to configure VS code and its installed extensions. It may contain settings like build folder path, source code path etc. It also contains editor settings like tabs width, color schemes, themes etc. 
* [tasks.json](https://github.com/omjavaid/llvm-dev/blob/master/.vscode/tasks.json) contains a set of instructions to automate various use-cases like build, run and test. Tasks are like scripts that can run commands and do sequential steps.
* [clang-aarch64-linux.cmake](https://github.com/omjavaid/llvm-dev/blob/master/.vscode/clang-aarch64-linux.cmake) Adds cmake toolchain file for supporting cross compilation for AArch64/Linux targets on non-native Linux hosts.
* [clang-armhf-linux.cmake](https://github.com/omjavaid/llvm-dev/blob/master/.vscode/clang-armhf-linux.cmake) Adds cmake toolchain file for supporting cross compilation for Arm/Linux targets on non-native Linux hosts.

These configuration files are still under development and will keep on evolving as we configure VS code to adapt to various use-cases of LLVM development.
Steps below describe remote LLVM development using VS Code on a remote WoA/Linux machine.

1. Download and install relevant VS Code extensions as described above. 
2. [Download this .vscode folder](https://github.com/omjavaid/llvm-dev/) and copy it into your workspace directory.
3. Clone llvm-project repository in your workspace folder.
4. Launch VS code by running: code <path-to-workspace-directory> from terminal/cmd

cmake-variants.json describes various combinations of release/debug build configurations to select from. We have written our platform custom variant configurations to cater for Linux host, WoA hosts and cross compile for linux targets. Also two separate variant configurations are written for lldb-server and generic LLVM. An appropriate variant combination can be selected by using VS Code quick open (Ctrl + Shift +P) > CMake: Select variant. 

{% include image.html path="/assets/images/content/setting-up-remote-connection-3.png" alt="Setting up remote connection image 3" %}

VS Code auto detects available compiler options in the current system and makes them available to users via CMake kits. We have added custom compiler kits (cmake-kits.json) to configure clang-cl based compilation for WoA host and Arm/AArch64 Linux cross compilation mostly needed to cross-compile lldb-server executable. An appropriate compiler kit can be selected by using VS Code quick open (Ctrl + Shift +P) > CMake: Select kits. 

{% include image.html path="/assets/images/content/setting-up-remove-connection-4.png" alt="Setting up remote connection image 4" %}

Once we have selected the appropriate variant and kit we can select a build target from VS Code quick open (Ctrl + Shift +P) > CMake: Set build target. In most cases our build target will be set to “all”.