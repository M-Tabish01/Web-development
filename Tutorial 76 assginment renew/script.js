function createcard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views >= 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else if (views > 100000) {
        viewStr = views / 100000 + "K"
    }
    else {
        viewStr = views / 1000 + "K"
    }


    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} • ${viewStr} views • ${monthsOld} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createcard("Advanced JavaScript | Sigma Web Dev video #69", "CodeWithHarry", 5300000, 7, "11:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

// let button = document.getElementsByClassName("btn")

document.querySelector(".btn").addEventListener("click", function() {
    createcard("Advanced Python | Sigma Web Dev video #99", "CodeWithHarry", 53000, 1, "11:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
})