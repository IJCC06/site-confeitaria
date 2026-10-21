const formulario = document.getElementById("meuFormulario");
const btnEnviar = document.getElementById("btnEnviar");

function verificarFormulario() {
    btnEnviar.disabled = !formulario.checkValidity();
}

formulario.addEventListener("input", verificarFormulario);
formulario.addEventListener("change", verificarFormulario);
formulario.addEventListener("reset", () => {
    setTimeout(verificarFormulario, 0);
});

verificarFormulario();