/*
Exercício 1 — Sistema de Alunos

Você possui o seguinte array:

const alunos = [
    { nome: "Lucas", notas: [8, 7, 9] },
    { nome: "Ana", notas: [10, 9, 8] },
    { nome: "Pedro", notas: [5, 6, 4] },
    { nome: "Maria", notas: [7, 8, 7] }
]
Faça:
Use map() para criar um novo array contendo:
[
    { nome: "Lucas", media: 8 },
    ...
]
Use filter() para obter apenas alunos com média maior ou igual a 7.
Use reduce() para calcular a média geral da turma.
Use forEach() para imprimir:
Lucas - Aprovado
Ana - Aprovado
Pedro - Reprovado
Maria - Aprovado
*/

const alunos = [
    { nome: "Lucas", notas: [8, 7, 9] },
    { nome: "Ana", notas: [10, 9, 8] },
    { nome: "Pedro", notas: [5, 6, 4] },
    { nome: "Maria", notas: [7, 8, 7] }
]

//map é utilizado para criar uma nova lista de mesmo tamanho mas com alguma variacao entre os dados
//em manipulacao de listas, as funcoes arrow sao muito utilizadas

const AlunosComMedia = alunos.map(aluno => {

    //reduce:  reduz toda a funcao em um unico valor, no caso seria as notas em um valor total
    const soma = aluno.notas.reduce((total, nota) => total + nota, 0)

    //divite a soma total pela quantidade de notas
    const media = soma/aluno.notas.length;

    return{
        nome: aluno.nome,
        media: Number(media.toFixed(1))
        //toFixed arredonda para cima caso de numeros em casas decimais
    }
})

const aprovados = AlunosComMedia.filter(aluno => aluno.media >= 7)

const somaGeral = AlunosComMedia.reduce((geral, aluno) => geral + aluno.media, 0)
const mediaGeral = somaGeral / AlunosComMedia.length


console.log("\n--- Todos os Alunos ---")
console.log(alunos)

console.log('\n--- Alunos com media ---')
console.log(AlunosComMedia)

console.log('\n--- Aprovados ---')
console.log(aprovados)

console.log('\n--- Media geral ---')
console.log(mediaGeral)

console.log('\n--- Status dos alunos ---')

AlunosComMedia.forEach(aluno => {
    let status;
    if(aluno.media >= 7){
        status = 'Aprovado'
    }
    else{
        status = 'Reprovado'
    }
    
    console.log(`${aluno.nome} - ${status}`)
});

//todas essas funcoes nao alteram a original, mas sim criam uma nova