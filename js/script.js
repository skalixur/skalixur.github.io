const discordButton = document.querySelector('.footer-discord')

discordButton.addEventListener('click', e => {
  e.preventDefault()
  discordButton.innerHTML = 'Skalixur#2719 copied!'
  setTimeout(() => {
    discordButton.innerHTML = 'discord'
  }, 1000)
  navigator.clipboard.writeText('Skalixur#2719')
})
