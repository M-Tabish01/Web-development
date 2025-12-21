let arr = [1, "tabish", 0.33];

console.log(arr[0])
console.log(arr[1]) 
arr[1] = "Pakistan"
console.log(arr)
console.log(arr.toString())
console.log(arr.join(" and "))

// console.log(arr.pop()) // only show last item in array and remove it next time 
// console.log(arr)
// console.log(arr.shift()) // only first item show in the array and remove it next time 
// console.log(arr)

console.log(arr.push("Tabish")) // add anything in the last of the array
arr.unshift("Hooriya") // add anything in the First of the array

console.log(arr)

delete arr[0] //specific item will remove but contain memory (Undefined)
console.log(arr)


// let a1 = [1,2,3]
// let a2 = [5,7,9]
// let a3 = [4,6,8]

// a = a1.concat(a2,a3).sort() // sort tag use to sort the alphabatically
// console.log(a)

let numbers = [1,2,3,4,5,6]

// numbers.splice(1,4, 555, 983) // splice use to remove items in array with range like index 1 to 4 will remove 
// console.log(numbers) // also splice can also add the items 

console.log(numbers.slice(1, 4)) // slice use to extract the items with index like 1 to 4(4-1)

console.log(numbers.reverse())