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
            songs.push(element.href.split("%5Csongs%5C")[1])
        }
    } 
    return songs
}
async function main() {
    let songs = await getsongs();
    console.log(songs)
    
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> 
        
                            <img class="invert" src="img/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")} </div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                            </div>
                            <img class="invert" src="img/play.svg" alt="">
                        
        
        
        
        
        </li>`
    }

    var audio = new Audio(songs[0])
    // audio.play()

    audio.addEventListener("loadeddata", ()=>{
        console.log(audio.duration, audio.currentSrc, audio.currentTime)
    });
}

main()

