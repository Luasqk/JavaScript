/*Dado const nums = [3, 1, 4, 1, 5], crie um novo array com os mesmos valores mas adicionando
 9 no início e 2 no final — sem modificar o original.
 Confirme que são objetos diferentes com console.log(nums === novo).
 */

const nums = [3, 1, 4, 1, 5]

const novo = [9, ...nums, 2]

console.log(nums === novo)
console.log(novo)