const botaoClima = document.getElementById('fetch-weather');
const inputChaveClima = document.getElementById('openweathermap-key');
const divResultadoClima = document.getElementById('weather-result');

botaoClima.addEventListener('click', async () => {
    const chaveApi = inputChaveClima.value.trim();
    if (!chaveApi) {
        divResultadoClima.innerHTML = `<span class="error">Por favor, insira sua chave da API.</span>`;
        return;
    }

    const cidade = "Teresina";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&units=metric&lang=pt_br`;
    divResultadoClima.textContent = 'Buscando clima...';

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (resposta.ok) {
            divResultadoClima.innerHTML = `
                <strong>Clima em ${dados.name}:</strong><br>
                - Temperatura: ${dados.main.temp.toFixed(1)}°C<br>
                - Sensação Térmica: ${dados.main.feels_like.toFixed(1)}°C<br>
                - Condição: ${dados.weather[0].description}
            `;
        } else {
            divResultadoClima.innerHTML = `<span class="error">Erro: ${dados.message}</span>`;
        }
    } catch (erro) {
        divResultadoClima.innerHTML = `<span class="error">Falha na requisição. Verifique o console.</span>`;
        console.error("Erro OpenWeatherMap:", erro);
    }
});

const botaoGato = document.getElementById('fetch-cat');
const inputChaveGato = document.getElementById('thecatapi-key');
const divResultadoGato = document.getElementById('cat-result');

botaoGato.addEventListener('click', async () => {
    const chaveApi = inputChaveGato.value.trim();
    const url = 'https://api.thecatapi.com/v1/images/search';
    
    const opcoes = {
        headers: {}
    };
    if (chaveApi) {
        opcoes.headers['x-api-key'] = chaveApi;
    }
    
    divResultadoGato.textContent = 'Procurando um gatinho...';

    try {
        const resposta = await fetch(url, opcoes);
        const dados = await resposta.json();

        if (resposta.ok) {
            divResultadoGato.innerHTML = `
                <strong>Aqui está seu gato!</strong>
                <img src="${dados[0].url}" alt="Um gato aleatório">
            `;
        } else {
            divResultadoGato.innerHTML = `<span class="error">Erro ao buscar imagem.</span>`;
        }
    } catch (erro) {
        divResultadoGato.innerHTML = `<span class="error">Falha na requisição. Verifique o console.</span>`;
        console.error("Erro The Cat API:", erro);
    }
});

const botaoPiada = document.getElementById('fetch-joke');
const divResultadoPiada = document.getElementById('joke-result');

botaoPiada.addEventListener('click', async () => {
    const url = 'https://icanhazdadjoke.com/';
    divResultadoPiada.textContent = 'Pensando em uma piada...';
    
    try {
        const resposta = await fetch(url, {
            headers: { 'Accept': 'application/json' }
        });
        const dados = await resposta.json();

        if (resposta.ok) {
            divResultadoPiada.textContent = dados.joke;
        } else {
            divResultadoPiada.innerHTML = `<span class="error">Não consegui pensar em nenhuma piada agora.</span>`;
        }
    } catch (erro) {
        divResultadoPiada.innerHTML = `<span class="error">Falha na requisição. Verifique o console.</span>`;
        console.error("Erro icanhazdadjoke:", erro);
    }
});

const botaoPost = document.getElementById('fetch-post');
const divResultadoPost = document.getElementById('post-result');

botaoPost.addEventListener('click', async () => {
    const idPost = 1;
    const url = `https://jsonplaceholder.typicode.com/posts/${idPost}`;
    divResultadoPost.textContent = 'Buscando post...';

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (resposta.ok) {
            divResultadoPost.innerHTML = `
                <strong>Título do Post ${dados.id}:</strong><br>
                ${dados.title}
            `;
        } else {
            divResultadoPost.innerHTML = `<span class="error">Post não encontrado.</span>`;
        }
    } catch (erro) {
        divResultadoPost.innerHTML = `<span class="error">Falha na requisição. Verifique o console.</span>`;
        console.error("Erro JSONPlaceholder:", erro);
    }
});