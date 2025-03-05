const modalBtn = document.querySelector('.round-icon--chat')
const modalFeedback = document.querySelector('.modal--feedback')
const closeBtn = modalFeedback.querySelector('.round-icon--close')
const overlay = document.querySelector('.overlay')

modalBtn.addEventListener('click', () => {
  console.log('click')
  overlay.style.display = 'block'
  modalFeedback.classList.add('open')
})


closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none'
  modalFeedback.classList.remove('open')
})

overlay.addEventListener('click', () => {
  overlay.style.display = 'none'
  modalFeedback.classList.remove('open')
})

const fbModalBtn = document.querySelector('.fb-round-icon--chat')

fbModalBtn.addEventListener('click', () => {
  overlay.style.display = 'block'
  modalFeedback.classList.add('open')
})
