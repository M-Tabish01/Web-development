console.log("Lets write Javascript");

async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let respones = await a.text();
    let div = document.createElement("div")
    div.innerHTML = respones;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    return songs
}
async function main() {
    let songs = await getsongs();
    console.log(songs)
    
    var audio = new Audio(songs[0])
    audio.play()
}

main()

