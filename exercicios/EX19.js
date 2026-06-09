/*
Exercício 19

Use reduce() para somar:

[10,20,30,40]
*/

let numeros = [10, 20, 30, 40]
let soma = numeros.reduce((acumulador, numero) => acumulador + numero)

console.log(soma)