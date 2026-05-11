
function getId(id){
    return document.getElementById(id)
}

function exibirErro(mensagem, idElemento){
    var elemento = getId(idElemento)
    elemento.innerText = mensagem
    elemento.classList.remove('oculto')

     setTimeout(()=>{
        elemento.classList.add('oculto')
    }, 3000)
}

const interacoes = getId('interacoes')
const views = getId('visualizacoes')
const btnCalcularTaxa = getId('btnCalcular')
const resultado = getId('resultadoEngajamento')

btnCalcularTaxa.addEventListener('click', exibirEngajamento)

function exibirEngajamento(){
    var qtdInteracoes = interacoes.value.trim()
    var qtdViews = views.value.trim()   

    if(qtdInteracoes===""||isNaN(qtdInteracoes)||qtdViews===""||isNaN(qtdViews)){
        exibirErro('Preencha os campos corretamente!', 'erroEngajamento')
        return
    } else if(qtdViews==="0" || qtdViews ===""){
        exibirErro('Preencha os campos corretamente!', 'erroEngajamento')
        return
    }

    let taxaEngajamento = ((qtdInteracoes/qtdViews)*100)
    resultado.innerHTML = taxaEngajamento
    
}