import '../stylesheets/style'

import docReady from 'es6-docready'

import { shuffle } from './helpers'

docReady(() => {
  let termCloud = document.querySelector('.term-cloud')
  if (termCloud) {
    let terms = termCloud.querySelectorAll('.term-cloud li')
    shuffle(terms).forEach(term => term.parentElement.appendChild(term))
  }
})
