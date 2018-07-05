---
date: 2018-07-05T23:30:00+06:00
title: "Search: Algolia"
authors: ["muniftanjim"]
categories:
  - features
tags:
  - search
  - algolia
slug: search-algolia
toc: true
---

## Configure Algolia Search Client

Select Algolia as the search client in your `config.toml` file:

```toml
[params.search]
client = "algolia"
```

Also, add configuration options for Algolia:

```toml
[params.search.algolia]
appId = ""
indexName = ""
searchApiKey = ""
```

- `params.search.algolia` [`Map`]:
  - `appId` [`String`]: Algolia Application ID
  - `indexName` [`String`]: Name for Algolia Indices  
    _default: `minimo_site`_
  - `searchApiKey` [`String`]: Algolia Search-Only API Key

You'll find various information related to your Algolia account in the [Algolia Dashboard](https://www.algolia.com/dashboard).

## Generate Search Index for Algolia

Algolia will need a search index for searching across your site. So, you'll need to generate that search index for Algolia before you deploy your site.

Minimo comes with a script for generating the search index for Algolia: `/scripts/generate-search-index-algolia.js`.

### Install Dependencies

Node.js must be installed on your system for using the generator script.

It also needs the following npm packages:

- `algoliasearch`
- `glob`

For installing `algoliasearch` and `glob` globally use the following command:

```sh
npm install -g algoliasearch glob
```

### Set Environment Variables

The generator script uses the following environment variables:

- `ALGOLIA_APP_ID` (`required`): Algolia Application ID
- `ALGOLIA_ADMIN_API_KEY` (`required`): Algolia Admin API Key
- `ALGOLIA_INDEX_NAME` (`optional`): Name for Algolia Indices  
  _default: `minimo_site`_

### Run the Script

After you've generated your site with Hugo, run `generate-search-index-algolia.js` with `node`.

If Minimo is installed under `/themes/minimo` directory, you'll run it as:

```sh
node ./themes/minimo/scripts/generate-search-index-algolia.js
```

The `generate-search-index-algolia.js` script accepts an optional argument for Hugo's `publishDir` (_relative to your site's root directory_).

So, if you've got a different `publishDir` (say `site`), pass it as the first argument:

```sh
node ./themes/minimo/scripts/generate-search-index-algolia.js site
```

If the generation was successful, you'll see output like this:

```
Algolia Index Generated for: /search/index.json
```

That's all. Now you can deploy your site.
