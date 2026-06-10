/* Exercício 18

Use find() para localizar uma pessoa pelo nome.
*/


let nomes = ['lucas', 'roger', 'maria']

// Sua Arrow Function reutilizável (Perfeita!)
let buscarPessoa = (listaNomes, nomeBuscado) => {         
    return listaNomes.find(nome => nome === nomeBuscado)
}

// Testando
console.log(buscarPessoa(nomes, 'jose'))  // undefined
console.log(buscarPessoa(nomes, 'maria')) // 'maria'