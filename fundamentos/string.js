const escola = "Cod3r"

console.log(escola.charAt(4)) // Acessa o caractere na posição 4
console.log(escola.charAt(5)) // Acessa o caractere na posição 5 (não existe, retorna vazio)
console.log(escola.charCodeAt(3)) // Retorna o código Unicode do caractere na posição 3
console.log(escola.indexOf('3')) // Retorna a posição do caractere '3'

console.log(escola.substring(1)) // Retorna a substring a partir da posição 1
console.log(escola.substring(0, 3)) // Retorna a substring da posição 0 até a posição 3 (exclusivo)

console.log('Escola '.concat(escola).concat("!")) // Concatena strings
console.log('Escola ' + escola + "!") // Concatena strings usando o operador +
console.log(escola.replace(3, 'e')) // Substitui o caractere '3' por 'e'
console.log(escola.replace(/\d/, 'e')) // Substitui o primeiro dígito encontrado por 'e' usando expressão regular

console.log('Ana,Maria,Pedro'.split(',')) // Divide a string em um array usando ',' como separador  