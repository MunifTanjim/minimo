---
date: 2018-07-29T09:00:00+06:00
lastmod: 2018-07-29T19:30:00+06:00
title: Flowcharts support
authors: ["achary"]
categories:
  - features
tags:
  - engineering
comments: false
flowchart: true
---

In order to include [flowchart.js][] diagram, add the following attribute to the page metadata section:

```
---
flowchart: true
---
```
You may then start embedding flowcharts. 

## Flowchart
To embed an example flowchart, add code block section labeled with `flowchart` as a language:

````
```flowchart
  st=>start: Start:>http://www.google.com[blank]
  e=>end:>http://www.google.com
  op1=>operation: My Operation
  sub1=>subroutine: My Subroutine
  cond=>condition: Yes
  or No?:>http://www.google.com
  io=>inputoutput: catch something...
  para=>parallel: parallel tasks

  st->op1->cond
  cond(yes)->io->e
  cond(no)->para
  para(path1, bottom)->sub1(right)->op1
  para(path2, top)->op1
```
````

```flowchart
  st=>start: Start:>http://www.google.com[blank]
  e=>end:>http://www.google.com
  op1=>operation: My Operation
  sub1=>subroutine: My Subroutine
  cond=>condition: Yes
  or No?:>http://www.google.com
  io=>inputoutput: catch something...
  para=>parallel: parallel tasks

  st->op1->cond
  cond(yes)->io->e
  cond(no)->para
  para(path1, bottom)->sub1(right)->op1
  para(path2, top)->op1
```

[flowchart.js]: http://flowchart.js.org/
