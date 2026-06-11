/*
33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console
*/

vetorInteiro = [1, 2, 3, 4]
vetorString = ['batata', 'arroz', 'feijao', 'bife']
vetorDouble = [3.5, 9.6, 6.3, 0.4]

const resultado = vetorInteiro.concat(vetorString, vetorDouble)

resultado.forEach(elemento => console.log(elemento))