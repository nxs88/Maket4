const modalBtn = document.querySelector('.round-icon--chat')
const modalFeedback = document.querySelector('.modal--feedback')
const closeBtn = modalFeedback.querySelector('.round-icon--close')
const overlay = document.querySelector('.overlay')

modalBtn.addEventListener('click', () => {
  overlay.style.display = 'block'
  modalFeedback.classList.toggle('open')
})
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none'
  modalFeedback.classList.toggle('open')
})

overlay.addEventListener('click', () => {
  overlay.style.display = 'none'
  modalFeedback.classList.remove('open')
})

const fbModalBtn = document.querySelector('.fb-round-icon--chat')

fbModalBtn.addEventListener('click', () => {
  overlay.style.display = 'block'
  modalFeedback.classList.toggle('open')
})
