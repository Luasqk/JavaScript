    /*
    39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
    primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
    Faça a troca sem utilizar uma variável auxiliar
    */

    vetorA = [7, 8, 9]
    vetorB = [1, 2, 3]

    function trocaVetor(vetorA,vetorB){
        for (let i = 0; i < vetorA.length; i++){
            [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
        }
    }

trocaVetor(vetorA, vetorB)
console.log(vetorA)
console.log(vetorB)