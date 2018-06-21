# Linaro.org Static Jekyll Site

Welcome to the official content repository for Linaro's static Jekyll based website.
Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a 
PR](https://github.com/linaro/website/pulls) / [Issue](https://github.com/Linaro/website/issues/new) if there is anything you would like to change.

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


