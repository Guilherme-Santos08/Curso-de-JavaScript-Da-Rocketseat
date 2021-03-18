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


// Const e let são locais e só funcionam no escpo onde foi criada

let y = 1

{
   y= 0
   console.log('> existe y', y)
}

console.log('> existe y antes do bloco? ', y)