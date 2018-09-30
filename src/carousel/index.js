import './index.scss'

const isMobile = window.isMobile
const $carousel = $('.carousel')

$carousel.slick({
  infinite: true,
  speed: 500,
  // autoplay: !isMobile,
  dots: isMobile,
  arrows: !isMobile,
  cssEase: 'linear'
})
