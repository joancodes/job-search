const numbers = [1, 2, 3, 4, 5]
const names = ['JOAN', 'JOJO', 'LIZ']

// an array of squares
// 1, 4, 9, 16, 25

// const squares = numbers.map((number) => {
//   return number * number
// })
const squares = numbers.map((number) => number * number)

console.log(squares)

// const lowerCasedNames = names.map((name) => {
//   return name.toLowerCase()
// })
const lowerCasedNames = names.map((name) => name.toLowerCase())

console.log(lowerCasedNames)
