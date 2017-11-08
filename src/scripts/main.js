import '../stylesheets/style'

import docReady from 'es6-docready'

import { detailsTagSupported, shuffle } from './helpers'

docReady(() => {
  let termCloud = document.querySelector('.term-cloud:not(.no-shuffle)')
  if (termCloud) {
    let terms = termCloud.querySelectorAll('.term-cloud li')
    shuffle(terms).forEach(term => term.parentElement.appendChild(term))
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
