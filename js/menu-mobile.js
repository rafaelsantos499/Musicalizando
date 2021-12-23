function outsideClick(element, events, callback) {
    const html = document.documentElement
    const outside = 'data-outside'

    function handleOutsidClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside)

            events.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutsidClick)
            })

            callback()
        }
    }

    if (!element.hasAttribute(outside)) {
        events.forEach((userEvent) => {
            setTimeout(() => {
                html.addEventListener(userEvent, handleOutsidClick)
            }, 0)
        })

        element.setAttribute(outside, '')
    }
}
export default function initMenuMobile() {
    const btnMenu = document.getElementById('btn-mobile')
    const sidebar = document.querySelector('.sidebar-menu')
    const hamburger = document.querySelector('.hamburger')
    const events = ['click', 'touchstart']

    function menuOpen(event) {
        event.preventDefault()
        btnMenu.classList.toggle('active')
        sidebar.classList.toggle('active')
        hamburger.classList.toggle('active')

        outsideClick(sidebar, events, () => {
            btnMenu.classList.remove('active')
            sidebar.classList.remove('active')
            hamburger.classList.remove('active')
        })
    }
    events.forEach((event) => {
        btnMenu.addEventListener(event, menuOpen)
    })

    const header = document.querySelectorAll('#header')
    function colorBtnMenu() {
        const windowFinal = window.innerHeight * 0.0

        header.forEach((event) => {
            const headerTop = event.getBoundingClientRect().top - windowFinal
            const totalHeader = -event.offsetHeight

            if (totalHeader > headerTop) {
                hamburger.classList.add('active-color')
            } else {
                hamburger.classList.remove('active-color')
            }
        })
    }

    colorBtnMenu()

    window.addEventListener('scroll', colorBtnMenu)
}
