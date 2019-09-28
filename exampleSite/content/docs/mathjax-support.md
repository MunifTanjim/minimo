---
date: 2018-02-27T18:00:00+06:00
lastmod: 2019-09-28T21:00:00+06:00
title: MathJax Support
authors: ["muniftanjim"]
categories:
  - features
tags:
  - config
slug: mathjax-support
mathjax: true
---

For enabling MathJax, add this to your content's frontmatter:

```yaml
---
mathjax: true
---
```

## MathJax Syntax for Markdown

In your Markdown content, use `\\(`...`\\)` delimiters for in-line mathematics.

For mathematics blocks you can use either `$$`...`$$` or `\\[`...`\\]` as delimiters.

**Here's an example Markdown content:**

```md
When \\( a \ne 0 \\), there are two solutions to

$$ ax^2 + bx + c = 0 $$

and they are:

\\[ x = {-b \pm \sqrt{b^2-4ac} \over 2a} \\]
```

**Output:**

When \\( a \ne 0 \\), there are two solutions to

  $$ ax^2 + bx + c = 0 $$

and they are:

\\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}\\]

## Customize MathJax Configuration

You can customize the default behavior of MathJax if you want.

Minimo picks up configuration for MathJax from the **`/data/config/mathjax.json`** file.

The default configuration options look like this:

```json
{
  "library": {
    "path": "//unpkg.com/mathjax@2.7.5/MathJax.js",
    "config": "TeX-MML-AM_CHTML"
  },
  "config": {}
}
```

- `library` [`Object`]:
  - `path` [`String`]: URL for the main **_MathJax.js_** file.
  - `config` [`String`]: _Configuration file_'s name/path
- `config` [`Object`]:
  - _In-line configuration options_

So, if you want to tinker with it's configuration options:

- Create a `/data/config/mathjax.json` file in your site's repository
- Copy the default configuration options
- Start hacking

For exmaple, if you want to enable `$`...`$` delimiters for in-line mathematics, you probably want something like this:

```json
{
  "library": {
    "path": "//unpkg.com/mathjax@2.7.5/MathJax.js",
    "config": "TeX-MML-AM_CHTML"
  },
  "config": {
    "tex2jax": {
      "inlineMath": [["$", "$"], ["\\(", "\\)"]],
      "processEscapes": true
    }
  }
}
```

### Notice

MathJax version above `2.7.5` is not guaranted to work.

#### Related Guides

- [Using a configuration file](https://docs.mathjax.org/en/latest/configuration.html#using-a-configuration-file)
- [Combined Configurations](https://docs.mathjax.org/en/latest/config-files.html#combined-configurations)
- [Using in-line configuration options](https://docs.mathjax.org/en/latest/configuration.html#using-in-line-configuration-options)
- [Configuration Options](https://docs.mathjax.org/en/latest/options/index.html)
