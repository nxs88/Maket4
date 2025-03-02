console.log('Привет')
import { Swiper } from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination.min.css'

const swiperElement = document.querySelector('.swiper');
const repairSwiperElement = document.querySelector('.repair-swiper');
const priceSwiperElement = document.querySelector('.price-swiper');

let swiper = null;
let repairSwiper = null;
let priceSwiper = null;

function checkSwiper() {
  if (window.innerWidth >= 768) {
    // Скрываем все свайперы на ширине больше 768px и уничтожаем их
    if (swiperElement) swiperElement.style.display = 'none';
    if (repairSwiperElement) repairSwiperElement.style.display = 'none';
    if (priceSwiperElement) priceSwiperElement.style.display = 'none';

    // Уничтожаем существующие свайперы
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
    if (repairSwiper) {
      repairSwiper.destroy(true, true);
      repairSwiper = null;
    }
    if (priceSwiper) {
      priceSwiper.destroy(true, true);
      priceSwiper = null;
    }
  } else {
    // Показываем свайперы на меньшей ширине и инициализируем их
    if (swiperElement) swiperElement.style.display = 'block';
    if (repairSwiperElement) repairSwiperElement.style.display = 'block';
    if (priceSwiperElement) priceSwiperElement.style.display = 'block';

    // Инициализация первого свайпера
    if (!swiper && swiperElement) {
      swiper = new Swiper('.swiper', {
        modules: [Pagination],
        breakpoints: {
          490: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    } else if (swiper) {
      swiper.update();
    }

    // Инициализация второго свайпера
    if (!repairSwiper && repairSwiperElement) {
      repairSwiper = new Swiper('.repair-swiper', {
        modules: [Pagination],
        breakpoints: {
          490: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    } else if (repairSwiper) {
      repairSwiper.update();
    }

    // Инициализация третьего свайпера
    if (!priceSwiper && priceSwiperElement) {
      priceSwiper = new Swiper('.price-swiper', {
        modules: [Pagination],
        breakpoints: {
          490: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    } else if (priceSwiper) {
      priceSwiper.update();
    }
  }
}

// Добавляем обработчик события resize и запускаем функцию при загрузке страницы
window.addEventListener('resize', checkSwiper);
checkSwiper();
