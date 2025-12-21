function getrandomcolor(){
    let val1 = Math.ceil(Math.random()*255);
    let val2 = Math.ceil(Math.random()*255);
    let val3 = Math.ceil(Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}

let boxes = document.querySelectorAll(".box");
boxes.forEach(e => {
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
});