import './index.scss'
import './responsive.scss'

const isMobile = window.isMobile
const $projectContainer = $('.project-container')
const images = window.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))
$projectContainer.html(() => {
    return images.map((image, i) => (`
        <a 
            class="project-item"
            data-aos=${isMobile ? "fade-in" : "fade-up"}
            data-aos-delay=${i * 100}
            data-aos-duration="200"
            data-aos-once=${isMobile}
        >
            <div class="img-wrapper">
            <img src=${image} alt="阿姆斯特丹RAI停车场大楼室内设计">
            </div>
            <div class="info">
            <p class="title">太阳之屋/ Keivani Architects</p>
            <p class="subtitle">室内设计</p>
            </div>
        </a>
    `))
})
!isMobile && $projectContainer.slick({
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