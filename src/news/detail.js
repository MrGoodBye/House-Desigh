import '../detail-template/detail.scss'
import '../nav-bar/'
import './detail.scss'
import CONSTS, {detail} from './consts'
const id = window.location.search.split('=')[1]
const importAll = r => r.keys().map(r)
let images = importAll(require.context('./images-detail', false, /\.(png|jpe?g|svg)$/))

const items = images.map((image, i) => (`
    <div class="item">
        <img src=${image} alt=${i}>
        <div class="description">
            <div class="title">${detail.items[i].title}</div>
            <div class="subtitle">${detail.items[i].subtitle}</div>
        </div>
    </div>
`))

$('.detail').html(() => (`
    <div class="header">
        <div class="title">${CONSTS[id].title}</div>
        <div class="subtitle">${detail.title}</div>
        <div class="description">${detail.description}</div>
    </div>
    <div class=${id % 2 ? 'detail-items-single' : 'detail-items'}>${items}</div>
`).replace(/,/g, ''))
