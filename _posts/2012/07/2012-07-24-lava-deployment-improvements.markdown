---
author: linaro
categories:
- blog
date: 2012-07-24 16:54:35
description: This article goes over the latest improvements to the LAVA deployment
  process
keywords: LAVA lava-deployment-tool buildout
layout: post
link: /blog/lava-deployment-improvements/
slug: lava-deployment-improvements
title: LAVA Deployment Improvements
wordpress_id: 1701
---

Last month the LAVA team made a big update to the way their [deployment tool](http://launchpad.net/lava-deployment-tool) works. The new method uses [zc.buildout](http://www.buildout.org/). The result is that we now have a deployment tool in place that works consistently and repeatably.

The deployment configuration to be used is now managed in the [LAVA manifests](https://www.linaro.org/initiatives/lava/) project. This project has two main configurations:

  * **buildout.cfg** - This uses the latest versions of LAVA components in pypi while requiring the use of a fixed versioned list of dependencies for LAVA.

  * **buildout-production.cfg** - This extends buildout.cfg and versions the LAVA components themselves to what we have deployed in our production instance of LAVA.

Additionally, we put tags in the lava-manifests branch so users can see exactly what we deployed for each monthly cycle.

### An Example

To install LAVA, you'd now run:

    bzr branch lp:lava-deployment-tool
    ./lava-deployment-tool/lava-deployment-tool install testinstance
    
Later on when an update was made to the lava-manifest for your build configuration, you could upgrade with:

    ./lava-deployment-tool upgrade testinstance

### Overrding Linaro's Manifest

If you don't want to use the manifest in lava-manifest or want to use your own branch you can do so with:

    LAVA_MANIFEST_BRANCH=<bzr branch spec> ./lava-deployment-too install testinstance

You can also pick your config file from the branch with:

    LAVA_BUILDOUT_CFG=buildout-foobar.cfg LAVA_MANIFEST_BRANCH=<bzr branch spec> ./lava-deployment-too install testinstance

### Development Improvements


The new mechanism we've choosen also allows makes it a little nicer for doing local development. Under a LAVA instance you'll now have a directory like:

     /srv/lava/instances/<instance>/code/current/local

You can pull in components you'd like to work against into that directory. For instance, you can work off the latest tip of the lava-dispatcher with:

    cd /srv/lava/instances/<instance>/code/current/local
    bzr branch lp:lava-dispatcher
    cd .. # you are now in /srv/lava/instances/<instance>/code/current
    ./bin/buildout #this pulls in the updated component

**NOTE:** Directory names don't matter under code/current/local. buildout finds out the package information by looking at its setup.py. So you could rename the above directory to "lava-dispatcher-devcopy" and re-reun the "buildout" command.



### More Information


Take a look at the latest version of our [deployment tool README](https://www.linaro.org/initiatives/lava/) for further options with deployments.