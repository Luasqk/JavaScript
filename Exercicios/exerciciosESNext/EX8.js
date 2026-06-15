function verificarMaioridade(idade) {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            resolve("Acesso permitido. Bem-vindo!");
        } else {
            reject("Acesso negado. Você é menor de idade.");
        }
    });
}

// Testando caso de sucesso:
verificarMaioridade(20)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Testando caso de erro:
verificarMaioridade(15)
    .then(res => console.log(res))
    .catch(err => console.log(err));