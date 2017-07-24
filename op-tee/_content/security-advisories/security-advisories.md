---
layout: markdown
title:  OP-TEE - Security Advisories.
breadcrumb-title: Security Advisories
breadcrumb-subtitle: Security Advisories
permalink: "/security-advisories/"
description: |-
    At this page we will list of all known security vulnerabilities found on OP-TEE.
    Likewise you will find when it was fixed and who reported the issue.

    If you have found a security issue in OP-TEE, please send us an email (see
    About) and then someone from the team will contact you for further discussion.
    The initial email doesn't have to contain any details.
specific_js: sticky-navbar

---
At this page we will list of all known security vulnerabilities found on OP-TEE.
Likewise you will find when it was fixed and who reported the issue.

If you have found a security issue in OP-TEE, please send us an email (see
About) and then someone from the team will contact you for further discussion.
The initial email doesn't have to contain any details.

# December 2016
## RSA key leakage after fault injection attack
#### Description
Currently investigating and working with [Applus Laboratories] to understand the
issue and how to fix it. Will update this as soon as we know more about the
issue.

| Reported by  | CVE ID | OP-TEE ID | Affected versions |
| ------------ |:------:| :-------: | ----------------- |
| [Applus Laboratories] | N/A | OP-TEE-2016-0003 | All current versions |


## RSA key leakage after side channel attacks
#### Description
Currently investigating and working with [Applus Laboratories] to understand the
issue and how to fix it. Will update this as soon as we know more about the
issue.

| Reported by  | CVE ID | OP-TEE ID | Affected versions |
| ------------ |:------:| :-------: | ----------------- |
| [Applus Laboratories] | N/A | OP-TEE-2016-0002 | All current versions |


# June 2016
## Bleichenbacher signature forgery attack
#### Description
A vulnerability in the [OP-TEE] project was found by Intel Security Advanced
Threat Research in June 2016. It appeared that OP-TEE was vulnerable to
[Bleichenbacher signature forgery attack](https://www.ietf.org/mail-archive/web/openpgp/current/msg00999.html).

The problem lies in the [LibTomCrypt] code in OP-TEE, that neglects to check
that the message length is equal to the ASN.1 encoded data length. Upstream
LibTomCrypt already had a
[fix](https://github.com/libtom/libtomcrypt/commit/5eb9743410ce4657e9d54fef26a2ee31a1b5dd0)
and there was also a [test
case](https://github.com/libtom/libtomcrypt/commit/d51715db728d99954219cc42b013db6e48db65),
verifying that the fix resolved the issue.

The fixes from upstream LibTomCrypt has been cherry-picked into OP-TEE. The fix
for TEE core can be found upstream in
[this](https://github.com/OP-TEE/optee_os/commit/30d13250c390c4f56adefdcd3b64b7cc672f9fe2)
patch and a test case has been added to the test suite for OP-TEE and that
can also be found upstream in
[this](https://github.com/OP-TEE/optee_test/commit/b58916e35fe1f73cb7d32eb5ac04ab66f59669)
patch.

| Reported by  | CVE ID | OP-TEE ID | Affected versions |
| ------------ |:------:| :-------: | ----------------- |
| [Intel Security Advanced Threat Research] | [CVE-2016-6129](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-6129) | OP-TEE-2016-0001 | All versions prior to OP-TEE v2.2.0 (fixed in OP-TEE v2.2.0) |

[Applus Laboratories]: http://www.appluslaboratories.com
[Intel Security Advanced Threat Research]: http://www.intelsecurity.com/advanced-threat-research
[LibTomCrypt]: http://www.libtom.org/LibTomCrypt
[optee_os]: https://github.com/OP-TEE/optee_os
[optee_test]: https://github.com/OP-TEE/optee_test
[OP-TEE]: https://github.com/OP-TEE
