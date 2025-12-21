function getrandomcolor(){
    const letters= '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];        
    }
    return color;
}
    
const boxes = document.querySelectorAll(".box");

boxes.forEach(element => {
    element.style.backgroundColor= getrandomcolor();
    element.style.color= getrandomcolor();
});
// for (let i = 0; i < boxes.length; i++) {
//     let randombackgroundcolor = getrandomcolor();    
//     let randomcolor = getrandomcolor();  

//     boxes[i].style.backgroundColor= randombackgroundcolor();
//     boxes[i].style.color= randomcolor();
// }