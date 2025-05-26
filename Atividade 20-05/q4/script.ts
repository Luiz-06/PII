const botao = document.getElementById("botao") as HTMLButtonElement
const botaoLimpar = document.getElementById("botaoLimpar") as HTMLButtonElement

botao.addEventListener("click", () => { 
    const paragrafo = document.getElementById("paragrafo") as HTMLParagraphElement
    paragrafo.textContent = "O texto deste parágrafo foi alterado!"; 
}); 

botaoLimpar.addEventListener("click", () => { 
    const paragrafo = document.getElementById("paragrafo") as HTMLParagraphElement
    paragrafo.textContent = ""; 
}); 