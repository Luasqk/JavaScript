/*

function gerarNumeroEntre(min, max, proibidos = []) {
    if (min > max) [min, max] = [max, min]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if (proibidos.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []

        for (const _ of Array(qtdNumeros).fill()) {
            numeros.push(
                await gerarNumeroEntre(1, 60, numeros)
            )
        }

        return numeros.sort((a, b) => a - b)

    } catch (e) {
        if (tentativas > 100) {
            throw 'Não foi possível gerar os números'
        }

        return gerarMegaSena(qtdNumeros, tentativas + 1)
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)

confuso demais ta maluco, versao polida:
*/

function gerarMegaSena(qndNumeros){
    const numeros = new Set()

    while(numeros.size < qndNumeros){
        numeros.add(Math.floor(Math.random() * 60) + 1)
    }

    return [...numeros].sort((a,b) => a - b)
}

console.log(gerarMegaSena(6))