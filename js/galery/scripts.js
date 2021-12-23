import initMenuMobile from '../menu-mobile.js'
import SlideNav from '../slide.js'

initMenuMobile()

setTimeout(() => {
    const slide = new SlideNav('.slide', '.wrapper')

    slide.init()
    slide.addArrow('.prev', '.next')
    slide.addControl('.custom-control')
    clearInterval()
}, 100)

const img = document.querySelectorAll('img')
img.forEach((iten) => {
    iten.setAttribute('loading', 'lazy')
})
