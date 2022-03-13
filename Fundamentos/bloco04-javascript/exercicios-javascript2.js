let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = null

//exercicio 1, 2, 3 e 4

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    resultado += numbers[index];

}
console.log(resultado);

//exercicio3 media aritimetica
resultado = resultado / numbers.length;
console.log(resultado);

//exercicio4
if (resultado > 20) {
    console.log('resultado maior que 20');
} else {
    console.log('resultado menor que 20');
}

// exercicio 5, 6, 7

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers2[0];
let menorNumero = numbers2[0];
let quantidadeImpar = null;

for (let index = 0; index < numbers2.length; index += 1) {
    if (numbers2[index] > maiorNumero) {
        maiorNumero = numbers2[index];
    }
    if (numbers2[index] < menorNumero) {
        menorNumero = numbers2[index];
    }
    if (numbers2[index] % 2 != 0) {
        quantidadeImpar += 1;
    }
}
console.log(maiorNumero);
console.log(menorNumero);
console.log(quantidadeImpar);

//exercicio8
let arrayUmAVinte = [];

for (index = 0; index < 25; index += 1) {
    arrayUmAVinte.push (Math.floor(Math.random() * 61));
}

console.log(arrayUmAVinte);