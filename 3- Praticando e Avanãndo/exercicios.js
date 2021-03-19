// 1. Declare uma variável de nome wight
// let weight

// // 2. Que tipo de dado é a variável acima?
// console.log(typeof weight)

/* 4. Declare uma variável e atribua valores para cada um dos dados:
*/

//  name ="Guilherme"
//  age = 17
//  stars = 5
//  isSubscribed = true

/* 4. A variável student abaixo é de qe tipo de dados?
   
   4.1 Atribua a ela as mesma propriedades e valores do exercício 3.

   4.2 Mostre no console a seguinete mensagem:
   <name> de idade <age> pesa <weight> kg
*/


let student  = {
   name: "Guilherme",
   age: 17,
   weight: 5,
   isSubscribed: true
}
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/**
   5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
 */

let students = []

/*
   6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colocar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
   student
]
// console.log(students)

/*
   7. Coloque no console o valor da posição zero do Array acima
*/
// console.log(students[0])

/*
   8. Crie um novo student e coloque na posição 1 do Array students
*/
const john = {
   name: "John",
   age: 23,
   weight: 74.8,
   isSubscribed: true
}

students[1]= john
// console.log(students)

/*
   9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

   console.log(a)
   var a = 1
*/
console.log(a)
var a = 1