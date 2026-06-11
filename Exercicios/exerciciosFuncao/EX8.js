/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

vetorInteiros = [2, 5, 743, 6346, 75473, 73, 5234]

const defineMaiorMenorElemVet = function (vetorInteiros) {
    maior = vetorInteiros[0]
    menor = vetorInteiros[0]

    for (i in vetorInteiros) {
        if (vetorInteiros[i] > maior) {
            maior = vetorInteiros[i]
        }
        if (vetorInteiros[i] < menor) {
            menor = vetorInteiros[i]
        }
    }
    console.log('Maior elemento: ',maior)
    console.log('Menor elemento: ',menor)
}

defineMaiorMenorElemVet(vetorInteiros)