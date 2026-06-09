function tratarErroELancar(erro) {
    throw new Error('...deu ruim')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}
const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)
imprimirNomeGritado({})