//  Factorial of 6

let a = Number(prompt("Enter the number"));

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a, b)=> a*b)
    return c
}

console.log(factorial(a))


function factfor(number){
    let fact = 1;
        for (let index = 1; index <= number; index++) {
           fact = fact*index   
        }
        return fact
}
console.log(factfor(a))

// {1,2,3,4,5,6}