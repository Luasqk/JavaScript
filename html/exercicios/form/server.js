const express = require('express')
//importa uma biblioteca mas de outra maneira
const app = express()
//cria o servidor, a variavel podera ser utilizada no post, get, listen...
const bodyParser = require('body-parser')
//serve para ler os dados enviados bo corpo da requesição

app.use(bodyParser.urlencoded({ extended: true }))
//transforma em objeto javascript
//o extend faz aceitar objetos mais complexos (nome, idade, email ...)

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário incluído! <h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id) 
    console.log(req.body)      
    resp.send('<h1>Parabéns. Usuário alterado! </h1>')
})

app.listen(3003)