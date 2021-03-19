// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2) { 
   let total = (number1 + number2) // <== Recomendado
   // total = (number1 + number2) <== Não recomendado
   return total
}

// sum(3, 3) // arguments - argumentos

let number1 = 34
let number2 = 25

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
console.log(`o soma é ${sum(number1, number2)}`)