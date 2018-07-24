---
date: 2017-09-27T10:00:00+06:00
lastmod: 2018-05-24T02:10:00+06:00
title: Menus Setup Guide
authors: ["muniftanjim"]
categories:
  - features
tags:
  - menus
slug: menus
toc: true
menu:
  sidebar:
    name: Menus
    parent: docs
---
Minimo has three menus.

1. Main Menu
2. Sidebar Menu
3. Social Menu

## Main Menu

**name**: `main`

Main menu is located at the top of the site.

Check [Hugo's Menus Documentation](https://gohugo.io/content-management/menus/) for information about managing this menu.

You can hide the Main Menu using the following option in your `config.toml` file:

```toml
[params.settings]
hideMainMenu = true
```

## Sidebar Menu

**name**: `sidebar`

Social Menu is available as Widget: `sidebar_menu`. Add it to the `sidebar` [Widget Area]({{< relref "/docs/widgets.md#available-widget-areas" >}}) to use it.

You can use Sidebar Menu as normal [Hugo Menus](https://gohugo.io/content-management/menus/).

Or you can use it to mirror another menu by using the `sidebar_menu.mirror` option in your [Widgets Configuration File]({{< relref "/docs/widgets.md#widgets-configuration-file" >}}). For example, this will mirror the Main Menu:

```toml
[sidebar_menu]
...
mirror = "main"
```

The sidebar menu can display nested menus. The sub-pages need to have a page as `parent` defined in the page's front matter:

```yaml
menu:
   main:
      parent: myParentPage
```

## Social Menu

Social Menu is available as Widget: `social_menu`. You can add it to [Widget Areas]({{< relref "/docs/widgets.md#available-widget-areas" >}}) to use it.

Use the variables under `[params.social]` in your `config.toml` file for adding your social profiles:

```toml
[params.social]
codepen = "..."
email = "..."
facebook = "..."
...
```

You only have to add your usernames. Minimo will take care of the rest.

#### Changing Social Menu Icons Order

If you want to change the order of the social menu icons, use the `social_menu.platforms` option in your [Widgets Configuration File]({{< relref "/docs/widgets.md#widgets-configuration-file" >}}).

The social menu icons will appear in the order you specify in the `platforms` array.
