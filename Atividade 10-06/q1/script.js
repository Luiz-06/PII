function showErrorMessage(message, elementId) {
    var errorMessage = document.getElementById(elementId);
    errorMessage.textContent = message;
    errorMessage.classList.remove("oculto");
    setTimeout(function () {
        errorMessage.classList.add("oculto");
    }, 3000);
    }

    document
    .getElementById("botaoErroPadrao")
    .addEventListener("click", function () {
        showErrorMessage("O campo deve ser preenchido", "mensagemErroPadrao");
    });

    document
    .getElementById("botaoErroCustom")
    .addEventListener("click", function () {
        showErrorMessage(
        "Esta é uma mensagem de erro personalizada!",
        "mensagemErroCustom"
        );
});
