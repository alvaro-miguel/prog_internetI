const botao = document.createElement('button');
botao.textContent = 'Alternar Modo';
// Estilização flutuante
botao.style.position = 'fixed';
botao.style.top = '20px'; // Posicionado no topo para não sumir
botao.style.right = '20px';
botao.style.zIndex = '1000';
botao.style.padding = '10px 15px';
botao.style.cursor = 'pointer';
botao.style.borderRadius = '8px';
botao.style.border = 'none';
botao.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';

const estilos = ['styleq5.css', 'styleq6.css', 'q7style.css'];

botao.addEventListener('click', function() {
    const linkTag = document.getElementById('tema-link');    
    let hrefAtual = linkTag.getAttribute('href');
    let indiceAtual = estilos.indexOf(hrefAtual);
    let proximoIndice = (indiceAtual + 1) % estilos.length;
    
    linkTag.setAttribute('href', estilos[proximoIndice]);
});

document.body.appendChild(botao);