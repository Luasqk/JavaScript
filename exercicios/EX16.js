/*
7. Métodos de Array (ESSENCIAL)

Essa é uma das maiores diferenças para Java.

Exercício 16

Use map() para gerar um novo array contendo o dobro dos números.

[1,2,3]
*/

let numeros = [1, 2, 3]

let numeros_dobrados = numeros.map(function(numero) {
    return numero * 2
})

console.log("Números dobrados: ", numeros_dobrados)