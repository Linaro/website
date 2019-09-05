---
layout: flow
title: Legal
description: |-
    Information about the legal policies of Linaro's website
permalink: /legal/
flow:
    - row: main_content_row
---
  <script>
function defer(method) {
if (window.jQuery) {
    method();
} else {
    setTimeout(function() { defer(method) }, 50);
}
}
defer(function(){
    $('.hashLink').click(function(e) {
        e.preventDefault(); // Prevent the browser from handling the link normally, this stops the page from jumping around. Remove this line if you do want it to jump to the anchor as normal.
        var linkHref = $(this).attr('href'); // Grab the URL from the link
        if (linkHref.indexOf("#") != -1) { // Check that there's a # character
            var hash = linkHref.substr(linkHref.indexOf("#") + 1); // Assign the hash to a variable (it will contain "myanchor1" etc
            // Show the relevant tab
            $('ul.nav-tabs a[href="#' + hash + '"]').tab('show');

        }
    });

});
</script>
<ul class="nav nav-tabs" role="tablist" id="tabbed_nav">

  <li role="presentation" class="active">
    <a href="#t_and_cs" role="tab" data-toggle="tab">
        <svg class="mk-svg-icon" data-name="mk-icon-legal" data-cacheid="icon-5a009db08b9a5" style=" height:16px; width: 16px; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1771 1536q0 53-37 90l-107 108q-39 37-91 37-53 0-90-37l-363-364q-38-36-38-90 0-53 43-96l-256-256-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13 10 11.5 10 13.5 6 13.5 5.5 16.5 1.5 18q0 38-28 68-3 3-16.5 18t-19 20.5-18.5 16.5-22 15.5-22 9-26 4.5q-40 0-68-28l-408-408q-28-28-28-68 0-13 4.5-26t9-22 15.5-22 16.5-18.5 20.5-19 18-16.5q30-28 68-28 10 0 18 1.5t16.5 5.5 13.5 6 13.5 10 11.5 10 13 12.5 12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12t-12.5-13-10-11.5-10-13.5-6-13.5-5.5-16.5-1.5-18q0-38 28-68 3-3 16.5-18t19-20.5 18.5-16.5 22-15.5 22-9 26-4.5q40 0 68 28l408 408q28 28 28 68 0 13-4.5 26t-9 22-15.5 22-16.5 18.5-20.5 19-18 16.5q-30 28-68 28-10 0-18-1.5t-16.5-5.5-13.5-6-13.5-10-11.5-10-13-12.5-12-12.5q14 14 14 34t-14 34l-126 126 256 256q43-43 96-43 52 0 91 37l363 363q37 39 37 91z"></path></svg> Ts & Cs
    </a>
  </li>

  <li role="presentation">
    <a href="#privacy_policy" role="tab" data-toggle="tab">
        <svg class="mk-svg-icon" data-name="mk-moon-profile" data-cacheid="icon-5a009db08c04c" style=" height:16px; width: 16px; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 480h-384c-26.4 0-48-21.6-48-48v-416c0-26.4 21.6-48 48-48h384c26.4 0 48 21.6 48 48v416c0 26.4-21.6 48-48 48zm-16-448h-352v384h352v-384zm-288 160h224v-32h-224zm0-64h224v-32h-224zm32 208a48 48 4860 1 0 96 0 48 48 4860 1 0-96 0zm80-48h-64c-26.4 0-48-14.4-48-32v-32h160v32c0 17.6-21.6 32-48 32z" transform="scale(1 -1) translate(0 -480)"></path></svg> Privacy policy
    </a>
  </li>

  <li role="presentation">
    <a href="#trademark_usage" role="tab" data-toggle="tab">
         Trademark usage
    </a>
  </li>
  <li role="presentation">
    <a href="#ipr_policy" role="tab" data-toggle="tab">
         IPR Policy
    </a>
  </li>
  <li role="presentation">
    <a href="#antitrust_guidelines" role="tab" data-toggle="tab">
         Antitrust Guidelines
    </a>
  </li>
  <li role="presentation">
    <a href="#cookie_policy" role="tab" data-toggle="tab">
         Cookie Policy
    </a>
  </li>
  <li role="presentation">
    <a href="#cancellation_policy" role="tab" data-toggle="tab">
         Connect Cancellation policy
    </a>
  </li>
</ul>

<div class="tab-content" id="tabbed_nav_content">
{::options parse_block_html="true" /}
<div role="tabpanel" class="tab-pane tab-pane-legal active" id="t_and_cs" markdown="1">

### Information about Linaro™

The “Linaro Website” shall mean the web site operated by or on behalf of Linaro Limited (hereinafter “We/Us/Our”) for your use, whether as a guest or a registered user. Linaro Limited is a private limited company registered in England and Wales with company number 07180318\. VAT No: 990 0273 24\. Registered Office Address Harston Mill Royston Rd Harston Cambridge CB22 7GG

* * *

### Accessing Our site

Access to the Linaro Website is permitted on a temporary basis, and We reserve the right to withdraw or amend the information We provide on the Linaro Website without notice. We will not be liable if for any reason the Linaro Website is unavailable at any time or for any period. From time to time, We may restrict access to some parts of the Linaro Website, or the entire Linaro Website, to users who have registered with us.

