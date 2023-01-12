
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {

    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'

    document.body.appendChild(mosca)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}