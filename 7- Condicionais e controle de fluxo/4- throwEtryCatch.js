// throw

function sayMyName(name = '') {
  if (name === ''){
      throw 'Nome é obrigatório' // throw
  }

  console.log('depois do erro')
}

// try...catch
try { // try
  sayMyName()
} catch(e) { // catch
    console.log(e)
}

console.log('após ao try/catch')