+++
date = "2017-05-18T12:00:00+06:00"
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

[taxonomies]
  category = "categories"
  tag = "tags"

[author]
  name = "Minimo"

[author.social]
  github = "Minimo"
  facebook = "Minimo"
  twitter = "Minimo"

[permalinks]
  page = "/:slug/"
```

