const Pessoa = {
    nome: 'João',
    idade: 30,
    peso: 80
}

console.log(Object.keys(Pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(Pessoa)) // [ 'João', 30, 80 ]
console.log(Object.entries(Pessoa)) // [ [ 'nome', 'João' ], [ 'idade', 30 ], [ 'peso', 80 ] ]

Object.entries(Pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}\n`)
})
// nome: João
// idade: 30
// peso: 80
//
Object.defineProperty(Pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/1990'
})

console.log(Pessoa.dataNascimento) // 01/01/1990
Pessoa.dataNascimento = '01/01/2000' // não tem efeito  
console.log(Pessoa.dataNascimento) // 01/01/1990
