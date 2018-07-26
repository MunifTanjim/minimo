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
---
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
            {"name":"dat", "wave":"x.345x|=.x", "data":["head","body","tail","data"]},
            {"name":"req", "wave":"0.1..0|1.0"},
            {},
            {"name":"ack", "wave": "1.....|01."}
]}
```

