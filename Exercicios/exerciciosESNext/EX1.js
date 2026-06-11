/*
Crie uma função somar(...nums) 
que aceite qualquer quantidade de números e retorne a soma total. Teste com 2, 5 e 10 argumentos.
*/

const somar = (...nums) => {
    return nums.reduce((total,num) => total + num, 0)
}
console.log(somar(3,4,3,5,6,2))