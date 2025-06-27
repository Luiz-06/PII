const botao = document.getElementById('botao') as HTMLButtonElement;
const body = document.getElementsByTagName('body')[0] as HTMLElement;

botao.addEventListener('click', () => {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
});