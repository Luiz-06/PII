function showErrorMessage(message, elementId) {
    var errorMessage = document.getElementById(elementId);
    errorMessage.textContent = message;
    errorMessage.classList.remove("oculto");
    setTimeout(function () {
        errorMessage.classList.add("oculto");
    }, 3000);
}

var botaoExibir = document.getElementById("botaoExibir");
botaoExibir.addEventListener("click", exibirConteudo);

function exibirConteudo() {
    var conteudo = document.getElementById("caixaDeTexto").value.trim();
    var divConteudo = document.getElementById("conteudo");
    var mensagemErroCampo = "mensagemErroCampo";

    if (conteudo === null || conteudo === "") {
        showErrorMessage("O campo não pode ser vazio!", mensagemErroCampo);
        divConteudo.innerHTML = ""; 
    } else {
        divConteudo.innerHTML = conteudo;
        document.getElementById(mensagemErroCampo).classList.add("oculto"); 
    }
}
