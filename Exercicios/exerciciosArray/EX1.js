const carrinho = [
    { "nome": "Borracha", "preco": 3.45 },
    { "nome": "Caderno", "preco": 13.90 },
    { "nome": "Kit de Lapis", "preco": 41.22 },
    { "nome": "Caneta", "preco": 7.50 }
]

const precos = carrinho.map(produto => { return produto.preco})

console.log(precos)