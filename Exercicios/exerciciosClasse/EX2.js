/*
11. Classe Retângulo

Crie:

class Retangulo

com:

largura
altura

Métodos:

calcularArea()
calcularPerimetro()
*/

class retangulo {
    constructor(largura, altura ){
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(){
        return this.altura * this.largura
    }

    calcularPerimetro(){
        return (this.altura + this.largura) * 2
    }
}

const r1 = new retangulo(5,4)

console.log(r1.calcularArea())
console.log(r1.calcularPerimetro())