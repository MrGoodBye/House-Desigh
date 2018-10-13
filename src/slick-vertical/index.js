import 'slick-carousel/slick/slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import './index.scss'

const $slider = $('.slider')
if (!window.isMobile) {
  console.log('init vertical slider')

  $slider.slick({
    infinite: false,
    arrows: false,
    vertical: true,
    dots: true,
    draggable: false,
    speed: 1200,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)'
  })

  $slider.on('wheel', function (e) {
    e.preventDefault()
    if (e.originalEvent.deltaY > 0) {
      if ($(this).slick('slickCurrentSlide') === $(this).find('.slick-slide').length - 1) return
      $(this).slick('slickNext')

    } else {
      if ($(this).slick('slickCurrentSlide') === 0) {
        return
      }

      $(this).slick('slickPrev')
    }
  })
  $slider.on('afterChange', function(event, $slick, direction){
    $(this).find('.aos-init').removeClass('aos-animate')
    $(this).find('.slick-current .slide .aos-init').addClass('aos-animate')
  })
}

// fade animation of each slide, to be confirm
// $('.slider .slide').each(function (index, elem) {
//   if(index) elem.dataset.aos = 'fadeUp'
// })