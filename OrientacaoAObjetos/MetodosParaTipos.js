String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('teste'.reverse()) // etset

//pode dar certo, mas pode dar errado também...

Array.prototype.first = function(){
    return this[0]
}
console.log([1, 2, 3].first()) // 1

//pode dar errado tambem...

Object.prototype.toString = function(){
    return 'deu ruim'
}

console.log('teste'.reverse()) // erro: reverse is not a function
console.log(({}).toString()) // deu ruim

//é possivel criar um metodo para criar classes

function aula(nome,id){
    this.nome = nome
    this.id = id
}

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, ...params)
    return obj
}

const aula1 = novo(aula, 'Matematica', 1)
console.log(aula1.nome) // Matematica
console.log(aula1.id) // 1