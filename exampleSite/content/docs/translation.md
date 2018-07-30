---
date: 2017-09-27T14:00:00+06:00
title: Translation Support
authors: ["muniftanjim","achary"]
categories:
  - features
tags:
  - translation
  - i18n
slug: translation
---
You can translate Engimo in your own language!

For example, if you want to translate Engimo in Spanish, you will have to add this to your site's config file:

```toml
[languages.es]
lang = "es"
languageName = "Spanish"
weight = 1
```

Then create a folder named **`/i18n/`** in your site's root. And create a file **`/i18n/es.toml`** with the translated strings.

For reference template you can see the [en.toml](https://github.com/achary/engimo/blob/master/i18n/en.toml) file.

If you want your translation file to be included in Engimo repository, feel free to create a pull request.
