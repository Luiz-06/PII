const texto = document.getElementById('texto') as HTMLParagraphElement;
const botaoMaisculo = document.getElementById('botaoMaisculo') as HTMLButtonElement;
const botaoMinusculo = document.getElementById('botaoMinusculo') as HTMLButtonElement;

botaoMaisculo.addEventListener('click', () => {
    const conteudo = texto.textContent || '';
    texto.textContent = conteudo.toUpperCase();
});

botaoMinusculo.addEventListener('click', () => {
    const conteudo = texto.textContent || '';
    texto.textContent = conteudo.toLowerCase();
});
