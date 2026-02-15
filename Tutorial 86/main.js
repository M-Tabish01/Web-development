const fs = require("fs")
  
// console.log(fs)

console.log("starting")

// fs.writeFileSync("tabish.txt", "My name is muhammad tabish")

fs.writeFile("ME.txt", "Tabish is a good", ()=>{
    console.log("Done")
    fs.readFile("ME.txt", (error,data)=>{
        console.log(error, data.toString());
        // if we create multiple write and read in a same function is known as callback hell
    })
})

fs.appendFile("tabish.txt", "Tabish handsome", (e, d)=>{
    console.log(d)
})

console.log("Ending")
