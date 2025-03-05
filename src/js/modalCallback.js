const modalBtn = document.querySelector('.round-icon--contacts')
const modalCallback = document.querySelector('.modal--callback')
const closeBtn = modalCallback.querySelector('.round-icon--close')
const overlay = document.querySelector('.overlay')

modalBtn.addEventListener('click', () => {
  overlay.style.display = 'block'
  modalCallback.classList.toggle('open')
})
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none'
  modalCallback.classList.toggle('open')
})

overlay.addEventListener('click', () => {
  overlay.style.display = 'none'
  modalCallback.classList.remove('open')
})

const fbModalBtn = document.querySelector('.fb-round-icon--phone')

fbModalBtn.addEventListener('click', () => {
  overlay.style.display = 'block'
  modalCallback.classList.toggle('open')
})
