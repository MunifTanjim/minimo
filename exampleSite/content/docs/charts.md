---
date: 2018-07-27T09:00:00+06:00
lastmod: 2018-07-27T19:30:00+06:00
title: 2D Charts
authors: ["achary"]
categories:
  - features
tags:
  - engineering
comments: false
chart: true
---

Engimo adds support for chars rendered with help of [Chart.js][].

This bar chart is an example of what the support looks like:

```chart
{
    "type": "bar",
    "data": 
       {
        "labels": ["One", "Two", "Three", "Four", "Five", "Six"],
        "datasets": [{
            "label": "# of Votes",
            "data": [12, 19, 3, 5, 3, 8]
        }]
    }
}
```

To get chart like this one above, follow the steps:

1. Add this to the metadata section

    ```
    ---
    chart: true
    ---
    ```

2. Then add the chart to the page, e.g:

    ````
    ```chart
    {
        "type": "bar",
        "data": {
            "labels": ["One", "Two", "Three", "Four", "Five", "Six"],
            "datasets": [{
                "label": "# of Votes",
                "data": [12, 19, 3, 5, 3, 8]
            }]
        }
    }
    ```
    ````

# Line charts

Line charts are also simple:

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

with:

````
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
````

Well, I think you get the idea.

## Documentation
More examples and documentation on [Chart.js](http://www.chartjs.org/docs/latest/charts/).

[Chart.js]:  http://www.chartjs.org