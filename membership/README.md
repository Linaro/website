---
title: Membership
description: |-
    Members currently working with Linaro and how to become a member of Linaro.
layout: empty
permalink: /membership/
js-package: members
css-package: members
---
Membership of Linaro is open to all interested companies, including Arm licensees, device companies using Arm processors, Linux distributions and other companies who wish to influence the future of Linux on Arm. Core, Club and Group members all provide funding for Linaro and engineering assignees. To learn more about our membership please see: [Membership Rules of Linaro](/assets/pdf/Membership_Rules_of_Linaro_Limited_Effective_26th_July_20122.pdf) and the [Articles of Association](/assets/pdf/Linaro-Articles-of-Association-New-June-2010.pdf).

The current members are listed below. If you are interested in joining these industry leaders, please send us an email to [contactus@linaro.org](mailto:contactus@linaro.org).

<button class="btn-primary" id="expand-all">Expand All</button>

{% include members.html data-file=site.data.members %}

<div class="cognito">
    <script src="https://services.cognitoforms.com/s/KvRQmIn2dku6k6gGP711jw"></script>
    <script>
        Cognito.load("forms", { id: "14", entry: {
          "PageUrl": "{{site.url}}{{page.url}}" ,
          "RedirectUrl" : "{{site.url}}/thank-you/?ref={{page.url}}",
          "ChoiceField": [{% for member in site.data.members %}"{{member.membership_group_name}}"{% unless forloop.last %},{% endunless %}{% endfor %}]
        }});
    </script>
</div>