export default function initTypeweriter() {

}

const titulo = document.querySelector('[data-anime="typewriter"]')
const time = 100


function typewriter(element) {


    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letter, index) => {
        setTimeout(function () {
            element.innerHTML += letter
        }, time * index)
    })
}


typewriter(document.querySelector('[data-anime="typewriter-p"]'))


