---
date: 2018-03-29T09:00:00+06:00
title: Comments Support
authors: ["muniftanjim"]
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

Minimo supports both **[Disqus](https://disqus.com/)** and **[Staticman](https://staticman.net/)** to be used as your site's comment system.

### Disqus

Disqus comments require you set a single value to the following option in your `config.toml` file:

```toml
disqusShortname = ""
```

- `disqusShortname` [`String`]: Shortname for you site's Disqus account

And that's all!

### Staticman

_Staticman only supports GitHub. So, if your site's repository is not hosted in GitHub, it won't work._

#### Configure Minimo for Staticman

First of all, set up the following options in your `config.toml` file:

```toml
[params.comments.staticman]
enable = true
apiEndpoint = "https://api.staticman.net/v2/entry"
maxDepth = 2

[params.comments.staticman.github]
username = "MunifTanjim"
repository = "minimo"
branch = "master"
```

- `params.comments.staticman` [`Map`]:
  - `enable` [`Boolean`]: Enable Staticman
  - `apiEndpoint` [`String`]: API endpoint for Staticman instance
  - `maxDepth` [`Integer`]: Maximum allowed comments depth
- `params.comments.staticman.github` [`Map`]:
  - `username` [`String`]: Your GitHub Username
  - `repository` [`String`]: Name of your Site's GitHub Repository
  - `branch` [`String`]: Branch name of Site's GitHub Repository

#### Staticman Configuration File

Next, you'll need a Staticman Configuration File (`staticman.yml`) in the root of your site's repository. Here's a sample of it:

**`staticman.yml`**

{{< file "content/docs/res/staticman.yml" >}}

##### Notes

- In most cases, you'll only need to change the `name` option (Site's name)
- If you set `moderation: true`, Staticman will send a Pull Request whenever a new comment is submitted. You'll need to Merge the Pull Request to approve it, or Close to discard.
- Use the same `branch` name in both `config.toml` & `staticman.yml`

#### Add Staticman to Your Site's Repository

Staticman will need push access to your site's repository for committing comment files. In GitHub, go to your repository _**Settings**_ page, navigate to the _**Collaborators**_ tab and add the username **`staticmanapp`**.

![Adding staticmanapp to the Site's GitHub Repository](https://staticman.net/assets/images/get-started/step1.png)

At this point, the invitation will be pending. In order for Staticman to accept it, you'll need to open:

`https://api.staticman.net/v2/connect/{github.username}/{github.repository}`

{{% center %}}
_[ Replace the `{github.username}` and `{github.repository}` with your GitHub username and repository's name. ]_
{{% /center %}}

If all goes well, you should receive a message saying `OK`!

And you should be good to go!
