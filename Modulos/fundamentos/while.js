function geraNumerosEntre(min,max) {
    if (min > max) [max, min] = [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let numero = 0;

while (numero !== -1) {
    numero = geraNumerosEntre(-1, 1000)
    console.log(`O número gerado foi: ${numero}`)
}