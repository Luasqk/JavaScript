/*
Exercício 2 — Loja Virtual

Você possui:

const pedidos = [
    {
        cliente: "Lucas",
        produtos: [
            { nome: "Mouse", preco: 100 },
            { nome: "Teclado", preco: 200 }
        ]
    },
    {
        cliente: "Ana",
        produtos: [
            { nome: "Monitor", preco: 1200 }
        ]
    },
    {
        cliente: "Pedro",
        produtos: [
            { nome: "Mouse", preco: 100 },
            { nome: "Headset", preco: 300 }
        ]
    }
]
Faça:
Use flatMap() para obter um array contendo todos os produtos.
Use map() para gerar:
[
    "Mouse",
    "Teclado",
    "Monitor",
    ...
]
Use reduce() para calcular o faturamento total. 
Use filter() para encontrar produtos acima de R$250.
*/

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const pedidos = [
    {
        cliente: "Lucas",
        produtos: [
            { nome: "Mouse", preco: 100 },
            { nome: "Teclado", preco: 200 }
        ]
    },
    {
        cliente: "Ana",
        produtos: [
            { nome: "Monitor", preco: 1200 }
        ]
    },
    {
        cliente: "Pedro",
        produtos: [
            { nome: "Mouse", preco: 100 },
            { nome: "Headset", preco: 300 }
        ]
    }
]
//1
const todosProdutos = pedidos.flatMap(pedidos => pedidos.produtos)
console.log(todosProdutos)
//2
const nomeProdutos = todosProdutos.map(p => p.nome)
console.log(nomeProdutos)

//3
const todosPrecos = todosProdutos.map(p => p.preco)
const faturamentoTotal = todosPrecos.reduce((total,preco) => total + preco, 0)
console.log(faturamentoTotal)

//4
const caro = todosProdutos.filter(p => p.preco > 250)
console.log(caro)