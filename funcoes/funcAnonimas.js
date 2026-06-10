//FUNCOES ANONIMAS

const soma = (a, b ) => a + b

function imprimeResultado(a,b,operacao = soma) {
    console.log(operacao(a,b))
}

//é possivel usar uma funcao ja existente de parametro
//alem disso ha como nao coloca-la de parametro mas ela é chamada mesmo assim
imprimeResultado(5,9)
imprimeResultado(5,9,soma)

//alem disso é possivel iniciar uma funcao no proprio parametro mesmo
imprimeResultado(3,6,function(x,y) {
    return x - y
})

//assim como é possivel usar uma arrow function nisso tambem
imprimeResultado(5,2, (x,y) => x * y)


//funcoes anonimas podem ser iniciadas dentro de objetos tambem
const pessoa = {
    falar: function(){
        console.log('oi')
    }
}
pessoa.falar()