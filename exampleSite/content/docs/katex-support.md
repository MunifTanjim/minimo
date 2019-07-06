---
date: 2018-08-12T12:30:00+06:00
lastmod: 2019-07-07T02:00:00+06:00
title: KaTeX Support
authors: ["muniftanjim"]
categories:
  - features
tags:
  - config
  - katex
slug: katex-support
---

## KaTeX Syntax for Markdown

In your Markdown content, use the `katex` shortcode for inserting KaTeX. Check documentation for [Shortcode: katex]({{< relref "/docs/shortcodes.md#shortcode-katex" >}}).

**Here's an example Markdown content:**

```md
When {{</* katex inline */>}} a \ne 0 {{</* /katex */>}}, there are two solutions to

{{</* katex */>}} ax^2 + bx + c = 0 {{</* /katex */>}}

and they are:

{{</* katex */>}}
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
{{</* /katex */>}}
```

**Output:**

When {{< katex inline >}} a \ne 0 {{< /katex >}}, there are two solutions to

{{< katex >}} ax^2 + bx + c = 0 {{< /katex >}}

and they are:

{{< katex >}}
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
{{< /katex >}}

## Customize KaTeX Configuration

You can customize the default behavior of KaTeX if you want.

Minimo picks up configuration for KaTeX from the **`/data/config/katex.json`** file.

The default configuration options look like this:

```json
{
  "library": {
    "js": {
      "main": "//unpkg.com/katex/dist/katex.min.js",
      "autoRender": "//unpkg.com/katex/dist/contrib/auto-render.min.js"
    },
    "css": {
      "main": "//unpkg.com/katex/dist/katex.min.css"
    }
  },
  "options": {}
}
```

- `library` [`Object`]:
  - `js` [`Object`]:
      - `main` [`String`]: URL for the main KaTeX library
      - `autoRender` [`String`]: URL for the [auto-render extension](https://khan.github.io/KaTeX/docs/autorender.html)
  - `css` [`Object`]:
      - `main` [`String`]: URL for the main KaTeX stylesheet
- `options` [`Object`]:
  - _[KaTeX configuration options](https://khan.github.io/KaTeX/docs/options.html)_

So, if you want to tinker with it's configuration options:

- Create a `/data/config/katex.json` file in your site's repository
- Copy the default configuration options
- Start hacking

#### Related Guides

- [Configuration Options](https://khan.github.io/KaTeX/docs/options.html)
- [Auto-render Extension](https://khan.github.io/KaTeX/docs/autorender.html)
