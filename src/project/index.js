import './index.scss'
import './responsive.scss'

const isMobile = window.isMobile
!isMobile && $('.project-container').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: `<i class="icofont-thin-left"></i>`,
    nextArrow: `<i class="icofont-thin-right"></i>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
})

$('.project-container .project-item').each(function(index, elem) {
    elem.dataset.aos = {
        animate: 'fadeUp',
        delay: index * 100
    }
})
