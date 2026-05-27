function greeting (name = "Muna") {

console.log(`Hello ${name}`)
}
greeting()






function calculateArea (length, width = length) {
return length * width
}   
console.log(calculateArea(5, 10))
console.log(calculateArea(5))
