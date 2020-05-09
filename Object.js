const prod1 = {}
prod1.nome = 'Xiaomi'
prod1.preco = 999.99
prod1['Desconto Legal'] = 0.40 /** evitar atributos com espaço */

console.log(prod1) // { nome: 'Xiaomi', preco: 999.99, 'Desconto Legal': 0.4 }

const prod2 = {
    nome: 'Motorola',
    preco: 99.99
}

console.log(prod2) // { nome: 'Motorola', preco: 99.99 }