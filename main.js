
const btnMenu = document.getElementById('btn-mobile')
const sidebar = document.querySelector('.sidebar-menu')
const hamburger = document.querySelector('.hamburger')
const events = ['click', 'touchstart']
const html = document.documentElement

if (btnMenu) {
    function menuOpen() {
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
}



function outsideClick(element, events, callback) {
    const html = document.documentElement
    const outside = 'data-outside'

    if (!element.hasAttribute(outside)) {

        events.forEach(userEvent => {
            setTimeout(() => {
                html.addEventListener(userEvent, handleOutsidClick)
            }, 0)
        })

        element.setAttribute(outside, '')
    }

    function handleOutsidClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside)

            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsidClick)
            })

            callback()
        }

    }
}





