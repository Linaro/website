---
layout: post
title:  "Universal Keyring – The Time has Come – BUD17-203"
date:   2017-03-17 12:00:00
categories: Blog
image: /images/posts/universal-keyring-time-come-bud17-203-image.jpeg

---

{% include media.html media_url="https://www.youtube.com/embed/PvySBboUwPM" %}

The SKS/KeyGen2 project is about establishing an security architecture, provisioning and management scheme for cryptographic keys targeting a wide variety of applications including on-line banking, payments, e-government access, and enterprise login. A TEE (possibly aided by a local security processor) is a core component of the envisioned architecture. In order to enable easy enrollment, a browser-based provisioning protocol is another core component. Since a cryptographic key (unlike a file), usually represents a relationship to a remote party which also typically imply a policy for “their” keys, the system supports key ACLs which through an OS/TEE layer governs which applications a key may be used with. A consequence of this arrangement is that cryptographic keys become first-class OS objects like files. The protocol and basic key store is already running as an application which is used for testing and evaluation.

{% include media.html media_url="//www.slideshare.net/slideshow/embed_code/key/s4eJMFzMpMaRIQ" %}

**Speakers:** Anders Rundgren  
**Track:** Security  
**Session ID:** BUD17-203  
