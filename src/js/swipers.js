console.log('Привет')
import { Swiper} from 'swiper'
import {Pagination} from 'swiper/modules'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination.min.css'

const swiperElement = document.querySelector('.swiper')
let swiper

function checkSwiper() {
  if (window.innerWidth >= 768) {
    swiperElement.style.display = 'none'

    if (swiper) {
      swiper.destroy(true, true)
      swiper = null
    }
  } else {
    swiperElement.style.display = 'block'

    if (!swiper) {
      swiper = new Swiper('.swiper', {
        modules: [Pagination],
        breakpoints: {
          490: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 90
          }
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    } else {
      swiper.update()
    }
  }
}

window.addEventListener('resize', checkSwiper)
checkSwiper()
