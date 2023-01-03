const listaSelecaoheros = document.querySelectorAll('.hero')
const herosCard = document.querySelectorAll('.cartao-hero')

listaSelecaoheros.forEach(hero => {
    hero.addEventListener('click', () => {
        const cartaoheroAberto = document.querySelector('.aberto')
        cartaoheroAberto.classList.remove('aberto')

        const idheroselecionado = hero.attributes.id.value
        
        const idDoCartaoheroParaAbrir = 'cartao-' + idheroselecionado

        const cartaoheroParaAbrir = document.getElementById(idDoCartaoheroParaAbrir)
        cartaoheroParaAbrir.classList.add('aberto')

        const heroAtivoNaListagem = document.querySelector('.ativo')
        heroAtivoNaListagem.classList.remove('ativo')

        const heroselecionadoNaListagem = document.getElementById(idheroselecionado)  
        heroselecionadoNaListagem.classList.add('ativo')       

    })
})