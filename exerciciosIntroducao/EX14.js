/*
6. Desestruturação
Exercício 14

Dado:

const pessoa = {
    nome: "Lucas",
    idade: 18
}

Extraia:

const { nome, idade } = pessoa
*/
const pessoa = {
    nome: "Lucas",
    idade: 18
}

const { nome, idade } = pessoa

console.log("Nome: ", nome)
console.log("Idade: ", idade)

