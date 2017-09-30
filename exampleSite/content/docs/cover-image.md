---
date: 2017-09-30T14:00:00+06:00
title: Cover Image
authors: ["muniftanjim"]
categories:
  - features
slug: cover-image
cover:
  image: /images/eden-farm-children-s-village.jpg
  caption: Eden Farm Children's Village by [Gareth Harper](https://unsplash.com/photos/yACpBcInUos?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
  style: full
---
You can add cover image to your contents with the **`cover`** paramameter in the content's front-matter.

You can directly provide the image url:
```yaml
---
cover: /images/eden-farm-children-s-village.jpg
---
```

- `cover` [`String`]: path/url of the cover image

Or you can provide additional information:
```yaml
---
cover:
  image: /images/eden-farm-children-s-village.jpg
  caption: Eden Farm Children's Village by Gareth Harper on Unsplash
  style: full
---
```

- `cover` [`Map`]:
  - `image`   [`String`]: path/url of the cover image
  - `caption` [`String`]: caption for the cover image
  - `style`   [`String`]: `full` / `wide` / `normal`
