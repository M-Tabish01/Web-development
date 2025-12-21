function nice(name) {
    console.log("HEY! " + name + " is a good man.")
    console.log("HEY! " + name + " is a Software Engineer.")
    console.log("HEY! " + name + " is a 19 years old.")
    console.log("HEY! " + name + " Loves Games!.")
}

nice("tabish");

function sum(a, b ) {
    return (a + b );
}
b = sum(10, 5);
c = sum(15, 20);
d = sum(30, 5);
console.log("Ali got the marks: " + b);
console.log("Abdullah got the marks: " + c);
console.log("Maaz got the marks: " + d);

// arrow function

const func1 = (x)=>{
    console.log("Hey iam an arrow function" + x);
}

func1(10);