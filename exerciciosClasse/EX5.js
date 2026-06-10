/*
Desafio Avançado
14. Sistema de RPG

Crie:

class Personagem

com:

nome
vida
ataque

Métodos:

atacar()
receberDano()

Depois crie:

class Guerreiro
class Mago

herdando de Personagem.

Implemente uma batalha simples entre os dois.
*/

//funcao para ler input do usuario
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



//classes

class Personagem {
    constructor(nome, vida, ataque) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
    }
    atacar(personagem) {
        personagem.vida -= this.ataque
    }

    receberDano(dano) {
        this.vida -= dano
    }
}

class Guerreiro extends Personagem {
    constructor(nome, vida, ataque, armadura) {
        super(nome, vida, ataque)

        this.armadura = armadura
    }

    atacar(personagem) {
        personagem.vida -= this.ataque * 2
        console.log(`${this.nome} usou ataque poderoso e causou ${this.ataque} de dano extra!`)
    }

    receberDano(dano) {
        this.vida -= dano - this.armadura
        console.log(`${this.nome} recebeu ${dano - this.armadura} de dano!`)
    }

}

class Mago extends Personagem {
    constructor(nome, vida, ataque, magiaEspecial, magiaCura) {
        super(nome, vida, ataque)

        this.magiaEspecial = magiaEspecial
        this.magiaCura = magiaCura
    }

    atacar(personagem) {
        personagem.vida -= this.ataque + this.magiaEspecial
        console.log(`${this.nome} usou magia especial e causou ${this.magiaEspecial} de dano extra!`)
    }

    curar() {
        this.vida += this.magiaCura
        console.log(`${this.nome} usou magia de cura e recuperou ${this.magiaCura} de vida!`)
    }

}
const mago = new Mago('frieren', 200, 35, 15, 25)
const guerreiro = new Guerreiro('stark', 300, 60, 10)

// ==================== MENU ====================


function menuMago() {

    console.log('\n=== VEZ DO MAGO ===')
    console.log('1 - Atacar')
    console.log('2 - Curar')

    rl.question('Escolha: ', (input) => {

        if (input === '1') {
            mago.atacar(guerreiro)
        }
        else if (input === '2') {
            mago.curar()
        }

        verificarFim()

        if (guerreiro.vida > 0) {
            menuGuerreiro()
        }
    })
}

function menuGuerreiro() {

    console.log('\n=== VEZ DO GUERREIRO ===')
    console.log('1 - Atacar')

    rl.question('Escolha: ', (input) => {

        if (input === '1') {
            guerreiro.atacar(mago)
        }

        verificarFim()

        if (mago.vida > 0) {
            menuMago()
        }
    })
}

// ==================== FIM DE JOGO ====================

function verificarFim() {

    console.log(
        `\nVida de ${mago.nome}: ${mago.vida}`
    )

    console.log(
        `Vida de ${guerreiro.nome}: ${guerreiro.vida}`
    )

    if (mago.vida <= 0) {

        console.log(`\n${guerreiro.nome} venceu!`)

        rl.close()

        return true
    }

    if (guerreiro.vida <= 0) {

        console.log(`\n${mago.nome} venceu!`)

        rl.close()

        return true
    }

    return false
}

// ==================== INÍCIO ====================

console.log('=== BATALHA RPG ===')

menuMago()