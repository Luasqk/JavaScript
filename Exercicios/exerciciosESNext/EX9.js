function obterNumeroAleatorio() {
    return new Promise((resolve) => {
        resolve(10); // Retorna o número 10
    });
}

obterNumeroAleatorio()
    .then(num => num * 2)      // Pega 10 e multiplica por 2 (retorna 20)
    .then(numDuplicado => numDuplicado + 5) // Pega 20 e soma 5 (retorna 25)
    .then(resultadoFinal => console.log(`Resultado final: ${resultadoFinal}`)) // Exibe 25
    .catch(err => console.log(err));