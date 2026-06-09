/* 
8. Template Strings
Exercício 20

Transforme:

"Meu nome é " + nome + " e tenho " + idade + " anos"

em:

`Meu nome é ${nome} e tenho ${idade} anos`
*/

nome = 'lucas'
idade = 19
    
console.log('Meu nome é',nome,'e tenho',idade,'anos')
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)