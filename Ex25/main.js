// here is the exer of spread operator
const num = [1, 2, 3, 4, 5]
const Newnum = [...num, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(Newnum)




// rest operator
function mult(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}
console.log(mult(2, 3, 5, )); 
console.log(mult(10, 4));
console.log(mult(22 ,2));