* * *

### Use of and reliance on information posted

We grant you permission to download the information on to a computer and to make one hard copy of the information for reference purposes only. You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.

With respect to material, including but not limited to still images, video footage, audio product or visual representations, contained within the Linaro Website, We only grant you permission to download the material for personal use. We do not grant you a right for republication, retransmission, reproduction or other use of such material.

Any of the material on the Linaro Website may be out of date or include omissions, inaccuracies or other errors at any given time, and We are under no obligation to update such material. Commentary and other materials posted on the Linaro Website site are not intended to amount to advice on which reliance should be placed. We therefore disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to the Linaro Website, or by anyone who may be informed of any of its contents.

* * *

### Our liability

Except where expressly provided otherwise in an agreement between you and us, all information provided directly on the linaro website or indirectly through the Linaro website by hypertext link or otherwise is provided “as is” without warranty of any kind. We hereby disclaim all warranties with respect to this information, whether express or implied, including the implied warranties of merchantability, satisfactory quality and fitness for a particular purpose. In no event shall we be liable for any direct, indirect, incidental, special or consequential damages, or damages for loss of profits, revenue, data or use, incurred by you or any third party, whether in contract, tort or otherwise, arising from your access to, use of, or reliance upon information obtained from or through the Linaro website. We reserve the right to make changes, updates or corrections to the information on the Linaro website at any time without notice.

* * *

### Information about you and your visits to Our site

