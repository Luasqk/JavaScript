/*
======================================================

this nao é definido e nao referencia o objeto
function Pessoa() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa

=======================================================

Caso para funcionar a funcao com this e .bind(this)
function Pessoa() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}

new Pessoa

=======================================================


Forma de driblar o this que muda dependendo de quem o chama,
é só criar uma constante para ele nao variar

function Pessoa() {
    this.idade = 0

    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}

new Pessoa

*/


