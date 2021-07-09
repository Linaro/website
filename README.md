# Linaro.org Static Jekyll Site

This is the git repository for Linaro's static Jekyll-based website <https://www.linaro.org>.

Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a PR](https://github.com/linaro/website/pulls) / [Issue](https://github.com/Linaro/website/issues/new) if there is anything you would like to change.

This static Jekyll site is using the [`jumbo-jekyll-theme`](https://github.com/linaro-marketing/jumbo-jekyll-theme). Please take a moment to review the guides on the [theme's GitHub wiki](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki).

*****

## Contributing

To make it easier to contribute to the content, Linaro provides a couple of Docker containers for building and checking the site. All you need is Docker installed on your computer and enough RAM and disc space.

To build the site:

```bash
cd <git repository directory>
./build-site.sh
```

To build the site and then serve it so that you can check your contribution appears:

```bash
cd <git repository directory>
JEKYLL_ACTION="serve" ./build-site.sh
```

To check that your contribution doesn't include any broken links:

```bash
cd <built web site directory>
../check-links.sh
```

The built web site directory will be `production.linaro.org`.

For more information, please see the [build container wiki](https://github.com/linaro-its/jekyll-build-container/wiki) and the [link checker wiki](https://github.com/linaro-its/jekyll-link-checker/wiki).

*****

## Guides

Generic guides for Linaro static websites based on the jumbo-jekyll-theme:

- [Adding a new page](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki/AddingPages)
- [Adding a blog post](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki/AddingPosts)
- [Building the static site](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki/Building)

Linaro.org specific guides:

TODO

*****

## Adding events to the events page

### Adding Other Events

Events listed on the events/ page are added through simply adding the `event:true` front matter value to your event page. The events will then be listed based on the date
value in front matter of that specific page.

```yaml
...
event: true
...

```

### Adding Connect Events

Connect events are added through the _data/connects.yml data file. Simply copy and existing entry in this file and add the new Connect event. Make sure to update the date specified
in the entry as this is what is used to make sure the events are listed in the correct order (most recent first).

```yaml
- id: YVR18
  placeholder: yvr18.jpg
  long-name: Linaro Connect Vancouver 2018
  start-date: 2018-09-17 09:00:00
  end-date: 2018-09-21 09:00:00
  location:
      venue: Hyatt Regency Vancouver
      city: Vancouver
      country: Canada
```

## URL Redirections

Redirection rules are defined in `_data/routingrules.json`. Please note that if the left hand side does **not** reference a file then it **must** end with `(/?|/index.html)$` otherwise the URL will not match.
