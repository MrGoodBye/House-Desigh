import './index.scss'
import CONSTS from './consts'

const isMobile = window.isMobile
const $videoContainer = $('.video-item-wrapper')
const images = window.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))
$videoContainer.html(() => images.map((image, i) => `
    <div
        class="video-item"
        data-aos=${isMobile ? "fade-in" : "fade-up"}
        data-aos-delay=${i * 100}
        data-aos-once=${isMobile}
    >
        <a class="image-wrapper" href="video.html">
            <img src=${image} alt=${CONSTS[i].title}>
        </a>
        <div class="item-info-wrapper">
            <div class="item_info">
                <p class="title">${CONSTS[i].title}</p>
                <p class="subtitle">${CONSTS[i].subtitle}</p>
            </div>
            <div class="arrow" />
        </div>
    </div>
`))
$videoContainer.slick({
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