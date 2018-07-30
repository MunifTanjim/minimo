---
date: 2017-09-25T06:00:00+06:00
lastmod: 2018-02-08T14:45:00+06:00
title: Updating Guide
authors: ["muniftanjim","achary"]
categories:
  - Tutorial
slug: updating
toc: true
---

## Updating Engimo

#### Update Engimo clone

Just replace the `themes/engimo` folder with the latest version of Engimo clone, i.e. delete the old folder and clone again:

```sh
rm -rf themes/engimo
git clone --depth 1 https://github.com/MunifTanjim/engimo themes/engimo
```

Then, commit the changes:

```sh
git add themes/engimo
git commit -m "update [theme]: engimo"
```

#### Update Engimo submodule

```sh
cd themes/engimo
git checkout master
git fetch && git pull
cd ../..
git add themes/engimo
git commit -m "update [theme]: engimo"
```

## To Do After Updating Engimo

After updating Engimo, always check that your site's **`config.toml`** file matches the latest [**`config.toml`** file]({{< relref "/docs/config-file.md" >}}) format.

A good idea is to double check all the [Configuration settings]({{< relref "/docs/installation.md#configuration-for-engimo" >}}) of Engimo.
