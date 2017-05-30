+++
date = "2017-05-18T12:00:00+06:00"
lastmod = "2017-05-30T22:00:00+06:00"
title = "Example config.toml"
categories = ["Others"]
tags = ["config","example"]
+++
Here's an example for `config.toml` file.

```toml
baseURL = "http://www.example.com"
title = "Minimo"

theme = "minimo"

googleAnalytics = "UA-XXXX-X"
Paginate = 5

[params]
  description = "Minimalist theme for Hugo"
  dateFormat = "2006, Jan 2"
  copyrightOwner = "MunifTanjim"
  copyrightStartYear = "2017"

[params.opengraph]
  [params.opengraph.facebook]
    admins = ""
    appid = ""

[taxonomies]
  category = "categories"
  tag = "tags"

[social]
  facebook = ""

[author]
  name = "Minimo"

[author.social]
  github = "Minimo"
  facebook = "Minimo"
  twitter = "Minimo"

[permalinks]
  page = "/:slug/"

# Language Configuration
defaultContentLanguage = "en"

[languages]
  # edit this block for your own language
  [languages.en]
    lang = "en"
    languageName = "English"
    weight = 1
```
