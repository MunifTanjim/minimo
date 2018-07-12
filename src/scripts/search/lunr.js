import lunr from 'lunr'

import {
  appendResults,
  getUrlSearchParam,
  setSearchingIndicator
} from './helpers'

const doSearch = (term, idx, pageTitles, resultsBlock) => {
  setSearchingIndicator(resultsBlock)

  let results = term
    ? idx
        .search(term)
        .map(result => ({ href: result.ref, title: pageTitles[result.ref] }))
    : []

  appendResults(results, resultsBlock)
}

const idx = lunr.Index.load(window.lunr_idx)
const pageTitles = window.page_titles

const searchInputBox = document.getElementById('search-term')
const resultsBlock = document.getElementById('search-results')

let term = getUrlSearchParam('q')
searchInputBox.value = term
searchInputBox.focus()
doSearch(term, idx, pageTitles, resultsBlock)

searchInputBox.addEventListener('input', e => {
  doSearch(e.target.value, idx, pageTitles, resultsBlock)
})
