export const shuffle = array => {
  let shuffled = [...array],
    currIndex = array.length,
    tempValue,
    randIndex

  while (currIndex) {
    randIndex = Math.floor(Math.random() * currIndex)
    currIndex--

    tempValue = shuffled[currIndex]
    shuffled[currIndex] = shuffled[randIndex]
    shuffled[randIndex] = tempValue
  }

  return shuffled
}

export const detailsTagSupported = () => {
  let el = document.createElement('details')
  if (!('open' in el)) return false

  el.innerHTML = '<summary>a</summary>b'
  document.body.appendChild(el)

  let diff = el.offsetHeight
  el.open = true
  let result = diff != el.offsetHeight

  document.body.removeChild(el)
  return result
}
