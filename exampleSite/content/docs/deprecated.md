---
date: 2018-07-27T09:00:00+06:00
lastmod: 2018-07-27T19:30:00+06:00
title: Deprecated Pages
authors: ["achary"]
categories:
  - features
tags:
  - engineering
comments: false
---

Engimo adds a new boolean parameter to the metadata section: `deprecated`. When set to `true` like this:

```
---
deprecated: true
---
```

then the page will have a red box indicating that:

<div class="deprecated">This page has been marked as deprecated</div>

&nbsp;

In addition, when the title of the page is listed (e.g. with tags, categories lists etc.) the title is extended with *(deprecated)* phrase.
