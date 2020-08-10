---
date: 2018-03-29T09:00:00+06:00
lastmod: 2020-08-10T22:00:00+06:00
title: Comments Support
authors: ['muniftanjim']
categories:
  - features
tags:
  - config
slug: comments-support
comments: true
toc: true
---

Minimo has support for comments baked into it.

## Enable/Disable Comments

### Globally

For enabling or disabling comments globally, check the following setting in your `config.toml` file:

```toml
[params.comments]
enable = false
```

- `params.comments` [`Map`]:
  - `enable` [`Boolean`]: Enable/Disable comments globally

### For Specific Posts

The global `.Site.Params.comments.enable` setting can be overridden for specific posts in their content's frontmatter with this option:

```yaml
---
comments: true
---

```

- `comments` [`Boolean`]: Enable/Disable comments for specific posts

_Of course, you'll also need to setup a comment system ( [Disqus](#disqus) or [Staticman](#staticman) )._

## Setting Up Comment System

Minimo currently supports **[Disqus](https://disqus.com/)**, **[Isso](https://posativ.org/isso/)**, **[Staticman](https://staticman.net/)** and **[Utterances](https://utteranc.es)** to be used as your site's comment system.

### Disqus

Disqus comments require you set a single value to the following option in your `config.toml` file:

```toml
disqusShortname = ""
```

- `disqusShortname` [`String`]: Shortname for you site's Disqus account

And that's all!

### Isso

Isso is a lightweight alternative to Disqus. You need to have a Isso server running somewhere, then set up the following options in your `config.toml` file:

```toml
[params.comments.isso]
enable = true
scriptSrc = "https://isso.example.com/js/embed.min.js"
dataAttrs = "data-isso='https://isso.example.com data-isso-require-author='true'"
```

- `params.comments.isso` [`Map`]:
  - `enable` [`Boolean`]: Enable Isso
  - `scriptSrc` [`String`]: URL of the Isso integration script.
  - `dataAttrs` [`String`]: Data attributes to add to the Isso `<script>` tag. Optional, but the Isso documentation recommends to at least include the `data-isso` attribute.

### Staticman

For up-to-date information, check out the [Documentation Site](https://staticman.net) and the [Public Repository](https://github.com/eduardoboucas/staticman) of Staticman.

#### Configure Minimo for Staticman

First of all, set up the following options (with your preferred values) in your `config.toml` file:

```toml
[params.comments.staticman]
enable = true
apiEndpoint = "https://api.staticman.net/v2/entry"
maxDepth = 2
username = "MunifTanjim"
repository = "minimo"
```

- `params.comments.staticman` [`Map`]:
  - `enable` [`Boolean`]: Enable Staticman
  - `apiEndpoint` [`String`]: API endpoint for Staticman instance
  - `maxDepth` [`Integer`]: Maximum allowed comments depth
  - `username` [`String`]: Your Git Username
  - `repository` [`String`]: Name of your Site's Git Repository

#### Staticman Configuration File

Next, you'll need a Staticman Configuration File (`staticman.yml`) in the root of your site's repository. Here's a sample of it:

**`staticman.yml`**

{{< file "staticman.yml" >}}

##### Notes

- In most cases, you'll only need to change the `name` option (Site's name)
- If you set `moderation: true`, Staticman will send a Pull Request whenever a new comment is submitted. You'll need to Merge the Pull Request to approve it, or Close to discard.

#### Add Staticman to Your Site's Repository

You'll need to go through some additional steps based on the API endpoint (`params.comments.staticman.apiEndpoint`) that you are gonna use. You'll find the relevant information on the following places:

- [Staticman Site](https://staticman.net)
- [Staticman Repository](https://github.com/eduardoboucas/staticman)

_[ Contributors are welcomed to update this part of the documentation to include additional useful information. ]_

### Utterances

_Utterances only supports GitHub. So, if your site's repository is not hosted in GitHub, it won't work._

For using Utterances, set up the following options in your `config.toml` file:

```toml
[params.comments.utterances]
enable = true
issueTerm = "pathname" # pathname / url / title / og:title / <string>
label = ""
theme = "github-light"

[params.comments.utterances.github]
username = "MunifTanjim"
repository = "minimo"
```

- `params.comments.utterances` [`Map`]:
  - `enable` [`Boolean`]: Enable Utterances
  - `issueTerm` [`String`]: Entry to Issue mapping option _(`pathname` / `url` / `title` / `og:title` / <string>)_
  - `label` [`String`]: Label will be assigned to issues created by Utterances
  - `theme` [`String`]: Utterances theme that matches your blog
- `params.comments.utterances.github` [`Map`]:
  - `username` [`String`]: Your GitHub Username
  - `repository` [`String`]: Name of your Site's GitHub Repository

Check _[utteranc.es](https://utteranc.es)_ for more information.

That should do it!
