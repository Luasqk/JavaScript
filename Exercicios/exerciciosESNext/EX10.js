/*
Parte 1 — Promises básicas
Exercício 1

Crie uma função que retorne uma Promise resolvendo uma mensagem após 2 segundos.

Uso esperado:

esperarMensagem()
    .then(console.log)

Saída:

Olá!
*/

function mensagem(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('ola')

        }, tempo)
    })

}

mensagem().then(console.log)  