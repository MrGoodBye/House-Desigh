import './index.scss'
import CONSTS from './consts'

const isMobile = window.isMobile
const images = window.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))

$('.news-item-wrapper').html(() => images.map((image, i) => `
    <a
        class="news-item pure-u-1 pure-u-md-1-2 pure-u-xl-1-4"
        data-aos=${isMobile ? "fade-in" : "fade-up"}
        data-aos-delay=${i * 100}
        data-aos-once=${isMobile}
        href="news.html?id=${i}"
    >
        <p class="date">${CONSTS[i].date}</p>
        <p class="title">${CONSTS[i].title}</p>
        <p class="description">${CONSTS[i].description}</p>
        <img src=${image} />
    </a>
`))