function mostrarErro(mensagem, idElemento) {
    const elementoErro = document.getElementById(idElemento);
    elementoErro.textContent = mensagem;
    elementoErro.classList.remove('oculto');
    setTimeout(() => {
        elementoErro.classList.add('oculto');
    }, 3000);
}

document.getElementById('calcularEngajamento').addEventListener('click', () => {
    const interacoes = parseFloat(document.getElementById('numInteracoes').value);
    const visualizacoes = parseFloat(document.getElementById('numVisualizacoes').value);
    const resultadoDiv = document.getElementById('resultadoFinalEngajamento');
    const idErro = 'alertaErroEngajamento';

    if (isNaN(interacoes) || isNaN(visualizacoes)) {
        mostrarErro('Por favor, digite apenas números válidos.', idErro);
        resultadoDiv.innerHTML = '';
        return;
    }

    if (visualizacoes === 0) {
        mostrarErro('O número de visualizações não pode ser zero.', idErro);
        resultadoDiv.innerHTML = '';
        return;
    }

    const taxaEngajamento = (interacoes / visualizacoes) * 100;
    resultadoDiv.innerHTML = `Taxa de Engajamento: <strong>${taxaEngajamento.toFixed(2)}%</strong>`;
    document.getElementById(idErro).classList.add('oculto'); 
});