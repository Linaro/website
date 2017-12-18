---
author: frans.gifford
categories:
- blog
date: 2011-12-01 14:16:11
description: HOWTO run LAVA Android tests on a local machine.
keywords: LAVA, android, linaro, testing, howto
layout: post
link: /blog/lava-blog/local-lava-testing-of-android-ics/
slug: local-lava-testing-of-android-ics
tags:
- Android
- LAVA
- android
- lava
- testing
title: Local LAVA testing of Android ICS
wordpress_id: 986
---

The Linaro Android team automatically test daily platform builds on our LAVA server[1], but what's less well known is that we can also run Android tests locally using lava-android-test[2]. I tried this out in order to debug a new benchmark I wanted to add, and it turns out that creating a mini version of validation.linaro.org is remarkably easy. It's as simple as getting a board powered up and available to adb, installing the tool and then running three commands to install, run and parse the results of your test case.

{% include image.html name="lin4.jpg" alt="LAVA on a laptop" %}

**Get lava-android-test**

There are two options here, Ubuntu users can use the validation team's ppa[3]:

`sudo apt-get install lava-android-test`.


Hackers can install from source into a python virtualenv:

```bash

sudo apt-get install python-virtualenv
virtualenv lava-android-test-env
. lava-android-test-env/bin/activate
bzr branch lp:lava-android-test
cd lava-android-test
python setup.py install
deactivate

```

**List available tests**
`lava-android-test list-tests`

**Install the test you want to run**
`lava-android-test install toolchain-benchmark -o <options> -s <adb device id>`

**Run the test**
`lava-android-test run toolchain-benchmark`
This will output the test results file name.

**Parse the results**
`lava-android-test parse <test results file name>`

[1] Linaro Validation Server [http://validation.linaro.org](http://validation.linaro.org)
[2] Lava Android Test Runner [https://launchpad.net/lava-android-test](https://launchpad.net/lava-android-test)
[3] Lava team PPA [https://launchpad.net/~linaro-validation/+archive/ppa](https://launchpad.net/~linaro-validation/+archive/ppa)