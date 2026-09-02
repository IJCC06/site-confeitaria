// Declaração de Varíaveis
let indice = 0
let imagens = [
    "img/bolo1.jpg",
    "img/bolo2.jpg",
    "img/bolo3.jpg",
    "img/bolo4.jpg"
]

// Função para trocar a imagem
function trocar() {
    let img = document.getElementById("img")
    img.src = imagens[indice]
}

// Lógica para trocar de imagem
setInterval(function() {
    trocar()
    indice++

    if (indice >= imagens.length) {
        indice = 0
    }
}, 5000)