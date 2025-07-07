document.addEventListener("DOMContentLoaded", () => {
    const inputDescricao = document.getElementById("descricaoTarefa");
    const selectPrioridade = document.getElementById("prioridadeTarefa");
    const botaoAdicionar = document.getElementById("adicionarBtn");
    const corpoTabela = document.querySelector("#tabelaTarefas tbody");

    let tarefas = [];
    let contadorId = 1;

    function renderizarTabela() {
        corpoTabela.innerHTML = "";

        if (tarefas.length === 0) {
            corpoTabela.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center;">Nenhuma tarefa cadastrada.</td>
                </tr>
            `;
            return;
        }

        tarefas.forEach(tarefa => {
            const classesLinha = `
                ${tarefa.dataConclusao ? 'tarefa-concluida' : ''}
                prioridade-${tarefa.prioridade}
            `;
            
            const textoDataConclusao = tarefa.dataConclusao
                ? formatarData(tarefa.dataConclusao)
                : "Pendente";

            const htmlBotaoAcao = tarefa.dataConclusao
                ? `<button class="action-button reabrirBtn" onclick="reabrirTarefa(${tarefa.id})">Reabrir</button>`
                : `<button class="action-button concluirBtn" onclick="concluirTarefa(${tarefa.id})">Concluir</button>`;

            const htmlLinha = `
                <tr class="${classesLinha}">
                    <td>${tarefa.id}</td>
                    <td>${tarefa.descricao}</td>
                    <td>${formatarData(tarefa.dataInicio)}</td>
                    <td>${textoDataConclusao}</td>
                    <td class="acoes">
                        ${htmlBotaoAcao}
                        <button class="action-button editarBtn" onclick="editarTarefa(${tarefa.id})" ${tarefa.dataConclusao ? 'disabled' : ''}>Editar</button>
                        <button class="action-button excluirBtn" onclick="excluirTarefa(${tarefa.id})" ${tarefa.dataConclusao ? 'disabled' : ''}>Excluir</button>
                    </td>
                </tr>
            `;

            corpoTabela.innerHTML += htmlLinha;
        });
    }

    function adicionarTarefa() {
        const descricao = inputDescricao.value.trim();
        const prioridade = selectPrioridade.value;

        if (descricao === "") {
            alert("Por favor, insira a descrição da tarefa.");
            return;
        }

        const novaTarefa = {
            id: contadorId++,
            descricao: descricao,
            dataInicio: new Date(),
            dataConclusao: null,
            prioridade: prioridade,
        };

        tarefas.push(novaTarefa);

        inputDescricao.value = "";
        salvarNoLocalStorage();
        renderizarTabela();
    }
    
    window.concluirTarefa = function(id) {
        const tarefa = tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.dataConclusao = new Date();
            salvarNoLocalStorage();
            renderizarTabela();
        }
    }

    window.reabrirTarefa = function(id) {
        const tarefa = tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.dataConclusao = null;
            salvarNoLocalStorage();
            renderizarTabela();
        }
    }

    window.editarTarefa = function(id) {
        const tarefa = tarefas.find(t => t.id === id);
        if (tarefa) {
            const novaDescricao = prompt("Digite a nova descrição da tarefa:", tarefa.descricao);

            if (novaDescricao && novaDescricao.trim() !== "") {
                tarefa.descricao = novaDescricao.trim();
                salvarNoLocalStorage();
                renderizarTabela();
            }
        }
    }

    window.excluirTarefa = function(id) {
        const tarefa = tarefas.find(t => t.id === id);

        if (tarefa && tarefa.dataConclusao) {
            alert("Não é permitido excluir tarefas finalizadas.");
            return;
        }

        const confirmacao = confirm("Tem certeza que deseja excluir esta tarefa?");
        if (confirmacao) {
            tarefas = tarefas.filter(t => t.id !== id);
            salvarNoLocalStorage();
            renderizarTabela();
        }
    }
    
    function formatarData(data) {
        if (!(data instanceof Date)) {
            data = new Date(data);
        }
        return data.toLocaleString('pt-BR');
    }

    function salvarNoLocalStorage() {
        localStorage.setItem("tarefas_app", JSON.stringify(tarefas));
    }

    function carregarDoLocalStorage() {
        const dadosSalvos = localStorage.getItem("tarefas_app");
        if (dadosSalvos) {
            tarefas = JSON.parse(dadosSalvos);
            if (tarefas.length > 0) {
                contadorId = Math.max(...tarefas.map(t => t.id)) + 1;
            }
        }
    }

    botaoAdicionar.addEventListener("click", adicionarTarefa);

    inputDescricao.addEventListener("keypress", (evento) => {
        if (evento.key === "Enter") {
            adicionarTarefa();
        }
    });

    carregarDoLocalStorage();
    renderizarTabela();
});