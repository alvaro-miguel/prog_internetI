function getByID(id) {
  return document.getElementById(id);
}

const btnIdade = getByID("btnIdade");
const inputNome = getByID("inputNome");
const divIdade = getByID("resultadoIdade");

btnIdade.addEventListener("click", async () => {
  let nome = inputNome.value.trim();

  if (nome === "") {
    divIdade.innerHTML =
      "<p style='color: red;'>Por favor, digite um nome.</p>";
    return;
  }

  divIdade.innerHTML = "<p>Consultando oráculo...</p>";
  let url = `https://api.agify.io?name=${nome}`;

  try {
    let resposta = await fetch(url);
    if (!resposta.ok) throw new Error("Erro ao buscar dados na Agify.");

    let dados = await resposta.json();

    if (dados.age === null) {
      divIdade.innerHTML =
        "<p style='color: red;'>Nome não encontrado no banco de dados.</p>";
      return;
    }

    divIdade.innerHTML = `
            <p><strong>Nome analisado:</strong> ${dados.name}</p>
            <p><strong>Idade provável:</strong> ${dados.age} anos</p>
            <p><strong>Base de dados:</strong> ${dados.count} pessoas com este nome.</p>
        `;
  } catch (erro) {
    divIdade.innerHTML = `<p style='color: red;'>Erro: ${erro.message}</p>`;
  }
});

const btnPokemon = getByID("btnPokemon");
const inputPokemon = getByID("inputPokemon");
const divPokemon = getByID("resultadoPokemon");

btnPokemon.addEventListener("click", async () => {
  let pokemon = inputPokemon.value.trim().toLowerCase();

  if (pokemon === "") {
    divPokemon.innerHTML =
      "<p style='color: red;'>Por favor, digite o nome de um Pokémon.</p>";
    return;
  }

  divPokemon.innerHTML = "<p>Procurando na Pokédex...</p>";
  let urlPrincipal = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    let resposta = await fetch(urlPrincipal);

    if (resposta.status === 404) {
      divPokemon.innerHTML =
        "<p style='color: red;'>Pokémon não encontrado.</p>";
      return;
    }
    if (!resposta.ok) throw new Error("Erro de conexão com a PokéAPI.");

    let dados = await resposta.json();

    let urlEspecie = dados.species.url;
    let respostaEspecie = await fetch(urlEspecie);
    let dadosEspecie = await respostaEspecie.json();

    let entradaTexto =
      dadosEspecie.flavor_text_entries.find(
        (entry) =>
          entry.language.name === "pt" || entry.language.name === "pt-BR",
      ) ||
      dadosEspecie.flavor_text_entries.find(
        (entry) => entry.language.name === "en",
      );

    let descricao = entradaTexto
      ? entradaTexto.flavor_text.replace(/[\n\f\r]/g, " ")
      : "Descrição não disponível para este Pokémon.";

    let tipos = dados.types.map((t) => t.type.name).join(", ");
    let imagemUrl = dados.sprites.front_default;

    divPokemon.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                <img src="${imagemUrl}" alt="${dados.name}" style="width: 96px; height: 96px; background: #fff; border-radius: 50%; border: 2px solid #007bff;">
                <div>
                    <p><strong>Nome:</strong> ${dados.name.toUpperCase()}</p>
                    <p><strong>Nº Pokédex:</strong> ${dados.id}</p>
                    <p><strong>Tipo(s):</strong> ${tipos}</p>
                </div>
            </div>
            <p style="font-style: italic; border-top: 1px solid #ccc; padding-top: 10px; font-size: 0.95em;">
                "${descricao}"
            </p>
        `;
  } catch (erro) {
    divPokemon.innerHTML = `<p style='color: red;'>Erro: ${erro.message}</p>`;
  }
});
