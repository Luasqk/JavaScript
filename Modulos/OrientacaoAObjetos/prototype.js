function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto()
const obj2 = new meuObjeto()

// O protótipo é um objeto que é compartilhado por todas as instâncias criadas a partir de uma função construtora.
// Ele é usado para armazenar propriedades e métodos que devem ser compartilhados por todas as instâncias.
meuObjeto.prototype.nome = 'garrafa'
meuObjeto.prototype.falar = function(){
    console.log(`oi, meu nome é ${this.nome}`)
}

obj1.falar()

const animal = {
    respirar(){
        console.log('respirando...')
    }
}

const cachorro = {
    latir(){
        console.log('au au!')
    }
}

Object.setPrototypeOf(cachorro, animal) // cachorro herda de animal
cachorro.latir() // au au!
cachorro.respirar() // respirando...

//sem class

function Veiculo(nome) {
    this.nome = nome
}

Veiculo.prototype.dirigir = function() {
    console.log(`${this.nome} está andando...`)
}

function Carro(nome) {
    Veiculo.call(this, nome) // chama o construtor de Veiculo para inicializar a propriedade nome
}

Carro.prototype = Object.create(Veiculo.prototype) // Carro herda de Veiculo

const meuCarro = new Carro('Fusca')
meuCarro.dirigir() // Fusca está andando...