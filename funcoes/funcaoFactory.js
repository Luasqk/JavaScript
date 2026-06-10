//passar uma funcao que recebe de parametros atributos de um objeto
//factory function produz um objeto

function produzProduto(nome, preco) {
    Produto1 = {
        nome,
        preco
    }
    return Produto1
}
console.log(produzProduto('refrigerante',8))