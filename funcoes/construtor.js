//construtor

class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joao')
p1.falar()  

//funcao construtora
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${this.nome}`) 
    }
}