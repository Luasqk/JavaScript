/*
Parte 4 — Async/Await
Exercício 8

Transforme:

dobrar(10)
    .then(...)

em:

async function executar() {
    const valor = await dobrar(10)
}
    */

function dobrar(numero) {
    return Promise.resolve(numero * 2)
}

async function executar() {
    const valor = await dobrar(10)
    console.log(valor)
}

executar()

/*
Exercício 9

Faça:

const a = await dobrar(10)
const b = await dobrar(a)
const c = await dobrar(b)

Resultado:

80
*/

async function executar() {
    const a = await dobrar(10)
    const b = await dobrar(a)
    const c = await dobrar(b)

    console.log(c)
}


executar()