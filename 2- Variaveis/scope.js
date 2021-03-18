/*
   #Scope
   
   * Escopo dtermina a visibildade de alguma variável no JS
*/

// var é global e, também local
console.log('> existe x antes do bloco? ', x)

{
   var x= 0
}

console.log('> existe x antes do bloco? ', x)