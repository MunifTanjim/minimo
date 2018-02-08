import '../stylesheets/style'

import docReady from 'es6-docready'

import { detailsTagSupported, shuffle } from './helpers'

docReady(() => {
  const body = document.body

  const taxonomyClouds = document.querySelectorAll(
    '.taxonomy-cloud ul:not(.no-shuffle)'
  )
  if (taxonomyClouds.length) {
    taxonomyClouds.forEach(taxonomyCloud => {
      let terms = taxonomyCloud.querySelectorAll('li')
      shuffle(terms).forEach(term => term.parentElement.appendChild(term))
    })
  }

  const toc = document.querySelector('.entry-toc')
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

  const sidebar = document.querySelector('#sidebar')
  if (sidebar) {
    let toggler = document.querySelector('#sidebar-toggler')
    let overlay = document.querySelector('.sidebar-overlay')

    let innerToggler = toggler.cloneNode(true)
    innerToggler.setAttribute('id', '#sidebar-inner-toggler')
    sidebar.appendChild(innerToggler)

    let hideSidebar = () => {
      body.classList.remove('sidebar-toggled')
      toggler.classList.remove('is-active')
      innerToggler.classList.remove('is-active')
      toggler.setAttribute('aria-expanded', 'false')
      innerToggler.setAttribute('aria-expanded', 'false')
      sidebar.setAttribute('aria-expanded', 'false')
    }

    let showSidebar = () => {
      body.classList.add('sidebar-toggled')
      toggler.classList.add('is-active')
      innerToggler.classList.add('is-active')
      toggler.setAttribute('aria-expanded', 'true')
      innerToggler.setAttribute('aria-expanded', 'true')
      sidebar.setAttribute('aria-expanded', 'true')
    }

    let toggleSidebar = () =>
      body.classList.contains('sidebar-toggled') ? hideSidebar() : showSidebar()

    sidebar.setAttribute('aria-expanded', 'false')

    toggler.addEventListener('click', toggleSidebar)
    innerToggler.addEventListener('click', toggleSidebar)
    overlay.addEventListener('click', hideSidebar)
  }
})
