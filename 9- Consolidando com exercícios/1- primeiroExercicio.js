/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numéricos par asitema de notas em caracteres tipo A B C

* de 90 para cima  -  A
* entre 80 - 89    -  B
* entre 70 - 79    -  C
* entre 60 - 69    -  D
* menor que 60     -  F
*/


 // Resolução feita por mim !!!
/* 
let result = 101 // Nome da variavel poderia ter sido chamado de nota!

let A = result >= 90 && result <= 100 // Eu podia ter colocado o nome da variavel de notaA. Adicionei o <= 100 dps do resultado final
let B = result < 90 && result >= 80
let C = result < 80 && result >= 70
let D = result < 70 && result >= 60
let F = result < 60 && result>= 0 // >= 0 adicionado dps do resultado final

if(A) {
   console.log("Você tirou A")
} else if (B) {
   console.log('Você tirou B')

} else if (C) {
   console.log('Você tirou C')
   
} else if (D) {
   console.log('Você tirou D')

} else if (F){ // if(F) adicionado dps do resultado final
   console.log('Você tirou F')

} else { // Adicionado dps do resultado final
   console.log('Nota inválida')
}
*/

/* Colocando dentro de uma função seguindo as dica do Mayk */
function getResult(result) {
   let A = result >= 90 && result <= 100 // Eu podia ter colocado o nome da variavel de notaA. Adicionei o <= 100 dps do resultado final
   let B = result < 90 && result >= 80
   let C = result < 80 && result >= 70
   let D = result < 70 && result >= 60
   let F = result < 60 && result>= 0 // >= 0 adicionado dps do resultado final

   let resultFinal

   if(A) {
      console.log("Você tirou A")
   } else if (B) {
      console.log('Você tirou B')

   } else if (C) {
      console.log('Você tirou C')

   } else if (D) {
      console.log('Você tirou D')

   } else if (F){ // if(F) adicionado dps do resultado final
      console.log('Você tirou F')

   } else { // Adicionado dps do resultado final
      console.log('Nota inválida')
   }

   return resultFinal
}

getResult(0)
getResult(60)
getResult(40)
getResult(70)
getResult(85)
getResult(101)
getResult(-20)
getResult(80)