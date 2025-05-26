    const calcular = document.getElementById('calcular') as HTMLButtonElement;
    const resultado = document.getElementById('resultado') as HTMLSpanElement;

    calcular.addEventListener('click', () => {
    const valor1 = parseFloat((document.getElementById('valor1') as HTMLInputElement).value);
    const valor2 = parseFloat((document.getElementById('valor2') as HTMLInputElement).value);

    const operacoes = document.getElementsByName('operacao') as NodeListOf<HTMLInputElement>;
    let operacaoSelecionada 

    operacoes.forEach((operacao) => {
        if (operacao.checked) {
            operacaoSelecionada = operacao.value;
        }
    });


    let resultadoCalculado: number;

    switch (operacaoSelecionada) {
    case 'soma':
        resultadoCalculado = valor1 + valor2;
        break;
    case 'subtracao':
        resultadoCalculado = valor1 - valor2;
        break;
    case 'multiplicacao':
        resultadoCalculado = valor1 * valor2;
        break;
    case 'divisao':
        resultadoCalculado = valor2 !== 0 ? valor1 / valor2 : NaN;
        break;
    default:
        resultadoCalculado = NaN;
    }

    resultado.textContent = isNaN(resultadoCalculado) ? 'Erro' : resultadoCalculado.toString();
    });
