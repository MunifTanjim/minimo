---
date: 2017-09-25T06:00:00+06:00
title: Updating Guide
authors: ["muniftanjim"]
categories:
  - Tutorial
slug: updating
---
## Update Minimo clone

Just replace the `themes/minimo` folder with the latest version of minimo. Then, commit the changes:

```sh
git add themes/minimo
git commit -m "update [theme]: minimo"
```

## Update Minimo submodule

```sh
cd themes/minimo
git checkout master
git fetch && git pull
cd ../..
git add themes/minimo
git commit -m "update [theme]: minimo"
```
