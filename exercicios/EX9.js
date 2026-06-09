/*
Exercício 9

Adicione e remova elementos usando:

push()
pop()
shift()
unshift()
*/

function imprimeArray(a) {
    for(i in a) {
    console.log(a[i])
}
}

let frutas = ['banana', 'tomate', 'maca', 'pera', 'abacaxi']

console.log('Array original')
imprimeArray(frutas)
console.log('------------------')

console.log('Removendo o ultimo elemento do array')
frutas.pop()
imprimeArray(frutas)

console.log('------------------')

console.log('Adicionando um elemento no final do array')
frutas.push('morango')
imprimeArray(frutas)

console.log('------------------')

console.log('Removendo o primeiro elemento do array')
frutas.shift()
imprimeArray(frutas)

console.log('------------------')

console.log('Adicionando um elemento no inicio do array')
frutas.unshift('uva')
imprimeArray(frutas)
