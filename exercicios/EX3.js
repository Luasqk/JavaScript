/*2. Operadores e Condicionais
Exercício 3

Peça uma nota.

Se:

= 7 → Aprovado

= 5 → Recuperação

< 5 → Reprovado

Use if, else if e else */

const readline = require('readline')

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite a nota: ", resposta => {

let nota = parseFloat(resposta);
if (nota >= 7) {
    console.log("Aprovado")
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}   
rl.close();

});