We process information about you gained from your use of the Linaro Website in accordance with [Our privacy policy](#privacy_policy){:.hashLink}.

* * *

### Transactions concluded through Our site

Contracts for the supply of goods, services or information formed through Our site or as a result of visits made by you are governed by Our terms and conditions notified to you during each individual transaction.

* * *

### Links from Our site

Where Our site contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them.

Thank you for visiting Our site.

LEC-ELA-00989-V1.0, 03 May 2010\. Address updated September 2012\. Copyright (c) 2010 Linaro Limited
</div>

{::options parse_block_html="true" /}
<div role="tabpanel" class="tab-pane tab-pane-legal" id="privacy_policy" markdown="1">


As an organization Linaro Limited is committed to fairness, both in the collection and use of personal information. Fairness has two elements:

Using information in a way that people would reasonably expect and in a way that is fair;

Ensuring, as far is reasonably practical, people know how their information will be used.

To achieve these aims, Linaro follows the code of practice recommended by the UK Information Commissioner under section 51 of the Data Protection Act 1998.

We are committed to safeguarding the privacy of users of web sites operated by or on behalf of Linaro™ Limited (together “Linaro Website”). This statement explains how We collect, use and safeguard Data (defined below) you provide when using a Linaro Website. This statement forms part of and is incorporated into the [Terms and Conditions of Use](#t_and_cs){:.hashLink}. Any personal information which may be collected from a Linaro Website will be treated in accordance with this privacy policy, the Data Protection Act 1998, as amended and other applicable laws. For the purposes of the Data Protection Act 1998, the data controller is Linaro Limited, a company registered in England and Wales with company number 07180318 (hereinafter “We/Us/Our”). Registered office address: Harston Mill Royston Rd Harston Cambridge CB22 7GG. Linaro Limited is a private limited company.

By using a Linaro Website, you consent to the collection and use of your information in the manner and for the purposes set out below.

* * *

### What personal information is collected?

When you send Us an email or visit a Linaro Website, We may collect, from both public and private areas of the Linaro Website, personal information volunteered by you about you, including name, title, company, county, mailing address, email address, phone numbers, fax numbers, age range and company size and Our web server logs, browser cookies and local shared objects may collect details of your domain name, operating system, browser type, IP address and a unique identifier for your computer, or other access device (“Data”). When you submit Data you are agreeing to its transfer, storage and processing.

* * *

### Who is collecting the Data?

When you are on a Linaro Website and are asked for Data, you are sharing that Data with Linaro Limited and its related companies. The Data may be stored in the European Economic Area (“EEA”) or transferred to and stored at a destination outside the EEA. Data may be disclosed to and processed by staff operating outside of the EEA who work for Us and Our related companies.

The Linaro Website may also contain various links to third-party web sites. Third-party web sites may provide additional information, goods, services and/or promotions. These sites are owned and operated independently from Us, and have their own separate privacy and data collection practices. Any Data you provide to these web sites will be governed under the terms of their privacy policy, if any. We have no responsibility or liability whatsoever for the independent actions or policies of these independent sites, and are not responsible for the content or privacy practices of such sites.

* * *

### How is your Data used?

Data maybe used internally by Us, including updating Our databases, contacting you with requested information, maintaining a technical support history, sending marketing information, determining trends in your use of Our product, aiding in the design of Our product and services, processing your enquiries, measuring the use of Our sites, administering and improving the content of Our sites.

* * *

### With whom do We share your Data?

Except as expressly stated in this policy or on Our web sites, We do not provide your Data to third parties without your consent.

If you register and provide information to a forum or blog the information you provide will be published for anyone to see.

We may occasionally share aggregated demographic Data with Our partners. This Data is not linked to any personal information that can identify any individual person.

We process data in the ordinary course of business and We use third parties to provide services on Our behalf. We will provide your relevant Data to them solely for the purposes of the effective delivery of such services.

In the event that We sell or buy any business or assets, or if Linaro or substantially all of its assets are acquired by a third party the relevant Data held by Us will be one of the transferred assets.

We may use your Data if We are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply Our terms of use and other agreements; or to protect the rights, property, or safety of Linaro, Our customers, or others.

* * *

### What choices do you have regarding the collection, use and distribution of your Data?

We may, from time to time, send you email or direct mail regarding Our products and services. If you do not want to receive such information, simply tell Us when you give Us your Data, or follow the directions contained on the mailing to remove your name from Our mailing list(s).

You also have the right to access (review, correct, amend or delete) your Data by contacting Us. Individuals are responsible for providing Linaro with accurate and complete personal information, and for contacting Us if correction of such information is required. Please note that, where permitted, We may charge a nominal fee for fulfilling access requests and that to the extent permitted by Law We reserve the right to disallow unreasonable requests for access.

Please direct any questions concerning Linaro’s privacy practices or if you have any queries or requests in relation to your Data to [privacy@linaro.org](mailto:privacy@linaro.org) or Linaro Limited, Harston Mill, Harston, Cambridgeshire, CB22 7GG, United Kingdom. Requests to unsubscribe from (“opt-out”) of communications from Linaro may also be sent to unsubscribe at [privacy@linaro.org](mailto:privacy@linaro.org).

* * *

### How secure is your Data?

We always use industry-standard encryption technologies when transferring and receiving Data. We have appropriate security measures in place to protect against any loss, misuse or alteration of information that We have collected. However, We cannot ensure or otherwise warrant the security of any information you provide to Us or from a Linaro Website, and therefore you use the Linaro Website at your own risk.

**We do not store credit card** **details nor do we share customer details with any 3rd parties**

* * *

### What about browser cookies and local shared objects?

This website does not store any information that would, on its own, allow us to identify individual users of this service without their permission. Any cookies that may be used by this website are used either solely on a per session basis or to maintain user preferences. Cookies are not shared with any third parties.

<table id="TABLE_105">

<tbody id="TBODY_106">

<tr id="TR_107">

<th id="TH_108">COOKIE NAME</th>

<th id="TH_109">DESCRIPTION</th>

</tr>

<tr id="TR_110">

<td id="TD_111">flCrumbs</td>

<td id="TD_112">
This cookie is set on confirmation that visitors are happy with the use of cookies on this website.
**This cookie is only set after users have consented to the use of cookies.**
</td>

</tr>

<tr id="TR_115">

<td id="TD_116">\___utmas___utmbs___utmcs___utmzs</td>

<td id="TD_117">These cookies are part of Google Analytics, which we use to monitor traffic levels, search queries and visits to this website, and to highlight potential problems within the site structure.Google Analytics stores IP address anonymously on its servers in the US, and neither we or Google associate your IP address with any personally identifiable information.These cookies enable Google to determine whether you are a return visitor to the site, and to track the pages that you visit during your session.
This cookie is set after users have consented to the use of cookies.</td>

</tr>

</tbody>

</table>

This website uses Google Analytics, a web analytics service provided by Google, Inc. (“Google”). Google Analytics uses “cookies”, which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above. Please note that by deleting or disabling browser cookies or local shared objects you may not be able to use certain areas or features of Our site.

To edit cookie settings for PCs

*   **Google Chrome**
Click on ‘Tools’ at the top of your browser window and select Options. Click the ‘Under the Hood’ tab, locate the ‘Privacy’ section, and select the ‘Content settings’ button.
*   **Microsoft Internet Explorer 6.0, 7.0, 8.0, 9.0**
Locate ‘Internet options’ in the browser menu, then click on the ‘Privacy’ tab.
*   **Mozilla Firefox**
Locate ‘Tools’ in the browser menu and select Options, then select the Privacy icon. Click on Cookies
*   **Opera**
Click on ‘Menu’ at the top of your browser window and select ‘Settings’. Select ‘Preferences’, then the ‘Advanced’ tab

To edit cookie settings for Macs

*   **Safari**
Click on ‘Safari’ at the top of your browser window and select the ‘Preferences’ option, then ‘Security’.
*   **Google Chrome**
Click on ‘Tools’ at the top of your browser window and select Options. Click the ‘Under the Hood’ tab, locate the ‘Privacy’ section, and select the ‘Content settings’ button.
*   **Mozilla Firefox**
Locate ‘Tools’ in the browser menu and select Options, then select the Privacy icon. Click on Cookies
*   **Opera**
Click on ‘Menu’ at the top of your browser window and select ‘Settings’. Select ‘Preferences’, then the ‘Advanced’ tab

* * *

### Changes to this privacy policy

We may revise this privacy policy at any time by amending this page. You are expected to check this page from time to time to take notice of any changes We made, as they are binding on you. Some of the provisions contained in this privacy policy may also be superseded by provisions or notices published elsewhere on Our site.

Thank you for visiting Our site.

LEC-ELA-00990-V2.0, 27 April, 2010, Copyright (c) 2010 Linaro Limited

</div>

{::options parse_block_html="true" /}
<div role="tabpanel" class="tab-pane tab-pane-legal" id="trademark_usage" markdown="1">

Linaro® is a registered trademark of Linaro in the United Kingdom and other countries

Linux® is the registered trademark of Linus Torvalds in the U.S. and other countries

All other trademarks are the property of their respective owners.

The objectives of the Linaro company trademark policy are to: encourage widespread use of the Linaro trademarks by the Linaro™ community while controlling that use in order to avoid confusion on the part of Linaro users and the general public; to maintain the value of the image and reputation of the trademarks and to protect them from inappropriate or unauthorized use.

The Trademark policy and guidelines provide information on what is allowed, what isn’t allowed, and cases in which you should ask permission. If you have any doubt, please contact us at trademarks@linaro.org and a member of our trademark team will be in touch with you shortly.

</div>

{::options parse_block_html="true" /}
<div role="tabpanel" class="tab-pane tab-pane-legal" id="ipr_policy" markdown="1">

### 1. DEFINITIONS

Words and expressions defined in the Linaro Membership Rules shall have the same
meaning in this IP Policy. In addition, in this IP Policy the following words have the
following meanings:

"**Contribution**" means an original work of authorship, including any modifications,
abridgements, adaptations, translations and additions to a pre-existing original work of
authorship (to the extent comprising an original work of authorship), that is submitted for
inclusion in, or for documentation of, a Linaro Project. For the purpose of this definition,
the term "submitted" means the delivery or transmission of any form of electronic or
written communication to Linaro for inclusion in the Linaro Project, including but not
limited to those electronic or written communications delivered or transmitted through
electronic mailing lists, source code control systems and issue tracking systems
managed by or for Linaro for the purpose of discussing and improving a Linaro Project;

"**Contributor**" means the copyright owner, or legal entity authorized by the copyright
owner, that makes a Contribution to a Linaro Project;

"**Linaro Project**" means a project in respect of which write access to the source
repository is managed by Linaro; and

"**Member**" is any party which has executed a deed of adherence to the Linaro
Membership Rules.

### 2. INTRODUCTION

The purpose of this Linaro Intellectual Property Policy ("IP Policy") is to set out the
general principles under which Linaro will:

a) accept Contributions;
b) redistribute Contributions; and
c) manage other intellectual property matters.

