/*
Exercício 12

Leia um arquivo JSON:

{
    "nome": "Lucas",
    "idade": 18
}

Converta para objeto e imprima os campos.
*/

const fs = require('fs')

const path = require('path')

const caminho = path.join(__dirname, 'arquivo.txt')

function lerArquivo() {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, conteudo,) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(conteudo.toString())
            }
        })
    })
}

async function executar() {
    const conteudo = await lerArquivo(caminho)
    const pessoa = JSON.parse(conteudo)

    console.log(pessoa.nome)
    console.log(pessoa.idade)
}

executar()

/*
ler arquivo
↓
string
↓
JSON.parse(...)
↓
objeto JavaScript
↓
usar os dados
*/