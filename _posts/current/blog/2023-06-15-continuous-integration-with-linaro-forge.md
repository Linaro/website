---
layout: post
title: Continuous Integration with Linaro Forge
description: In this blog we talk about Continuous Integration with Linaro
  Forge. Read more here!
date: 2018-06-04 09:37:10 +01:00
image: /assets/images/content/Banner_Toolchain.jpg
tags:
  - HPC
  - Linaro Forge
category: blog
author: Florent.Lebeau
---
Continuous integration or CI is widely used in software engineering to improve software integration and quality, especially for large projects that involve a lot of developers. Naturally, high performance computing (HPC) applications can benefit from CI frameworks such as [Jenkins](https://www.jenkins.io/) to make sure that the software meets precision and performance requirements as the code grows and optimizations are performed.
CI tools are essentially robots that manage projects to build, test across many resources and perform these operations in parallel. They can be interfaced with control version software, build systems, or unit test frameworks for a better integration in the development workflow. Finally, they collect and aggregate data to display the “health” of the application in terms of validated tests as the application is being developed.
In this article, we are going to show how [Linaro Forge](https://www.linaroforge.com/documentation/) provides more insight and increases efficiency when combined to CI systems.  

# Jenkins for CI

We have created and configured a Jenkins project to build our application under development and perform non-regression tests. This can be done with shell scripts and we have used a tool called [shell2junit](https://github.com/manolo/shell2junit) to output the results in JUnit test reports so that they can be displayed in the interface.
This project performs a verification of the output of the application to:

1. check if the results generated are correct (the output file should display “passed”),
2. monitor performance regressions (the runtime shouldn’t be greater than 52 seconds on our machine).

`result=$(grep "Checking results" output.log | awk -F": " '{print $2}') 
juLog -name=check_results test "${result}" == "passed" 
perf=$(grep "Elapsed time" output.log | awk -F" " '{print $3}') 
slow=$(echo ${perf} '>52' | bc -l) 
juLog -name=check_performance test ${slow} -eq 0`

The project is configured to build the application regularly and Jenkins displays the list of tests that failed for each build. It gives a trend status of the project: if more and more tests are failing, build after build, dark clouds show that accuracy and performance issues persist!

We need to fix the issues detected. However, the current tests are not very helpful about what goes wrong in the application. The code is running sequentially for now and more problems are likely to happen as we are going to parallelize it using OpenMP. Can we improve this project to help investigating where bugs occur? Can we do this without overloading the code with internal tests?

# Extend test coverage

Linaro DDT, part of [Linaro Forge](https://www.linaroforge.com/documentation/), is a powerful interoperable debugger for multi-threaded and multi-processed applications. It is GUI-based but a non-interactive mode (also called offline mode) allows debugging in command-line. The same features than the interactive mode can be used: arguments can be passed to the debugger to specify the information to collect. The results of the debugging session are output in HTML or text format for post-processing.
The debugger has many features to pro-actively detect issues. Let’s use the memory debugging feature to detect heap corruption or memory leaks. For example, the command:
ddt --offline --output=report.html --mem-debug ./mmult.exe
Runs the debugger offline with memory debugging on the “mmult.exe” executable. A “report.html” file is created with the results of the session. We can edit the project to parse the report with a tool like [hxselect](https://www.w3.org/Tools/HTML-XML-utils/man1/hxselect.html) and trigger a failure if a leak is detected: 

`for i in ${SRC_FILES}; do
  leak=$(cat report.html | /opt/utils/html-xml-utils-7.6/install/bin/hxselect textarea | grep $i | awk -F"," '{print $2}')
  if [ ! -z "${leak}" ]; then
    echo "Memory leak found in: " ${leak} "
    nb_leak=$(( ${nb_leak} + 1 ))
  fi
done
juLog -name=check_leaks test ${nb_leak} -eq 0`

# Performance regression testing

Linaro Forge also includes [Linaro MAP](https://www.linaroforge.com/linaroMap/) which is a lightweight inter-operable profiler for parallel applications. So, extending our CI tests to cover performance regression becomes easy! With Linaro MAP, the application can be profiled in non-interactive mode:
map --profile --output=mmult.map ./mmult.exe
The output can be open in the GUI afterwards:
map mmult.map
But the results can also be exported in [JSON format](https://www.linaroforge.com/documentation/) to be post-processed by third-party tools like Jenkins:
map --export=mmult.json mmult.map
Now, we can edit our project to process the JSON results. As we are going to parallelize the application using OpenMP, we would like to understand the multi-threading performance. With a Jenkins extension, we can use Python to do this and store the data of interest in CSV files which can be used to plot graphs.

`data = json.load(open('mmult.json')) 
mylist.append( [ "Serial code", "OpenMP code" ]) 
mylist.append( [ sum(data['samples']['openmp'])/float(num_samples),
                 sum(data['samples']['openmp'])/float(num_samples) ] ) 
with open('results.csv', 'wb') as myfile:
   wr = csv.writer(myfile, quoting=csv.QUOTE_ALL)
   wr.writerow(mylist[0])
   wr.writerow(mylist[1])`

# Increase productivity

Now that our testing framework is in place, let’s see what insight Linaro Forge provides. After a first OpenMP version of the application, we see that two tests (in red) out of four are failing.

If we follow the links for more details, Jenkins reports that [Linaro DDT](https://www.linaroforge.com/linaroDdt/) has detected a memory leak. We can visualize the output of the tests which parse the debugging report:

Memory leak found in:  "main (mmult.c:37)"

But we can also see it in the report:

This information is very helpful to narrow our investigation and fix the problem. After a few commits, the memory leak tests are validated again.

Now, let focus on the second failure. We see that parallelizing the code made the application run slower. Thanks to Arm MAP, we can understand why thanks to the performance graphs:

Thanks to the data collected by the profiler, we see that about 30% of the time is spent in “OpenMP overhead in region”, waiting for threads to finish and only 65% is spent in the OpenMP code computing. Do we have a workload imbalance? Are our parallel sections too fine-grain? Opening the profiling result in Arm MAP helps us to understand the performance issue:

The GUI indicates the latest commit with the annotation in red and we understand that the OpenMP reduction operation on the inner loop is quite inefficient: the breakdown window reports that 100% of the time spent on this line correspond to memory accesses! Let’s parallelize the outer loop instead and commit our changes.

All the tests are validated: the sun shines on our project again! And thanks to the insight provided by MAP, we can tackle the new performance issue which seems to be limiting our application: the amount of serial code.

# Going further

This article gives you a gist of the capabilities of Arm Forge when integrated in a CI workflow. But you can increase your productivity by monitoring more metrics ([Lustre, GPU, energy usage](https://www.linaroforge.com/)) and take advantage of the numerous Jenkins extensions available.

[Request your free trial license now](https://www.linaroforge.com/freeTrial/)