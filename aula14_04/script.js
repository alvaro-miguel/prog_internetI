function getById(id) {
    return document.getElementById(id);
}

function getByName(name){
    return document.getElementsByTagName(name);
}

getById('botao1').addEventListener('click', () => {
    let p1 = getById('p1');
    let resultado1 = getById('resultado1');
    resultado1.innerText = p1.innerHTML + " - ADS 3";
});

let texto2 = getById('texto2');

texto2.addEventListener('keyup', () => {
    let texto = texto2.value;
    texto2.value = texto.toUpperCase();

});

getById('btn_mudarCor').addEventListener('click', ()=> {
    var texto_aleatorio = getById('texto_aleatorio');
    texto_aleatorio.style.color = "red";
});

getById('btn_tamanho').addEventListener('click', ()=> {
    tamanho_texto = document.getElementsByTagName("h2").length;
    var paragrafo_char = getById('qtd_c');
    var exibh2 = getById('exibh2');
    exibh2.innerText = tamanho_texto;
})

var div_paragrafos = getById('div_paragrafos');
var exibir_paragrafos = getById('exibir_paragrafos');
var exib_pg = getById('exib_pg');
var btn_exib = getById('btn_exib');

btn_exib.addEventListener('click', () => {
    let qtd_pg = document.querySelectorAll('#div_paragrafos p');
    exib_pg.innerHTML = qtd_pg.length;
});

btn_limpa_texto = getById('limpar_texto');
btn_limpa_texto.addEventListener('click', ()=> {
    texto_aleatorio.innerHTML = '';
})

var div_minuscula = getById('ctd_minusculo');
var div_maiuscula = getById('ctd_maiusculo');
var btn_tam = getById('alterar_tam');
var texto = div_minuscula.innerText;

btn_tam.addEventListener('click', ()=>{
    div_maiuscula.innerText = texto.toUpperCase();
})

var btn_escuro = getById('btn_escuro')
var btn_reset = getById('btn_reset')

btn_escuro.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
})

btn_reset.addEventListener('click', ()=> {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
})

var btn_aumenta = getById('btn_aumenta')
var btn_diminui = getById('btn_diminui')
let tam_txt = 10

btn_aumenta.addEventListener('click', ()=>{
    tam_txt++
    document.body.style.fontSize = tam_txt + 'px'
})

btn_diminui.addEventListener('click', ()=>{
    tam_txt--
    document.body.style.fontSize = tam_txt + 'px'
})

var btn_calcular = getById('btn_calcular')
var op1 = getById('num1')
var op2 = getById('num2')
var res_calc = getById('res_calc')

btn_calcular.addEventListener('click', () => {
    let n1 = parseFloat(op1.value);
    let n2 = parseFloat(op2.value);
    let resultado = 0;

    let radios = document.getElementsByName('operacao');
    let op_selecionada = '';

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            op_selecionada = radios[i].value; 
            break;
        }
    }

    if (isNaN(n1) || isNaN(n2)) {
        resultado = 'Insira valores válidos';
    } else {
        switch (op_selecionada) {
            case 'soma':
                resultado = n1 + n2;
                break;
            case 'sub':
                resultado = n1 - n2;
                break;
            case 'mult':
                resultado = n1 * n2;
                break;
            case 'div':
                resultado = n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero";
                break;
            default:
                resultado = "Selecione uma operação";
        }
    }

    res_calc.innerText = resultado;
});

const btn_adicionar = getById('btn_adicionar');
const input_item = getById('novo_item');
const lista_ul = getById('minha_lista');

btn_adicionar.addEventListener('click', () => {
    const texto = input_item.value.trim();

    if (texto !== "") {
        const novo_li = document.createElement('li');
        novo_li.innerText = texto;
        novo_li.style.cursor = "pointer";
        lista_ul.appendChild(novo_li);
        input_item.value = "";
        input_item.focus();
    } else {
        alert("Por favor, digite algo antes de adicionar!");
    }
});

// Selecionando os novos elementos
const btn_gerar = document.getElementById('btn_gerar_opcao');
const input_opcao = document.getElementById('input_opcao');
const select_elemento = document.getElementById('meu_select');

btn_gerar.addEventListener('click', () => {
    const valor_input = input_opcao.value.trim();

    if (valor_input !== "") {
        const nova_opcao = document.createElement('option');
        nova_opcao.innerText = valor_input;
        nova_opcao.value = valor_input.toLowerCase().replace(/\s+/g, '_');
        select_elemento.appendChild(nova_opcao);
        input_opcao.value = "";
        input_opcao.focus();
    } else {
        alert("Digite um nome para a opção!");
    }
});