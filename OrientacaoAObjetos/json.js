const Pessoa = {
    nome: 'lucas',
    idade: 19
}

//converte um objeto em json

const json = JSON.stringify(Pessoa)

console.log(json)

//converte um json em objeto

const jS = JSON.parse(json)

console.log(jS)