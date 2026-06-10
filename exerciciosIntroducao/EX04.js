/*Exercício 4

Receba uma idade.

Verifique:

Menor de idade
Adulto
Idoso */

const readline = require('readline')

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite a idade: ", resposta => {

let idade = parseInt(resposta);     
if (idade < 18) {
    console.log("Menor de idade");
} else if (idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

rl.close();
});