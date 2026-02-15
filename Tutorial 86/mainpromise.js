import fs from "fs/promises"

let a = await fs.readFile("tabish.txt")

let b = await fs.appendFile("tabish.txt", "\n\n Muhammad Tabish")

console.log(a.toString(), b)