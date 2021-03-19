/*
   Function() constructor

   * expressão new
   * criar um novo objeto
   * this keyword
*/

function Person(name) {
   this.name = name
   this.walk = function() {
      return this.name + " está andando"
   }
   this.nowalk = function() {
      return this.name + " não está andando"
   }
   this.bike = function() {
      return this.name + " está de bicicleta"
   }
   this.car = function() {
      return this.name + " está de carro"
   }
}
const dz = new Person("Dz")
const joao = new Person("Joao")
const vitor = new Person("Vitor")
const alan = new Person("Alan")
console.log(dz.walk())
console.log(joao.nowalk())
console.log(vitor.bike())
console.log(alan.car())