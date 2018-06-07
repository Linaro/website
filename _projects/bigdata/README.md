---
project_id: "3"
title: Big Data
permalink: /projects/bigdata/
description: |-
    Big Data Analytics is a pretty wide area that is experiencing a 100% growth rate every year, according to the keynotes from the last Hadoop Summit event
keywords: hadoop, spark, data, java, openjdk, representative, class, workloads, optimise, architecture
related_groups:
  - "lmg"
youtube_playlist: https://www.youtube.com/playlist?list=PLKZSArYQptsNS43x2SWtSDsNrA1M4eEXq
---
# Big Data

Big Data Analytics is a pretty wide area that is experiencing a 100% growth rate every year, according to the keynotes from the last Hadoop Summit event. Big Data will continue growing as IoT gets closer to production deployment. The two main components are Hadoop and Spark. They fit the vision of scaling out the processing on as many compute nodes as available nicely, and are a perfect match to explore with Arm servers and a potential killer app. LEG Members have agreed to put together resources and focus on making AArch64 a first class citizen in the Hadoop / Spark community, and a well supported architecture for scale-out analytics.

#### About OpenJDK:

OpenJDK (Open Java Development Kit) is a free and open source implementation of the Java Platform, Standard Edition (Java SE). It is the result of an effort Sun Microsystems began in 2006. The implementation is licensed under the GNU General Public License (GNU GPL) with a linking exception. OpenJDK is the official Java SE 7 reference implementation.

The OpenJDK project consists of a number of components. Principally, these are the virtual machine (HotSpot), the Java Class Library and the Java compiler (javac).

#### Key Deliverables:

- Enable and maintain 64-bit Arm as first class architecture for Hadoop and Spark:
   - Collaborate with Open Data Platform to represent the 64-bit Arm architecture for Hadoop distributions.
   - Establish CI loops for both upstream Hadoop and Spark to catch any major regressions.
- Profile and Optimise Hadoop and Spark
   - Get a Hadoop distribution up and running for 64-bit Arm.
   - Establish representative workloads for Hadoop.
   - Establish representative workloads for Spark.
   - Profile and optimise Hadoop against representative workloads for Hadoop.
   - Profile and optimise Hadoop against representative workloads for Spark.
- Maintain close ties with OpenJDK development effort.
Where possible, potential areas for optimisation in the JDK should be sought and reported. (i.e. does a particular VM intrinsic or system class get heavy use?).
- The CI loops should be double checked for any potential OpenJDK issues.

#### Useful Information

- [Big Data Work Load](https://docs.google.com/spreadsheets/d/1adtQIzk9XzVkJqPz3CmWyq0PGmgYi_xjfyANPaEmUNg/edit#gid=0)
- Big Data Mailing List: linaro-bigdata (linaro-bigdata@lists.linaro.org)
- Big Data irc channel: #linaro-bigdata
- Big Data Project Patches
- [OpenJDK Site](http://openjdk.java.net/)
- [OpenJDK Community Code Review](http://openjdk.java.net/guide/codeReview.html)
