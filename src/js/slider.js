import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'

const swiper = new Swiper('.swiper-promo', {
  loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.promo__inner-arrow-right',
    prevEl: '.promo__inner-arrow-left'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  cssMode: true,
  effect: 'fade'
})

const saleSwiper = new Swiper('.sale-slider', {
  // loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.top-sale__arrow-right',
    prevEl: '.top-sale__arrow-left'
  },
  watchOverflow: 'false',
  cssMode: true
})
