function carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta    
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

console.log('------------------')
console.log('uno')
//pode nao ter () mas é recomendado colocar para deixar claro que é uma funcao construtora
const uno = new carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

console.log('------------------')
console.log('ferrari')
//pode passar os parametros normalmente
const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
