---
layout: post
title: tuxpub - The Serverless File Server
date: '2020-06-02 12:10:28'
image: /assets/images/content/code_highway_small.jpg
tags:
- Tuxsuite
- Server
category: blog
author: ben.copeland@linaro.org
---

{% include image.html path="/assets/images/content/amazon_diagram.jpg" alt="Amazon S3 bucket and using Amazon CloudFront" %}

### **What problems has Linaro solved with tuxpub?**

At Linaro, we have previously hosted artifacts from Amazon S3 using a custom tool known as Linaro Licence Protection (LLP). LLP started life serving files from local disk storage, then later moved to Amazon S3. Technically LLP provides an S3 browsing interface, however it was never designed to run under a serverless architecture. This coupled with other necessary Linaro/License features (such as authentication) means that LLP doesn’t fit a “simple serverless” model.

Linaro is presently working on a SaaS offering called [TuxBuild](https://gitlab.com/Linaro/tuxbuild) (and companion service called TuxBoot). These technologies are implemented using the new serverless model and have a need to provide artifacts from cloud storage using a lightweight application that provides a file browser as a web-based user front end.

The original implementation used Javascript, but we quickly realised it wasn’t scalable, it wasn’t conformant with what web tools expected, and it lacked features which our users were demanding (such as the ability to pull the file contents in JSON). After searching for existing solutions we discovered that there were no available light-weight tools to solve our problems!

We built a wishlist of the following features and requirements that we felt a proper file server would honour and set about building tuxpub:

- Serverless methodology for easy deployment and management
- Ability to block the index page so people cannot browse other folders
- Allow users to access a JSON output of the page for easy downloading

The following is a sample file browser front-end being served by tuxpub for the TuxBuild project:

{% include image.html path="/assets/images/content/tuxpub_lrg.png" alt="sample file" %}

### **How easy is it to deploy and manage?**

Linaro can deploy our tuxpub instances with two lines of code and a config file! This procedure is documented in the TuxPub [readme](https://gitlab.com/Linaro/tuxpub#run-with-zappa). To bring up a TuxPub instance a developer only needs to create an application shim with the following zappa code:

```
"dev": {
        "app_function": "zappa_init.app",
        "aws_region": "us-east-1",
        "project_name": "lkft-tuxpub",
        "runtime": "python3.7",
        "s3_bucket": "zappa-tuxpub",
        "environment_variables": {
          "S3_BUCKET": "storage.dev.lkft.org",
          "S3_REGION": "us-east-1",
          "ROOT_INDEX_LISTING": "True",
        }
    }
```

With these files a developer needs to build up a [pipenv](https://realpython.com/pipenv-guide/) _file with_ “pipenv install --deploy”_, and then deploy it into Lambda with_ “zappa deploy dev”\*.

One can even run the application locally with _“S3_BUCKET=storage.dev.lkft.org S3_REGION=us-east-1 ROOT_INDEX_LISTING=True FLASK_APP=tuxpub flask run”_.

### **What are the limitations?**

Since tuxpub uses the AWS API there are limitations set by the cloud provider. An index page with more than 1000 objects hits an API limit and generates a nasty error page. Because of this, we intend to implement ‘paging’ support. Tuxpub does not presently support user authentication and has no immediate plans to add it.

### **Can others use and contribute to tuxpub?**

Linaro has made tuxpub available as open source software under the [MIT license](https://gitlab.com/Linaro/tuxpub/-/blob/master/LICENSE). This means that it’s free to deploy and modify. We’re very welcoming of pull requests! You can find the code [here](https://gitlab.com/Linaro/tuxpub).

### **What is the future of tuxpub?**

Linaro’s objective is to keep this application simple! We are being selective and do not want to add too many features that would bloat the application. Desirable features additions (most notably paging support) are being collected in [tuxpub gitlab issues](https://gitlab.com/Linaro/tuxpub/-/issues) and addressed over time.

N.B. \*“Pipenv is a packaging tool for Python that solves some common problems associated with the typical workflow using pip, virtualenv and the good old requirements. Txt” -