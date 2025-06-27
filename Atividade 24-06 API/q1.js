// ================================================================================
// DOCUMENTAÇÃO DAS APIS
// ================================================================================

/*
1. OpenWeatherMap API
----------------------
- Descrição: Permite obter dados meteorológicos atuais para qualquer cidade.
- Chave de API: Sim, obrigatória. Obtenha em https://openweathermap.org/appid
- Exemplo cURL:
  curl "https://api.openweathermap.org/data/2.5/weather?q=Porto&appid=SUA_CHAVE_API&units=metric"
*/

/*
2. The Cat API
----------------------
- Descrição: Fornece imagens e fatos aleatórios sobre gatos.
- Chave de API: Sim, recomendada. Obtenha em https://thecatapi.com/signup
- Exemplo cURL (a chave vai no cabeçalho/header):
  curl -H "x-api-key: SUA_CHAVE_API" "https://api.thecatapi.com/v1/images/search"
*/

/*
3. icanhazdadjoke API
----------------------
- Descrição: Retorna uma piada de "pai" em formato JSON.
- Chave de API: Não é necessária.
- Exemplo cURL (o cabeçalho 'Accept' é importante):
  curl -H "Accept: application/json" "https://icanhazdadjoke.com/"
*/

/*
4. JSONPlaceholder API
----------------------
- Descrição: API REST falsa para testes e prototipagem.
- Chave de API: Não é necessária.
- Exemplo cURL:
  curl "https://jsonplaceholder.typicode.com/posts/1"
*/

// ================================================================================
// CÓDIGO 
// ================================================================================

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


// --- CONFIGURAÇÃO DE CHAVES ---
const API_KEYS = {
    openweathermap: 'SUA_CHAVE_DO_OPENWEATHERMAP_AQUI',
    thecatapi: 'SUA_CHAVE_DO_THECATAPI_AQUI'
};

// --- Função 1: Chamar a OpenWeatherMap API ---
async function fetchOpenWeatherMapData() {
  console.log("\n--- 1. Testando OpenWeatherMap API ---");
  if (API_KEYS.openweathermap === 'SUA_CHAVE_DO_OPENWEATHERMAP_AQUI') {
    console.log("PULANDO: Chave da OpenWeatherMap não foi configurada.");
    return;
  }
  const city = "Teresina"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS.openweathermap}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
        console.log(`Clima em ${data.name}:`);
        console.log(`- Temperatura: ${data.main.temp}°C`);
        console.log(`- Condição: ${data.weather[0].description}`);
    } else {
 
        console.error(`Erro da API: ${data.message}`);
    }
  } catch (error) {
    console.error("Falha na requisição:", error);
  }
}

// --- Função 2: Chamar a The Cat API ---
async function fetchCatImage() {
  console.log("\n--- 2. Testando The Cat API ---");
  if (API_KEYS.thecatapi === 'SUA_CHAVE_DO_THECATAPI_AQUI') {
    console.log("PULANDO: Chave da The Cat API não foi configurada.");
    return;
  }
  const url = 'https://api.thecatapi.com/v1/images/search';
  try {
    const response = await fetch(url, {
      headers: { 'x-api-key': API_KEYS.thecatapi }
    });
    const data = await response.json();
    console.log("URL da imagem do gato:", data[0].url);
  } catch (error) {
    console.error("Falha na requisição:", error);
  }
}

// --- Função 3: Chamar a icanhazdadjoke API ---
async function fetchDadJoke() {
  console.log("\n--- 3. Testando icanhazdadjoke API ---");
  const url = 'https://icanhazdadjoke.com/';
  try {
    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' }
    });
    const data = await response.json();
    console.log("Piada do dia:", data.joke);
  } catch (error) {
    console.error("Falha na requisição:", error);
  }
}

// --- Função 4: Chamar a JSONPlaceholder API ---
async function fetchPlaceholderPost() {
  console.log("\n--- 4. Testando JSONPlaceholder API ---");
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Título do post falso:", data.title);
  } catch (error) {
    console.error("Falha na requisição:", error);
  }
}

// --- Função Principal ---
async function runAllApiTests() {
  console.log("========================================");
  console.log("INICIANDO TESTES DE API");
  console.log("========================================");
  
  await fetchOpenWeatherMapData();
  await fetchCatImage();
  await fetchDadJoke();
  await fetchPlaceholderPost();
  
  console.log("\n========================================");
  console.log("TESTES FINALIZADOS");
  console.log("========================================");
}

runAllApiTests();
