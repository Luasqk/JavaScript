/*
Exercício 10

Faça:

const idade = await buscarIdade()

Se a Promise falhar:

try {
   ...
} catch(e) {
   ...
}
   */

function buscarIdade() {
    return Promise.resolve(19)
}

//O try/catch precisa ficar dentro da função async, envolvendo o await.

async function executar() {
    try {
        const idade = await buscarIdade()
        console.log(idade)
    } catch (e) {
        console.log(e)
    }
}
executar()
