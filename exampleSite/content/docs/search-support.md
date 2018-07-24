---
date: 2018-07-05T20:00:00+06:00
lastmod: 2018-07-06T01:30:00+06:00
title: "Search Support"
authors: ["muniftanjim"]
categories:
  - features
tags:
  - search
slug: search-support
toc: true
---

Minimo supports the following clients for the search feature:

- [Algolia](https://www.algolia.com)
- [Fuse.js](http://fusejs.io)
- [Lunr.js](https://lunrjs.com)

Follow the following steps for enabling search in your site.

## Create Search Page

First of all, you'll need to create a search page.

Create a markdown file under `/content/page/` directory with the filename `search`. If your site is multilingual, you can include language code in the filename. For example:

- `/content/page/search.md`
- `/content/page/search.en.md`

Add the following options in the frontmatter:

```yaml
type: page
layout: search
outputs:
  - html
  - json
```

## Select Search Client

For selecting the client for search feature, use the following options in your `config.toml` file:

```toml
[params.search]
client = ""
```

- `params.search` [`Map`]:
  - `client` [`String`]: Name of the Search Client (_supported values:_ `algolia`,`fuse`,`lunr`)

## Client Specific Steps

The next steps are different for each search client:

- [**Algolia**]({{< relref "/docs/search-algolia.md" >}})
- [**Fuse.js**]({{< relref "/docs/search-fuse-js.md" >}})
- [**Lunr.js**]({{< relref "/docs/search-lunr-js.md" >}})

After you complete those steps, you are good to go!

## Add Search Widget

You might also want to add the [`search` widget]({{< relref "/docs/widgets.md#widget-search" >}}).
