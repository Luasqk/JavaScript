import http from 'http'

function getTurma(letra) {
    return new Promise((resolve, reject) => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        }).on('error', reject)
    })
}

Promise.all([
    getTurma('A'),
    getTurma('B'),
    getTurma('C')
])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(console.error)