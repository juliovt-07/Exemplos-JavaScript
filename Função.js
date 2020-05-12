/* Funcao sem retorno */
function soma1(a, b) {
    console.log(a + b)
}

/**
 * NaN: Not is a Number
 * (Não é um Número)
 */

soma1(2, 3) // 5
soma1(2) // NaN
soma1(2, 10, 4, 5, 6, 7, 8) // 12
soma1() // NaN

/* Funcao com retorno */
function soma2(a, b = 1) {
    return a + b
}

console.log(soma2(2, 3)) // 5
console.log(soma2(2)) // 3
console.log(soma2()) // NaN