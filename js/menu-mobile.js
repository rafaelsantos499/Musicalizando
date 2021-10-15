export default function initMenuMobile() {
    const btnMenu = document.getElementById('btn-mobile')
    const sidebar = document.querySelector('.sidebar-menu')
    const hamburger = document.querySelector('.hamburger')
    const events = ['click']






    if (btnMenu) {
        function menuOpen() {
            btnMenu.classList.add('active')
            sidebar.classList.add('active')
            hamburger.classList.add('active')

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

    const header = document.querySelectorAll('#header')


    function colorBtnMenu() {

        const windowFinal = window.innerHeight * 0.2

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

    //REMOVE ACTIVE AO CLICAR NO LINK

    const navMenuLinks = document.querySelectorAll('[data-Menu="closer-menu"] a[href^="#"]')
    const navMenu = document.querySelector('[data-Menu="closer-menu"]')


    function closeMenu() {
        navMenuLinks.forEach((link) => {
            btnMenu.classList.remove('active')
            sidebar.classList.remove('active')
            hamburger.classList.remove('active')
        })
    }

    navMenu.addEventListener('click', closeMenu)

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











