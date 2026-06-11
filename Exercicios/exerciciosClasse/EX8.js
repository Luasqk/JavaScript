/*
Exercício 3

Crie uma função construtora Veiculo:
- marca
- modelo
- método ligar()

Crie Carro e Moto herdando de Veiculo.

Carro:
- portas

Moto:
- cilindradas

Depois:
1. Crie alguns carros e motos.
2. Coloque-os em um array.
3. Converta o array para JSON.
4. Faça JSON.parse().
5. Mostre marca e modelo de cada veículo.

Desafio:
Não use class nem extends.
Use apenas funções construtoras e herança com:
- Object.create()
ou
- Object.setPrototypeOf()
*/

function Veiculo(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

Veiculo.prototype.ligar = function () {
    console.log('Este veiculo da marca', this.marca, 'foi ligado')
}


function Carro(marca, modelo, portas) {
    Veiculo.call(this, marca, modelo)
    this.portas = portas
}

function Moto(marca, modelo, cilindradas) {
    Veiculo.call(this, marca, modelo)
    this.cilindradas = cilindradas
}

Carro.prototype = Object.create(Veiculo.prototype)
Moto.prototype = Object.create(Veiculo.prototype)

const carro = new Carro('fiat', 'uno', 4)
carro.ligar()

const moto = new Moto('yamaha', 'nomeDeMoto', 8)
moto.ligar()

const veiculos = []

veiculos.push(moto)
veiculos.push(carro)

const json = JSON.stringify(veiculos)

console.log(json + '\n')

const js = JSON.parse(json)

for (const veiculo of js) {
    console.log(
        veiculo.marca,
        veiculo.modelo
    )
}