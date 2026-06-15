const primeiroElemtento = string => string[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()


let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Carlos', 'Bia', 'Daniel'])
})

//o parametro do then é o resultado da funcao anterior
p
.then(primeiroElemtento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)