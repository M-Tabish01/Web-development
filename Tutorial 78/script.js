let a = prompt("Enter the first number");
let b = prompt("Enter the first number");
let sum = parseInt(a) + parseInt(b);
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Something is wrong with input");    
}
// alert(sum);
function main(){
try {
    console.log(sum*x); 
    return true
    
} catch (error) {
   console.log("Error he bkl");
   return false
}

// When we use try and catch we will use finnally mainly use in functions 
finally{
    console.log("All files are being closed and your so cute");
    
}
}

main()