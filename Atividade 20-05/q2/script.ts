// a) Exemplo com getElementById
const botaoTitulo = document.getElementById("mudarTitulo") as HTMLButtonElement;
const titulo = document.getElementById("titulo") as HTMLHeadingElement;

botaoTitulo.addEventListener("click", () => {
    titulo.textContent = "!!!!";
});

// b) Exemplo com getElementsByTagName
const botaoParagrafos = document.getElementById("destacarParagrafos") as HTMLButtonElement;

botaoParagrafos.addEventListener("click", () => {
    const paragrafos = document.getElementsByTagName("p");

    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style.color = "red";
    }
});
