import './index.scss'

const isMobile = window.isMobile
$('.service-item-wrapper').slick({
    infinite: true,
    speed: 300,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    prevArrow: `<i class="icofont-thin-left"></i>`,
    nextArrow: `<i class="icofont-thin-right"></i>`,
    responsive: !isMobile && [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})