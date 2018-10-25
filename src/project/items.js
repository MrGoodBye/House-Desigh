import CONSTS from './consts'

const isMobile = window.isMobile
const importAll = r => r.keys().map(r)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))

export const items = images.map((image, i) => (`
    <a 
        class="project-item"
        data-aos=${isMobile ? "fade-in" : "fade-up"}
        data-aos-delay=${i * 100}
        data-aos-duration="200"
        data-aos-once=${isMobile}
        href="project.html?id=${i}"
    >
        <div class="img-wrapper">
            <img src=${image} alt="阿姆斯特丹RAI停车场大楼室内设计">
        </div>
        <div class="info">
            <p class="title">${CONSTS[i + 1].title}</p>
            <p class="subtitle">${CONSTS[i + 1].subtitle}</p>
        </div>
    </a>
`))
