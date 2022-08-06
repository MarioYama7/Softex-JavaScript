var input = require('readline-sync')

console.log ('Sistema para notas de alunos')

const notaA = Number(input.question('Digite sua primeira nota: '))
const notaB = Number(input.question('Digite sua segunda nota: '))
let resultadoFinal = '' 


if (notaA + notaB <= 10){
    resultadoFinal = 'Você não tem como se recuperar mesmo que tire 10 na 3 nota'
}

else if (notaA + notaB <= 11) {
    resultadoFinal ='Você tem que tirar 10'
}

else if (notaA + notaB <= 12) {
    resultadoFinal ='Você tem que tirar 9'
}

else if (notaA + notaB <= 13) {
    resultadoFinal ='Você tem que tirar 8'
}

else if (notaA + notaB <= 14) {
    resultadoFinal ='Você tem que tirar 7'
}

else if (notaA + notaB <= 15) {
    resultadoFinal ='Você tem que tirar 6'
}

else if (notaA + notaB <= 16) {
    resultadoFinal ='Você tem que tirar 5'
}

else if (notaA + notaB <= 17) {
    resultadoFinal ='Você tem que tirar 4'
}

else if (notaA + notaB <= 18) {
    resultadoFinal ='Você tem que tirar 3'
}

else if (notaA + notaB <= 19) {
    resultadoFinal ='Você tem que tirar 2'
}

else if (notaA + notaB <= 20) {
    resultadoFinal ='Você tem que tirar 1'
}

else if (notaA + notaB >21) {
    'As notas só podem ser até 10, preencha corretamente.'
}

console.log(resultadoFinal)
