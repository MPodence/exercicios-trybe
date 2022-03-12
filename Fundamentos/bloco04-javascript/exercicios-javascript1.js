//exercicio 1
const valorA = 222;
const valorB = 23;
let resultado = null;

resultado = valorA + valorB;
console.log(valorA, '+', valorB, '=', resultado);

resultado = valorA - valorB;
console.log(valorA, '-', valorB, '=', resultado);

resultado = valorA * valorB;
console.log(valorA, '*', valorB, '=', resultado);

resultado = valorA / valorB;
console.log(valorA, '/', valorB, '=', resultado);

resultado = valorA % valorB;
console.log(valorA, '%', valorB, '=', resultado, 'é o resto da divisão')

//exercicio 2
const compareA = 1;
const compareB = 1;

if (compareA > compareB) {
    console.log(compareA, 'é o maior número');
} else if (compareA == compareB) {
    console.log('os números são iguais');
} else {
    console.log(compareB, 'é o maior número');
}

//exercicio 3
const compA = 222;
const compB = 23;
const compC = 23;

if (compA > compB && compA > compC) {
    console.log(compA, 'é o maior dos 3 numeros');
} else if (compB > compC) {
    console.log(compB, 'é o maior dos 3 numeros');
} else if (compC > compB) {
    console.log(compC, 'é o maior dos 3 numeros');
} else {
    console.log('os 3 numeros sao iguais');
}

//exercicio 4
const posNeg = 0;

if (posNeg > 0) {
    console.log('positive');
} else if (posNeg < 0) {
    console.log('negative');
} else {
    console.log('o valor é 0');
}

//exercicio 5
const piramideA = 20;
const piramideB = 100;
const piramideC = 60;
let angulo = null;

if (piramideA < 0 || piramideB < 0 || piramideC < 0) {
    console.log('valor invalido');
} else if (piramideA + piramideB + piramideC == 180) {
    angulo = true;
    console.log(angulo);
} else {
    angulo = false;
    console.log(angulo);
}

//exercicio 6
let peçaMovimeneto = 'BISPO';
peçaMovimeneto = peçaMovimeneto.toLowerCase();

if (peçaMovimeneto == 'bispo') {
    peçaMovimeneto = 'bispo -> diagonal';
    console.log(peçaMovimeneto)
} else {
    //resto das peças aqui com else if, salvando um teco de tempo rs
    console.log('nao é uma peça de xadrez');
}

//exercicio 7
let nota = 100;

if (nota > 100 || nota < 0) {
    console.log('Valor invalido');
} else if (nota >= 90) {
    nota = 'A';
    console.log(nota);
} else if (nota >= 80) {
    nota = 'B';
    console.log(nota);
} else if (nota >= 70) {
    nota = 'C';
    console.log(nota);
} else if (nota >= 60) {
    nota = 'D';
    console.log(nota);
} else if (nota >= 50) {
    nota = 'E';
    console.log(nota);
} else if (nota < 50) {
    nota = 'F';
    console.log(nota);
} else {
    console.log('o valor nao é uma nota');
}

//exercicio 8
const verifiquePar1 = 222;
const verifiquePar2 = 23;
const verifiquePar3 = 3;

if (verifiquePar1 % 2 == 0 || verifiquePar2 % 2 == 0 || verifiquePar3 % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
}

//exercicio 9
const custo = 10;
const valorDeVenda = 20;
const imposto = 1.20;
let lucro = null;

if (custo < 0 || valorDeVenda < 0) {
    console.log('Valor invalido');
}

let custoTotal = custo * imposto;
let custoDeMil = custoTotal * 1000;
let vendasDeMil = valorDeVenda * 1000;
lucro = vendasDeMil - custoDeMil;
console.log(lucro);


//exercicio 10
let salarioBruto = 5200;
let salarioLiquido = null;

//calculo inss
if (salarioBruto >= 0) {
    if (salarioBruto <= 1556.94) {
        salarioBruto = salarioBruto * 0.92; //8% inss
    } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
        salarioBruto = salarioBruto * 0.91; //9% inss
    } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
        salarioBruto = salarioBruto * 0.89; //11% inss
    } else if (salarioBruto > 5189.82) {
        salarioBruto = salarioBruto - 570.88; //aliquita maxima
    }
} else {
    console.log('valor invalido');
}
//calculo imposto de renda
if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
    let ir = (salarioBruto * 0.075) - 142.80; //7.5% imposto de renda + valor a deduzir do imposto
    salarioLiquido = salarioBruto - ir;
} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    let ir = (salarioBruto * 0.15) - 354.80; //15% imposto de renda + valor a deduzir do imposto
    salarioLiquido = salarioBruto - ir;
} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    let ir = (salarioBruto * 0.225) - 636.13; //22,5% imposto de renda + valor a deduzir do imposto
    salarioLiquido = salarioBruto - ir;
} else if (salarioBruto > 4.664,68) {
    let ir = (salarioBruto * 0.275) - 869.36; //27,5% imposto de renda + valor a deduzir do imposto
    salarioLiquido = salarioBruto - ir;
}
console.log(salarioLiquido);

