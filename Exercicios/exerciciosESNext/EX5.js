/*
Dado o array [1, 2, 2, 3, 3, 3, 4], use Set para remover duplicatas e converter de volta para array. 
Depois, crie um segundo Set com [3, 4, 5, 6] e encontre a interseção (valores que existem nos dois).
*/

//set nao aceita valores duplicados
const nums = [1, 2, 2, 3, 3, 3, 4]
const numsSet = new Set(nums)

//spread simples :)
const numsSemRep = [...numsSet]

console.log(numsSet)
console.log(numsSemRep)