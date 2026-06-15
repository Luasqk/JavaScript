/*
Exercício 2

Crie uma função:

dobrar(numero)

que retorna uma Promise com o dobro do número.

Uso:

dobrar(10)
    .then(console.log)

Saída:

20
*/

function dobrar(numero,tempo = 1500){
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(numero * 2)
        },tempo)
    })
}

dobrar(2)
.then(console.log)
