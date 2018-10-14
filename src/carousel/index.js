import './index.scss'

const isMobile = window.isMobile
const $carousel = $('.carousel')
const images = window.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))

$carousel.html(() => images.map((image, i) => `
  <div class="img-wrapper">
    <img src=${image} alt=${i}>
  </div>
`))

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
