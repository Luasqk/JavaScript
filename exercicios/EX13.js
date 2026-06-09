/* Exercício 13

Crie um objeto Produto com:

nome
preço
estoque

Depois crie uma função que venda uma unidade do produto.
*/

let Produto = {
    nome: "refrigerante",
    preco: 5.90,
    estoque: 50
}

function venderProduto(produto){
    console.log("Produto: ", produto)
    console.log("Valor: ", produto.preco)
    produto.estoque -= 1
    console.log("Estoque atualizado: ", produto.estoque)
}

venderProduto(Produto)