const githubButton = document.querySelector('.navbar-github')
const rpsButton = document.querySelector('.navbar-rps')

githubButton.addEventListener('click', e => {
  window.location.href = 'https://github.com/skalixur'
})

rpsButton.addEventListener('click', e => {
  window.location.href =
    'https://skalixur.github.io/rps-game-frontend/index.html'
})
