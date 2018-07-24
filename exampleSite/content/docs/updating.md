---
date: 2017-09-25T06:00:00+06:00
lastmod: 2018-02-08T14:45:00+06:00
title: Updating Guide
authors: ["muniftanjim"]
categories:
  - Tutorial
slug: updating
toc: true
---

## Updating Minimo

#### Update Minimo clone

Just replace the `themes/minimo` folder with the latest version of Minimo clone, i.e. delete the old folder and clone again:

```sh
rm -rf themes/minimo
git clone --depth 1 https://github.com/MunifTanjim/minimo themes/minimo
```

Then, commit the changes:

```sh
git add themes/minimo
git commit -m "update [theme]: minimo"
```

#### Update Minimo submodule

```sh
cd themes/minimo
git checkout master
git fetch && git pull
cd ../..
git add themes/minimo
git commit -m "update [theme]: minimo"
```

## To Do After Updating Minimo

After updating Minimo, always check that your site's **`config.toml`** file matches the latest [**`config.toml`** file]({{< relref "/docs/config-file.md" >}}) format.

A good idea is to double check all the [Configuration settings]({{< relref "/docs/installation.md#configuration-for-minimo" >}}) of Minimo.
