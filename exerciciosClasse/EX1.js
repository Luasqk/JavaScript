/*
10. Classe Produto

Crie uma classe:

class Produto

com:

nome
preco

e método:

mostrarDados()

class Produto {
    nome = "agua";
    preco = 3.90;

    mostrarDados() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Nome: ${this.preco}`)
    }
}

const p1 = new Produto()

p1.mostrarDados()

*/

//COM CONSTRUCTOR

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    mostrarDados() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Preco: ${this.preco}`)

    }
}

const p1 = new Produto('agua', 5)
const p2 = new Produto('computador', 4500)

p1.mostrarDados()
console.log()
p2.mostrarDados()