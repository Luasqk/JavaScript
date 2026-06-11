const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const Todosbolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(p => p.bolsista).reduce(Todosbolsistas))

// Desafio 2: Algum aluno é bolsista?
const Algumbolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(p => p.bolsista).reduce(Algumbolsista))


//existem formas imperativas e declarativas de fazer um codigo
//seria boa pratica fazer constantes que carregam valores que podem ser reutilizados ao
//inves de ficar criando loops com o for por exemplo    