
function getById(id: string): HTMLElement | null {
    return document.getElementById(id);
}

function getByName(name: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(name);
}

const botao1 = getById('botao1') as HTMLButtonElement;
botao1?.addEventListener('click', () => {
    const p1 = getById('p1') as HTMLParagraphElement;
    const resultado1 = getById('resultado1') as HTMLDivElement;
    if (p1 && resultado1) {
        resultado1.innerText = p1.innerHTML + " - ADS 3";
    }
});

const texto2 = getById('texto2') as HTMLInputElement;
texto2?.addEventListener('keyup', () => {
    const texto: string = texto2.value;
    texto2.value = texto.toUpperCase();
});

getById('btn_mudarCor')?.addEventListener('click', () => {
    const texto_aleatorio = getById('texto_aleatorio') as HTMLParagraphElement;
    if (texto_aleatorio) {
        texto_aleatorio.style.color = "red";
    }
});

getById('btn_tamanho')?.addEventListener('click', () => {
    const tamanho_texto: number = document.getElementsByTagName("h2").length;
    const exibh2 = getById('exibh2') as HTMLParagraphElement;
    if (exibh2) {
        exibh2.innerText = tamanho_texto.toString();
    }
});

const btn_exib = getById('btn_exib') as HTMLButtonElement;
btn_exib?.addEventListener('click', () => {
    const qtd_pg: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('#div_paragrafos p');
    const exib_pg = getById('exib_pg') as HTMLParagraphElement;
    if (exib_pg) {
        exib_pg.innerHTML = qtd_pg.length.toString();
    }
});

const btn_limpa_texto = getById('limpar_texto') as HTMLButtonElement;
btn_limpa_texto?.addEventListener('click', () => {
    const texto_aleatorio = getById('texto_aleatorio') as HTMLParagraphElement;
    if (texto_aleatorio) {
        texto_aleatorio.innerHTML = '';
    }
});

const btn_tam = getById('alterar_tam') as HTMLButtonElement;
btn_tam?.addEventListener('click', () => {
    const div_minuscula = getById('ctd_minusculo') as HTMLDivElement;
    const div_maiuscula = getById('ctd_maiusculo') as HTMLDivElement;
    if (div_minuscula && div_maiuscula) {
        const texto: string = div_minuscula.innerText;
        div_maiuscula.innerText = texto.toUpperCase();
    }
});

getById('btn_escuro')?.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});

getById('btn_reset')?.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});

let tam_txt: number = 10;
getById('btn_aumenta')?.addEventListener('click', () => {
    tam_txt++;
    document.body.style.fontSize = `${tam_txt}px`;
});

getById('btn_diminui')?.addEventListener('click', () => {
    tam_txt--;
    document.body.style.fontSize = `${tam_txt}px`;
});

const btn_calcular = getById('btn_calcular') as HTMLButtonElement;
const op1 = getById('num1') as HTMLInputElement;
const op2 = getById('num2') as HTMLInputElement;
const res_calc = getById('res_calc') as HTMLSpanElement;

btn_calcular?.addEventListener('click', () => {
    const n1: number = parseFloat(op1.value);
    const n2: number = parseFloat(op2.value);
    let resultado: number | string = 0;

    const radios: NodeListOf<HTMLInputElement> = document.getElementsByName('operacao') as NodeListOf<HTMLInputElement>;
    let op_selecionada: string = '';

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
            case 'soma': resultado = n1 + n2; break;
            case 'sub': resultado = n1 - n2; break;
            case 'mult': resultado = n1 * n2; break;
            case 'div': resultado = n2 !== 0 ? n1 / n2 : "Erro: Divisão por zero"; break;
            default: resultado = "Selecione uma operação";
        }
    }
    res_calc.innerText = resultado.toString();
});

const btn_adicionar = getById('btn_adicionar') as HTMLButtonElement;
const input_item = getById('novo_item') as HTMLInputElement;
const lista_ul = getById('minha_lista') as HTMLUListElement;

btn_adicionar?.addEventListener('click', () => {
    const texto: string = input_item.value.trim();

    if (texto !== "") {
        const novo_li: HTMLLIElement = document.createElement('li');
        novo_li.innerText = texto;
        novo_li.style.cursor = "pointer";
        lista_ul.appendChild(novo_li);
        input_item.value = "";
        input_item.focus();
    } else {
        alert("Por favor, digite algo antes de adicionar!");
    }
});

const btn_gerar = document.getElementById('btn_gerar_opcao') as HTMLButtonElement;
const input_opcao = document.getElementById('input_opcao') as HTMLInputElement;
const select_elemento = document.getElementById('meu_select') as HTMLSelectElement;

btn_gerar?.addEventListener('click', () => {
    const valor_input: string = input_opcao.value.trim();

    if (valor_input !== "") {
        const nova_opcao: HTMLOptionElement = document.createElement('option');
        nova_opcao.innerText = valor_input;
        nova_opcao.value = valor_input.toLowerCase().replace(/\s+/g, '_');
        select_elemento.appendChild(nova_opcao);
        input_opcao.value = "";
        input_opcao.focus();
    } else {
        alert("Digite um nome para a opção!");
    }
});
