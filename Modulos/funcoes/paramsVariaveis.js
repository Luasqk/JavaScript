function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2,3,4,6,8,4,2,6,8,3,7,9,6,4,2,7,9,6,4,3,6))