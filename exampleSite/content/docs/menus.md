---
date: 2017-09-27T10:00:00+06:00
lastmod: 2017-10-05T16:00:00+06:00
title: Menus Setup Guide
authors: ["muniftanjim"]
categories:
  - features
tags:
  - menus
slug: menus
toc: true
---
Minimo has two menus.

1. Main Menu
2. Social Menu

## Minimo Main Menu

Main menu is located at the top of the site.

Check [Hugo's Menus Documentation](https://gohugo.io/content-management/menus/) for information about managing this menu.

## Minimo Social Menu

Social menu is located at the footer of the site.

Use the `[params.social]` variables in the site's configuration for adding your social profiles.

You only have to add your usernames. Minimo will take care of the rest.

#### Changing Social Menu Icons Order

If you want to change the order of the social menu icons, modify the `[params.social.config]` section of your `config.toml` file:

```toml
[params.social.config]
platforms = ["github","facebook","twitter","instagram","email","codepen","linkedin"]
```

The social menu icons will appear in the order you specify in the `platforms` array.
