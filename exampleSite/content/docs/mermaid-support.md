---
date: 2021-05-16T12:30:00+06:00
title: mermaid Support
authors: []
categories:
  - features
tags:
  - config
  - mermaid
slug: mermaid-support
---




## Enable mermaid


```yaml
---
mermaid: true
---
```

## Example 

{{<mermaid align="left">}}
graph LR;
	A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}



## Source code

```md
{{<mermaid align="left">}}
graph LR;
	A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}
```


## Known issue

* Should not render shortcode in code block


