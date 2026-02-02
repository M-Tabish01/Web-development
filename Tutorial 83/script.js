let songs;
let currFolder;
let currentsong = new Audio();

async function getsongs(folder) {
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/`)
    let respones = await a.text();
    let div = document.createElement("div")
    div.innerHTML = respones;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`%5C${folder}%5C`)[1])
        }
    }


    // Show all songs in the playlist 
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
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
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            // console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })


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



const playmusic = (track, pause = false) => {
    // let audio = new Audio("%5Csongs%5C" + track)
    currentsong.src = `%5Csongs%5C${currFolder}%5C` + track;
    if (!pause) {
        currentsong.play();
        play.src = "/img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"

}


async function displayAllbum() {
    let a = await fetch(`http://127.0.0.1:3000/songs/`)
    let respones = await a.text();
    let div = document.createElement("div")
    div.innerHTML = respones;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if (e.href.includes("%5Csongs")) {
            let folder = e.href.split("%5Csongs%5C").pop()
            console.log(e.href.split("%5Csongs%5C").pop())
            // get metadata of the folder 
            let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
            let respones = await a.json();
            console.log(respones)

            
            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="ncs" class="card">
                        <div class="play">
                            <img src="img/play.svg" alt="">
                        </div>
                        <img src="/songs/${folder}cover.jpeg" alt="">
                        <h2>${respones.title}</h2>
                        <p class="px-10">${respones.description}</p>
                    </div>`
        }
    }


    //Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            songs = await getsongs(`${item.currentTarget.dataset.folder}`)
            // item.currentTarget.dataset.folder
        })
    })
    
    

}


async function main() {

    // Get all the songs 
    await getsongs("cs");
    playmusic(songs[0], true)

    // console.log(songs)

    //Display All album on the page 
    displayAllbum()

    // attach an event listener to play next buttons
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play()
            play.src = "/img/pause.svg"
        }
        else {
            currentsong.pause()
            play.src = "/img/play.svg"
        }
    })

    // Listen for timeupdate event
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%"
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = ((currentsong.duration) * percent) / 100;
    })

    //button for hamburger

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-1%";
    })

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-100%";
    })

    // Add an event listener to pevious
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split(`%5Csongs%5C${currFolder}%5C`).slice(-1)[0])
        // console.log(currentsong.src.split(`%5C${folder}%5C`).slice(-1) [0])

        if ((index - 1) >= 0)
            playmusic(songs[index - 1])


    })

    // Add an event listener to next
    nextsong.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split(`%5Csongs%5C${currFolder}%5C`).slice(-1)[0])
        // console.log(currentsong.src.split("%5Csongs%5C").slice(-1) [0])

        if ((index + 1) < songs.length)
            playmusic(songs[index + 1])

    })

    document.getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentsong.volume = parseInt(e.target.value) / 100
        // console.log(currentsong.volume)
    })

    // Add event to mute the track
    document.querySelector(".volume>img").addEventListener("click", e=>{
        if(e.target.src.includes("img/volume.svg")){
            e.target.src = e.target.src.replace("img/volume.svg", "img/mute.svg")
            currentsong.volume = 0;
            document.getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("img/mute.svg", "img/volume.svg")
            currentsong.volume = 0.1;
        }
    })
}

main()

