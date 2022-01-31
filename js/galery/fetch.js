export default function fetchDados() {
    const loading = document.querySelector('.loading')

    loading.classList.add('show')
    async function criarAnimal() {
        try {
            const animaisResponse = await fetch('./imageSlide.json')
            const animaisJSON = await animaisResponse.json()

            const dados = animaisJSON.map(({ alt, url }) => `<li><img src="${url}" alt="${alt}" /></li>`)
            const slide = document.querySelector('.slide')
            const custonControl = document.querySelector('.custom-control')

            slide.innerHTML = dados
            custonControl.innerHTML = dados
        } catch (erro) {
            console.log(erro)
        }
        loading.classList.remove('show')
    }

    criarAnimal()
}
