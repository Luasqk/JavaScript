/*
Exercício 17

Use filter() para obter apenas os números pares.
*/

let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

let numerosPares = numeros.filter(function(numero) {
    return numero % 2 == 0
})


console.log(numerosPares)