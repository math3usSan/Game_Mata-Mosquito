
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {

    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * largura) - 50
    var posicaoY = Math.floor(Math.random() * altura) - 50

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = 'mosca1'
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'

    document.body.appendChild(mosca)

}