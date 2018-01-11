---
date: 2018-01-11T17:30:00+06:00
title: Homepage Sections
authors: ["muniftanjim"]
categories:
  - features
tags:
  - config
slug: homepage-sections
---
The following configuration option allows you to add additional sections to Minimo's homepage:

```toml
[params.settings]
...
homepageSections = ["recent_posts"]
```

- `homepageSections` [`Array` of `String`s]: template names in the `/layouts/partials/home` directory

Minimo comes with **Recent Posts** homepage section by default. You can also create your own homepage sections. Here's an example:

## Tags List Homepage Section

Let's say you want to show **Tags** in your homepage.

- First you will have to create a partial template file in the **`/layouts/partials/home/`** directory. Let's name  it **`tags.html`**.

- **`/layouts/partials/home/tags.html`**:
  {{< file "layouts/partials/home/tags.html" >}}
  Save your template file with the above content.

- Update your site's **`config.toml`** file's **`params.settings.homepageSections`** option:
```toml
[params.settings]
...
homepageSections = ["recent_posts", "tags"]
```

- Rebuild your site and you're done. 

Go wild!
