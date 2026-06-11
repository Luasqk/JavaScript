/*
Exercício 1 — Herança e Prototype

Crie uma classe Funcionario com:

nome
salario

Método:

apresentar()

que imprime:

Olá, meu nome é Lucas e ganho R$5000

Depois crie uma classe Desenvolvedor que herda de Funcionario e adiciona:

linguagem

Sobrescreva apresentar() para mostrar também a linguagem:

Olá, meu nome é Lucas, ganho R$5000 e programo em JavaScript
Exemplo esperado
const dev = new Desenvolvedor(
    "Lucas",
    5000,
    "JavaScript"
)

dev.apresentar()
*/

class Funcionario {
    constructor(nome, salario) {
        this.nome = nome,
            this.salario = salario
    }
    apresentar() {
        console.log('Ola, meu nome é', this.nome, 'e ganho R$', this.salario)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario, linguagem) {
        super(nome, salario)
        this.linguagem = linguagem
    }
    apresentar() {
        super.apresentar()
        console.log('e programo em', this.linguagem)
    }
}

const dev = new Desenvolvedor(
    "Lucas",
    5000,
    "JavaScript"
)

dev.apresentar()