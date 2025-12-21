let a = Number(prompt("Enter any number"));

function factfor(number) {
    fact = 1;
    if (0 < number) {
        for (let index = 1; index <= number; index++) {
            fact = fact * index
        }
        return fact
    }
    else {
        console.log(`The factorial of ${a} is 1`);
    }
}
console.log(`The factorial of ${a} is ${factfor(a)}`)