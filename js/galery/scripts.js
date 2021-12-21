import initMenuMobile from '../menu-mobile.js'
import SlideNav from '../slide.js'

initMenuMobile()

setTimeout(() => {
    const slide = new SlideNav('.slide', '.wrapper')

    slide.init()
    slide.addArrow('.prev', '.next')
    clearInterval()
}, 100)
