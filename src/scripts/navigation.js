const toggleFocus = item => {
  let curr = item
  while ('nav' !== curr.tagName.toLowerCase()) {
    if ('li' === curr.tagName.toLowerCase()) {
      if (curr.classList.contains('focus')) {
        curr.classList.remove('focus')
      } else {
        curr.classList.add('focus')
      }
    }
    curr = curr.parentNode
  }
}

export const initNavigation = container => {
  let menu = container.querySelector('#main-menu')
  let toggler = container.querySelector('#main-menu-toggler')

  menu.setAttribute('aria-expanded', 'false')

  toggler.addEventListener('click', () => {
    if (container.classList.contains('toggled')) {
      container.classList.remove('toggled')
      toggler.setAttribute('aria-expanded', 'false')
      menu.setAttribute('aria-expanded', 'false')
    } else {
      container.classList.add('toggled')
      toggler.setAttribute('aria-expanded', 'true')
      menu.setAttribute('aria-expanded', 'true')
    }
  })

  let items = menu.querySelectorAll('a')
  items.forEach(item => {
    item.addEventListener('focus', () => toggleFocus(item), true)
    item.addEventListener('blur', () => toggleFocus(item), true)
  })
}
