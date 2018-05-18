const body = document.body

const sidebar = body.querySelector('#sidebar')
const expandButton = body.querySelector('#sidebar-toggler')
const overlay = body.querySelector('.sidebar-overlay')

const collapseButton = expandButton.cloneNode(true)
collapseButton.setAttribute('id', '#sidebar-collapse')

const hideSidebar = () => {
  sidebar.classList.remove('toggled')
  expandButton.classList.remove('is-active')
  collapseButton.classList.remove('is-active')

  sidebar.setAttribute('aria-expanded', 'false')
  expandButton.setAttribute('aria-expanded', 'false')
  collapseButton.setAttribute('aria-expanded', 'false')
}

const showSidebar = () => {
  sidebar.classList.add('toggled')
  expandButton.classList.add('is-active')
  collapseButton.classList.add('is-active')

  sidebar.setAttribute('aria-expanded', 'true')
  expandButton.setAttribute('aria-expanded', 'true')
  collapseButton.setAttribute('aria-expanded', 'true')

  sidebar.focus()
}

let windowWidth,
  windowHeight,
  bodyHeight,
  sidebarHeight,
  windowPos,
  lastWindowPos = 0,
  top = false,
  bottom = false,
  topOffset = 0,
  sidebarOffsetTop,
  resizeTimer

const resizeHandler = () => {
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight
}

const scrollHandler = () => {
  windowPos = window.scrollY
  bodyHeight = body.offsetHeight
  sidebarHeight = sidebar.offsetHeight
  sidebarOffsetTop = Math.round(windowPos + sidebar.getBoundingClientRect().top)

  if (sidebarHeight > windowHeight) {
    if (windowPos > lastWindowPos) {
      if (top) {
        top = false
        topOffset = sidebarOffsetTop > 0 ? sidebarOffsetTop : 0
        sidebar.setAttribute('style', `top: ${topOffset}px;`)
      } else if (
        !bottom &&
        windowPos + windowHeight > sidebarHeight + sidebarOffsetTop &&
        sidebarHeight < bodyHeight
      ) {
        bottom = true
        sidebar.setAttribute('style', 'position: fixed; bottom: 0;')
      }
    } else if (windowPos < lastWindowPos) {
      if (bottom) {
        bottom = false
        topOffset = sidebarOffsetTop > 0 ? sidebarOffsetTop : 0
        sidebar.setAttribute('style', `top: ${topOffset}px;`)
      } else if (!top && windowPos < sidebarOffsetTop) {
        top = true
        sidebar.setAttribute('style', 'position: fixed;')
      }
    } else {
      top = bottom = false
      topOffset = sidebarOffsetTop ? sidebarOffsetTop : 0
      sidebar.setAttribute('style', `top: ${topOffset}px;`)
    }
  } else if (!top) {
    top = true
    sidebar.setAttribute('style', 'position: fixed;')
  }

  lastWindowPos = windowPos
}

const resizeAndScrollHandler = () => {
  resizeHandler()
  scrollHandler()
}

export const initSidebar = () => {
  sidebar.setAttribute('tabindex', '-1')
  sidebar.insertBefore(collapseButton, sidebar.children[1])

  sidebar.setAttribute('aria-expanded', 'false')
  expandButton.setAttribute('aria-expanded', 'false')
  collapseButton.setAttribute('aria-expanded', 'false')

  expandButton.addEventListener('click', showSidebar)
  collapseButton.addEventListener('click', hideSidebar)
  overlay.addEventListener('click', hideSidebar)

  window.addEventListener('scroll', scrollHandler)
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(resizeAndScrollHandler, 500)
  })

  resizeAndScrollHandler()
}
