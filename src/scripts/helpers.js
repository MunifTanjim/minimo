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
