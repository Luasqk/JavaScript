const pessoa = {
    nome: "lucas",
    falar() {
        console.log(this.nome)
    } 
}

//Em JavaScript, this não pertence à função. Ele é definido no momento da chamada.

//por padrao ira funcionar por pertencer a pessoa na execucao
pessoa.falar()

//nao e definido pois o this nao esta acompanhado de algum objeto, diferente do que acontece no pessoa.falar()
const funcaoFalar = pessoa.falar
funcaoFalar()

//para resolver, deve-se colocar um bind()
funcaoFalar2 = pessoa.falar.bind(pessoa)
funcaoFalar2()
