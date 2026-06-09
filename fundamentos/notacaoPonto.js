function Objeto(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.apresentar = function() {
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.")
    }
}

const pessoa1 = new Objeto("Maria", 25)
const pessoa2 = new Objeto("João", 40)

pessoa1.apresentar()
pessoa2.apresentar()