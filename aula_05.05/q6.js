function getId(id) {
    return document.getElementById(id);
}

function exibirErro(mensagem, idElemento) {
    var elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.innerText = mensagem;
        elemento.classList.remove('oculto');

        setTimeout(() => {
            elemento.classList.add('oculto');
        }, 3000);
    } else {
        console.error("ID de erro não encontrado no HTML:", idElemento);
    }
}

const btnVerificar = getId('enviarBtn'); 
const divResultado = getId('redesSelecionadas'); 

if (btnVerificar) {
    btnVerificar.addEventListener('click', validarOpcoes);
}

function validarOpcoes() {
    const checkboxes = document.getElementsByName('redesSociais');
    let selecionados = [];

    checkboxes.forEach(item => {
        if (item.checked) {
            selecionados.push(item.value);
        }
    });

    if (selecionados.length === 0) {
        exibirErro("Selecione ao menos uma rede social", "mensagemErro");
        divResultado.innerHTML = "";
    } else {
        divResultado.innerHTML = "<strong>Redes selecionadas:</strong> " + selecionados.join(", ");
    }
}