By signing the Subscription Agreement, Members agree to comply with this IP Policy.
In addition, this IP Policy shall serve as the basis for how non-Members interact with
Linaro through participation in a Linaro Project.


### 3. ACCEPTING CONTRIBUTIONS (IN-BOUND LICENSING) AND UPSTREAM LICENSES

When selecting upstream projects to form the basis of a Linaro Project or for inclusion in
Linaro staging release or hosting development of new open source software components
and accepting Contributions the emphasis in selection will be on the quality of code and
community support for such project. However Linaro will only consider software for
inclusion in Linaro Projects or in Linaro staging release and will only host development of
new open source software and/or accept Contributions if the license under which such
software is distributed has been approved as follows;

(a) Software licensed under the Eclipse Public License (EPL), GNU General Public
License version 2.x (GPL), GNU Library or “Lesser” Public License version 2.x
(LGPL), Mozilla Public License 1.1 (MPL), Massachusetts Institute of Technology
(MIT) or simplified Berkeley Software Distribution (BSD) or under any other
license that is subsequently approved by the Technical Steering Committee and
the Board for automatic approval shall be automatically approved;

(b) Software licensed under any other Open Source Initiative ("OSI") approved
software licenses shall be subject to the unanimous approval of the Technical
Steering Committee; and

(c) Software licensed under any other license terms and conditions or that has not
received unanimous approval under paragraph 3(b) above but had not been
unanimously rejected shall be subject to the approval of the Board (or the
Board’s designee specifically authorized for this responsibility) and the Technical
Steering Committee will, when referring such software to the Board provide the
Board with a summary of their discussions and, where relevant, a record of the
votes made for and against such software.

Software that is unanimously rejected by the Technical Steering Committee under
paragraph 3(b) shall not be required to be referred to the Board.

All license requests shall be recorded by the Technical Steering Committee and the
Technical Steering Committee and the Board shall review the licence requests granted
and outstanding at such regular intervals as the Technical Steering Committee or the
Board shall determine.

#### Choice of Project License

##### Existing Open Source Projects

A significant focus of Linaro will be the integration of upstream open source software
projects into a staging release. To minimise variances between the upstream projects
and such release, Linaro wishes to contribute back to the relevant upstream projects and
where successful in that endeavour will contribute back under the licenses already
established for those upstream projects. Notwithstanding this ultimate aim, Linaro
Projects will, at least transiently, be hosting patches to relevant upstream projects and these Linaro
Projects will accept Contributions under the licenses already established for those upstream projects.

##### Securing Rights

The mechanisms by which Linaro will obtain rights to Contributions sufficient to distribute
them are:

(a) under the Subscription Agreements;
(b) under express license grants in relevant open source licenses; or
(c) as otherwise mutually agreed upon by the Contributor and the Board.

### 4. REDISTRIBUTING CONTRIBUTIONS (OUT-BOUND LICENSING)

#### Existing Open Source Projects

The license for distribution of software created in a Linaro Project and which is based on
software from an existing open source software project will be compatible with the
outbound license of the existing open source software project under which the code was
received by Linaro.

