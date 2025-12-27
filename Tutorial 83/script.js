console.log("Lets write Javascript");

let currentsong = new Audio();

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

const playmusic = (track)=>{
    // let audio = new Audio("%5Csongs%5C" + track)
    currentsong.src = "%5Csongs%5C" + track; 
    currentsong.play();
    play.src = "/img/pause.svg"
    document.querySelector(".songinfo").innerHTML = track
    document.querySelector(".songinfo").innerHTML = "00:00 / 00:00"
}

async function main() {

    // Get all the songs 
    let songs = await getsongs();
    console.log(songs)
    // Show all songs in the playlist 
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

    // Attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click", element=>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })


    // attach an event listener to play next buttons
    play.addEventListener("click", ()=>{
        if(currentsong.paused){
            currentsong.play()
            play.src = "/img/play.svg"
        }
        else{
            currentsong.pause()
            play.src = "/img/pause.svg"
        }
    })
}

main()

