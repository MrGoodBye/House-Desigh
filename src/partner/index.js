import './index.scss'
import './responsive.scss'

const isMobile = window.isMobile
const $partnerContainer = $('.partner-item-wrapper')
const images = window.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))

$partnerContainer.html(() => images.map((image, i) => `
    <div class="partner-item">
        <img src=${image} />
    </div>
`))

$partnerContainer.slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: isMobile ? 2 : 4,
    responsive: !isMobile && [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
})