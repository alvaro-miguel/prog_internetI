
function getId(id){
    return document.getElementById(id)
}

const btnCarregar = getId('btnCarregar')
const inputUpload = getId('uploadImagem')
const divResultado = getId('resultado')

btnCarregar.addEventListener('click', carregarImagem)

function carregarImagem(){
    var arquivoSelecionado = inputUpload.files[0]

    if(arquivoSelecionado){
        var img = document.createElement('img')
        img.src = URL.createObjectURL(arquivoSelecionado)
        divResultado.innerHTML=""
        divResultado.appendChild(img)
    } else {
        alert("Selecione uma imagem")
    }
}