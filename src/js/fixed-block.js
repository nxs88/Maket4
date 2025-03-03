const burgerMenu = document.querySelector('.round-icon--menu');
const asideMenu = document.querySelector('.fixed-block');
const btnClose = asideMenu.querySelector('.fb-round-icon--menu');

burgerMenu.addEventListener('click', function () {
  asideMenu.classList.toggle('open');
});

btnClose.addEventListener('click', () => {
  asideMenu.classList.toggle('open');
});

document.addEventListener('click', function (event) {
  if (
    !asideMenu.contains(event.target) &&
    event.target !== burgerMenu &&
    asideMenu.classList.contains('open')
  ) {
    asideMenu.classList.remove('open');
  }
});
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' && asideMenu.classList.contains('open')) {
    asideMenu.classList.remove('open');
  }
});