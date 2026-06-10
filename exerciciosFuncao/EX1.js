/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida
*/

function cresc(taxa1, taxa2, altura1, altura2) {
    let i = 0

        if (altura1 > altura2) {

            if (taxa1 > taxa2) {
                console.log("A crianca 1 sempre sera mais alta que a crianca 2")
            }
            else {
                while (altura2 + (taxa2 * i) < altura1 + (taxa1 * i)) {
                    i++
                }
                console.log('A crianca 2 ficara mais alta que a crianca 1 em ', i, 'anos')
            }
        }

        else if (altura1 < altura2) {

            if (taxa2 > taxa1) {
                console.log("A crianca 2 sempre sera mais alta que a crianca 1")
            }
            else {
                while (altura2 + (taxa2 * i) > altura1 + (taxa1 * i)) {
                    i++
                }
                console.log('A crianca 1 ficara mais alta que a crianca 2 em ', i, 'anos')
            }
        }
    else{
        console.log("A altura das duas crianças são iguais")
    }

}
cresc(3, 2, 100, 110)