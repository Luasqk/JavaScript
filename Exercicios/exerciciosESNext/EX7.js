function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('O tempo acabou!');
        }, tempo);
    });
}

// Testando:
esperarPor(3000)
    .then(mensagem => console.log(mensagem)); // Vai exibir a mensagem após 3 segundos