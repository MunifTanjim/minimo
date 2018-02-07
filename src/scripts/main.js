import '../stylesheets/style'

import docReady from 'es6-docready'

import { detailsTagSupported, shuffle } from './helpers'
import { log } from 'util'

docReady(() => {
  let taxonomyClouds = document.querySelectorAll(
    '.taxonomy-cloud ul:not(.no-shuffle)'
  )
  if (taxonomyClouds.length) {
    console.log('asd')
    taxonomyClouds.forEach(taxonomyCloud => {
      let terms = taxonomyCloud.querySelectorAll('li')
      shuffle(terms).forEach(term => term.parentElement.appendChild(term))
    })
  }

  let toc = document.querySelector('.entry-toc')
  if (toc) {
    if (!detailsTagSupported()) {
      document.body.classList.add('no-details')
      let tocToggler = document.querySelector('.toc-title')
      tocToggler.addEventListener('click', () => {
        if (toc.getAttribute('open')) {
          toc.open = false
          toc.removeAttribute('open')
        } else {
          toc.open = true
          toc.setAttribute('open', 'open')
        }
      })
    }
  }
})
