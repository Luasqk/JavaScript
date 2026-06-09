/*
xercício 10

Percorra um array usando:

for
for...of
forEach

e compare os resultados.
*/

function imprimeArray(a) {
    for(i in a) { //deve ser usado para percorrer objetos, não arrays
    console.log(a[i])
}
}

let frutas = ['banana', 'tomate', 'maca', 'pera', 'abacaxi']

console.log('Percorrendo o array usando for')
for(let i = 0; i < frutas.length; i++) { //mais recomendado para percorrer arrays, pois é mais rápido
    console.log(frutas[i])
}

console.log('------------------')

console.log('Percorrendo o array usando for...of')

for(let fruta of frutas) { //le de forma mais simples, mas é mais lento que o for tradicional
    console.log(fruta)
}

console.log('------------------')

console.log('Percorrendo o array usando forEach')

frutas.forEach(function(fruta) { //mais recomendado para percorrer arrays, pois é mais simples e legível, mas é mais lento que o for tradicional
    console.log(fruta)
})