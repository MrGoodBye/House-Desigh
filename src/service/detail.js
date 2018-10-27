import '../detail-template/detail.scss'
import '../nav-bar/'
import './detail.scss'
import CONSTS from './consts'
const id = window.location.search.split('=')[1]
const importAll = r => r.keys().map(r)
let images = []
switch (id) {
    case '0': images = importAll(require.context('./images-detail/0', false, /\.(png|jpe?g|svg)$/))
        break
    case '1': images = [require('./images-detail/1/0.jpg')]
        break
    case '2': images = importAll(require.context('./images-detail/2', false, /\.(png|jpe?g|svg)$/))
        break
    case '3': images = [require('./images-detail/3/0.jpg')]
        break
    case '4': images = importAll(require.context('./images-detail/4', false, /\.(png|jpe?g|svg)$/))
        break
    default: images = importAll(require.context('./images-detail/0', false, /\.(png|jpe?g|svg)$/))
        break
}

const items = images.map((image, i) => (`
    <div class="item">
        <img src=${image} alt=${i}>
        <div class="description">
            <div class="title">${CONSTS[id].detail.items[i].title}</div>
            <div class="subtitle">${CONSTS[id].detail.items[i].subtitle}</div>
        </div>
    </div>
`))

$('.detail').html(() => (`
    <div class="header">
        <div class="title">${CONSTS[id].title}</div>
        <div class="subtitle">${CONSTS[id].detail.title}</div>
        <div class="description">${CONSTS[id].detail.description}</div>
    </div>
    <div class=${id % 2 ? 'detail-items-single' : 'detail-items'}>${items}</div>
`))
