import fs from "fs/promises"

let a = await fs.readFile("./subho.txt")
console.log(a.toString())
let b = await fs.writeFile("subho.txt","this is a promise")