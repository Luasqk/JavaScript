/*Exercício 3 — Rede Social

Você possui:

const usuarios = [
    {
        nome: "Lucas",
        amigos: ["Ana", "Pedro", "Carlos"]
    },
    {
        nome: "Ana",
        amigos: ["Lucas", "Maria"]
    },
    {
        nome: "Pedro",
        amigos: ["Lucas", "Carlos"]
    }
]
Faça:
Use flatMap() para obter todos os amigos.
Use reduce() para contar quantas vezes cada amigo aparece.

Resultado esperado:

{
    Ana: 1,
    Pedro: 1,
    Carlos: 2,
    Lucas: 2,
    Maria: 1
}
Use filter() para descobrir quais amigos aparecem mais de uma vez.
Use forEach() para exibir os resultados.
*/

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const usuarios = [
    {
        nome: "Lucas",
        amigos: ["Ana", "Pedro", "Carlos"]
    },
    {
        nome: "Ana",
        amigos: ["Lucas", "Maria"]
    },
    {
        nome: "Pedro",
        amigos: ["Lucas", "Carlos"]
    }
]
//1
const amigos = usuarios.flatMap(p => p.amigos)
console.log(amigos)

//2
const contagemAmigo = amigos.reduce((total, amigo) => {
    if(total[amigo]){
        total[amigo]++
    }
    else{
        total[amigo] = 1
    }
    return total
},{} )
console.log(contagemAmigo)

const entradas = Object.entries(contagemAmigo)

//3
const quantasVezesAmigo = entradas.filter(p => p[1] > 1)
console.log(quantasVezesAmigo)