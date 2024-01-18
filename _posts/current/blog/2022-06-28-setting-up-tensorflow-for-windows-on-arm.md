---
layout: post
title: Setting up Tensorflow for Windows on Arm
description: In this blog, Everton Constantino talks about how to set up
  Tensorflow for Windows on Arm.
date: 2022-06-28 10:34:14 +01:00
image: /assets/images/content/Banner_AI.jpg
tags:
  - Windows On Arm
  - Machine Learning
category: blog
author: everton.constantino
---
# Introduction

Tensorflow is one of the major machine learning frameworks used today. It is usually distributed via Python packages built using Bazel. At the time of writing, there is no official package available for Tensorflow to run natively on Windows on Arm. However, to help developers use these tools, this blog post shows how you can build your own Tensorflow package using some patches we developed to do this.

The process starts with setting up the environment, then you build your own Bazel and finally build Tensorflow. We have enabled Bazel for Windows on Arm. The version that the official binary is available in is 5.1. 

Unfortunately it is not possible to build our current Tensorflow branch with this version, which is why you will need to build it from source. All the steps were tested on a Surface Pro with Windows 11. 

# Setup Requirements

* Microsoft Visual Studio Community Edition 2019. Download at <https://visualstudio.microsoft.com/vs/community/> - please note that this is not the latest release and make sure to install the Windows SDK.
* Bazel 4.2.1 for Windows x86. You will use  this to bootstrap the Windows on Arm Bazel version. Download the source from <https://github.com/nsait-linaro/bazel>, check out branch 4.2.1-win_arm64, and then follow the steps on <https://bazel.build/install/compile-source#build-bazel-using-bazel>. 
* Download a JDK. We used zulu 17.32.13 which you can find at <https://www.azul.com/downloads/?package=jdk> and make sure to download the Windows on Arm version.
* Python 3.10.0. This can be downloaded with the nuget tool <https://dist.nuget.org/win-x86-commandline/latest/nuget.exe> and then run the following command:

```
nuget.exe install pythonarm64 -Version 3.10.0
```

NB: This only needs to be done for Python 3.10.0 From 3.11.0a5 onwards official binaries for Windows on Arm can be downloaded. Make sure to add this Python to path. 

* LLVM and MSYS2. LLVM for Windows on Arm is being released by Linaro at [https://github.com/llvm/llvm-project/releases/download/llvmorg-14.0.0/LLVM-14.0.0-woa64.zip](https://www.google.com/url?q=https://github.com/llvm/llvm-project/releases/download/llvmorg-14.0.0/LLVM-14.0.0-woa64.zip&sa=D&source=docs&ust=1656413216028945&usg=AOvVaw1LwcTzz9MkUsryVAVZ5tgw) and MSYS2 can be found at <https://www.msys2.org/>, add them to your PATH as well. Then set up a Powershell script with appropriate PATHs and also with the following lines:

```
cmd.exe /c "call `"__PATH__\VC\Auxiliary\Build\vcvarsx86_arm64.bat`" && set > %temp%\vcvars.txt"
Get-Content "$env:temp\vcvars.txt" | Foreach-Object {
  if ($_ -match "^(.*?)=(.*)$") {
    Set-Content "env:\$($matches[1])" $matches[2]
  }
}
$env:PATH+=";_PATH_KIT__\arm64\ucrt\;__PATH__\VC\Redist\MSVC\14.29.30133\onecore\debug_nonredist\arm64\Microsoft.VC142.DebugCRT"

```

Where **PATH** is the Visual Studio CE installation path and **PATH_KIT** the Windows SDK installation path. 
Finally, grab our patched Tensorflow from <https://github.com/everton1984/tensorflow> and check out the [win_arm64v2 branch](https://github.com/tensorflow/tensorflow/compare/master...everton1984:win_arm64v2).

# Building Tensorflow

First you should make sure you have read the guide to compile Tensorflow from source at <https://www.tensorflow.org/install/source>. Make sure to also install all required Python packages mentioned in it. 

The repository you downloaded Bazel from added support for a new cpu/OS x64_arm64_windows and the main change to Tensorflow is to add support for a new target - win_arm64. The patch is experimental and some features have not been tested thoroughly, but the work entailed not only adding the new target but also adapting third party libraries to actually take advantage of it and understand that now you can be compiling on Windows but the CPU is not necessarily x86. 

To compile just run:

```
bazel build –config=win_arm64 //tensorflow/tools/pip_package:build_pip_package
```

Bazel might fail to properly link with python.3.10.0.lib. If that occurs make sure to copy that file directly into LLVM’s library folder. Once this step is complete, execute the script to build the whl package itself:

```
./bazel-bin/tensorflow/tools/pip_package/build_pip_package.exe WHL_DIR
```

This will build the whl on the path pointed by WHL_DIR. You will notice that you won’t be able to install that particular whl because of the lack of a dependency tensorflow_io_gcs_filesystem but you can force the installation with the extra pip argument –no-dependencies.

You can then import tensorflow for your Python scripts.

# Limitations

Not all features will work because of a lack of Tensorflow IO for Windows on Arm. Building Tensorflow IO requires a pre-working version of Tensorflow so the bootstrapping process is too complex for this article. Note that without Tensorflow IO several important Tensorflow features will fail to execute.

In order to execute part of Tensorflow’s unit tests you must use bazel’s test command. We examined the ones under core/kernels, and currently only lmdb_dataset_op_test seems to fail. There seems to be a bug in either bazel or LLVM that requires the tests to be built without dynamic libraries, so it is necessary to add an additional argument –dynamic_mode=off. 

To execute just the core/kernels test then type

```
bazel test –config=win_arm64 –dynamic_mode=off //tensorflow/core/kernels/…
```

At present there are no plans for official native support of Tensorflow on Windows on Arm, but that may change if the community pushes strongly for it

# Conclusion

Here we show the process of how to build Tensorflow for Windows on Arm. This has been part of a continuous joint effort between Linaro and Microsoft to provide a smooth native Arm environment for its Surface devices and Azure cloud instances. Feel free to read more about this at [https://linaro.org/windows-on-arm](https://www.linaro.org/windows-on-arm).