import './index.scss'
import CONSTS from './consts'
import bg from './bg.jpg'

const isMobile = window.isMobile
const images = window.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))
$('.team').prepend(`<img src=${bg} />`)
$('.team-item-wrapper').html(() => images.map((image, i) => `
    <a
        class="team-item pure-u-1 pure-u-md-1-2 pure-u-xl-1-4"
        data-aos=${isMobile ? "fade-in" : "fade-up"}
        data-aos-delay=${i * 100}
        data-aos-once=${isMobile}
        href="team.html?id=${i}"
    >
        <img src=${image} alt=${CONSTS[i].title}>
        <div class="summary">
            <p class="title">${CONSTS[i].title}</p>
            <p class="subtitle">${CONSTS[i].subtitle}</p>
            <p class="description">${CONSTS[i].description}</p>
        </div>
    </a>
`))