document
    .getElementById("seletorImagens")
    .addEventListener("change", function () {
        const urlDaImagem = this.value;
        const divExibicao = document.getElementById("imagemDinamica");

        divExibicao.innerHTML = "";

        if (urlDaImagem) {
        const imgElement = document.createElement("img");
        imgElement.src = urlDaImagem;
        imgElement.alt = "Imagem selecionada";
        divExibicao.appendChild(imgElement);
        } else {
        divExibicao.innerHTML = "Nenhuma imagem foi escolhida.";
        }
    });