#### New Open Source Projects

The license for distribution of software created in a Linaro Project not based on software
from an existing open source software project will be compatible with the licenses
approved in accordance with part 3 of this schedule.

### 5. CONFIDENTIALITY

The Member(s) and other parties may exchange information as a result of their
participation in Linaro and/or generally in the furtherance of the Objective (defined in the
Membership Rules) of Linaro. All such information shall be considered non-confidential
and provided under terms consistent with this IP Policy. In the event confidential
information needs to be shared, such confidential information shall be disclosed pursuant
to a confidentiality agreement entered into by the participants in such disclosure.

### 6. TRADEMARKS AND LOGOS

The use of trademarks and logos associated with Linaro shall be used in accordance with
the then current Linaro Trademark Usage Guidelines.

### 7. DISCLAIMERS AND NOTICES

UNDER NO CIRCUMSTANCES SHOULD THIS IP POLICY BE INTERPRETED TO BE
A REPRESENTATION, WARRANTY, CONDITION, OR OTHER FORM OF
GUARANTEE THAT THE INTELLECTUAL PROPERTY RIGHTS OF A MEMBER, OR
ANY OTHER PARTY, WILL NOT BE INFRINGED IF THIS IP POLICY IS COMPLIED
WITH. IN ADDITION, LINARO, ITS MEMBERS AND THEIR RESPECTIVE
EMPLOYEES AND AGENTS SHALL HAVE NO LIABILITY OF ANY KIND TO EACH
OTHER OR TO ANY OTHER PARTY FOR FAILURE TO COMPLY WITH THIS IP
POLICY.

LINARO, ITS MEMBERS AND THEIR RESPECTIVE EMPLOYEES AND AGENTS
HEREBY DISCLAIM ALL REPRESENTATIONS, WARRANTIES AND CONDITIONS,
EXPRESS, IMPLIED AND STATUTORY INCLUDING, BUT NOT LIMITED TO, ANY
REPRESENTATION OR WARRANTY OF NON-INFRINGEMENT RELATING TO ANY
SOFTWARE OR PRODUCT MADE AVAILABLE THROUGH LINARO.

LINARO, ITS MEMBERS AND THEIR RESPECTIVE EMPLOYEES AND AGENTS
SHALL NOT HAVE ANY LIABILITY INCLUDING, BUT NOT LIMITED TO, DIRECT,
INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL AND CONSEQUENTIAL DAMAGES
WITH RESPECT TO THIS IP POLICY INCLUDING, BUT NOT LIMITED TO, FAILURE
TO COMPLY WITH THIS IP POLICY.

</div>

{::options parse_block_html="true" /}
<div role="tabpanel" class="tab-pane tab-pane-legal" id="antitrust_guidelines" markdown="1">

The defined terms in these Antitrust Guidelines shall have the same meanings given to them in
these Rules.
### 1. BACKGROUND

#### 1.1

The Members, officers, Directors and the employees (each, a "Participant") of Linaro
understand that all of Linaro’s meetings and activities will be conducted strictly in
accordance with all relevant competition laws.

#### 1.2

As a reference and to assist in complying with the relevant competition laws, below is a
summary of the principal competition law issues that may arise in the context of Linaro
meetings or discussions. It is not meant to be a comprehensive analysis of the
competition laws of every country, but it should alert participants to high-risk activities and
the need to consult with a lawyer whenever they are in any doubt and before acting.
Failure to respect the basic guidelines set out in this document could expose Linaro and
each of its Participants to significant fines and/or criminal sanctions. It is the policy of
Linaro that if any doubt exists as to whether it is permissible to discuss a particular topic
or to engage in a particular practice, no further action is to be taken until the matter has
been referred to legal counsel for guidance.

#### 1.3

All Participants should understand that the competition laws differ across jurisdictions and
that these Guidelines are not meant to be a substitute for his or her consulting with legal
counsel about appropriate conduct.

### 2. INTRODUCTION TO COMPETITION LAW

#### 2.1

Competition law seeks to promote competition between competitors with the goal of
achieving benefits for consumers of products and services. Competitors are therefore
prohibited from cooperating in ways that distort the competitive process and frustrate the
aforementioned goal of competition law. Accordingly, under competition law, there are
rules as to what types of information and topics can be legitimately discussed between
competitors without giving rise to concerns that their conduct on the market is being
aligned. A non-exhaustive list of examples of the types of topics that should not be
discussed in the context of Linaro are set out in Section 3 of these guidelines.

#### 2.2

Moreover, when industry members (including Members of Linaro within an industry)
develop and adopt technology, it is important for the process to be open and transparent.
In addition, industry members (including Members of Linaro within an industry) should not
enter into agreements that would result in competition being adversely affected. If a
Linaro Member has any doubts about whether its conduct may restrict competition, they
should seek legal advice.

#### 2.3

It should be noted that the range of subjects, issues and matters, which may be subject
to the provisions of both national and international competition law, is enormous. There
is no definitive list of matters or behaviour that would be considered "anti-competitive," although there are certain types of conduct that would be regarded as "egregious" violations of competition law irrespective of jurisdiction. Examples of such egregious
violations of competition law are set out in Section 4 of these Guidelines.

#### 2.4

