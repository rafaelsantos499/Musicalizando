import initMenuMobile from '../menu-mobile.js'
import SlideNav from '../slide.js'
import fetchDados from './fetch.js'

fetchDados()

initMenuMobile()

setTimeout(() => {
    const slide = new SlideNav('.slide', '.wrapper')

    slide.init()
    slide.addArrow('.prev', '.next')
    slide.addControl('.custom-control')
    clearInterval()
}, 1000)

const img = document.querySelectorAll('img')
img.forEach((iten) => {
    iten.setAttribute('loading', 'lazy')
})
