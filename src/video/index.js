import './index.scss'

const isMobile = window.isMobile
$('.video-item-wrapper').slick({
    infinite: true,
    speed: 300,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 4,
    prevArrow: `<i class="icofont-thin-left"></i>`,
    nextArrow: `<i class="icofont-thin-right"></i>`,
    responsive: isMobile && [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
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
    ]
})

$('.video-item-wrapper .video-item').each(function(index, elem) {
    $(elem).data('aos', isMobile ? 'fade-in' : 'fade-up')
    console.log($(elem).data())
})