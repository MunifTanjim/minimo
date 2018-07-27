---
date: 2018-07-26T09:00:00+06:00
lastmod: 2018-07-26T19:30:00+06:00
title: Digital Signals Waveforms
authors: ["achary"]
categories:
  - features
tags:
  - engineering
comments: false
wave: true
---

Engimo support embedding [wavedrom][] diagrams.
For that, insert the following line into page metadata section:


```
---
wave: true
---
```

then, in the content you may inline the diagram using `viz-dot` as a language:

````
```wave
{ 
  "signal": [ 
            {"name":"clk", "wave":"p.....|..."},
            {"name":"dat", "wave":"x.345x|=.x", "data":["A","B","C","D"]},
            {"name":"req", "wave":"0.1..0|1.0"},
            {},
            {"name":"ack", "wave": "1.....|01."}
]}
```
````

## Result

```wave
{ 
  "signal": [ {"name": "clk", "wave": "p.....|..."},
            {"name":"dat", "wave":"x.345x|=.x", "data":["A","B","C","D"]},
            {"name": "req", "wave": "0.1..0|1.0"},
            {},
            {"name": "ack", "wave": "1.....|01."}
]}
```

# Documentation
Please refer to [this tutorial](https://wavedrom.com/tutorial.html) for more help.

[wavedrom]: https://wavedrom.com/