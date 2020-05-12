const curso = "Test3 de Manipulação"

console.log(curso.charAt(4)) // 3
console.log(curso.charAt(5)) // 
console.log(curso.charCodeAt(3)) // 116
console.log(curso.indexOf('3')) // 4

console.log(curso.substring(1)) // est3 de Manipulação
console.log(curso.substring(0, 3)) // Tes

console.log('curso '.concat(curso).concat("!")) // curso Test3 de Manipulação!
console.log('curso ' + curso + "!") // curso Test3 de Manipulação!
console.log(curso.replace(3, 'e')) // Teste de Manipulação

console.log('tijulinho,democrata,jubileu'.split(',')) // [ 'tijulinho', 'democrata', 'jubileu' ]