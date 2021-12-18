import initMenuMobile from './menu-mobile.js'
import configSwiper from './swiper.js'
import initShowScroll from './show-scroll.js'
import initShowClass from './show-class.js'
import initTypeweriter from './typewriter.js'
import modal from './modal'
import SlideNav from './slide'

initMenuMobile()
configSwiper()
initShowScroll()
initShowClass()
initTypeweriter()
modal()

const slide = new SlideNav('.slide', '.wrapper')
slide.init()
slide.addArrow('.prev', '.next')
slide.addControl()
