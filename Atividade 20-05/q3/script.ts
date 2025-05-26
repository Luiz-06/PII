const contarParagrafos = document.getElementById("contarParagrafos") as HTMLButtonElement;
const resposta = document.getElementById('resposta') as HTMLElement

contarParagrafos.addEventListener("click", () => {
    const paragrafos = document.getElementsByClassName('paragrafo');
    let contador = 0;

    for (let i = 0; i < paragrafos.length; i++) {
        contador ++
    }

    resposta.innerText = `Número de parágrafos: ${contador}`;
});
