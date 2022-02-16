---
layout: post
title: How to set up Windows on Arm for LLVM development
description: "Linaro is working with Arm, Microsoft and Qualcomm to enable open
  source tools and applications to run natively on Windows. In this blog, Diana
  Picus, David Spickett, Maxim Kuvyrkov and Omair Javaid from Linaro's Toolchain
  Working Group provide a step by step guide on how to set up Windows on Arm for
  LLVM development. "
date: 2022-02-16 10:52:19 +00:00
image: /assets/images/content/llvm-image.jpg
tags:
  - windowsonarm
  - Windows
  - LLVM
  - Windows11
  - Microsoft
  - Visual Studio
category: blog
author: diana.picus
---
At Linaro, we are working on developing, testing and releasing LLVM for the Windows on Arm (WoA) platform. This work is happening as part of [Linaro’s Windows on Arm project](https://linaro.atlassian.net/wiki/spaces/WOAR/overview). Together with Arm, Qualcomm and Microsoft, we are aiming to establish a healthy self-sustaining Arm open source ecosystem for Windows. This involves enabling open source tools and applications such as LLVM to run natively on Windows on Arm. 

LLVM is a compiler infrastructure known, among other things, for its highly modular structure. If you're looking for a good C/C++ compiler for WoA, you can try to use clang from one of [the official releases](https://releases.llvm.org/) on LLVM's GitHub page. However, if you're tempted to hack on it yourself, you can follow the instructions on this page to get up and running.

The hardware we have at the moment is Microsoft Surface X Pro laptops, with Windows 10 Pro. This post describes the steps that we have taken in order to prepare our machines to compile LLVM and some of its subprojects. Some of these machines are used as part of the upstream LLVM CI (see the [Windows buildbots section here](http://llvm.validation.linaro.org/)) and also for building the official release binaries for Windows on Arm. Your mileage may vary on other hardware or other Windows versions, but hopefully this post will still be useful as a starting point or reference.

We are going to cover installing all the tools and dependencies needed, cloning LLVM, building it from source and running the tests. But first, a few words about the environment:

## Adding to the PATH

For all the steps below you’ll need to put things on the PATH, if an installer doesn’t do it for you. To do that, open the start menu, type “environment” and open the link to “System Properties”. Once there, click “Environment Variables” to see a GUI for editing them.

**Note**: Just like in Unix, adding to the path doesn’t refresh active terminals, and there is no way to refresh an active terminal. So you need to open a fresh terminal after changing environment variables.

After following this guide your PATH should have these extra entries:

* C:\Users%USERNAME%\AppData\Local\Programs\Python\Python39-32\Scripts
* C:\Users%USERNAME%\AppData\Local\Programs\Python\Python39-32
* C:\Program Files (x86)\Git\usr\bin

  * This is for mingw utilities.  Git adds itself to System PATH
* C:\Users%USERNAME%\source\ninja
* C:\Program Files\LLVM\bin
* C:\Program Files (x86)\CMake\bin

For building release packages we also install 7-Zip [Download](https://www.7-zip.org/download.html) and NSIS <https://nsis.sourceforge.io/Download>.

* C:\Program Files (x86)\7-Zip
* C:\Program Files (x86)\NSIS.

## Install Visual Studio Build Tools

**Note:** Microsoft Visual Studio 2022 has been released but the installer is a 64-bit application requiring Arm64 emulation support. Arm64 emulation is generally available for Windows 11 but only a preview build is available for Windows 10.

Build Tools is the command line portion of Visual Studio. You can download it from [Download Visual Studio Tools - Install Free for Windows, Mac, Linux](https://visualstudio.microsoft.com/downloads/) (“Tools for Visual Studio 2019” → “Build Tools for Visual Studio 2019”). An important part of this is the VsDevCmd.bat script, which sets up the environment so that you can use the Build Tools.

The Visual Studio installer has many options, but generally, you want various things to do with C++ desktop development for **ARM64** (we do not need ARM components, in this context ARM means 32-bit Arm).

If you have build issues later, come back to the installer and add anything that seems relevant. Here’s the list of what is minimally needed, check this against “Individual Components” in your “Installation Details” panel:

* MSVC v142 - VS 2019 C++ x64/x86 build tools (latest)

  * This is needed to make the VsDevCmd.bat script correctly setup LIB/LIBPATH/INCLUDE variables for x86->arm64 cross-compilation.  All the lib/header files are actually present, but vsdevcmd.bat doesn’t add them without x86-hosted tools. Installing this may become optional in the future.
* MSVC v142 - VS 2019 C++ ARM64 build tools (latest)

  * Without this, VsDevCmd.bat doesn’t setup x86->arm64 cross-compilation.C++ ATL for latest v142 build tools (ARM64)
* LLVM needs ATL libraries for processing debug info.
* Windows 10 SDK

  * Versions 18362 and 19041 are known to work.
  * Version 20348 is known to cause LLVM build failure. 

    * error: use of undeclared identifier '__umulh'

This is required for a correct cross-compilation setup.

**Note**: There’s probably a choice in the installer for where to install to. If you do that, modify any instructions as needed. The default will look something like “C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\Common7\Tools\”.

## Install MSVC Redist Libraries

These libraries have to be installed in order to get msvcp140.dll, vcruntime140.dll, concrt140.dll and other DLLs. Without them, MSVC-built applications will not run; in an LLVM build this manifests itself as llvm-tblgen.exe not being able to start.

Currently, these libraries are not installed by default as part of Windows or Visual Studio. You will have to search the filesystem for vc_redist.arm64.exe, and you’ll most likely find it in “C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\VC\Redist\MSVC\v142\” .

## Install the Latest LLVM for Windows on Arm

Go to *[Release LLVM 13.0.0 · llvm/llvm-project](https://github.com/llvm/llvm-project/releases/tag/llvmorg-13.0.0)  and download the Windows on Arm (“woa64”) installer. Run it and if it asks to add llvm to the path say yes. If it doesn’t or you forget, you can always add the install directory to PATH yourself, as described above.

## Install CMake

Recent versions of Visual Studio ship cmake as an x86_64 binary (in VS circa-2020.08 cmake was an x86_32 binary). Instead install an i386 build from [Index of /files](https://cmake.org/files/)  and add that to the PATH.
A host compiler of Clang 12 or 13 is known to work with CMake 3.17.
Clang 13 is known not to work with CMake 3.21 or 3.22.

## Install Python

To install Python, you can go to [Python.org](https://www.python.org/) and get a 32-bit x86 build of the latest Python3. Remember to tell the installer to add python variables to the environment (so that cmake can find python3).

## Install Git

Go to Git - [Downloading Package](https://git-scm.com/download/win)  and get the latest 32-bit x86 installer. There is likely a copy of git in the VS Build Tools install, but we recommend installing a separate copy so that you also get the tools git for Windows is packaged with. These tools are used for testing llvm:

1 llvm-lit.py: <...>\llvm-project\llvm\utils\lit\lit\llvm\config.py:46: note: using lit tools: C:\Program Files (x86)\Git\usr\bin

You can get these tools by installing MSYS2 instead, but git for Windows is based on that so the end result is the same.

## Build Ninja

VS Build Tools does come with a ninja but the default one doesn’t run on WoA. You should build from source ([GitHub - ninja-build/ninja: a small build system with a focus on speed ](https://github.com/ninja-build/ninja)) using the cmake build method.
([Releases · ninja-build/ninja](https://github.com/ninja-build/ninja/releases)  does provide prebuilt releases but at this time the Windows variant is x86_64 only)

## Testing the Install

First, open a plain terminal “Command Prompt” (ignore the cross prompts shortcuts you might find in the start menu).
Then run VsDevCmd.bat to setup the environment.
1 "C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\Common7\Tools\VsDevCmd.bat" -host_arch=x86 -arch=arm64
2 <...>
3 "C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\Common7\Tools\VsDevCmd.bat" -test
4 <...>
5 set PATH=C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\DIA SDK\bin\arm64;%PATH%

If the second test command fails, your build probably won’t work. If figuring out why it failed is difficult, go ahead and do a build anyway. The compiler’s errors will probably be more informative.

**Note:** We setup the Visual Studio environment first because it adds some copies of cmake and ninja that we don’t want. By doing it first, then checking cmake and ninja, we know if our preferred versions are being used.

**Note:** We have to add the arm64 DIA (debug information access) DLL onto the path otherwise it will find the x86_32 version in BuildTools\Common7\IDE.

Now check that cmake and ninja can run at all.
1 ninja --version
2 cmake --version

If you’ve made it this far - congratulations! You are now ready to clone and build LLVM.

## Check out LLVM

The git for Windows install will default to converting line endings to windows style. This applies to any file git thinks is ASCII, which includes some archive files used for llvm tests. As stated in [Getting Started with the LLVM System ](https://llvm.org/docs/GettingStarted.html#checkout-llvm-from-git)— LLVM 15.0.0git documentation  , use the following to override this behaviour:
1 git clone --config core.autocrlf=false https://github.com/llvm/llvm-project.git

## Doing a Build

In the same command prompt where you have run VsDevCmd.bat as described above, set your compiler(s) to be the clang-cl.exe we installed earlier:
1 set "CC=clang-cl.exe"
2 set "CXX=clang-cl.exe"

Then make a folder next to your llvm checkout and from that folder:
1 cmake ..\llvm-project\llvm -DCMAKE_BUILD_TYPE=Release -DLLVM_ENABLE_PROJECTS="clang;lld;llvm" -DLLVM_ENABLE_ASSERTIONS=ON -DCMAKE_C_FLAGS="-fms-compatibility-version=19.14" -DCMAKE_CXX_FLAGS="-fms-compatibility-version=19.14" -DCMAKE_TRY_COMPILE_CONFIGURATION=Release -DLLVM_DEFAULT_TARGET_TRIPLE="arm64-pc-windows-msvc" -G Ninja

Some specifics:

* ⚙ D92515 Bump MSVC required version to 19.14 bumped llvm’s required MSVC version, ironically meaning that clang-cl version 12 and earlier can’t build it. That’s why we need the “-fms-compatibility-version" flag to have clang-cl pretend to be a newer MSVC. You don’t need to add the -fms-compatibility-version flag for clang-cl version 13 and later.
* A known issue with some versions of cmake is that it builds all try_compile/try_run as debug even if your selected build type is release. This is why we set “-DCMAKE_TRY_COMPILE_CONFIGURATION=Release”. Not doing so causes a try_run to fail to get error message strings, so lit defaults to Linux strings and many tests will fail.
* We set LLVM_DEFAULT_TARGET_TRIPLE manually because the prompt we use is an x86 32 bit host prompt. There is no arm64 to arm64 prompt, so cmake detects the host/default target triple “correctly” but it’s not what we really want.

Then build as usual with ninja.

Here is where you might get errors about includes and linker directories and so on. The best way to solve this is to go back to the Visual Studio Installer and add anything that looks related.

You will find things online about adding certain directories to your path but be careful because you could just be adding x86 libs. Installing Arm64 specific variants is almost always what you want.

If you’re doing a debug build and you see linker errors about missing libs, check if the file names end with “d” (e.g. “foo.lib” would be “food.lib” for a debug build). To solve this, search for those files and add their location to PATH. They don’t appear to be automatically added by the installers.

## Running the Tests

Windows Defender likes to scan new files, including those that tests create. This changes their last accessed times and there’s one test known to fail because of this, “LLVM :: ThinLTO/X86/cache.ll”. To exclude the folder follow [Add an exclusion to Windows Security](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26)  and add “<llvm-build-dir>/test”. You shouldn’t need to restart Defender or the machine,  it takes effect automatically.

Running the tests should be as easy as ninja check-all (or a smaller target if you’re only interested in a specific subset of the tests).

At the time of writing, there are some [known failures](https://linaro.atlassian.net/browse/WOA-130) when running the LLVM tests, which is why at the moment they are not run on the buildbots. Fixing those is a work in progress. If you would like to get involved, feel free to get in touch with [the Toolchain Workgroup at Linaro](https://lists.linaro.org/mailman3/lists/linaro-toolchain.lists.linaro.org/).