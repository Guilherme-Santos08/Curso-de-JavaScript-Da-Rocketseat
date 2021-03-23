/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
   * receitas: []
   * despesas: []

Agira, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a famímia está com saldo positivo ou negativo, seguindo do valor do saldo

*/

// Fazendo com ajuda do Mayk

let family = {
   incomes: [2200,3200, 250.43, 360.45],
   expenses: [320.34, 128.45, 176.87, 1450.00, 2000]
}

function sum(array) {
   let total = 0

   for(let value of array) {
      total += value
   }

   return total
}

function calculateBalance(){
   const calculateIncomes = sum(family.incomes)
   const calculateExpenses = sum(family.expenses)

   const total = calculateIncomes - calculateExpenses

   const itsOk = total >= 0

   let balanceText = " Negativo"

   if(itsOk) {
      balanceText = "Positivo"
   }

   console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)

}

calculateBalance()