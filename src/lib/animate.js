const animateCSS = (element, animation, prefix = 'animate__') => {
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`
    const node = document.querySelector(element)
    // console.log('node', node)
    node.classList.add(`${prefix}animated`, animationName)
    function handleAnimationEnd (event) {
      event.stopPropagation()
      node.classList.remove(`${prefix}animated`, animationName)
      resolve(node)
    }
    node.addEventListener('animationend', handleAnimationEnd, { once: true })
  })
}
export default animateCSS
