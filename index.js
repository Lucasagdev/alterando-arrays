let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length

let posicaoLaranja = frutas.indexOf('laranja')
console.log(posicaoLaranja)

frutas.shift() // Remove o primeiro item do array

frutas.pop() // Remove o ultimo item do array

frutas.push('Manga') // Adiciona um item ao final do array

frutas.unshift('Morango') // Adiciona um item no começo do array 

console.log(frutas)

// for(let i = 0; i < frutasTamanho; i++){
//     console.log('Fruta: ' + frutas[i])
// }

// frutas.forEach(function(item, indice, array){
//     console.log('Fruta: ' + item)
//     // console.log('Fruta: ' + frutas[indice])
// })