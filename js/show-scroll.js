export default function initShowScroll() {
    const section = document.querySelectorAll('[data-anime="show-scroll"]')

    function animaScroll() {

        const windowHalf = window.innerHeight * 0.6

        section.forEach((section) => {

            const sectionTop = section.getBoundingClientRect().top - windowHalf


            if (sectionTop < 0) {
                section.classList.add('active')
            } else if (section.classList.contains('active')) {
                section.classList.remove('active')
            }

        })

    }

    window.addEventListener('scroll', animaScroll)

    animaScroll()

}
