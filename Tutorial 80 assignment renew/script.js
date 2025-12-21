
const addItem = async(item)=>{
    await randomdelay();
    let div = document.createElement("div");
    div.innerHTML = item
    document.body.append(div)
}

const randomdelay = ()=>{
    return new Promise((resolve, reject)=>{
        timeout = 1 + 4* Math.random()
        setTimeout(() => {
            resolve()
        }, timeout *1000);
    })
}

async function main() {

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length-1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML= last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML + "."
        }
    }, 100);
    
    let text = ["Initialized Hacking Data found",
        "Reading the Files",
        "Password files detected",
        "Sending all password and files to server",
        "Cleaning up"]
    
    for (const item of text) {
        await addItem(item)
    } 
    await clearInterval(t)
    
}

main()