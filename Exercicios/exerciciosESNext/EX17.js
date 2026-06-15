/*
Exercício 7

Faça três Promises com tempos diferentes:

1 segundo
3 segundos
2 segundos

Use Promise.all.

Pergunta:

Quanto tempo demora para terminar?

Objetivo: entender execução paralela.
*/

function Segundo1(tempo = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('1 segundo')
        }, tempo)

    })

}


function Segundo2(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('2 segundos')
        }, tempo)

    })

}



function Segundo3(tempo = 3000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3 segundos')
        }, tempo)

    })

}

//o programa demora 3 segundos para terminar
//o promise all considera o maior tempo da promise  

Promise.all([
    Segundo1(),
    Segundo3(),
    Segundo2()
])
.then(resultado => {
    console.log(resultado)
})