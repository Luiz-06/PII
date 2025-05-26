const botao = document.getElementById("botao") as HTMLButtonElement;

botao.addEventListener("click", () => {
    const exemplo = document.getElementById("exemplo") as HTMLElement;

    console.log("textContent:", exemplo.textContent);
    console.log("innerText:", exemplo.innerText);
    console.log("innerHTML:", exemplo.innerHTML);
});
