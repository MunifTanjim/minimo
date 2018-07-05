import algoliasearch from 'algoliasearch/lite'

import {
  appendResults,
  getUrlSearchParam,
  setSearchingIndicator
} from './helpers'

const { appId, indexName, searchApiKey } = window.algolia

const client = algoliasearch(appId, searchApiKey)

const index = client.initIndex(
  `${indexName}${window.location.pathname.replace('/search/', '')}`
)

const doSearch = (term, resultsBlock) => {
  setSearchingIndicator(resultsBlock)

  if (!term) {
    appendResults([], resultsBlock)
  } else {
    index.search(
      term,
      { attributesToRetrieve: ['title', 'href'], hitsPerPage: 10 },
      (err, content) => {
        if (err) console.error(err)
        else appendResults(content.hits, resultsBlock)
      }
    )
  }
}

const searchForm = document.getElementById('search-form')
const searchInputBox = document.getElementById('search-term')
const resultsBlock = document.getElementById('search-results')

let term = getUrlSearchParam('q')
searchInputBox.value = term
searchInputBox.focus()
doSearch(term, resultsBlock)

searchForm.addEventListener('submit', e => {
  e.preventDefault()

  doSearch(searchInputBox.value, resultsBlock)
})
