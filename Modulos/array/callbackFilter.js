Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
//nova funcao criada utilizando o tipo array
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
/* para filtrar e retornar arrays: 

const caro = produtos.filter(p => p.preco >= 2500)
const fragil = produtos.filter(p => p.fragil === true)

console.log(caro)
console.log(fragil)
*/

//as funcoes irao retornar valores
//cada elemento do array recebera essa funcao para ser filtrada
const caro = p => p.preco >= 2500
const fragil =p => p.fragil

console.log(produtos.filter2(caro).filter2(fragil))