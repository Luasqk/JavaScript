const fs = require('fs')
const path = require('path')

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

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `o resultado final é: ${conteudo}`)
    .then(console.log)