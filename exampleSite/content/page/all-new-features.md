---
title: Features Summary
date: 2018-07-26
lastmod: 2018-07-26
authors: ["achary"]
tags:
  - engineering

mathjax: true
viz: true
wave: true
chart: true
msc: true
---

Summary of features

## Math

$
  \frac{d}{dx}\left( \int_{0}^{x} f(u)\,du\right)=f(x)
$


$
A_n = \begin{pmatrix} 
a_1 & a_2 & \ldots & a_n \\\\  
b_1 & b_2 & \ldots & b_n \\\\ 
\end{pmatrix}
$


## Graphviz

```viz-dot
  digraph g { 
  node[shape="circle" , label="", width=0.2, height=0.2]
  l1[xlabel="v\(s\)"]
  l21[xlabel="a", width=0.1, height=0.1 , style=filled]
  l22[width=0.1, height=0.3, style=filled]
  l31[xlabel="v\(s'\)"]

  l1 -> l21
  l1 -> l22
  l21 -> l31 [xlabel="r"]
  l21 -> l32
  l22 -> l33
  l22 -> l34
  }
```

## Waveform

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

## Chart

```chart
    {
    "type": "line",
        "data": {
            "labels": ["One", "Two", "Three", "Four", "Five", "Six"],
            "datasets": [
            {
                "label": "# of Votes",
                "data": [12, 19, 3, 5, 2, 3],
                "backgroundColor":"transparent",
                "borderColor":"orange"
            },
            {
                "label": "Some other set",
                "data": [15, 8, 13, 5, 5, 9],
                "backgroundColor":"transparent",
                "borderColor":"#44ccff"
            }
            ]
        }
    }
```

## MSC

```msc
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
```