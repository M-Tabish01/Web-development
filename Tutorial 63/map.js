let arr = [1,53,63,23,11,2]

// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

// console.log(newarr)

let newarr = arr.map((e, index, array)=>{
    return e*2
})

console.log(newarr)

const greaterthanseven = (e)=>{
    if(e>60){
        return true
    }
    return false
}

console.log(newarr.filter(greaterthanseven))

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a-b 
}
console.log(arr2.reduce(red))

// Array.from("tabish") //for making array 
// console.log(Array)