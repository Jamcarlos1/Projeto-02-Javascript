let student = prompt('Qual o nome do(a) aluno(a)?')
let N1 = prompt('Qual a nota da primeira prova?')
let N2 = prompt('Qual a nota da segunda prova?')

let Avarage = (Number(N1) + Number(N2)) /2

let result = Avarage > 6

Avarage = Avarage.toFixed(2)

if (result) {
    alert("Parabéns," + student + "! Sua média foi de :" + Avarage)
}
else if (Avarage < 3) {
    alert("Reprovado")
}
else {
    alert(student + " Estude para a prova de recuperação! Sua média foi de: " + Avarage)
}