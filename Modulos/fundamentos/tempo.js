var today = new Date() // Cria um objeto Date com a data e hora atuais

var day = today.getDate() // Retorna o dia do mês (1-31)

var dayOfWeek = today.getDay() // Retorna o dia da semana (0-6, onde 0 é domingo)

var month = today.getMonth() // Retorna o mês (0-11, onde 0 é janeiro)

var year = today.getFullYear() // Retorna o ano com quatro dígitos

var hours = today.getHours() // Retorna a hora (0-23)

const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const dataFormatada = `${semana[dayOfWeek]}, ${day} de ${meses[month]} de ${year} ${hours}:${today.getMinutes()}:${today.getSeconds()}`

console.log(dataFormatada) // Exibe a data formatada no console

var prepand = (hours >= 12) ? 'PM' : 'AM' // Determina se é AM ou PM

var hora12 = (hours > 12) ? hours - 12 : hours // Converte para formato de 12 horas
const dataformatada12 = `${semana[dayOfWeek]}, ${day}/`+ (month + 1) + `/ ${year} ${hora12}:${today.getMinutes()}:${today.getSeconds()} ${prepand}`
console.log(dataformatada12) // Exibe a data e hora formatadas no console