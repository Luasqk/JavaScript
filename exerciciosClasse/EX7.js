/*
Exercício 2 — JSON + Classes

Crie a classe:

class Produto

com:

nome
preco

Método:

calcularDesconto(percentual)

que retorna o preço com desconto.

Crie três produtos e coloque-os em um array.

Transforme o array em JSON usando:

JSON.stringify()

Mostre o JSON no console.

Depois:

Faça um JSON.parse()
Mostre o nome do segundo produto
Exemplo
Notebook
Mouse
Teclado

virando:

[
  {
    "nome":"Notebook",
    "preco":3500
  }
]
  */

function Produto(nome,preco){
    this.nome = nome
    this.preco = preco

    Produto.prototype.calcularDesconto = function(percentual){
        return this.preco - (percentual * this.preco)
    }
}

const prod1 = new Produto('teclado',180)
const prod2 = new Produto('mouse',120)
const prod3 = new Produto('carregador',50)

produtos = []

produtos.push(prod1)
produtos.push(prod2)
produtos.push(prod3)

json = JSON.stringify(produtos)

console.log(json)

js = JSON.parse(json)

console.log(js[1].nome)