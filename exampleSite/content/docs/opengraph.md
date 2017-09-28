---
date: 2017-09-26T08:00:00+06:00
title: Opengraph Support
authors: ["muniftanjim"]
categories:
  - feature
tags:
  - og
slug: opengraph
---
Minimo has built-in support for Facebook Opengraph tags.

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

Also, the `[social.facebook]` field from the [Author's Profile]( /docs/authors/#author-s-profile) data is used for `article:author` tag generation.

Minimo will pick up the rest of the things standard Hugo front-matter & configs.

-------

Also, you can set these options in your `config.toml` files for better integration with Facebook:

```toml
[params.opengraph.facebook]
admins = []  # for fb:admins tags
appID  = ""  # for fb:app_id tag
pageID = ""  # for article:publisher tag
```

- `admins` [`Array` of `String`s]: Facebook Profile IDs
- `appID` [`String`]: Facebook Application ID
- `pageid` [`String`]: Facebook Page ID

