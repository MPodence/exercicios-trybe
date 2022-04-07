let pessoa = {};
let nome = 'firstName';

function novoObjeto (objeto, chave, valor) {
    objeto[chave] = valor     //formas de add keys + valor no obj. por variavel ou escolhendo um novo direto.
    objeto.lastName = 'zinho'
    return console.log(objeto);
} 

novoObjeto(pessoa, nome, 'jao');

///////////////////////////////////////////////////////////////////

function testNumber (valor1, valor2) {
    if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
        throw new Error('ERROR: Precisa ser numero amigao');
    }
}

function soma (valor1, valor2) {
    try {
        testNumber (valor1, valor2);
        let resultado = valor1 + valor2;
        return console.log(`Ta ai a soma de ${valor1} + ${valor2} amigao, o resultado é ${resultado}`);
    } catch (error) {
        throw error.message;
    }
}
 soma (5, 8);