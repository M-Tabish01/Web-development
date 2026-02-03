console.log("Heelo world");


var slugify = require('slugify')

let a = slugify('come #%@^&*#@!(*website@tlast')
console.log(a)


// if you prefer somthing other than '-' as seperator 
const b = slugify('come #%@^&*#@!(*website@tlast', '_')   // some_string
console.log(b)