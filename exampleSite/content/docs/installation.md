---
date: 2017-09-25T02:00:00+06:00
lastmod: 2018-02-08T15:00:00+06:00
title: Installation Guide
authors: ["muniftanjim","achary"]
categories:
  - Tutorial
slug: installation
toc: true
---
First of all you will need to setup a Hugo site. You can follow the [Hugo's Quick Start Guide](https://gohugo.io/getting-started/quick-start/) for that.

After you're done with that, it's time for installing Engimo!

## Installing Engimo

There are two different ways you can install Engimo:

1. As clone
2. As submodule

_The second method is recommended._

#### Install Engimo as clone

With this method, you will simply clone it. And a copy of Engimo's repository will be stored with the rest of you site. Enter the following command for cloning Engimo:

```sh
git clone --depth 1 https://github.com/achary/engimo themes/engimo
```

#### Install Engimo as submodule

This method doesn't store a copy of Engimo's repository inside your site's repository. Rather it adds Engimo as a dependency. Start by this command:

```sh
git submodule add https://github.com/achary/engimo themes/engimo
```

This will add Engimo's repository as a submodule to your site's repository. Now, you will have to pull the theme:

```sh
git submodule init
git submodule update
```

That's all, Engimo is ready to be used.

## Configuration for Engimo

For getting started with Engimo, copy the **`config.toml`** file from the **`exampleSite`** directory inside Engimo's repository to your site repository:

```sh
cp themes/engimo/exampleSite/config.toml .
```

You can take a look at the [**`config.toml`** file]({{< relref "/docs/config-file.md" >}}) of this site.

Now, you can start editing this file and change the configuration!

### Setting up Authors

Follow the [Authors Setup Guide]({{< relref "/docs/authors.md" >}}) for setting up authors for you site.

### Setting up Widgets

If you want to use Widgets on your site, take a look at the [Widgets documentation]({{< relref "/docs/widgets.md" >}})

-------------

Et voilà! Engimo is ready!
