
// ==========================================
// BLOCO 1 - FUNDAMENTOS E VARIAVEIS
// ==========================================

console.log("=== BLOCO 1: FUNDAMENTOS E VARIAVEIS ===");

// 1. Variavel let
let pontos = 20;
pontos = pontos + 10;

console.log("Pontos:", pontos);

// 2. Constante e tentativa de reatribuicao
const MAX_PONTOS = 100;

console.log("Maximo de pontos:", MAX_PONTOS);

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro esperado:", erro.name);
    console.log("Uma constante nao pode ser reatribuida.");
}

// 3. Tipos primitivos
const texto = "JavaScript";
const numero = 25;
const ativo = true;
let indefinido;
const nulo = null;

console.log("Texto:", typeof texto);
console.log("Numero:", typeof numero);
console.log("Boolean:", typeof ativo);
console.log("Undefined:", typeof indefinido);
console.log("Null:", typeof nulo); // object: comportamento historico

// 4. Template Literals e concatenacao
const nome = "Maick";
const curso = "JavaScript";

console.log(`Ola, ${nome}! Voce estuda ${curso}.`);

console.log("Ola, " + nome + "! Voce estuda " + curso + ".");


// ==========================================
// BLOCO 2 - FUNCOES
// ==========================================

console.log("\n=== BLOCO 2: FUNCOES ===");

// 1. Funcao declarada e hoisting
console.log("Idade 20:", ehMaiorDeIdade(20));
console.log("Idade 16:", ehMaiorDeIdade(16));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// 2. Funcao de expressao
try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro esperado:", erro.name);
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log("Funcao de expressao:", ehMaiorDeIdadeExpressao(20));

// 3. Dobro em tres formas

function dobroDeclarada(n) {
    return n * 2;
}

console.log("Dobro declarado:", dobroDeclarada(5));

const dobroExpressao = function (n) {
    return n * 2;
};

console.log("Dobro expressao:", dobroExpressao(5));

const dobroArrow = n => n * 2;

console.log("Dobro arrow:", dobroArrow(5));

// 4. Parametro com valor padrao
function dobroPadrao(n = 1) {
    return n * 2;
}

console.log("Dobro com argumento:", dobroPadrao(4));
console.log("Dobro sem argumento:", dobroPadrao());


// ==========================================
// BLOCO 3 - CONTROLE DE FLUXO
// ==========================================

console.log("\n=== BLOCO 3: CONTROLE DE FLUXO ===");

// 1. Classificar nota
function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 4:", classificarNota(4));

// 2. Semaforo
const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atencao");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor invalida");
}

// 3. Tabuada do 5
console.log("\nTabuada do 5:");

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

// 4. Contagem regressiva
console.log("\nContagem regressiva:");

let contagem = 5;

while (contagem >= 1) {
    console.log(contagem);
    contagem--;
}

// 5. Pares e impares com for
console.log("\nPares e impares com for:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " e par");
    } else {
        console.log(i + " e impar");
    }
}

// 6. Pares e impares com while
console.log("\nPares e impares com while:");

let numeroAtual = 1;

while (numeroAtual <= 20) {
    if (numeroAtual % 2 === 0) {
        console.log(numeroAtual + " e par");
    } else {
        console.log(numeroAtual + " e impar");
    }

    numeroAtual++;
}

// 7. Dia da semana
function diaDaSemana(numero) {
    switch (numero) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terca-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sabado";
        default: return "Numero invalido";
    }
}

console.log("\nDias da semana:");
console.log(diaDaSemana(1));
console.log(diaDaSemana(4));
console.log(diaDaSemana(7));
console.log(diaDaSemana(9));

console.log("\n=== FIM DA ATIVIDADE ===");

