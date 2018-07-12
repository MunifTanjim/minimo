export const appendResults = (results, resultsBlock) => {
  if (results.length === 0) {
    resultsBlock.innerHTML = `<li class='results-empty'>
      <a href='#search-term'>${resultsBlock.dataset.resultsEmpty}</a>
    </li>`
  } else {
    resultsBlock.innerHTML = results.reduce((prevItem, { href, title }) => {
      return `${prevItem}<li><a href='${href}'>${title}</a></li>`
    }, '')
  }
}

export const setSearchingIndicator = resultsBlock => {
  resultsBlock.innerHTML = `<li class='searching'>
    <a href='#search-results'>${resultsBlock.dataset.searching}&hellip;</a>
  </li>`
}

export const getUrlSearchParam = name => {
  if ('URLSearchParams' in window) {
    let urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
  } else {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
    let results = regex.exec(location.search)
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '))
  }
}

export const getJSON = (url, callback) => {
  let request = new XMLHttpRequest()

  request.open('GET', url, true)

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      let data = JSON.parse(request.responseText)
      callback(null, data)
    } else {
      callback(new Error(request.statusText))
    }
  }

  request.onerror = () => {
    callback(new Error(`Failed to get JSON! ${request.statusText}`))
  }

  request.send()
}
