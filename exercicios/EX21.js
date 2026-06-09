/*
9. JSON
Exercício 21

Converta:

const pessoa = {
    nome: "Lucas",
    idade: 18
}

para JSON.
*/

const pessoa = {
    nome: 'lucas',
    idade: 18
}

const pessoaJSON = JSON.stringify(pessoa)

console.log(pessoaJSON)