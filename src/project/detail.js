import 'slick-carousel/slick/slick'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import '../nav-bar/'
import './detail.scss'
import './index.scss'
import '../detail-template/detail.scss'
import '../initial/index.scss'

const id = window.location.search.split('=')[1]
const importAll = r => r.keys().map(r)
let images = []
switch (id) {
    case '0': images = importAll(require.context('./images-detail/0', false, /\.(png|jpe?g|svg)$/))
        break;
    case '1': images = importAll(require.context('./images-detail/1', false, /\.(png|jpe?g|svg)$/))
        break;
    case '2': images = importAll(require.context('./images-detail/2', false, /\.(png|jpe?g|svg)$/))
        break;
}


const items = images.map((image, i) => (`
    <div 
        class="project-item"
        data-aos=${isMobile ? "fade-in" : "fade-up"}
        data-aos-delay=${i * 100}
        data-aos-duration="200"
        data-aos-once=${isMobile}
        href="project.html?id=${i}"
    >
        <div class="img-wrapper">
            <img src=${image} alt=${i} width="100%">
        </div>
    </div>
`))

$('.detail').html(() => (`
    <div class="detail-items common-arrow">
        ${items}
    </div>
`))

const isMobile = window.isMobile
!isMobile && $('.detail-items').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<i class="icofont-thin-left"></i>`,
    nextArrow: `<i class="icofont-thin-right"></i>`,
})