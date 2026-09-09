const fade = document.getElementById("fade")
const modal = document.getElementById("modal")

function abrir() {
    fade.classList.remove("hide")
    fade.classList.add("fade")

    modal.classList.remove("hide")
    modal.classList.add("modal")
}

function fechar() {
    fade.classList.remove("fade")
    fade.classList.add("hide")

    modal.classList.remove("modal")
    modal.classList.add("hide")
}