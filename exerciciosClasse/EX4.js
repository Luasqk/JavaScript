/*
Desafio (mistura tudo)
13. Sistema de Biblioteca

Crie:

class Livro

e

class Biblioteca

Funcionalidades:

adicionar livro
remover livro
listar livros
procurar livro por título

Exemplo:

biblioteca.adicionarLivro("Dom Casmurro")
biblioteca.adicionarLivro("1984")
*/


//classes 


class Livro {
    constructor(nome) {
        this.nome = nome
    }
}


class Biblioteca {
    constructor() {
        this.biblioteca = []

    }

    adicionarLivro(livro) {
        this.biblioteca.push(livro)
    }

    removerLivro(nome) {
        const indice = this.biblioteca.findIndex(
            livro => livro.nome === nome
        )
        if (indice !== -1) {
            this.biblioteca.splice(indice, 1)
        }
    }

    listarLivro() {
        for (const livro of this.biblioteca) {
            console.log(livro.nome)
        }
    }

    procurarLivroPorTitulo(nome) {

        const livro = this.biblioteca.find(
            livro => livro.nome === nome
        )

        if (livro) {
            console.log('Livro encontrado, titulo: ', nome)
        }
        else {
            console.log('Livro nao encontrado. ')
        }
    }
}

//iniciando classes
const livro1 = new Livro('1984')
const livro2 = new Livro('Noites Brancas')
const livro3 = new Livro('A metamorfose')
const livro4 = new Livro('Sertoes')
const livro5 = new Livro('O jogador')

const biblioteca = new Biblioteca()

biblioteca.adicionarLivro(livro1)
biblioteca.adicionarLivro(livro2)
biblioteca.adicionarLivro(livro3)
biblioteca.adicionarLivro(livro4)
biblioteca.adicionarLivro(livro5)

biblioteca.listarLivro()
console.log()

biblioteca.removerLivro('1984')
biblioteca.listarLivro()

console.log()
biblioteca.removerLivro('O alienista')

console.log()
biblioteca.procurarLivroPorTitulo('Sertoes')

console.log()
biblioteca.procurarLivroPorTitulo('Crime e castigo')