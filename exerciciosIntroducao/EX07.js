/*
Exercício 7

Crie uma função que receba um número e retorne:

"Par"
"Ímpar"
*/

const { asyncWrapProviders } = require('async_hooks')
const readline = require('readline')

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function parImpar(a) {
    if(a%2 == 0) {
        return "par"
    }
    else{
        return "impar"
    }
}

rl.question("Digite um numero: ", answer => {

    let numero = parseInt(answer)

    console.log(parImpar(numero))
})

