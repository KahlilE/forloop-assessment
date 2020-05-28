function add(x, y) {
    return x + y
}
let result = add(2, 4)

console.log(result)



function multiply(x, y) {

    let total = 0
    for (let counter = 0; counter < y; counter += 1) {
        total = add(total, x)
    }
    return total
}
let result2 = multiply(6, 4)
console.log(result2)







function power(x, n) {

    let total2 = 0
    for (let counter = 0; counter < n; counter += 1) {
        total = add(total2, x)
    }
    return total2
}
let result3 = multiply(6, 4)
console.log(result3)



function factorial (x, y) {
    let total4 = 1
    for(let counter= 5; counter < 5 ; counter -=1){
        total4 = fact(total4, y)
    }
    return total4
}
let result4 = factorial(5)
console.log(result4)