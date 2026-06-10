/*
10. Projeto Final (Mistura Tudo)

Crie um sistema de biblioteca.

Cada livro possui:

{
    titulo,
    autor,
    disponivel
}

Implemente:

cadastrar livro
listar livros
emprestar livro
devolver livro
buscar por título

Utilize:

funções
arrays
objetos
condicionais
loops
métodos de array (find, filter)

*/

const readline = require('readline')

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let biblioteca = []

function cadastrarLivro(titulo, autor) {
    let livro = {
        titulo: titulo,
        autor: autor,
        disponivel: true
    }
    biblioteca.push(livro)
    exibirMenu()
}

function listarLivros() {
    biblioteca.forEach(livro => {
        console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Disponível: ${livro.disponivel}`)
    })
    exibirMenu()
}

function emprestarLivro(titulo) {
    let livro = biblioteca.find(l => l.titulo === titulo)
    if (livro) {
        if (livro.disponivel) {
            livro.disponivel = false
            console.log(`Você pegou emprestado: ${livro.titulo}`)
        } else {
            console.log("Desculpe, este livro não está disponível no momento.")
        }
    } else {
        console.log("Livro não encontrado.")
    }
    exibirMenu()
}

function buscarLivro(titulo) {
    let livro = biblioteca.find(l => l.titulo === titulo)
    if (livro) {
        console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Disponível: ${livro.disponivel}`)
    } else {
        console.log("Livro não encontrado.")
    }
    exibirMenu()
}

function devolverLivro(titulo) {
    let livro = biblioteca.find(l => l.titulo === titulo)
    if (livro) {
        livro.disponivel = true
        console.log(`Você devolveu: ${livro.titulo}`)
    } else {
        console.log("Livro não encontrado.")
    }
    exibirMenu()
}

let livro1 = {
    titulo: '1984',
    autor: 'George Orwell',
    disponivel: true
}

let livro2 = {
    titulo: 'Noites Brancas',
    autor: 'Doistoievski',
    disponivel: true
}

biblioteca.push(livro1)
biblioteca.push(livro2)

function exibirMenu() {
    console.log("================================")
    console.log("Menu:")
    console.log("1. Listar livros")
    console.log("2. Cadastrar livro")
    console.log("3. Emprestar livro")
    console.log("4. Devolver livro")
    console.log("5. Buscar por título")
    console.log("6. Sair")
    console.log("================================")

    rl.question("Escolha uma opção: ", option => {
        switch(option) {
            case '1':
                listarLivros()
                break
            case '2':
                rl.question("Digite o título do livro: ", titulo => {
                    rl.question("Digite o autor do livro: ", autor => {
                        cadastrarLivro(titulo, autor)
                        console.log("Livro cadastrado com sucesso!")
                    })
                })
                break
            case '3':
                rl.question("Digite o título do livro que deseja emprestar: ", titulo => {
                    emprestarLivro(titulo)
                })
                break
            case '4':
                rl.question("Digite o título do livro que deseja devolver: ", titulo => {
                    devolverLivro(titulo)
                })
                break
            case '5':
                rl.question("Digite o título do livro que deseja buscar: ", titulo => {
                    buscarLivro(titulo)
                })

                break
            case '6':
                console.log("Saindo...")
                rl.close()
                break
            default:
                console.log("Opção inválida.")
                exibirMenu()
        }
    })
}
exibirMenu()