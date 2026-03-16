const botao = document.createElement('button');
botao.textContent = 'Alternar Modo';
botao.style.position = 'fixed';
botao.style.right = '20px';
botao.style.padding = '10px';
botao.style.cursor = 'pointer';
botao.style.borderRadius = '10px'
botao.style.backgroundColor = 'white';

const estilos = ['styleq5.css', 'styleq6.css', 'q7style.css'];

botao.addEventListener('click', function() {
    const linkTag = document.getElementById('tema-link');    
    let hrefAtual = linkTag.getAttribute('href');
    let indiceAtual = estilos.indexOf(hrefAtual);
    let proximoIndice = (indiceAtual + 1) % estilos.length;
    linkTag.setAttribute('href', estilos[proximoIndice]);
    console.log('Estilo alterado para: ' + estilos[proximoIndice]);
});

document.body.appendChild(botao);