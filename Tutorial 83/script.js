console.log("Lets write Javascript");

let songs;
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

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


const playmusic = (track, pause=false)=>{
    // let audio = new Audio("%5Csongs%5C" + track)
    currentsong.src = "%5Csongs%5C" + track; 
    if(!pause){
        currentsong.play();
        play.src = "/img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function main() {

    // Get all the songs 
    songs = await getsongs();
    playmusic(songs[0], true)

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
            play.src = "/img/pause.svg"
        }
        else{
            currentsong.pause()
            play.src = "/img/play.svg"
        }
    })

    // Listen for timeupdate event
    currentsong.addEventListener("timeupdate", ()=>{
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left = (currentsong.currentTime/currentsong.duration)*100 + "%"
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e=>{
        let percent = (e.offsetX/e.target.getBoundingClientRect().width) *100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = ((currentsong.duration)*percent) /100;
    })

    //button for hamburger

    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-1%";
    })

    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".left").style.left= "-100%";
    })

    // Add an event listener to pevious
    previous.addEventListener("click", ()=>{
        let index = songs.indexOf(currentsong.src.split("%5Csongs%5C").slice(-1)[0])
        console.log(currentsong.src.split("%5Csongs%5C").slice(-1) [0])
        
        if((index-1) >= 0)
        playmusic(songs[index-1])


    })

    // Add an event listener to next
    nextsong.addEventListener("click", ()=>{
        let index = songs.indexOf(currentsong.src.split("%5Csongs%5C").slice(-1)[0])
        console.log(currentsong.src.split("%5Csongs%5C").slice(-1) [0])
        
        if((index+1) < songs.length)
        playmusic(songs[index+1])
        
    })
}

main()

