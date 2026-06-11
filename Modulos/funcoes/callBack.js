let fabricantes = ['bmw','mercedes','toyota']


function imprimeFabricante(nome, indice) {
    console.log(`${indice + 1}. ${nome} `)
}
//por padrao, o forEach sempre imprime (valor, indice, array) 
fabricantes.forEach(imprimeFabricante)

let notas = [3.5, 6.8, 9.7, 5.5, 8.9, 8.1]

//sem callback
notasBaixas0 = []
for(let i in notas) {
    if(notas[i] < 7)
        notasBaixas0.push(notas[i])
}
console.log(notasBaixas0)

//callback
notasBaixas1 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas1)

//calback + arrow function
notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)