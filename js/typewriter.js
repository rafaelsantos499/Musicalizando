export default function initTypeweriter() {

}
const time = 100
function typewriter(element) {
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letter, index) => {
        setTimeout(() => {
            element.innerHTML += letter
        }, time * index)
    })
}
typewriter(document.querySelector('[data-anime="typewriter-p"]'))
