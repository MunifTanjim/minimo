---
date: 2018-07-26T09:00:00+06:00
lastmod: 2018-07-26T19:30:00+06:00
title: Graphviz Support
authors: ["achary"]
categories:
  - features
tags:
  - engineering
comments: false
viz: true
---

In order to include [graphviz] diagram, add the following attribute to the page metadata section:

```
---
viz: true
---
```

then, in the content you may inline the diagram using `viz-dot` as a language:

```
    digraph g { 
    node[shape="circle" , label="", width=0.2, height=0.2]
    l1[xlabel="v\(s\)"]
    l21[xlabel="a", width=0.1, height=0.1 , style=filled]
    l22[width=0.1, height=0.1, style=filled]
    l31[xlabel="v\(s'\)"]

    l1 -> l21
    l1 -> l22
    l21 -> l31 [xlabel="r"]
    l21 -> l32
    l22 -> l33
    l22 -> l34
    }
```

## Result

```viz-dot
  digraph g { 
  node[shape="circle" , label="", width=0.2, height=0.2]
  l1[xlabel="v\(s\)"]
  l21[xlabel="a", width=0.1, height=0.1 , style=filled]
  l22[width=0.1, height=0.1, style=filled]
  l31[xlabel="v\(s'\)"]

  l1 -> l21
  l1 -> l22
  l21 -> l31 [xlabel="r"]
  l21 -> l32
  l22 -> l33
  l22 -> l34
  }
```

