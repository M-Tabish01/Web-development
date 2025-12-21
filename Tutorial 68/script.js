console.log("Hello world")
let all_box = document.getElementsByClassName("box")
console.log(all_box)
all_box[2].style.backgroundColor= "red";            

let red_box= document.getElementById("red_box").style.backgroundColor="green"
document.querySelector(".box").style.backgroundColor="yellow"
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="aqua"
// })

document.getElementsByTagName("div")