It is vital that Participants in Linaro are vigilant in ensuring that at no time are they
involved in any behaviour that would be considered anti-competitive by the relevant
authorities. Such vigilance is even more compelling given the heavy financial sanctions
(and criminal in some jurisdictions) that exist for egregious breaches of competition law.

#### 2.5

Guidance relating to: (i) the types of information that should not be exchanged in the
context of Linaro; (ii) agreements that would constitute egregious violations of
competition law; (iii) the conduct of Participants in Linaro’s Councils and committees; and
(iv) the general conduct of all Linaro meetings are set out below.

### 3. GUIDANCE RELATING TO INFORMATION EXCHANGES IN LINARO

#### 3.1

Under competition law, exchanges of information between competitors that would
typically be regarded as commercially sensitive or confidential are not permitted because
they may cause these competitors to coordinate or align their conduct, thus distorting the
market. Exchanges of this type of information may also be seen as evidence of the
existence of an anti-competitive agreement between the different parties that represents
an egregious violation of competition law (examples of which are set out in Section 4).
Participants in Linaro will therefore not discuss (seriously or in jest) or exchange
information regarding the following:

* Individual company prices, proposed price changes, price differentials, price levels,
pricing patterns or policies, pricing plans or terms and conditions of sale affecting price
such as mark-ups, discounts, allowances, promotions, or credit terms.
* Individual company data on costs, production plans, capacity, inventory, sales data, profit
margins, or other data from which a competitor could discern prices.
* Individual company policies relating to current or future strategy, including investment,
technology, research and development, production, distribution, or marketing (including
advertising) of particular products.
* Individual company bids for particular customers or company procedures for responding
to bid invitations or any other data relating to existing customers.
* Industry pricing policies, price levels, price changes, pricing procedures, profit margins, or
other data that relates to price.
* Matters related to allocation of territories, allocation of customers, or restrictions on
manufacturing or selling certain products.
* Matters related to dealing or not dealing with a competitor, supplier, or customer that
might have the effect of excluding them from any market or influencing the business
conduct of firms toward them.
4268669-21 46

#### 3.2

Any proposals regarding statistical, benchmarking or other survey programmes for Linaro
should not be discussed until legal advice has been sought and obtained.

### 4. GUIDANCE RELATING TO AGREEMENTS THAT REPRESENT EGREGIOUS VIOLATIONS OF COMPETITION LAW

#### 4.1

Certain types of agreements between independent enterprises are regarded as
constituting egregious violations of competition law because they distort competition and
adversely affect customers. The main examples of such conduct are set out below.
However, the list of agreements and practices set out below is not exhaustive.

#### 4.2

It is important to note that the meaning of "agreement" in the context of competition law is
very broad. An agreement need not be expressly stated or in writing; for the purposes of
competition law, an agreement may be deemed to exist with no formal offer or
acceptance. An agreement may be proven entirely by indirect or circumstantial evidence,
e.g., competitors exchanging price lists at meetings of a trade association or other
industry body. Communications among competitors are often used as circumstantial
evidence of the existence of an agreement. Anything an employee says or writes to a
competitor can be used as evidence in action against the company or the individual
concerned. For the avoidance of doubt, "off the record" conversations or a "gentleman’s
agreement" or "standard industry practice" will not enable any party to evade the general
prohibition under competition law.

**(A) Price Fixing**

#### 4.3

Price-fixing agreements between competitors, often called "cartels," are the most
frequently prosecuted competition law violation.

#### 4.4

Virtually every developed country prohibits price-fixing agreements. The penalties for
engaging in such conduct are typically financial, although in certain jurisdictions (most
notably the United States and the United Kingdom), criminal sanctions may also apply,
resulting in substantial prison sentences for those individuals who are found to have
violated competition law.

#### 4.5

The prohibition against price fixing applies broadly to any understanding or agreement
that has the effect of raising, lowering, or stabilizing prices among competitors, including
agreements on the following:

* Prices or discounts;
* Margins;
* Credit terms;
* Promotional programs; and
* Other terms and conditions of sale.

#### 4.6

It is also illegal for companies to enter into an agreement with their customers to set the
resale price (known as resale price maintenance) of a product.

**(B) Allocation of Supply or partitioning of Markets**

#### 4.7

Agreements among competitors or potential competitors to allocate supply or partition
markets are just as serious as price fixing. These include agreements between
competitors concerning the:

* Quantities of goods that are to be purchased, produced, or marketed;
* Geographic areas into which they will sell;
* Customers to whom they will sell;
* Market share each firm will achieve; and
* Products they will sell.

**(C) Group Boycotts**

#### 4.8

Group boycotts refer to understandings or agreements by two or more Persons to refrain
from dealing with another party or only to deal under certain terms. These types of
agreements will generally be illegal if the agreement 1) is designed to exclude a
competitor from a trade association or a standards-setting group where membership is
necessary for that firm to compete effectively in the relevant market or 2) has the purpose
or effect of raising prices or reducing competition. Similarly, rules of industry associations
that prevent or restrict members from dealing with competing bodies, suppliers or
technologies may be illegal if they adversely affect competition. In addition, agreements
among competitors or firms on different levels of the distribution chain are illegal if the
purpose or effect of the boycott is to allocate markets or raise prices.

