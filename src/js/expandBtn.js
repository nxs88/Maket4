const description = document.querySelector('.description__text')
const expandBtn = document.querySelector('.expand-btn')
const btnText = expandBtn.querySelector('.expand-btn__text')
const btnIcon = expandBtn.querySelector('.expand-btn__icon')

const expandBtnBrands = document.querySelector('.expand-btn--brands')
const menu = document.querySelector('.menu__list');
const btnBrandsText = expandBtnBrands.querySelector('.expand-btn__text--brands')
const btnBrandsIcon = expandBtnBrands.querySelector('.expand-btn__icon--brands')

const expandBtnRepair = document.querySelector('.expand-btn--repair')
const menuList = document.querySelector('.repair-menu__list');
const btnRepairText = expandBtnRepair.querySelector('.expand-btn__text--repair')
const btnRepairIcon = expandBtnRepair.querySelector('.expand-btn__icon--repair')



expandBtn.addEventListener('click', function () {
  if (description.classList.toggle('active')) {
    btnText.textContent = 'Скрыть'
    btnIcon.style.transform = 'rotate(-180deg)'
  } else {
    btnText.textContent = 'Читать далее'
    btnIcon.style.transform = 'rotate(0deg)'
  }
})


expandBtnBrands.addEventListener('click', function () {
  if (menu.classList.toggle('active')) {
    btnBrandsText.textContent = 'Скрыть'
    btnBrandsIcon.style.transform = 'rotate(-180deg)'
  } else {
    btnBrandsText.textContent = 'Показать все'
    btnBrandsIcon.style.transform = 'rotate(0deg)'
  }
})



expandBtnRepair.addEventListener('click', function () {
  if (menuList.classList.toggle('active')) {
    btnRepairText.textContent = 'Скрыть'
    btnRepairIcon.style.transform = 'rotate(-180deg)'
  } else {
    btnRepairText.textContent = 'Показать все'
    btnRepairIcon.style.transform = 'rotate(0deg)'
  }
})
