// there are 5 types of loops in JS 
// For loop, for in loop, for of loop, while loop, do while loop

let a = 1;
for (let i = 0; i < 5; i+=2) {
    console.log(a + i)
}

let obj={
    name: "Tabish",
    age: "19",
    Grade: "A"
}

for (const key in obj) {
    const element = obj[key];
   console.log(key, element);
}

for (const c of "I Love You") {
    console.log(c)
}


let p = 2;
while(p<6){
    console.log(p)
    p++;
}
 
let z = 2;

do {    
    console.log(z)
    z++
} while (p<1);