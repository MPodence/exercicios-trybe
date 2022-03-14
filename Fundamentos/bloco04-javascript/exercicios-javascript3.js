//ex 1

let fatorial = 1;
let numero = 10;

for (let index = 1; index <= numero; index += 1) {
    fatorial = fatorial * index;
    console.log(fatorial) //printando cada passo do fatorial
}

//ex 2

let word = 'pogchamp';
let reverseWord = [];

//lenght - 1, pois como o index será do tamanho do array, ele pegará uma casa a mais, ja que o array começa a contar do 0
//exemplo: "trybe" tem 5 casas(0 ao 4) o ultimo index será 5(lenght) e puxará undefined
for (index = word.length - 1; index >= 0; index -= 1) {
    reverseWord.push(word[index]);
}
console.log(reverseWord);


//ex 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";
let menorPalavra = array[0]; //para menor palavra a string nao pode começar vazia, pois nada é menor que o vazio xd, entao começar da primeira posiçao

for (index = 0; index < array.length; index += 1) {
    if (maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index];
    } else if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(maiorPalavra);
console.log(menorPalavra);

//ex 4
let primo = Boolean;
let maiorNumeroPrimo = null;

for (index = 0; index <= 50; index += 1) {
    primo = true; //assume true, se caso o resto da divisao por 2 até o proprio numero for 0, retorna falso e substitui o boolean
    for (i = 2; i < index; i += 1) {
        if (index % i == 0) {
            primo = false
        }
    }
    if (primo) {
        maiorNumeroPrimo = index; //nao necessaria comparaçao para saber o maior, por ja estar percorrendo os numeros em ordem crescente
    }
}

console.log(maiorNumeroPrimo);