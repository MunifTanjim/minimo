import './webpack-public-path'

import '../stylesheets/style'

import docReady from 'es6-docready'

import { shuffle } from './helpers'

docReady(() => {
  const body = document.body

  const taxonomyClouds = body.querySelectorAll(
    '.taxonomy-cloud:not(.no-shuffle)'
  )
  if (taxonomyClouds.length) {
    taxonomyClouds.forEach(taxonomyCloud => {
      let terms = taxonomyCloud.querySelectorAll('li')
      shuffle(terms).forEach(term => term.parentElement.appendChild(term))
    })
  }

  const detailsElements = body.querySelectorAll('details')
  if (detailsElements.length) {
    import(/* webpackChunkName: "details-polyfill" */ './details-polyfill').then(
      ({ detailsPolyfill }) => detailsPolyfill(detailsElements)
    )
  }

  let hasEmoji = body.classList.contains('has-emoji')
  if (hasEmoji) {
    let entry = body.querySelector('.entry')
    import(/* webpackChunkName: "twemoji" */ 'twemoji').then(twemoji =>
      twemoji.parse(entry)
    )
  }

  let hasSidebar = body.classList.contains('has-sidebar')
  if (hasSidebar) {
    import(/* webpackChunkName: "sidebar" */ './sidebar').then(
      ({ initSidebar }) => initSidebar()
    )
  }

  let hasComments = body.querySelector('#comment-form')
  if (hasComments) {
    import(/* webpackChunkName: "comments" */ './comments').then(
      ({ initComments }) => initComments()
    )
  }
})
