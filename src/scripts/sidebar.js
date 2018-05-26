const body = document.body

const sidebar = body.querySelector('#sidebar')
const expandButton = body.querySelector('#sidebar-toggler')
const overlay = body.querySelector('.sidebar-overlay')
const sidebarMenu = body.querySelector('#sidebar-menu')

const collapseButton = expandButton.cloneNode(true)
collapseButton.setAttribute('id', '#sidebar-collapse')

const setAriaExpanded = (items, value) => {
  items.forEach(item => item.setAttribute('aria-expanded', value))
}

const hideSidebar = () => {
  sidebar.classList.remove('toggled')
  setAriaExpanded([sidebar, expandButton, collapseButton], false)
}

const showSidebar = () => {
  sidebar.classList.add('toggled')
  setAriaExpanded([sidebar, expandButton, collapseButton], true)
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

const initSidebarMenu = () => {
  let itemsWithSubmenu = sidebarMenu.querySelectorAll('.item.has-children')

  itemsWithSubmenu.forEach(item => {
    let toggler = item.querySelector('button')
    let submenu = item.querySelector('.sub-menu')

    setAriaExpanded([submenu, toggler], false)

    toggler.addEventListener('click', () => {
      let toggled = item.classList.contains('toggled')

      item.classList[toggled ? 'remove' : 'add']('toggled')
      setAriaExpanded([submenu, toggler], !toggled)
    })
  })
}

export const initSidebar = () => {
  sidebar.setAttribute('tabindex', '-1')
  sidebar.insertBefore(collapseButton, sidebar.children[1])

  setAriaExpanded([sidebar, expandButton, collapseButton], false)

  expandButton.addEventListener('click', showSidebar)
  collapseButton.addEventListener('click', hideSidebar)
  overlay.addEventListener('click', hideSidebar)

  window.addEventListener('scroll', scrollHandler)
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(resizeAndScrollHandler, 500)
  })

  resizeAndScrollHandler()

  if (sidebarMenu) initSidebarMenu()
}
