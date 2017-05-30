+++
date = "2017-05-30T22:00:00+06:00"
title = "Open Graph Support"
categories = ["Features"]
tags = ["feature", "open graph"]
+++
Minimo has built-in support for Open Graph tags.

The extra configuration options used by Open Graph tags are noted below.

You can set Facebook's _App ID_ and _Admins_ tags by the following config options:

```toml
[params.opengraph]
  [params.opengraph.facebook]
    admins = ""
    appid = ""
```

- `admins` field accepts a single Facebook Profile ID number.
- `appid` field accepts a single Facebook Application ID number.

You can also add you Facebook Page's ID with the following config option:

```toml
[social]
  facebook = ""
```

- `facebook` field accepts a Facebook Page's URL or ID number.

That's all you need to do for now!
