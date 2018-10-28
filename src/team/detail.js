import '../detail-template/detail.scss'
import '../nav-bar'
import './detail.scss'
import CONSTS, {detail} from './consts'
const id = window.location.search.split('=')[1]

const image = require(`./images-detail/${id}.jpg`)

const items = detail.map(d => (`
    <div class="item">
        <div class="name">${d.name}</div>
        ${d.items.map(i => (`
            <div class="content">${i}</div>
        `))}
    </div>
`))

$('.detail').html(() => (`
    <div class="img-wrapper">
        <img src=${image} alt="0" />
    </div>
    <div class="content">
        <div class="common-header">
            <div class="title">${CONSTS[id].title}</div>
            <div class="subtitle">${CONSTS[id].subtitle}</div>
        </div>
        <div class="items">${items}</div>
    </div>
`).replace(/,/g, ''))
