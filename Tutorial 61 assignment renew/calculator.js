let random = Math.random();
console.log(random)
let a = prompt("enter your first number");
let b = prompt("enter your operator");
let c = prompt("enter your second number");


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random > 0.1){
    alert(`The result is ${eval(` ${a} ${b} ${c}`)}`);
}
else{
    b = obj[b]
    alert(`The result is ${eval(` ${a} ${b} ${c}`)}`);

}