let a = Number(prompt("Enter any number"));

function factfor(number){
    fact = 1;
    for (let index = 1; index <= number; index++) {
        fact = fact*index
    }
    return fact
}
console.log(factfor(a))