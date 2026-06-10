/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console
*/

vetorNumeros = [-3, 5, 7, -9, 6, -2]

const encontraElemNeg = function (vetorNumeros) {
    let negativos = 0

    for (const numero of vetorNumeros) {
        if (numero < 0) {
            negativos++
            console.log(numero)
        }
    }
    return negativos
}
console.log(encontraElemNeg(vetorNumeros))