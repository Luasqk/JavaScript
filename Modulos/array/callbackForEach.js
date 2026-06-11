aprovados = ['Agatha', 'Martina', 'Joana']


/*por padrao, o forEach pega valor, indice e array (Nessa ordem) 
aprovados.forEach((valor,indice,array) => 
    console.log(`${indice + 1} - ${valor} \n ${array} `)
)
*/

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

aprovados.forEach2((valor,indice,array) => 
    console.log(`${indice + 1} - ${valor} \nArray original: [${array}]\n`))

