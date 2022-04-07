//ex1

const newEmployees = (addEmployee) => {
    const employees = {
        id1: addEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: addEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: addEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const addEmployee = (nomeEmployee) => {
    return {
        nomeCompleto: nomeEmployee,
        email: `${nomeEmployee.toLowerCase().replace(' ', '_')}@trybe.com`
    }
}

console.log(newEmployees(addEmployee));

//ex2
const verificaSorteio = (resultado, valorApostado) => {
    if (resultado == valorApostado) {
        return `Apostado: ${valorApostado} Resultado: ${resultado} Ou seja, rabudo.`;
    } else {
        return `Apostado: ${valorApostado} Resultado: ${resultado} Hoje nao meu guerreiro`;
    }
}

const sorteio = (verificacao, aposta) => {
    resultadoSorteio = Math.floor(Math.random() * 5) + 1;
    return verificacao(resultadoSorteio, aposta);
}

console.log(sorteio(verificaSorteio, 4));