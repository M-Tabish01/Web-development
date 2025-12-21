if(localStorage.getItem("name")){
    a = localStorage.getItem("name")
    document.write("Welcome "+ a)
}
else{
    let a = prompt("Enter your name")
    localStorage.setItem("name", a)
}