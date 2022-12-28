const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const pokemonAtivoNaLista = document.querySelector('.ativo')
        pokemonAtivoNaLista.classList.remove('ativo')


        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cataoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cataoPokemonParaAbrir.classList.add('aberto')

        const pokemonSelecionadoNaLista = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaLista.classList.add('ativo')
    })
})


