async function sleep() {
    return new Promise((ressolve,reject)=>{
        setTimeout(() => {
            ressolve(45);
        }, 5000);
    })    
}

function sum(a,b,c) {
    return a+b+c;
    
}
(async function main() {
    console.log(a1);
    // let a = await sleep()
    // console.log(a);             // immediately invoked function
    // let b = await sleep()
    // console.log(b);
    let [x,y, ...rest]= [1,5, 8,9,10]
    console.log(x,y,rest)
    
    const obj = {
        a:9,
        b:11,
        c:20,
    }
    
    let {a,b} = obj     //any particular data nikalna ho object me se 
    console.log(a,b) 
    
    
    let arr = [2,6,8]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr)) 
    var a1 = 9;
})()

const multiple = async (a,b,c)=>{
    return a*b*c;
}                               // THis is a concept of hoisting
console.log(multiple(2,2,2))  // If i use const in a function making i cannot use the function above the decleration 
