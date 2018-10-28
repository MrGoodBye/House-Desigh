import '../detail-template/detail.scss'
import '../nav-bar/'
import './detail.scss'
import video from './1509003187978.mp4'

$('.detail').html(() => (`
    <video controls autoplay name="media">
        <source src=${video} type="video/mp4">
    </video>
`))
