---
date: "2021-05-16T12:55:03+08:00"
title: "Wavedrom Support"
authors: [""]
categories:
  - technical
tags:
  - hugo
  - wavedrom
  - shortcode
wavedrom: true

#draft: true
---



## Enable wavedrom


```yaml
---
wavedrom: true
---
```

## Example


{{< wavedrom>}}
{ 
  "signal": [ {"name": "CLK", "wave": "p.....|..."},
            {"name":"DAT", "wave":"x.345x|=.x", "data":["A","B","C","D"]},
            {"name": "REQ", "wave": "0.1..0|1.0"},
            {},
            {"name": "ACK", "wave": "1.....|01."}
]}
{{< /wavedrom >}}



## Source

```md
{{< wavedrom>}}
{ 
  "signal": [ {"name": "CLK", "wave": "p.....|..."},
            {"name":"DAT", "wave":"x.345x|=.x", "data":["A","B","C","D"]},
            {"name": "REQ", "wave": "0.1..0|1.0"},
            {},
            {"name": "ACK", "wave": "1.....|01."}
]}
{{< /wavedrom >}}
```


## Known issue

* Should not render shortcode in code block

