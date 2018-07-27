---
date: 2018-07-27T10:00:00+06:00
lastmod: 2018-07-27T10:30:00+06:00
title: Message Sequence Charts
authors: ["achary"]
categories:
  - features
tags:
  - engineering
comments: false
msc: true
---

Engimo supports embedding simple [message sequence charts](https://en.wikipedia.org/wiki/Message_sequence_chart), with help of 
[js-sequence-diagrams][].

A simple sequence chart like this one:

```msc
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
```

can be embedded with enabling these chart types on a page with 

```
---
msc: true
---
```

and then creating code block with `msc` type:

````
```msc
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
```
````


[js-sequence-diagrams]:  https://bramp.github.io/js-sequence-diagrams/