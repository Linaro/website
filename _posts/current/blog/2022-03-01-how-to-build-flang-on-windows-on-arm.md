---
layout: post
title: How to build flang on Windows on Arm
description: "In this blog post we look at how to build flang on Windows on Arm. "
date: 2022-03-01 09:38:26 +00:00
image: /assets/images/content/careers-image-1.jpg
tags:
  - Windows on Arm
  - Windows
  - Flang
  - LLVM
  - Clang
category: blog
author: diana.picus
---
Last week we published a blog on [how to set up Windows on Arm for LLVM development](https://www.linaro.org/blog/how-to-set-up-windows-on-arm-for-llvm-development/). In this blog we provide a step-by-step guide on how to build Flang on Windows on Arm.

## What is Flang?

Flang is a Fortran front-end developed as part of the LLVM project. It is still a young project and Linaro is contributing to its growth on both Linux and Windows on Arm.

If you need to build Fortran code on Windows on Arm, there really isn't any battle-tested native open source compiler to rely on. We are hoping to help flang fill that void.

Naturally, the first step is to be able to compile flang itself on Windows on Arm, and this is exactly what this blog post will cover. 

## How to build Flang

In order to get a build of flang, you will first need to setup your machine for LLVM development as described in [our previous blog post ](https://www.linaro.org/blog/how-to-set-up-windows-on-arm-for-llvm-development/)mentioned above.

You will have to add flang, clang and mlir to the list of enabled projects.

You will also need to tell clang where to find the builtins, otherwise the linker will complain that it cannot find symbols such as _udivdi3 or others. Adding the path to the builtin library as described in the [Clang Compiler User’s Manual — Clang 13 documentation](https://clang.llvm.org/docs/UsersManual.html#finding-clang-runtime-libraries) doesn’t seem to be working at the moment (bug report pending). Luckily, we can work around this issue by adding the builtin library directly on every link command 

```
(-DCMAKE_*_LINKER_FLAGS=path/to/clang_rt.builtins-aarch64.lib;
```

if you’re lucky you’ll only need CMAKE_EXE_LINKER_FLAGS, but depending on the compiler version you’re using and your other build flags, you might also need to set CMAKE_SHARED_LINKER_FLAGS or CMAKE_STATIC_LINKER_FLAGS).

You should end up with a script that looks something like [this](https://github.com/rovka/f18-llvm-project/blob/flang-woa/flang/examples/build_flang.bat):

```
1REM You need to modify the paths below:
2set build_dir=path\to\where\you\want\the\build (must already exist)
3set clang_root=path\to\where\clang\is\installed
4set clang_version=x.y.z (should match what’s in %clang_root%)
5
6REM Some helper variables.
7REM Setting CMAKE_CL_SHOWINCLUDES_PREFIX to work around PR27226.
8set cmake_flags=^
9  -DCMAKE_BUILD_TYPE=Release ^
10  -DLLVM_ENABLE_ASSERTIONS=ON ^
11  -DLLVM_INSTALL_TOOLCHAIN_ONLY=ON ^
12  -DLLVM_BUILD_LLVM_C_DYLIB=ON ^
13  -DCMAKE_INSTALL_UCRT_LIBRARIES=ON ^
14  -DCMAKE_CL_SHOWINCLUDES_PREFIX="Note: including file: " ^
15  -DLLVM_DEFAULT_TARGET_TRIPLE=aarch64-unknown-windows-msvc ^
16  -DLLVM_HOST_TRIPLE=aarch64-unknown-windows-msvc ^
17  -DLLVM_TARGET_ARCH=AArch64 ^
18  -DCLANG_DEFAULT_LINKER=lld 
19
20cd %build_dir%
21
22set clang_path=%clang_root%\bin\clang-cl.exe
23set builtins_path=%clang_root%\lib\clang%clang_version%\lib\windows
24set builtins_lib=clang_rt.builtins-aarch64.lib
25
26set CC=%clang_path%
27set CXX=%clang_path%
28
29REM We enable clang because it is needed by the flang driver.
30cmake -GNinja %cmake_flags% ^
31  -DLLVM_ENABLE_PROJECTS="clang;flang;mlir" ^
32  -DLLVM_TARGETS_TO_BUILD="AArch64" ^
33  -DCMAKE_C_FLAGS="-fms-compatibility-version=19.20" ^
34  -DCMAKE_CXX_FLAGS="-fms-compatibility-version=19.20" ^
35  -DCMAKE_EXE_LINKER_FLAGS="%builtins_path%/%builtins_lib%" ^
36  ..\llvm-project\llvm || exit /b
37
38ninja all || ninja all || ninja all || exit /b
```

Depending on which revision of flang you’re building, you should now have one or both of f18.exe or flang-new.exe in %build_dir%/bin.

At the time of writing, clang version [13.0.0](https://www.google.com/url?q=https://github.com/llvm/llvm-project/releases/download/llvmorg-13.0.0/LLVM-13.0.0-woa64.zip&sa=D&source=docs&ust=1646131480669885&usg=AOvVaw1ILobDb_KMB4Hxid6JOAZa) is known to work for building flang without code generation support.
However, if you want to build a flang that can generate actual binaries, you need to use custom development branches such as [this one](https://github.com/rovka/f18-llvm-project/commit/6e578e76455eee6ba006ebda911869446c45194c). The latter is based on the community’s [fir-dev branch](https://github.com/flang-compiler/f18-llvm-project/tree/fir-dev), which is currently in the process of being upstreamed, plus some minor changes to get things working on Windows on Arm. 

You can use the steps described above to build even this version of flang, and the resulting executable should be able to compile a simple ‘hello world’ (to link it with the builtins, pass `-Xlinker /path/to/clang_rt.builtins-aarch64.lib` to flang, just as you did earlier to compile flang itself). 

## Conclusion

We are naturally working hard towards getting upstream flang to work on Windows on Arm as smoothly as possible. Current progress is tracked in [Jira](https://linaro.atlassian.net/browse/WOA-47). If you would like to get involved, the best places to get in touch with the upstream flang community (or just to keep an eye on the status quo) are [the slack workspace](https://github.com/llvm/llvm-project/blob/main/flang/docs/GettingInvolved.md#chat) and [the community calls](https://github.com/llvm/llvm-project/blob/main/flang/docs/GettingInvolved.md#calls).  Stay tuned for an upcoming blog on how to compile and use the LLDB debugger on Windows on Arm laptops. 

Linaro is working with Arm, Microsoft and Qualcomm to enable open source packages to run natively on Windows on Arm. For more information about this project, click [here](https://linaro.atlassian.net/wiki/spaces/WOAR/overview).