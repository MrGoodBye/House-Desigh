import './index.scss'
import CONSTS from './consts'

const isMobile = window.isMobile
const $serviceContainer = $('.service-item-wrapper')
const images = window.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))
$serviceContainer.html(() => images.map((image, i) => `
    <a
        class="service-item"
        data-aos=${isMobile ? "fade-in" : "fade-up"}
        data-aos-delay=${i * 100}
        data-aos-once=${isMobile}
        href="service.html?id=${i}"
    >
        <img src=${image} alt=${CONSTS[i].title}>
        <div class="service_info">
            <p class="title">${CONSTS[i].title}</p>
            <p class="description">${CONSTS[i].description}</p>
        </div>
    </a>
`))
$serviceContainer.slick({
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