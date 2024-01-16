---
layout: post
author: alex.bennee
published: true
title: ARM SVE Support in QEMU's Latest Linux-User Mode
description: In this article, Alex Bennée takes a detailed look at the ARM SVE
  (Scalable Vector Extension) support in the latest version of QEMU. Read more
  here!
date: 2018-07-17 09:00:00+00:00
image: /assets/images/content/Banner_Virtualization.jpg
tags:
  - Arm
  - Linaro
  - SVE
  - QEMU
category: blog
---

Arm’s innovative [Scalable Vector Extension](https://community.arm.com/processors/b/blog/posts/technology-update-the-scalable-vector-extension-sve-for-the-armv8-a-architecture) instructions are a new set of instructions designed for data-heavy supercomputing applications. Superficially they are similar to the existing NEON/AdvSIMD instructions in that they allow you to exploit [data parallelism](https://en.wikipedia.org/wiki/Data_parallelism) in algorithms by executing several identical operations at the same time over multiple lanes of a vector register. Where SVE differs from traditional vector processing is that the number of lanes are implementation defined. The clever part comes from a programming model that means assumptions about the number of lanes are not hard coded into the binaries. This means the same binary that runs on a mobile SoC, with a small number of lanes, can automatically take advantage of the wider lanes on a HPC supercomputing cluster, without recompiling the program.

The SVE instruction set also provides some additional features which are worth taking advantage of. These include a fault handling mechanism called the First Fault Register which allows you to defer expensive calculations to avoid crossing page boundaries and instead handle reaching non-accessible pages as just another boundary condition for your loop. Another feature of note is scatter/gather load/store support which allows complex structures to be quickly loaded into registers in fewer instructions.

While SVE enabled hardware is on its way, it’s going to be a while before anyone outside of a silicon lab can get their hands on real hardware. In the meantime, software developers want to be able to port and test their software now so they can be ready for the arrival of real SVE enabled chips. With the release of QEMU 3.0, they will be able to do just that. Thanks to QEMU's linux-user emulation, we now have the ability to develop and test userspace Arm binaries utilising SVE.

If you want to learn more about the history of vector processing and the implications it has for dynamic binary translation, watch the [talk I gave at KVM Forum last year](https://www.youtube.com/watch?v=IYHTwnde0g8).

If you are ready to start experimenting with these instructions then read on.

## Prerequisites

These instructions currently assume you are running a Linux x86_64 development environment. This will soon be available in the up-coming QEMU 3.0 release but currently you can use a fresh checkout of the [master repository](https://git.qemu.org/?p=qemu.git;a=summary).

You will also need to have a working Docker setup as we are going to be hosting our development environment inside a docker container. Ideally it should be setup in a developer friendly way so the main user account can run docker without a password. The QEMU project [has some notes on potential docker setups](https://git.qemu.org/?p=qemu.git;a=blob;f=docs/devel/testing.rst;h=f33e5a84234373d100d957d990e7a28ade2922f9;hb=HEAD#l249).

We’ll be using the kernel binfmt_misc support to automatically run Aarch64 linux binaries with QEMU. As the configuration is system wide, we need to configure it on the host. On Debian based systems it is usually enough to install the “qemu-user” package which will ensure everything is set up for you. On other systems you can run the helper script in the QEMU source tree:

```bash
$ sudo ./scripts/qemu-binfmt-conf.sh --qemu-path /usr/bin
Setting /usr/bin/qemu-alpha as binfmt interpreter for alpha
Setting /usr/bin/qemu-arm as binfmt interpreter for arm
...
Setting /usr/bin/qemu-aarch64 as binfmt interpreter for aarch64
Setting /usr/bin/qemu-aarch64_be as binfmt interpreter for aarch64_be
..
Setting /usr/bin/qemu-microblaze as binfmt interpreter for microblaze
Setting /usr/bin/qemu-microblazeel as binfmt interpreter for microblazeel
```

It is important that the interpreter for aarch64 binaries points at /usr/bin/qemu-aarch64 as this is where we will be installing the QEMU support binary in our docker images.

## Building QEMU

So the first thing we need to do is build a statically built version of the qemu-aarch64 binary.

```bash
./configure --target-list=aarch64-linux-user --static
```

And then build:

```bash
make -j8
```

The -j option specifies how many units to compile at a time, typically you set it to the number of cores your system has. If you are running on a beefy server hardware, feel free to crank the number higher ;-)

## Creating the base Docker Image

The next thing we are going to do is create the base docker image. This will be a complete AArch64 rootfs with basic tools and the ability to install more software. In this case I’ve chosen Ubuntu’s Bionic Beaver but you can bootstrap any Debian based environment. Importantly, we will want to install gcc-8 as that is the first version of gcc that can compile SVE enabled binaries so in Debian you would want to install the rolling “testing” release.

Fortunately all the details of the build are hidden behind QEMU’s build system. So we just need to execute this rather long make invocation:

```bash
make docker-binfmt-image-debian-ubuntu-bionic-arm64 \
  DEB_ARCH=arm64 DEB_TYPE=bionic DEB_URL=http://ports.ubuntu.com \
  EXECUTABLE=./aarch64-linux-user/qemu-aarch64 V=1
```

The V=1 will show you what’s going on under the hood as the bootstrapping process will take a while to complete. Once it has completed there should be an image in your local docker repository tagged qemu:debian-ubuntu-bionic-arm64. We can run it to verify that everything worked ok:

```bash
$ docker run --rm -it qemu:debian-ubuntu-bionic-arm64 /bin/bash
root@e68be4cb7b0f:/# uname -a
Linux e68be4cb7b0f 4.15.0-23-generic #25-Ubuntu SMP Wed May 23 18:02:16 UTC 2018 aarch64 aarch64 aarch64 GNU/Linux
root@e68be4cb7b0f:/# exit
```

While uname reports the host kernel version, as far as the binaries are concerned they are running on an AArch64 machine. Another cool aspect about QEMU’s docker support is that it has automatically created a user in the container that is mapped to the current user on the host. This allows us to spin up a container process with the users privileges. This is useful when combined with dockers [volume mounts](https://docs.docker.com/storage/volumes/) to allow access to the host file-system as it means any files will be owned by the user and not the all powerful "root" user.

```bash
$ docker run --rm -it -u $(id -u) -v $(pwd):$(pwd) -w $(pwd) qemu:debian-ubuntu-bionic-arm64 /bin/bash
alex.bennee@01cfe5adbbec:~/lsrc/qemu.git$ whoami
alex.bennee
```

## Setting up our Development Environment

Now we have a working base-system, we can use this to create a new Docker image with all the tools we need to experiment with SVE. Up until this point we have been running with the --rm flag which tells docker to throw away any data inside the container when we are done. For the next set of steps we will run without the flag so we can save the final state of the container as a new image for later use. In this example we demonstrate this manually but most docker image creation is scripted through Dockerfiles and is good practice, like for example [QEMU’s aarch64 cross compiler image](https://git.qemu.org/?p=qemu.git;a=blob;f=tests/docker/dockerfiles/debian-arm64-cross.docker;h=877d863475ac81e4e2faf3e4198250ec5be820f4;hb=HEAD).

So let’s get our image set up:

```bash
$ docker run -it qemu:debian-ubuntu-bionic-arm64 /bin/bash
root@c4dc9b5426ad:/# sed -i 's/main/main universe/' /etc/apt/sources.list
root@c4dc9b5426ad:/# apt update
root@c4dc9b5426ad:/# apt install -y gcc-8 g++-8 wget libtool autoconf libtool gdb less
root@c4dc9b5426ad:/# update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-8 1000
root@c4dc9b5426ad:/# update-alternatives --install /usr/bin/++ g++ /usr/bin/g++-8 1000
root@c4dc9b5426ad:/# gcc --version
gcc (Ubuntu 8-20180414-1ubuntu2) 8.0.1 20180414 (experimental) [trunk revision 259383]
...
root@c4dc9b5426ad:/# exit
```

We have done the following things:

1. Added the universe repository (for gcc/g++-8)
2. Updated the repo lists
3. Installed gcc-8 and some other useful tools
4. Updated the default gcc to use gcc-8 and confirmed the switch

We now want to save this container as an image we can re-use. First we need to identify the container we have just run:

```bash
$ docker ps -a
CONTAINER ID        IMAGE                             COMMAND                  CREATED             STATUS                     PORTS               NAMES
c4dc9b5426ad        qemu:debian-ubuntu-bionic-arm64   "/bin/bash"              2 hours ago         Exited (0) 2 seconds ago                       adoring_goodall
e174632927ba        238519b386bc                      "/bin/sh"                5 hours ago         Exited (0) 5 hours ago                         friendly_mayer
ad33c7bc7558        0da2cdd3455f                      "/bin/sh"                8 hours ago         Exited (0) 8 hours ago                         silly_noether
...
```

The first entry on the list is the one we have justed exited, so we commit that as a new image:

```bash
$ docker commit -m "setup arm64 env" adoring_goodall development:bionic-arm64-sve
sha256:25b770e5ce8a5b55ebbccad3b90b58a3474c4acdc5a70ca8ad42fdaf9f273f53
```

The sha256 is the new image id, but we have tagged it as development:bionic-arm64-sve so we can use a friendly name in the future.

## Taking it for a Spin

Now we have a development environment, how do we use it? For this example I’m going to use the Cortex Strings library. This is a staging ground for various accelerated library functions using NEON, AdvSIMD and SVE instructions. We shall be building it with SVE enabled.

First off all check out the git repository on the host system:

```bash
$ git clone https://git.linaro.org/toolchain/cortex-strings.git cortex-strings.git
$ cd cortex-strings.git
```

We shall now start our development container as the user with our host path mounted:

```bash
$ docker run --rm -it -u $(id -u) -v $(pwd):$(pwd) -w $(pwd) development:bionic-arm64-sve /bin/bash
```

The remaining steps are run inside our container:

```console
user@container:~/cortex-strings.git $ ./autogen.sh
user@container:~/cortex-strings.git $ ./configure --with-sve --enable-static --disable-shared
user@container:~/cortex-strings.git $ make -j
user@container:~/cortex-strings.git $ make check -j
```

At the end you should be presented with the result of the self-test:

```console
PASS: tests/test-memset
PASS: tests/test-strnlen
PASS: tests/test-strlen
PASS: tests/test-memchr
PASS: tests/test-strcpy
PASS: tests/test-strchr
PASS: tests/test-memmove
PASS: tests/test-strrchr
PASS: tests/test-memcmp
PASS: tests/test-memcpy
PASS: tests/test-strncmp
PASS: tests/test-strcmp
======================================================================
Testsuite summary for cortex-strings 1.1-2012.06~dev
======================================================================
# TOTAL: 12
# PASS:  12
# SKIP:  0
# XFAIL: 0
# FAIL:  0
# XPASS: 0
# ERROR: 0
======================================================================
```

Not sure we have just run SVE enabled code? Let’s examine it with gdb:

```console
user@container:~/cortex-string.git $ gdb tests/test-strcpy
GNU gdb (Ubuntu 8.1-0ubuntu3) 8.1.0.20180409-git
...
Reading symbols from tests/test-strcpy...done.
(gdb) disassemble strcpy
Dump of assembler code for function strcpy:
  0x00000000000023c0 <+0>:     setffr
  0x00000000000023c4 <+4>:     ptrue   p2.b
  0x00000000000023c8 <+8>:     mov     x2, #0x0                        // #0
  0x00000000000023cc <+12>:    nop
  0x00000000000023d0 <+16>:    ldff1b  {z0.b}, p2/z, [x1, x2]
  0x00000000000023d4 <+20>:    rdffrs  p0.b, p2/z
  0x00000000000023d8 <+24>:    b.cs    0x23f0 <strcpy+48>  // b.hs, b.nlast
  0x00000000000023dc <+28>:    cmpeq   p1.b, p2/z, z0.b, #0
  0x00000000000023e0 <+32>:    b.ne    0x2408 <strcpy+72>  // b.any
  0x00000000000023e4 <+36>:    st1b    {z0.b}, p2, [x0, x2]
  0x00000000000023e8 <+40>:    incb    x2
  0x00000000000023ec <+44>:    b       0x23d0 <strcpy+16>
  0x00000000000023f0 <+48>:    cmpeq   p1.b, p0/z, z0.b, #0
  0x00000000000023f4 <+52>:    b.ne    0x2408 <strcpy+72>  // b.any
  0x00000000000023f8 <+56>:    setffr
  0x00000000000023fc <+60>:    st1b    {z0.b}, p0, [x0, x2]
  0x0000000000002400 <+64>:    incp    x2, p0.b
  0x0000000000002404 <+68>:    b       0x23d0 <strcpy+16>
  0x0000000000002408 <+72>:    brka    p0.b, p2/z, p1.b
  0x000000000000240c <+76>:    st1b    {z0.b}, p0, [x0, x2]
  0x0000000000002410 <+80>:    ret
End of assembler dump.
(gdb)
```

And there you have it. You can see predicate instructions `ptrue`, vector loads `ldff1b {z0.b}` and resetting of the first fault register `setffr`.
