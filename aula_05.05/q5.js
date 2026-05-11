function getId(id){
    return document.getElementById(id)
}

const selectImages = getId('selecaoImagens')
const imgExibicao = getId('exibicao')

selectImages.addEventListener('change', selecaoImagens)

function selecaoImagens(){
    const enderecoImagem = selectImages.value

    if(enderecoImagem!==""){
        imgExibicao.src = enderecoImagem
        imgExibicao.style.display = "block"
    } else {
        imgExibicao.style.display = "none"
    }
}