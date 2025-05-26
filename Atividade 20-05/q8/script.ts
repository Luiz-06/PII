const botao = document.getElementById('botao') as HTMLButtonElement;
const body = document.getElementsByTagName('body')[0] as HTMLElement;

let modoAltoContrasteAtivo = false;

botao.addEventListener('click', () => {
    if (!modoAltoContrasteAtivo) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        modoAltoContrasteAtivo = true;
    } else {
        body.style.backgroundColor = ''; 
        body.style.color = '';
        modoAltoContrasteAtivo = false;
    }
});
