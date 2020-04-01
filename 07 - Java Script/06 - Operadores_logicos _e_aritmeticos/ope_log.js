/*
if(!(5>=2)) {
    document.write('Verdade)
}else{
    document.write('Falso")
}
*/

var nome = prompt('Nome do aluno: ')
var nota  = prompt('Nota do aluno: ')
var faltas = prompt('Digite a qtd de faltas: ')

var media = 7
var faltas_maximas = 15

if (nota >= media && faltas <= faltas_maximas) {
    document.write('O aluno ' + nome + ', está aprovado')
}
else{
    document.write('O aluno ' + nome + ', está reprovado')
}
/* Ou podemos usar oq segue:
var resultado = (nota >= media && faltas <= faltas_maximas) ? ('Aprovado') : ('Reprovado')
document.write(resultado)
*/