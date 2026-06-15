const { executionAsyncResource } = require("node:async_hooks")

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 1000)
    })
}

//Sem await, a função não esperaria as Promises terminarem antes de continuar para a próxima linha.

async function executar() {

    let valor = await retornaValor()
    
    await esperarPor()
    console.log(`executando... ${valor}`)

    await esperarPor()
    console.log(`executando... ${valor + 1}`)

    await esperarPor()
    console.log(`executando... ${valor + 2}`)

    return 'fim'
}

//await e async seria outra forma de escrever promises, ate melhor dependendo do contexto

executar().then(console.log)