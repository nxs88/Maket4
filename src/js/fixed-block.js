const burgerMenu = document.querySelector('.round-icon--menu')
const asideMenu = document.querySelector('.fixed-block')
const btnClose = asideMenu.querySelector('.fb-round-icon--menu')
const overlay = document.querySelector('.overlay')

burgerMenu.addEventListener('click', function () {
  overlay.style.display = 'block'
  asideMenu.classList.toggle('open')
})

btnClose.addEventListener('click', () => {
  overlay.style.display = 'none'
  asideMenu.classList.toggle('open')
})

overlay.addEventListener('click', () => {
  overlay.style.display = 'none'
  asideMenu.classList.remove('open')
})