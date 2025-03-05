import { Swiper } from 'swiper'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination.min.css'

const swiperElement = document.querySelector('.swiper')
const repairSwiperElement = document.querySelector('.repair-swiper')
const priceSwiperElement = document.querySelector('.price-swiper')

let swiper = null
let repairSwiper = null
let priceSwiper = null

function checkSwiper() {
  if (window.innerWidth >= 767) {
    if (swiperElement) swiperElement.style.display = 'none';
    if (repairSwiperElement) repairSwiperElement.style.display = 'none';
    if (priceSwiperElement) priceSwiperElement.style.display = 'none';

    if (swiper) swiper.destroy(true, true);
    if (repairSwiper) repairSwiper.destroy(true, true);
    if (priceSwiper) priceSwiper.destroy(true, true);

    swiper = null;
    repairSwiper = null;
    priceSwiper = null;
  } else {
    if (swiperElement) swiperElement.style.display = 'block';
    if (repairSwiperElement) repairSwiperElement.style.display = 'block';
    if (priceSwiperElement) priceSwiperElement.style.display = 'block';

    if (!swiper && swiperElement) {
      swiper = new Swiper('.swiper', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: '.swiper-pagination-main', 
          clickable: true,
        },
      });
    }
    
    if (!repairSwiper && repairSwiperElement) {
      repairSwiper = new Swiper('.repair-swiper', {
        modules: [Pagination],
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination-repair', 
          clickable: true,
        },
      });
    }
    
    if (!priceSwiper && priceSwiperElement) {
      priceSwiper = new Swiper('.price-swiper', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: '.swiper-pagination-price', 
          clickable: true,
        },
      });
    }
  }
}

// Добавляем обработчик события resize и запускаем функцию при загрузке страницы
window.addEventListener('resize', checkSwiper)
checkSwiper()
