import '../nav-bar/'
import './index'
import './detail.scss'
import bg from './detail.jpg'
import count from './detail-2.jpg'

const commonDescription = `
    <div class="description">
        <p class="text-center">
            <span class="text-center">We've been crafting beautiful websites, launching stunning brands and making clients happy for years.
                <span class="text-center">Quisque euismod lobortis aliquam.
                </span>
            </span>
        </p>
        <p class="text-center">orci ut et lobortis aliquam. Aliquam in tortor enim.Aliquam in tortor enim.</p>
    </div>
`

$('.detail').html(() => (`
    <img class="bg" src=${bg} alt="about"/>
    <div class="content">
        <div class="common-header">
            <div class="title">关于</div>
            <div class="subtitle">ABOUT US</div>
        </div>
        ${commonDescription}
        <div class="count-wrapper"><img src=${count} /></div>
        ${commonDescription}
    </div>
`))
