import './index.scss'

const isMobile = window.isMobile
const $carousel = $('.carousel')

if (!isMobile) {
  $carousel.height('100vh')
}

$carousel.slick({
  infinite: true,
  speed: 500,
  autoplay: isMobile,
  arrows: !isMobile,
  cssEase: 'linear'
})
