---
date: 2017-09-26T08:00:00+06:00
lastmod: 2017-10-11T18:00:00+06:00
title: Opengraph Support
authors: ["muniftanjim"]
categories:
  - features
tags:
  - og
slug: opengraph
---
Minimo has built-in support for Opengraph tags. It will pick up most of the things from your contents' front-matters & Hugo configuration.

You can use these options in you content's front-matter:

```yaml
---
audios: []  # for og:audio tags
images: []  # for og:image tags
videos: []  # for og:video tags
---
```

- `audios` [`Array` of `String`s]: path/url of audio files
- `images` [`Array` of `String`s]: path/url of image files
- `videos` [`Array` of `String`s]: path/url of video files

_N.B.: the front-matter syntax shown here is `yaml`. If you use a different format (e.g. `toml`), the syntax will change accordingly._

If you add [**Cover Image**]({{< relref "cover-image.md" >}}) to you content, it will also be picked up.

## Facebook Opengraph

You can set these options in your `config.toml` files for better integration with Facebook:

```toml
[params.opengraph.facebook]
admins = []  # for fb:admins tags
appID  = ""  # for fb:app_id tag
pageID = ""  # for article:publisher tag
```

- `admins` [`Array` of `String`s]: Facebook Profile IDs
- `appID` [`String`]: Facebook Application ID
- `pageid` [`String`]: Facebook Page ID

Also, the `[social.facebook]` field from the [Author's Profile]( /docs/authors/#author-s-profile) data is used for `article:author` tag.

## Twitter Cards

Minimo has built-in support for [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards).

You can set these options in your `config.toml` files to provide additional information for Twitter Cards:

```toml
[params.opengraph.twitter]
page = "" # for twitter:site tag
```

- `page` [`String`]: Twitter Page's Username

Also, the `[social.twitter]` field from the [Author's Profile]( /docs/authors/#author-s-profile) data is used for `twitter:creator` tag.
