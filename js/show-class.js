export default function initShowClass() {

}


const knowMore = document.querySelectorAll('.know-more')
const clasS = document.querySelectorAll('.content-description')






knowMore[0].addEventListener('click', () => {
    clasS[0].classList.toggle('active')
})
knowMore[1].addEventListener('click', () => {
    clasS[1].classList.toggle('active')
})
knowMore[2].addEventListener('click', () => {
    clasS[2].classList.toggle('active')
})
knowMore[3].addEventListener('click', () => {
    clasS[3].classList.toggle('active')
})



























