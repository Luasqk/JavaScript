/*
Parte 3 — Promise.all
Exercício 6

Crie três funções:

buscarNome()
buscarIdade()
buscarCidade()

Todas retornam Promise.

Use:

Promise.all(...)

para obter tudo junto.

Resultado:

{
    nome: "Lucas",
    idade: 18,
    cidade: "Maringá"
}
    */

function buscarNome() {
    return Promise.resolve('Lucas')
}

function buscarIdade() {
    return Promise.resolve(18)
}

function buscarCidade() {
    return Promise.resolve('Maringa')
}

Promise.all([
    buscarNome(),
    buscarIdade(),
    buscarCidade()  
])
    .then(([nome, idade, cidade]) => {
        console.log({
            nome,
            idade,
            cidade
        })
    })