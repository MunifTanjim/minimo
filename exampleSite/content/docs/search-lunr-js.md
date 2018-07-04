---
date: 2018-07-05T20:30:00+06:00
title: "Search: Lunr.js"
authors: ["muniftanjim"]
categories:
  - features
tags:
  - search
  - lunr.js
slug: search-lunr-js
toc: true
---

## Configure Lunr.js Search Client

Select Lunr.js as the search client in your `config.toml` file:

```toml
[params.search]
client = "lunr"
```

## Generate Search Index for Lunr.js

Lunr.js will need a search index for searching across your site. So, you'll need to generate that search index for Lunr.js before you deploy your site.

Minimo comes with a script for generating the search index for Lunr.js: `/scripts/generate-search-index-lunr.js`.

### Install Dependencies

Node.js must be installed on your system for using the generator script.

It also need the following npm packages:

- `glob`
- `lunr`

For installing `lunr` and `glob` globally use the following command:

```sh
npm install -g lunr glob
```

### Run the Script

After you've generated your site with Hugo, run `generate-search-index-lunr.js` with `node`.

If Minimo is installed under `/themes/minimo` directory, you'll run it as:

```sh
node ./themes/minimo/scripts/generate-search-index-lunr.js
```

The `generate-search-index-lunr.js` script accepts an optional argument for Hugo's `publishDir` (_relative to your site's root directory_).

So, if you've got a different `publishDir` (say `site`), pass it as the first argument:

```sh
node ./themes/minimo/scripts/generate-search-index-lunr.js site
```

If the generation was successful, you'll see output like this:

```sh
Lunr.js Index Generated for: /search/index.json
```

That's all. Now you can deploy your site.
