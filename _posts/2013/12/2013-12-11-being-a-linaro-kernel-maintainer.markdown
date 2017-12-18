---
author: david.rusling
categories:
- blog
date: 2013-12-11 21:01:28
description: "Linaro is a very open environment but with access to a lot of privileged
  information and knowledge about our member\xE2\x80\x99s products and strategies.
  This can sometimes make being a kernel maintainer somewhat of a balancing act, especially
  with public discussions in kernel mailing lists and in open forums"
keywords: Linaro, kernel, linux, linux on ARM, kernel maintainer, open source software,
  software
layout: post
link: /blog/kernel-blog/being-a-linaro-kernel-maintainer/
slug: being-a-linaro-kernel-maintainer
tags:
- Kernel
- kernel
- Linaro
- Linux
- Linux on ARM
- Open Source
title: Being a Linaro Kernel Maintainer
wordpress_id: 3216
---

Linaro is a very open environment but with access to a lot of privileged information and knowledge about our member’s products and strategies. This can sometimes make being a kernel maintainer somewhat of a balancing act, especially with public discussions in kernel mailing lists and in open forums.


Information shared with Linaro in confidence is easy to think about. This should always be treated with respect. The principal here is that if something is not public, then it shouldn’t be made public by Linaro. Not doing this would damage the trust between Linaro and its members. However, should a Linaro kernel maintainer believe that some information should be made public, they should argue strongly with that member for that. In this case, it’s probably worth having the discussion with the member’s kernel engineers on a private email list at least initially. It may even be necessary to escalate this to the member’s engineering management.

The tougher questions arise over technical or strategic intent, where a member is favouring one kernel subsystem or technical approach over others that the maintainer prefers. What should the Linaro kernel maintainer do in these circumstances? Without knowing the member’s strategic intent, a kernel maintainer would, naturally, argue for the best technical solution from a Linux kernel point of view. Should a Linaro kernel maintainer with inside knowledge of the member’s strategies change this behaviour? I do not believe so, but there are some added complications to consider.

The Linux maintainership system works because it is a trust network amongst kernel engineers. Trust is hard to earn and easy to lose (it’s asymmetrically delicate). This trust is based on technical merits alone. The reputation or financial health of the company employing someone contributing code has absolutely no influence what so ever on the rest of the community. The other hallmark of kernel maintainership is that it relies on consensus. Changes are rarely bulldozed through the collective (even by Linus). Linaro kernel maintainers must, therefore, be trusted, show technical robustness, be open in their discussions and encourage consensus. In addition, Linaro kernel maintainers must be trusted and respected by Linaro members, especially the member’s kernel maintainers.

Linaro kernel maintainers should argue purely on the technical merits of a design or set of patches. In the end, it is the quality of code in the Linux kernel that counts. Of course, all maintainers have their own style, but the best hold this line firmly, even robustly. Linux kernel maintainers tend to be skilled diplomats and influencers and I expect no less of a kernel maintainer that works for Linaro. In other words, I would like to see Linaro kernel maintainers as exemplars of the kernel community.

If a Linaro kernel maintainer does not believe that a member’s proposed solutions produce the best code or solution in the Linux kernel, then they should challenge the member’s strategies and technical approaches. It is the role of Linaro kernel maintainers to actively encourage conversation and debate. It keeps the Linaro’s members actively engaged in the process and it generates serious engineering evaluation of other options favoured by maintainers.

Quite how public such discussions should be is a matter of balance. I note that a lot of maintainer discussions are conducted privately or at least less publically at Linux Kernel summits and other open events. I am not suggesting that Linaro kernel maintainers should be quiet in public forums, but they should be aware of the conflict of interest and encourage the member companies kernel maintainers to argue technically for their company’s technical stance. It may be worth having some conversations privately with the Linaro member’s engineering teams before airing it in more public forums. In any event if a topic is raised on a public list, it is the maintainer’s responsibility to respond to it in some way in public, even if it is just to acknowledge a disagreement before raising the issue privately. The key here is to get the stakeholders brought into the discussion as soon as possible. They dislike surprises and their buy-in is essential in getting the right solutions into the kernel.

In many ways this is no different from being a kernel maintainer employed by one of Linaro’s members. The same sensitivities around strategy and disclosure exist. It is just a little more complicated for Linaro maintainers as there are many Linaro member companies. One of the greatest value to members is the unusually high concentration of respected kernel maintainers being employed by Linaro. This value is hard to quantify, but it certainly is a huge advantage. Linaro members have a privileged communication channel with all those maintainers in a single setting whose ability to validate vendor requirements in the context of the wider Linux community is unprecedented.