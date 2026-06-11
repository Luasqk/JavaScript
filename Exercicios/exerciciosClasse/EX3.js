/*
12. Classe Conta Bancária

Crie uma classe que possua:

depositar()
sacar()
consultarSaldo()

Impeça saque maior que o saldo.
*/

class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        if(valor > this.saldo){
            console.log('Saldo insuficiente para sacar. ')
            return
        }
        this.saldo -= valor
    }

    consultarSaldo(){
        return this.saldo
    }
}

const cb = new ContaBancaria(5000)

cb.depositar(100)
console.log(cb.consultarSaldo())
cb.sacar(6000)
cb.sacar(500)
console.log(cb.consultarSaldo())