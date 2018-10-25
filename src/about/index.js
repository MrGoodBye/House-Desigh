import './index.scss'

const isMobile = window.isMobile
const images = window.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))

$('.about-wrapper').html(() => (`
    <div class="left">
        <img src=${images[0]} alt="about">
    </div>
    <div class="right">
        <div
            class="common-header"
            data-aos=${isMobile ? "null" : "fade-up"}
            data-aos-once=${isMobile}
        >
            <div class="title">关于</div>
            <div class="subtitle">ABOUT US</div>
        </div>
        <article
            class="article"
            data-aos=${isMobile ? "fade-in" : "fade-up"}
            data-aos-delay="300"
            data-aos-once=${isMobile}
        >
            <p>
            品牌源于美国加州北部，被太平洋与Mendocino红木森林环绕的Harbor House度假别墅，坐落在宁静的海滩花园上，对望着浩渺无边的大海。
            </p>
            <p>
            这座由著名设计师Louis Christian Mullgardt设计，始建于1916年的Harbor House以其无可复制的后花园海景、古朴大气的建筑风格、精美的红木艺术，被誉为美国20世纪初 ...
            </p>
        </article>
        <a
            class="more"
            href="about.html"
            data-aos=${isMobile ? "fade-in" : "fade-up"}
            data-aos-delay="300"
            data-aos-once=${isMobile}
        >
            MORE
        </a>
    </div>
`))