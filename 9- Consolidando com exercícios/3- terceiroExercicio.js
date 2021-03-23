/* ### Celsius em fahrenheit

   Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

   C = (F - 32) * 5/9

   F = c * 9/5 + 32

*/

// tranformDegree('50F')
function transformDegree(degree) {
   const celsiusExists = degree.toUpperCase().includes('C')
   const fahrenheitExists = degree.toUpperCase().includes('F')

   // fluxo de erro
   if(!celsiusExists && !fahrenheitExists) { // se não tiver C° nem F°, este if sera ativado
      throw new Error('Grau não identificado')
   }

   // fuxo ideal, F -> C
   let updateDegree = Number(degree.toUpperCase().replace("F", ""));
   let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
   let degreeSign = 'C'

   // fuxo alternativo, C -> F
   if(celsiusExists) {
      updateDegree = Number(degree.toUpperCase().replace("C", ""));
      formula = celsius => celsius * 9/5 + 32
      degreeSign = 'F'
   }

   return formula(updateDegree) + degreeSign
}

try {
   console.log(transformDegree('10C'))
   console.log(transformDegree('50F'))
   console.log(transformDegree('50Z'))
} catch (error) {
   console.log(error.message)
}