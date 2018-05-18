---
date: 2018-02-27T21:00:00+06:00
title: Emoji Support
authors: ["muniftanjim"]
categories:
  - features
tags:
  - config
emoji: true
---
First of all, if you really want emojis, set the `enableEmoji` setting to `true` in your `config.toml` file:

```toml
enableEmoji = true
```

This will enable Hugo to find Emoji Shorthands in your content files and render them as Unicode Emoji Characters.

For example:

{{% center %}}
<code>:smiley:</code> will become 😃
{{%/ center %}}

No, it'll probably not be that colorful! Unless your device's operating system natively supports colorful emojis, you will see a black & white one instead. :fire:

:pencil2: For getting that colorful look, you will have to add this to your content's frontmatter:

```yaml
---
emoji: true
---
```

And where can you find these Emoji Shorthands :question:

:tada: Go take a look at: **[Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/)**
