    //Você tem dois objetos: const base = { nome: 'Ana', idade: 25 } e const extra = { cidade: 'SP', idade: 30 }. 
    // Crie um terceiro objeto mesclando os dois com spread. Qual valor de idade prevalece e por quê?

    const base = { nome: 'Ana', idade: 25 }
    const extra = { cidade: 'SP', idade: 30 }

    const terceiro = {...base, ...extra}

    console.log(terceiro)

    //a ultima que for enviada ira sobescrever a anterior