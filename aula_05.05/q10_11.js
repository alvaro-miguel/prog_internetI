function getId(id){
    return document.getElementById(id)
}


function getName(name){
    return document.getElementsByName(name)
}


function exibirErro(mensagem, idElemento) {
    const elemento = getId(idElemento);
    if (elemento) {
        elemento.innerText = mensagem;
        elemento.classList.remove('oculto');
        setTimeout(() => elemento.classList.add('oculto'), 3000);
    }
}


function atualizarBotoes() {
    btnDireita.disabled = listaDisponiveis.options.length === 0;
    btnEsquerda.disabled = listaCarteira.options.length === 0;
}


const btnDireita = getId('moverParaDireitaBtn')
const btnEsquerda = getId('moverParaEsquerdaBtn')
const ativosDisponiveis = getId('ativosDisponiveis')
const carteiraInvestimentos = getId('carteiraInvestimentos')

btnDireita.addEventListener('click', ()=>{
    const selecionados = ativosDisponiveis.selectedOptions

    if(selecionados.length === 0){
        exibirErro("Selecione ao menos uma opção", 'errorMensagem')
        return
    }

    Array.from(selecionados).forEach(opcao => {
        carteiraInvestimentos.appendChild(opcao)
    })

    atualizarBotoes()
})


btnEsquerda.addEventListener('click', ()=>{
    const selecionados = carteiraInvestimentos.selectedOptions
    
    if(selecionados.length === 0){
        exibirErro("Selecione ao menos uma opção", 'errorMensagem')
        return
    }

    Array.from(selecionados).forEach(opcao=>{
        ativosDisponiveis.appendChild(opcao)
    })

    atualizarBotoes()
})


atualizarBotoes()