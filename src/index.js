import './index.html'
import './index.scss'
import './js/slider.js'
import './js/timer.js'

// swap categories

const saleCategories = document.querySelectorAll('.top-sale__categories-btn')

const changeSaleCategories = () => {
  saleCategories.forEach(e => {
    e.addEventListener('click', e => {
      toggleSaleCategory(e)
    })
  })
}

const toggleSaleCategory = e => {
  saleCategories.forEach(e => {
    if (e.classList.contains('active')) {
      e.classList.remove('active')
    }
  })
  e.target.classList.add('active')
}

changeSaleCategories()

// swap product size

const productSizeBtns = document.querySelectorAll('.product-sizes__btn')

const changeProductSize = () => {
  productSizeBtns.forEach(e => {
    e.addEventListener('click', e => toggleProductSize(e))
  })
}

const toggleProductSize = e => {
  productSizeBtns.forEach(e => {
    if (e.classList.contains('active')) {
      e.classList.remove('active')
    }
  })
  e.target.classList.add('active')
}

changeProductSize()
