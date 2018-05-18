const body = document.body

const detailsTagSupported = () => {
  let el = document.createElement('details')
  if (!('open' in el)) return false

  el.innerHTML = '<summary>a</summary>b'
  body.appendChild(el)

  let diff = el.offsetHeight
  el.open = true
  let result = diff != el.offsetHeight

  body.removeChild(el)
  return result
}

export const detailsPolyfill = detailsElements => {
  if (!detailsTagSupported()) {
    body.classList.add('no-details')

    detailsElements.forEach(detailsElement => {
      let summaryElement = detailsElement.querySelector('summary')

      summaryElement.addEventListener('click', () => {
        if (detailsElement.getAttribute('open')) {
          detailsElement.open = false
          detailsElement.removeAttribute('open')
        } else {
          detailsElement.open = true
          detailsElement.setAttribute('open', 'open')
        }
      })
    })
  }
}
