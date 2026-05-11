function getId(id) {
    return document.getElementById(id);
}

function exibirErro(mensagem, idElemento) {
    var elemento = getId(idElemento);
    if (elemento) {
        elemento.innerText = mensagem;
        elemento.classList.remove('oculto');
        setTimeout(() => {
            elemento.classList.add('oculto');
        }, 3000);
    }
}

const btnAdicionar = getId('btnAdicionar');
const inputHashtag = getId('textoHashtag');
const selectLista = getId('listaHashtags');

btnAdicionar.addEventListener('click', adicionarHashtag);

function adicionarHashtag() {
    const textoRaw = inputHashtag.value.trim();
    const hashtag = textoRaw.startsWith('#') ? textoRaw : '#' + textoRaw;

    if (textoRaw === "") {
        exibirErro("A hashtag não pode estar vazia!", "mensagemErro");
        return;
    }

    if (textoRaw.replace('#', '').length < 2) {
        exibirErro("A hashtag deve ter pelo menos 2 caracteres!", "mensagemErro");
        return;
    }

    if (selectLista.options.length >= 5) {
        exibirErro("Limite de 5 hashtags atingido!", "mensagemErro");
        return;
    }

    const jaExiste = Array.from(selectLista.options).some(option => 
        option.text.toLowerCase() === hashtag.toLowerCase()
    );

    if (jaExiste) {
        exibirErro("Esta hashtag já foi adicionada!", "mensagemErro");
        return;
    }

    const novaOpcao = document.createElement('option');
    novaOpcao.text = hashtag;
    novaOpcao.value = hashtag;
    selectLista.appendChild(novaOpcao);

    inputHashtag.value = "";
    inputHashtag.focus();
}


const btnRemover = getId('btnRemover');

btnRemover.addEventListener('click', removerHashtag);

function removerHashtag() {
    const selecionadas = selectLista.selectedOptions;

    if (selecionadas.length === 0) {
        exibirErro("Selecione uma hashtag na lista para remover!", "mensagemErro");
        return;
    }

    Array.from(selecionadas).forEach(opcao => {
        selectLista.removeChild(opcao);
    });
}