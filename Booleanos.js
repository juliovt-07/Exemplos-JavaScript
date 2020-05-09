let ativado = false
console.log(ativado) // false

ativado = true
console.log(ativado) // true

ativado = 1
console.log(!!ativado) //true

/** Os Verdadeiros */
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(ativado = true))

/** Os Falsos */
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(ativado = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // true

let nome = 'Lucas'
console.log(nome || 'Desconhecido') //Lucas

const vazio = ''
console.log(vazio) // 