/*
Parte 2 — Rejeição e tratamento de erro
Exercício 4

Crie:

dividir(a, b)

Se b == 0, rejeite a Promise.

Uso:

dividir(10, 0)
    .catch(console.log)

Saída:

Divisão por zero
*/

function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject('Divisão por zero')
            return
        }

        resolve(dividendo / divisor)

    })
}

dividir(10, 2)
    .then(console.log)
    .catch(console.log)