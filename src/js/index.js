let setaEsquerda = document.getElementById('anterior')

let setaDireita = document.getElementById('proximo')

let lista = document.querySelectorAll('.item')

let count = lista.length

let ativo = 0

setaDireita.onclick = () => {
    let itemAtivo = document.querySelector('.item.ativo')
    itemAtivo.classList.remove('ativo')

    ativo = ativo >= count -1 ? 0 : ativo + 1
    lista[ativo].classList.add('ativo')
}

setaEsquerda.onclick = () => {
    let itemAtivo = document.querySelector('.item.ativo')
    itemAtivo.classList.remove('ativo')

    ativo = ativo <= 0 ? count -1 : ativo - 1
    lista[ativo].classList.add('ativo')
}
