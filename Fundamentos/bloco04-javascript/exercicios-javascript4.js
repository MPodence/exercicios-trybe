//ex 1, 2

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};
console.log("Bem-vindo(a), " + info.personagem);

for (let key in info) {
    console.log(key);
}

for (let key in info) {
    console.log(info[key])
}

//ex funçoes

let palindromo = ""

function ehPalindromo(palindromo) {
    let palInverso = palindromo.split('').reverse().join(''); //separa a string letra por letra, reverte a ordem e realoca
    console.log(palInverso);
    if (palInverso == palindromo) {
        return true;
    } else {
        return false;
    }
}
console.log(ehPalindromo('ayaya'));

//ex 2
function maiorIndice(arrayTest) {
    let maiorNumero = 0;
    for (index = 0; index < arrayTest.length; index += 1) {
        if (arrayTest[maiorNumero] < arrayTest[index]) {
            maiorNumero = index
        }
    }
    return maiorNumero
}
console.log(maiorIndice([22, 3, 6, 7, 10, 1]))

//ex 3

function menorIndice(array2) {
    let menorNumero = 0;
    for (index in array2) {
        if (array2[menorNumero] > array2[index]) {
            menorNumero = index;
        }
    }
    return menorNumero;
}

console.log(menorIndice([22, 3, 6, 7, 10, 1]));

//ex 4

let arrayWords = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maisCaract(arrayWords) {
    let maiorWord = ""
    for (index in arrayWords) {
        if (maiorWord.length < arrayWords[index].length)
        maiorWord = arrayWords[index];
    }
    return maiorWord
}

console.log(maisCaract(arrayWords));