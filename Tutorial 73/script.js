let button = document.getElementById("btn");
let button_1 = document.getElementById("btn_1");
// button.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = 'black'
// })
button_1.addEventListener("click", ()=>{
    document.body.style.backgroundColor = 'yellow'
    
})

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "My name is Tabish"
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})