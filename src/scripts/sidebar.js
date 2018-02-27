const body = document.body

const sidebar = body.querySelector('#sidebar')
const toggler = body.querySelector('#sidebar-toggler')
const overlay = body.querySelector('.sidebar-overlay')

const innerToggler = toggler.cloneNode(true)
innerToggler.setAttribute('id', '#sidebar-inner-toggler')

const hideSidebar = () => {
  body.classList.remove('sidebar-toggled')
  toggler.classList.remove('is-active')
  innerToggler.classList.remove('is-active')
  toggler.setAttribute('aria-expanded', 'false')
  innerToggler.setAttribute('aria-expanded', 'false')
  sidebar.setAttribute('aria-expanded', 'false')
}

const showSidebar = () => {
  body.classList.add('sidebar-toggled')
  toggler.classList.add('is-active')
  innerToggler.classList.add('is-active')
  toggler.setAttribute('aria-expanded', 'true')
  innerToggler.setAttribute('aria-expanded', 'true')
  sidebar.setAttribute('aria-expanded', 'true')
}

const toggleSidebar = () =>
  body.classList.contains('sidebar-toggled') ? hideSidebar() : showSidebar()

export const initSidebar = () => {
  sidebar.appendChild(innerToggler)
  sidebar.setAttribute('aria-expanded', 'false')

  toggler.addEventListener('click', toggleSidebar)
  innerToggler.addEventListener('click', toggleSidebar)
  overlay.addEventListener('click', hideSidebar)
}
