/*
Crie um Map de estoque de produtos. Chave = nome do produto (string), valor = quantidade (number). 
Adicione 5 produtos, atualize a quantidade de um deles, remova outro e itere imprimindo todos com for...of.
*/

//map aceita valores duplicados mas as chaves devem ser diferentes

const produtos = new Map([
    ['garrafa', 50],
    ['mouse', 120],
    ['teclado', 180],
    ['agua', 5],
    ['camiseta',80] 
])

console.log(produtos)
produtos.forEach((vl,ch) => {
    console.log(vl,ch)
})

produtos.set('teclado',200)
console.log(produtos)

produtos.delete('teclado')
console.log(produtos)

for(const [produto,quantidade] of produtos){
    console.log(`${produto} - ${quantidade}`)
}