const botao = document.getElementById("botao") as HTMLButtonElement;
const origem = document.getElementById("origem") as HTMLDivElement;
const resposta = document.getElementById("resposta") as HTMLDivElement;

botao.addEventListener("click", () => {
    const conteudo = origem.textContent || '';
    resposta.textContent = conteudo.toUpperCase();
});
