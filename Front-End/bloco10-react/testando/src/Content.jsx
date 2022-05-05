import React from 'react';

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

class Content extends React.Component {
    render() {
        const kibe = conteudos.map((cont, index) => <li key={index}>
        O conteúdo é: {cont.conteudo}<br></br>
        Status: {cont.status} <br></br>
        Bloco: {cont.bloco}</li>)
        return <li>{kibe}</li>
    }
}

export default Content;