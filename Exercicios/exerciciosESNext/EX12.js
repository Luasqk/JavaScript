/*
Exercício 3

Encadeie Promises:

dobrar(10)

↓

20

↓

40

↓

80

Resultado final:

80

Objetivo: entender que o retorno de um .then() vai para o próximo.
*/

function dobrar(numero, tempo = 100) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * 2)
        },tempo)
    })
}

dobrar(10)
.then(dobrar)
.then(dobrar)
.then(console.log)
