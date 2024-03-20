---
layout: post
title: How Implementing Security.txt? A Step Towards Enhanced Cybersecurity, a
  Linaro Best Practice
description: Learn how to implement Security.txt on your website with this
  comprehensive guide from Linaro. Understand the significance of Security.txt,
  its framework, and global adoption, and discover best practices for enhancing
  your website's cybersecurity.
date: 2024-03-20 05:38:37 +02:00
image: /assets/images/content/Banner_Security.jpg
tags:
  - Security
category: blog
author: joakim.bech
---
This article aims to inform readers about the significance of "security.txt", its framework, global adoption, and provides a straightforward implementation guide to encourage its widespread use showing how in Linaro we’ve done it.

### Context

Maintaining open lines of communication between website administrators and ethical hackers or security researchers is paramount when talking about digital security. This is where "security.txt" plays a pivotal role. Inspired by the simplicity and functionality of "robots.txt" used by search engines to index web pages, "security.txt" is a proposed standard designed to streamline the process of reporting security vulnerabilities.



### What is Security.txt?

Security.txt is a simple text file, strategically placed under the ".well-known" directory of a website's domain, making it easily accessible for security researchers. Its primary purpose is to provide a standardized way for researchers to report security issues they discover. The file contains contact information and other directives that guide the researcher on how to report vulnerabilities responsibly.

For instance, Linaro's security.txt file can be found at: https://linaro.org/.well-known/security.txt.



### Understanding RFC9116 and RFC8615

The implementation of security.txt is guided by two key RFCs (Request for Comments): RFC9116 and RFC8615. RFC9116 outlines the "security.txt" document itself, detailing the specific format and instructions it should contain for effective communication. Meanwhile, RFC8615 establishes the ".well-known" URI, ensuring that security.txt files are placed in a universally recognized location across all websites.



### Implementing Security.txt: A Step-by-Step Guide

1. Create Your Security.txt File: Begin by drafting a text file named "security.txt". This file should include essential contact information, such as an email address, and any guidelines for reporting vulnerabilities. Optionally, you can also add encryption keys for secure communication and acknowledgments for those who report issues responsibly.
2. Place It Under the ".well-known" Directory: To comply with RFC8615, your security.txt file should be placed within the ".well-known" directory of your website (e.g., https://yourdomain.com/.well-known/security.txt). This standardization ensures that security researchers can easily locate the file.
3. Consider Using 'Contact:' and 'Encryption:' Directives: At a minimum, your security.txt should include a 'Contact:' directive to provide a point of communication. For added security, consider including an 'Encryption:' directive with a link to your PGP key, enabling encrypted communications.
4. Publish and Test: After placing your security.txt file on your website, ensure it is accessible via its intended URL. Regularly test and update the file as needed, keeping contact information and directives current.



### Why Implementing Security.txt?

Adopting security.txt on your website underscores your commitment to cybersecurity. It not only facilitates a responsible vulnerability disclosure process but also fosters a collaborative relationship between your organization and the cybersecurity community. By providing a clear, standardized method for reporting security issues, you can address vulnerabilities more swiftly and efficiently, safeguarding your digital assets against potential threats.

In summary, the implementation of security.txt is a straightforward yet impactful step towards bolstering your website's security posture. By embracing this proposed standard, you join a global effort to create a safer digital ecosystem for businesses and users alike.