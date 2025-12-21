function Updateinfo(title, channel_name, views, months_ago, timer) {
    // document.getElementById("vid_name").textContent = title;
     const vidName = document.getElementById("vid_name");
    vidName.childNodes[0].nodeValue = title;
    // document.getElementById("channel_name").textContent = channel_name;
        document.getElementById("channel_name").childNodes[0].nodeValue = channel_name;
    document.getElementById("views").textContent = views;
    document.getElementById("months_ago").textContent = months_ago;
    document.getElementById("timer").textContent = timer;
}
 let button = document.getElementById("btn")
button.addEventListener("click", ()=>{
    Updateinfo("Anuv Jain - Arz Kiya Hai (Official Lyrical Video", "AnuvJain •", " 1M Views", "4 days ago", "09:04");
})