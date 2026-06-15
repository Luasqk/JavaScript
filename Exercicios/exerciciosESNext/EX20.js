/*
Parte 5 — Exercícios mais realistas
Exercício 11

Crie uma função:

lerArquivo(caminho)

que retorna Promise.

Depois:

await lerArquivo(...)

e conte quantas linhas existem.
*/

const fs = require('fs')

const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, conteudo) => {

            if (err) {
                reject(err)
            } else {
                resolve(conteudo.toString())
            }
        })
    })
}

async function executar() {
    const conteudo = await lerArquivo(caminho)
    const linhas = conteudo.split('\n')

    console.log(linhas.length)
}

executar()