### 5. GUIDANCE GOVERNING PARTICIPATION IN LINARO

5.1 Linaro has been established to be the leading consumer-focused open source enabling
distribution, driving innovation across vertical segments, and deployed by the industry's
leading OEM, operator and semiconductor companies. In achieving this goal, it has been
determined that:

* membership in Linaro shall be determined only on the basis of the objective and nondiscriminatory criteria specified in the Membership Criteria;
* any recommendations arising out of any Working Groups that are adopted are based on
objective criteria and interpreted objectively and accurately;
* decisions are not made by those unfamiliar with the objectives of Linaro and the basis on
which decisions are made within Linaro;
* the recommendations issued by any Working Groups accomplish Linaro’s goals and
objectives in the least restrictive way; and
* Participants should not enter into agreements that prevent them from participating in
other industry bodies or from dealing in alternative technologies outside of Linaro.

### 6. RULES FOR LINARO MEETINGS AND OTHER ACTIVITIES

Subject to the terms set out in these Rules, all meetings will follow these procedures:

* A draft agenda will be prepared before each meeting of the Board and sent to Linaro’s
legal counsel for review and approval.
* Each meeting will begin with a statement from the Chairperson of that meeting that the
Participants have agreed to follow these guidelines and copies will be available at the
meetings for participants to review. All Participants should confirm that they are aware of
and understand these Guidelines.
* Discussions at meetings will follow the topics on the agenda. Members wishing to raise
any topics for discussion should inform the Board at the time the agenda is prepared.
Legal counsel will be consulted if a Participant has a concern about the direction of any
discussion. Such discussion will cease until legal counsel has approved it.
* Minutes will be drafted that accurately reflect the matters that occur at each meeting and
will be sent to legal counsel and the Members for review before being made final.
* If any Participant persists in discussing a prohibited subject as set out in these guidelines
or any subject that raises competition law concerns, other Participants should leave the
meeting. Where a Participant leaves a Linaro meeting, that Participant should make his
or her departure obvious, stating the reasons for the departure.
* All Participants should be careful in his or her choice of words at meetings; they should
never, even in jest, use words that indicate that they approve of or have participated in
prohibited conduct; they should avoid conjecture, exaggeration or colourful or ambiguous
language that might be misinterpreted.

### 7. CONCLUSION

#### 7.1

This document contains guidelines and general advice to Members in relation to issues of
competition law. In case of doubt, specific advice should always be sought. The
extensive range of matters and behaviour that may be deemed anti-competitive should
always be borne in mind. Failure to observe this principle may result in serious
consequences for both Linaro and its member Participants. It is incumbent on all
Participants at all times, not just Chairmen of meetings or working groups to follow the
specific rules and advice contained in this document. Respecting these Guidelines is
to the benefit of all Participants in Linaro.

</div>

{::options parse_block_html="true" /}
<div role="tabpanel" class="tab-pane tab-pane-legal" id="cookie_policy" markdown="1">

# Cookie Policy

## What does this policy cover?

This policy explains the terms that apply to users of any websites that are operated by or on behalf of Linaro Limited (together “Linaro Website”). Linaro Limited, a company registered in England and Wales with company number 7180318 (“We/Us/Our”). Registered office address: Harston Mill, Harston Cambridge CB22 7GG. Linaro Limited is a private limited company acting on behalf of itself and its subsidiaries.

This Cookie Policy incorporates the following additional terms and conditions and policies:

* Privacy Policy
* Terms and Conditions of Use

By using a Linaro Website, you understand that we may automatically collect and store information about your visit to Our Linaro Websites, through using browser cookies or similar devices. Through continuing to use Our Linaro Websites you consent to our use of cookies in the manner and for the purposes set out below.

* What is a cookie?
* Why do we use cookies?
* Specific types of cookie
* How to control cookies and similar technologies
* Cookies set by Linaro Websites
* Cookies set by third parties
* Changes to this policy

* * *

**What is a cookie?**
When referring to cookies in this policy, we are referring to HTTP cookies which are small text files that are stored on your browser when you use websites and applications. We use a mixture of ‘session’ cookies, which are stored in your web browser for a limited time while you are accessing our website and ‘persistent’ cookies, which are stored for longer and are activated each time you revisit Our Website. There are other technologies that can be used for similar purposes. These include HTML5 Local Storage and Local Shared Objects (“LSO”s). We may use HTML5 Local Storage, LSOs, and similar technologies, as well as cookies for authenticating you, keeping track of information you have provided to us, and remembering your preferences.

* * *

**Why do we use cookies?**
We may obtain information about your use of the Website by using a cookie file which is stored on the hard drive of your computer. Cookies contain information that is transferred to your computer’s hard drive. They help us to improve Linaro Websites and to deliver a better and more personalized service. They enable us to:

*   Estimate our audience size and usage pattern.
*   Store information about your preferences and so allow us to customize Linaro Websites according to your individual interests.
*   Recognize you when you return to Linaro Websites.

* * *

**Specific types of cookie**
The types of cookie that are set by Linaro Websites include the following:

