export default function initShowClass() {

}

const knowMore = document.querySelectorAll('.know-more')
const clasS = document.querySelectorAll('.content-description')

function showClass(index) {
    clasS[index].classList.toggle('active')
}

knowMore.forEach((button, index) => {
    button.addEventListener('click', () => {
        showClass(index)
    })
})
