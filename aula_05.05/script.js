//questão 1
function getId(id){
    return document.getElementById(id)
}


function exibirErro(mensagem, idElemento){
    var elemento = document.getElementById(idElemento)
    elemento.innerText = mensagem
    elemento.classList.remove('oculto')

     setTimeout(()=>{
        elemento.classList.add('oculto')
    }, 3000)
}

const botaoErro = getId('botaoErro')
botaoErro.addEventListener('click', ()=>{
    exibirErro('Preencha corretamente!', 'mensagemErro')
})

//questão 2
var botaoExibir = document.querySelector('#botaoExibir')
botaoExibir.addEventListener('click', exibirConteudo)

function exibirConteudo(){
    var conteudoCaixa = document.querySelector('#caixaDeTexto').value
    var conteudoFormatado = conteudoCaixa.trim()

    if (conteudoFormatado !== "" ){
        document.querySelector('#conteudo').innerHTML = conteudoCaixa
    } else{
        exibirErro('Preencha os campos necessários', 'errorq2')
    }
    
}
