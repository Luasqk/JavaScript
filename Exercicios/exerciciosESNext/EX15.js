/*
Exercício 5

Faça:

dividir(20, 2)

↓

multiplicar resultado por 5

↓

subtrair 10

Se qualquer etapa falhar, cair no .catch().
*/

function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('Divisão por 0')
        }
        resolve(dividendo / divisor)
    })
}

dividir(20,2)
.then(num => num * 5)
.then(num => num - 10)
.then(console.log)
.catch(console.log)