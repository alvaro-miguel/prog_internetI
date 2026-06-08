function getByID(id) {
  return document.getElementById(id);
}

let botaoConsultar = getByID("botaoConsultar");
let botaoLimpar = getByID("botaoLimpar");
let botaoInverter = getByID("botaoInverter");

botaoConsultar.addEventListener("click", consultarPreco);
botaoLimpar.addEventListener("click", limparCampos);
botaoInverter.addEventListener("click", inverterMoedas);

async function consultarPreco() {
  let moedaBase = getByID("moedaBase").value.toUpperCase().trim();
  let moedaConversao = getByID("moedaConversao").value.toUpperCase().trim();
  let resultado = getByID("resultado");

  if (!moedaBase || !moedaConversao) {
    resultado.innerHTML =
      '<p class="erro">Preencha os dois campos antes de consultar.</p>';
    return;
  }

  let symbol = moedaBase + moedaConversao;
  let url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;

  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Par de moedas inválido: ${symbol}`);
    }

    let data = await response.json();
    let preco = parseFloat(data.price);

    let precoFormatado = preco.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    resultado.innerHTML = `
            <p><strong>Par:</strong> ${data.symbol}</p>
            <p><strong>Preço:</strong> ${precoFormatado} ${moedaConversao}</p>
        `;
  } catch (error) {
    resultado.innerHTML = `<p class="erro">Erro: ${error.message}</p>`;
  }
}

function limparCampos() {
  getByID("moedaBase").value = "";
  getByID("moedaConversao").value = "";
  getByID("resultado").innerHTML = "";
}

function inverterMoedas() {
  let inputBase = getByID("moedaBase");
  let inputConversao = getByID("moedaConversao");
  let temp = inputBase.value;
  inputBase.value = inputConversao.value;
  inputConversao.value = temp;
}
