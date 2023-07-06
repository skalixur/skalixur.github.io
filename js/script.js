const footerItems = document.querySelectorAll('.footer-item')
const discordButton = document.querySelector('.footer-discord')

discordButton.addEventListener('click', e => {
  e.preventDefault()
  discordButton.innerHTML = 'copied!'
  setTimeout(() => {
    discordButton.innerHTML = 'discord'
  }, 1000)
  navigator.clipboard.writeText('skalixur')
})

let itemCount = 0
let footerInterval = setInterval(() => {
  console.log(footerItems)
  if (!(itemCount < footerItems.length)) return

  footerItems[itemCount].classList.toggle('footer-animation', true)

  itemCount++
}, 500)
setTimeout(() => {
  clearInterval(footerInterval)
}, 500 * footerItems.length)
