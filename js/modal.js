import SlideNav from './slide'

export default function modal() {
    const abrirModal = document.querySelector('#galery')
    const modalContent = document.querySelector('.modal')
    const close = document.querySelector('.close')

    abrirModal.addEventListener('click', () => {
        modalContent.classList.add('active')
        setTimeout(() => {
            const slide = new SlideNav('.slide', '.wrapper')

            slide.init()
            slide.addArrow('.prev', '.next')
            clearInterval()
        }, 100)
    })

    close.addEventListener('click', () => {
        modalContent.classList.remove('active')
    })
}
