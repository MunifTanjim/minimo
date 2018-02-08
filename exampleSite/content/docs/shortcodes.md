---
date: 2017-10-05T20:00:00+06:00
title: Shortcodes
authors: ["muniftanjim"]
categories:
  - features
tags:
  - shortcode
slug: shortcodes
toc: true
---
Minimo comes with several shortcodes built-in.

-------

## Shortcode: center

Center align you content.

### center: Parameters

- Markdown content between opening and closing tags.

### center: Usage Example
```golang
{{%/* center */%}}
_Center Aligned Text_
{{%/* /center */%}}
```

**Output**

{{% center %}}
_Center Aligned Text_
{{% /center %}}

-------

## Shortcode: convo

Renders conversation blocks.

### convo: Parameters

- `sep`  [`String`] \(optional\): seperator between person and text (default: "`:`")

### convo: Inner Syntax

```golang
person :: text
```

_You can remove the **`person`** part, if you want._

### convo: Usage Example

```golang
{{</* convo sep=":" */>}}

Jerry :: You don't look so tough.

Finch :: It's because I have only two modes, Jerry. Calm, and furious. It's a rare person that sees the latter and lives to talk about it.

{{</* /convo */>}}
```

**Output**

{{< convo sep=":" >}}

Jerry :: You don't look so tough.

Finch :: It's because I have only two modes, Jerry. Calm, and furious. It's a rare person that sees the latter and lives to talk about it.

{{< /convo >}}

-------

## Shortcode: file

Include content from seperate file with syntax highlighting.

### file: Parameters

0 => filename [`String`] \(required\)  
1 => filetype [`String`] \(optional\)

### file: Usage Example

```golang
{{</* file "content/_index.md" */>}}
```

**Output**

{{< file "content/_index.md" >}}

---

## Shortcode: text

Text with custom size and color

### text: Parameters

You can use either Named or Unnamed Parameters

**Named Parameters**

- `s` or `size`  [`String`] \(optional\): multiplier relative to the normal size
- `c` or `color` [`String`] \(optional\): name / hex / rgb / rgba

**Unnamed Parameters**

0 => textsize [`String`] \(required\): multiplier relative to the normal size  
1 => textcolor [`String`] \(optional\): name / hex / rgb / rgba

### text: Usage Example

```golang
{{%/* text s="1.4" color="purple" */%}}
font-size: 1.4em;
color: purple;
{{%/* /text */%}}
```

**Output**

{{% text s="1.4" color="purple" %}}
font-size: 1.5em;  
color: purple;
{{% /text %}}
