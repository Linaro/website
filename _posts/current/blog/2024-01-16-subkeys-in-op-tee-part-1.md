---
layout: post
title: Subkeys in OP-TEE part I
description: Up to now, Trusted Applications (TAs) for OP-TEE could be signed
  and later verified by a single certificate. When multiple vendors are involved
  though having a single signer doesn’t scale well. In this blog, we will
  explore the latest OP-TEE additions allowing multiple signers of TAs.
date: 2024-01-16 09:42:06 +07:00
image: /assets/images/content/Code_Image_Core_tech.jpg
tags:
  - OP-TEE
  - Security
  - trusted_applications
category: blog
author: jens.wiklander
---
# Introduction

OP-TEE is a secure world OS implementation, that adheres to the GlobalPlatform specifications \[1] \[2] and is maintained by Linaro.

Trusted Applications (TAs) could initially only be verified with a single public root key so all TAs deployed on a system had to be signed with the same private root key. With multiple vendors being involved in products and wanting to deploy their own TAs, having a single signer doesn't scale well. In this blog, we will describe how subkeys can be used to address this problem.

# A single root key versus a subkey hierarchy

Subkeys support was introduced in OP-TEE version 3.20.0 (released January 20th, 2023)  to provide a public key hierarchy allowing different actors to sign different TAs without sharing a private key.

{% include image.html path="/assets/images/figure-1-signing-tas-with-a-common-root-key-.png" alt="Figure 1: Signing TAs with a common root key" %}

\
**Figure 1: Signing TAs with a common root key**

The private key of the root key is needed when signing TA8 in the example in Figure 1. 

Problem: if the private key of the root key leaks any of the TAs can be updated by someone with access to that key.

{% include image.html path="/assets/images/figure-2-signing-tas-with-a-subkey.png" alt="Figure 2: Signing TAs with a subkey" %}

\
**Figure 2: Signing TAs with a subkey**\
\
Only the private key of the Group 4 subkey is needed when signing TA7 and TA8 in the example in Figure 2. The private keys of the root key and Company B subkey can be kept safe offline. If the private key of the Group 4 subkey leaks, only TAs signed with that subkey can be updated by someone with access to that key. Since only a smaller group of people need access to that key it will be easier to keep it safe compared to the example in Figure 1 where everyone who needs to update a TA must have access to the root key.

# Stay tuned

In this blog we did a quick overview of subkeys, in the coming part 2 we will do a deep dive into the details.

* [Subscribe](https://lists.trustedfirmware.org/mailman3/lists/op-tee.lists.trustedfirmware.org/) to the OP-TEE mailing list [op-tee@lists.trustedfirmware.org](mailto:op-tee@lists.trustedfirmware.org)
* Join the [Linaro OP-TEE Contributions (LOC) monthly meeting](https://www.trustedfirmware.org/meetings/) or check out the project page [Linaro's OP-TEE Contributions - Confluence](https://linaro.atlassian.net/wiki/spaces/LOC/overview)
* Visit the [OP-TEE page](https://www.trustedfirmware.org/projects/op-tee/) at trusted firmware.

Thank you for reading this far. If you have any questions or thoughts feel free to 

create an issue at <https://github.com/OP-TEE/optee_os/issues> or to reach out on the mailing list. You’re also welcome to join the LOC meetings.

# References

\[1] [GlobalPlatform TEE Client API Specification v1.0](https://globalplatform.org/specs-library/tee-client-api-specification/) 

\[2] [GlobalPlatform Internal Core API Specification v1.3.1](https://globalplatform.org/specs-library/tee-internal-core-api-specification/)