/*
Exercício 22

Converta o JSON novamente para objeto.

Use:

JSON.stringify()
JSON.parse()
*/

const pessoa = {
    nome : 'lucas',
    idade: 19
}

const pessoaJSON = JSON.stringify(pessoa)

const pessoaOBJ = JSON.parse(pessoaJSON)

console.log(pessoaJSON)

console.log("=====================")

console.log(pessoaOBJ)