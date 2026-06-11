const dobro = a => a * 2
const ola = () => 'Olá'

console.log(dobro(5)) // 10
console.log(ola()) // Olá

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
},100)
}
new Pessoa