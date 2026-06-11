//spread e rest operator

const funcionario = {nome: 'maria', salario: 12345.99}
const clone = {ativo:true, ...funcionario}

//este operador ... é um spread e ele vai distribuir os atributos de funcionario ao clone

console.log(clone)

//pode ser utilizado em array tbm