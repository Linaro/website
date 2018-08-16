---
title: Membership
description: |-
    Members currently working with Linaro and how to become a member of Linaro.
layout: empty
permalink: /membership/
js-package: members
css-package: members
---
<div class="container-fluid">

<div class="row" id="why-join">
    <div class="container text-center">
        <h1 class="fly">Why Join?</h1>
        <p class="fly">
            Linaro helps you work with the latest open source technology, building support in upstream projects and ensuring smooth product roll outs and secure software updates. Instead of duplicating effort, members share development costs to accelerate innovation and time to market.
        </p>
    </div>
</div>
<div class="row" id="key-factors">
    <div class="container">
        <div class="col-xs-12 col-sm-6 key-factor text-center">
            <div class="key-factor-block fly">
                <span class="key-factor-title">
                    <span class="bold">Enable differentiation</span> with <span class="bold">open source</span>
                </span>
                <p>
                    Regardless of what industry you operate in, there are common software foundations we all need to deploy our products. By working with Linaro and its members on the essentials, you can focus your attention on differentiating your products.
                </p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 key-factor text-center">
            <div class="key-factor-block fly">
                <span class="key-factor-title">
                    <span class="bold">Accelerate development</span> with <span class="bold">reduce costs</span>
                </span>
                <p>
                    Sharing the workload with Linaro and its members enables you to reduce your development costs as everyone contributes funding and engineering resource. Collaborating with engineers across a wide range of verticals and companies also has the added benefit of quicker problem solving, accelerating innovation and thus time to market.
                </p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 key-factor text-center">
            <div class="key-factor-block fly">
                <span class="key-factor-title">
                    Boost your <span class="bold">engineering</span> with Linaro’s <span class="bold">Arm software expertise</span>
                </span>
                <p>
                    With a track record of delivering high value collaboration, Linaro is consistently in the top five company contributors to the Linux kernel and a major contributor to over 70 other open source projects, including many maintained by Linaro engineers. Linaro’s close working relationship with Arm is also unrivalled, meaning if you want to develop products using Arm software, Linaro membership is essential.
                </p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 key-factor text-center">
            <div class="key-factor-block fly">
                <span class="key-factor-title">
                    <span class="bold">Be part of something bigger</span>
                </span>
                <p>
                    Linaro is member funded and delivers output to members, into open source projects, and into the community. Founded in 2010 with 6 members, Linaro now has over 20 with 140 staff and a total of over 300 OSS engineers distributed globally. Becoming a Linaro member not only enables you to develop your products, it also enables innovation to take place in the wider Open Source Community.
                </p>
            </div>
        </div>
    </div>
</div>
<div class="row" id="existing-members">
    <div class="container">
        <p class="fly">
            The current members are listed below. If you are interested in joining these industry leaders, please fill out the form below or send us an email to [contactus@linaro.org](mailto:contactus@linaro.org).
        </p>
        <button class="btn-primary fly" id="expand-all">Expand All</button>
        {% include members.html data-file=site.data.members %}
        <div class="cognito fly">
            <script src="https://services.cognitoforms.com/s/KvRQmIn2dku6k6gGP711jw"></script>
            <script>
            Cognito.load("forms", { id: "14", entry: {
            "PageUrl": "{{site.url}}{{page.url}}" ,
            "RedirectUrl" : "{{site.url}}/thank-you/?ref={{page.url}}",
            "ChoiceField": [{% for member in site.data.members %}"{{member.membership_group_name}}"{% unless forloop.last %},{% endunless %}{% endfor %}]
            }});
            </script>
        </div>
    </div>
   
</div>

</div>
