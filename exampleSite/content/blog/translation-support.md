+++
date = "2017-05-30T12:00:00+06:00"
title = "Translation Support"
categories = ["Features"]
tags = ["feature", "translation"]
+++
You can translate Minimo in your own language!

For example, if you want to translate Minimo in Spanish, you will have to add this to your site's config file:

```toml
defaultContentLanguage = "en"
[languages]
  [languages.es]
    lang = "es"
    languageName = "Spanish"
    weight = 1
```

Then create a folder named `/i18n/` in your site's root. And create a file `/i18n/es.toml` with the translated strings.

For reference format you can see the [en.toml](https://github.com/MunifTanjim/minimo/blob/master/i18n/en.toml) file:

```toml
[recentPosts]
  other = "Recent Posts"
```

That's all!
