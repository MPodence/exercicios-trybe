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
    console.log (compareB, 'é o maior número');
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

if (piramideA < 0|| piramideB < 0 || piramideC < 0) {
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
    console.log('nao é uma peça de xadrez')
}

