# Linaro.org Static Jekyll Site

Welcome to the official content repository for Linaro's static Jekyll based website.
Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a 
PR](https://github.com/linaro/website/pulls) / [Issue](https://github.com/Linaro/website/issues/new) if there is anything you would like to change.

***** 

## Adding a blog post

In order to add a blog post to Linaro.org copy and existing post from the [_posts folder](https://github.com/Linaro/website/tree/master/_posts). Posts are organised into by year/month so add to the correct folder based on the month you are posting it in and if the folder doesn't exist create one.

### Step 1 - Modify the post file name
The url for your title is based on the title provided in the filename e.g 2018-06-07-announcing-women-in-stem.md will have a url of /blog/announcing-women-in-stem/. Separate the words in your title by dashes and modify the date at the start of the filename as neccessary. 

### Step 2 - Modify the post front matter

Modify the post front matter based on your post. Values to modify are:
- author:
- date:
- image:
- tags:
- description:
- categories: 

#### Author

Change the author to a unique author username (e.g firstname.surname). If this is your first time posting then add your author information to the [_authors](https://github.com/Linaro/website/blob/master/_authors) collection by duplicating an existing author's .md file and modifying the values appropiately. Make sure to add your profile image to the [/assets/images/authors folder](https://github.com/Linaro/website/tree/master/assets/images/authors). Verify that the author "username:" in the _authors/ collection file for your author is an exact match to that provided as the author: in your post. Doing the above will ensure your author image and pages are rendered correctly on the Linaro.org website.

#### Date
Modify the date to somewhen before your post the blog otherwise Jekyll will see it as a __future__ post and not render it until the time on the server exceeds/equals that provided as the date in the post front matter.

#### Image

This value is used for the featured image displayed on your blog post and the image that is used when sharing the blog post on social media sites.

```YAML

image:
    featured: true
    path: /assets/images/blog/image-name.png
    name: image-name.png
    thumb: image-name.png 
    
```

Make sure that the image you add in this section of front matter is placed in the [/assets/images/blog folder](https://github.com/linaro/website/tree/master/assets/images/blog).

#### Tags
These should be modified based on the content of your post as they are used as Meta keywords and so people can find your post based on the [tags your provide](https://www.96boards.org/blog/tag/).

#### Description
Change this value to a short description of your blog post. This is used for the meta description of your blog post.

#### Categories
There are two categories to choose from:
- News
- blog

Set one or the other in the front matter of your post. If you add the "blog" category your post will show under [/blog/](https://www.linaro.org/blog/) whereas if you add the "News" category your post will display under the [/news/](https://www.linaro.org/news/) section.

### Step 3 - Add your post content.

Write your post content in Markdown format; specifically the [Kramdown](https://kramdown.gettalong.org/) Markdown flavour.

#### Adding images
Please use the following code snipppet to add an image to your blog post. Make sure to add the images that you include to [/assets/images/blog folder](https://github.com/linaro/website/tree/master/assets/images/blog).

```
{% include image.html name="name-of-your-image.png" alt="The Alt text for your image" %}
```

You also align/scale your image using the following css classes.

|Class|Details|
|-----|-------|
|small-inline|Small image aligned to the left|
|small-inline right| Small image aligned to the right|
|medium-inline|Medium image aligned to the left|
|medium-inline right|Medium image aligned to the right|
|large-inline|Large image aligned to the left|
|large-inline right|Large image aligned to the right|

```
{% include image.html name="name-of-your-image.png"  class="medium-inline" alt="The Alt text for your image" %}
```

Using this Jekyll include will allow your images to be lazy loaded and format the image HTML correctly.


#### Adding code

We are using the rouge syntax highlighter to highlight your glorious code. 

```bash
$ bundle exec jekyll serve --port 1337
```

See the full list of languages [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers).


#### Adding Media/YouTube videos

To add a media element / YouTube video use the following Jekyll include.

```
{% include media.html media_url="https://youtu.be/GFzJd0hXI0c" %}
```


*****

## Building the static site

In order to build the Linaro.org static site make sure you have Ruby and the bundler/jekyll gems installed. For instructions on how to setup an environment to build Jekyll sites see the official Jekyll documentation [here](https://jekyllrb.com/docs/installation/).

Once you have above installed you can simple clone this repo and run the following:

```
$ bundle 
```

This will install the required gems listed in the Gemfile.

```
$ bundle exec jekyll s 
```

This will serve (s) the Jekyll static website to the http://localhost:4000 where you can view the generated static website.