*   **Strictly necessary cookies** – These cookies are essential to enable you to move around Linaro Websites and use their features, such as accessing secure areas of Linaro Websites and providing services that you have asked for.
*   **Performance cookies** – These cookies collect information about how you use an Linaro Website, for instance which pages you go to most often, and if you get error messages from web pages. These cookies do not collect information that identifies you, and all information collected is anonymous and is only used to improve how a website works.
*   **Functionality cookies** – These cookies allow the website to remember choices you make, for example username, language, region, and provide enhanced, more personal features.
*   **Targeting and advertising cookies** – These cookies allow us to track you as you visit our websites, helping us to send you e-mails in respect of information and products that you have shown an interest in. When you have logged in to your account, registered an account with us, or provided your contact information, the cookies no longer track you anonymously, but the information gathered from these cookies is linked to the contact information you have provided to us.

* * *

**How to control cookies and similar technologies**

You can stop cookies being stored on your browser in future or delete any cookies that are already on your browser. To do so, refer to your browser manufacturer’s instructions by selecting “Help” in your browser menu. Information on deleting or controlling browser cookies is available at http://www.AboutCookies.org.

Third-party cookies cannot be controlled by changing any Linaro Website settings, and if you have JavaScript disabled, you might not be able to change any Linaro Website settings. Change cookie settings using your browser settings instead.
Note that if you disable cookies entirely, you might not be able to use certain areas or features of Linaro Websites.

* * *

## Cookies set by Linaro Websites

he Linaro Websites might set cookies for the following reasons:

### Strictly necessary cookies

**Cookie settings**

These cookies are set to test and check for policy acceptance when policies have been updated or if you are a new visitor to an Linaro Website.

* * *

**Login settings**

These cookies are set to maintain aspects of your login session. They are used to:

*   Authenticate you as a user.
*   Associate you with a specific server.
*   Remember the last time that you visited the website.
*   Authenticate you with third parties if you request to do so.

* * *

**General session**

These cookies are used to remember information while browsing from one page to another. For example, when entering data into forms

* * *

**Content delivery network**

These cookies are used to aid in efficiently routing internal traffic, and contain encoded addresses of internal Jive servers. These addresses are strictly internal, and cannot be used to connect to internal servers from the Internet. Altering the values of the cookie does not have any effect.

* * *

### Functionality

**Login settings**

These cookies are set to maintain your login session and remember your preference in respect of storing your login credentials.

* * *

**Tabbed content**

Some web pages have tabbed content and this cookie records which tab is currently being viewed.

* * *

**Regional content**

These cookies are set to provide region-based content and remember time zone settings.

* * *

**Language settings**

These cookies are set to determine and remember which language to display content in.

* * *

**Device functionality**

These cookies are set to provide different content depending on the browser device being used.

* * *

**Search settings**

These cookies save all user-defined working sets that can restrict the scope of searches. If this data exceeds 4KB in size, further cookies are created as necessary.

* * *

**Distributor settings**

These cookies are used to maintain settings within the distributor section of the site.

* * *

**Forum functionality**

These cookies are used to remember settings and provide forum functionality. They are used to:

*   Maintain the date setting.
*   Remember the EULA setting.

* * *

**Download settings**

These cookies are used to remember preferences when downloading evaluation software from any Linaro Website.

* * *

**Editor settings**

These cookies are used to maintain the height of the editor windows and remember the editor mode that you have chosen.

* * *

### Performance

**Google Analytics cookies**

These are web analytics cookies, provided by Google Inc., that are used to collect information about how visitors use Linaro Websites. We use the information to compile reports and to help us improve the site. The cookies collect information in an anonymous form, including the number of visitors to the site, where visitors have come to the site from, and the pages they visited.
The information generated by the cookie about your use of an Linaro Website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage.
Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on behalf of Google. Google will not associate your IP address with any other data held by Google.
By using an Linaro Website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.
These are third party cookies.
Targeting & Advertising

* * *

**Marketing cookies**

These cookies are used to collect information about how visitors use Linaro Websites. We link this information to the contact and account details you have provided us with and use the information to understand which products and services you are interested in and send you information about the products that you have shown an interest in. These cookies are set by many Linaro Websites.

* * *

**Cookies set by third parties**
Third parties may also use cookies over which we have no control. These cookies are likely to be performance cookies or targeting and advertising cookies. Third party cookies used on Linaro Websites include those set by YouTube, Twitter, Google and Facebook.

* * *

**Changes to this policy**
We may revise this cookie policy at any time by amending this page, and where appropriate, by notification on Our Linaro Websites. You should check this page from time to time to review any changes We have made. Some of the provisions in this cookie policy may also be superseded by provisions or notices published elsewhere on Our Linaro Websites.
Thank you for visiting Our site.


</div>

{::options parse_block_html="true" /}
<div role="tabpanel" class="tab-pane tab-pane-legal" id="cancellation_policy" markdown="1">

**Cancellation policy:**
If you need to cancel for any reason please contact us by emailing [connect@linaro.org](mailto:connect@linaro.org). Refunds will only be issued for cancellations received at least 3 weeks prior to the first day of the event and may take up to 14 days to process. Please note that we reserve the right to charge a 5% processing fee on all refunds.

**Payment instructions:**
Payments are done through Paypal. To complete payment, you will need to fill in your billing address, click ‘Make Payment’ and then press the Paypal button on the following page to complete the transaction.

</div>

</div>
