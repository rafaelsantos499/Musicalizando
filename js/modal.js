export default function modal() {
    const abrirModal = document.querySelector('#galery')
    const modalContent = document.querySelector('.modal')
    const close = document.querySelector('.close')

    abrirModal.addEventListener('click', () => {
        modalContent.classList.add('active')
    })

    close.addEventListener('click', () => {
        modalContent.classList.remove('active')
    })
}
