let count = 0

let awards = []

if (parseInt(localStorage.getItem("runs")) >= 50) {
    awards.push("Half century: 50+ runs")
}
if (parseInt(localStorage.getItem("runs")) >= 100) {
    awards.push("Century: 100+ runs")
}
if (parseInt(localStorage.getItem("runs")) >= 500) {
    awards.push("Hard hitter: 500+ runs")
}
if (parseInt(localStorage.getItem("runs")) >= 1000) {
    awards.push("4-digit: 1000+ runs")
}
if (parseInt(localStorage.getItem("runs")) >= 5000) {
    awards.push("Cream of the corn: 5000+ runs")
}
if (parseInt(localStorage.getItem("runs")) >= 10000) {
    awards.push("Ultimate: 10000+ runs")
}
if (parseInt(localStorage.getItem("runs")) >= 34358) {
    awards.push("World record: 34357+ runs")
}

localStorage.setItem("awards", awards.toString())

if (Object.keys(localStorage).includes("runs") == false) {
    localStorage.setItem("runs", "0")
    localStorage.setItem("bat", "ss")
    localStorage.setItem("wickets", "0")
}

try {
    setValue("runs", `${localStorage.getItem("runs")}`)
    document.getElementById("bat").src = `anim/bats/${localStorage.getItem("bat")}.png`

    for (const iterator of localStorage.getItem("awards").split(",")) {
        document.getElementById("awards").innerHTML += `<div class="award">${iterator}</div>`
    }
} catch { }

hit = () => {
    console.log(count)
    document.getElementById("bg").src = "anim/match/shot.png"
    document.getElementById("ball").style.display = "none"
    document.getElementById("shot-ball").style.visibility = "visible"

    if (count > 395 & count < 416) {
        localStorage.setItem("runs", (parseInt(localStorage.getItem("runs")) + 2).toString())
        localStorage.setItem("wickets", "0")
        const display = setTimeout(() => { document.getElementById("bg").src = "anim/match/two.png" }, 2000)
        document.getElementById("shot-ball").style.transitionDuration = "0.5s"
        document.getElementById("shot-ball").style.left = "90%"
        document.getElementById("shot-ball").style.top = "35%"
    }

    if (count > 375 & count < 396) {
        localStorage.setItem("runs", (parseInt(localStorage.getItem("runs")) + 4).toString())
        localStorage.setItem("wickets", "0")
        const display = setTimeout(() => { document.getElementById("bg").src = "anim/match/four.png" }, 2000)
        document.getElementById("shot-ball").style.transitionDuration = "0.25s"
        document.getElementById("shot-ball").style.left = "100%"
    }

    if (count > 355 & count < 376) {
        localStorage.setItem("runs", (parseInt(localStorage.getItem("runs")) + 6).toString())
        localStorage.setItem("wickets", "0")
        const display = setTimeout(() => { document.getElementById("bg").src = "anim/match/six.png" }, 2000)
        document.getElementById("shot-ball").style.transitionDuration = "0.25s"
        document.getElementById("shot-ball").style.left = "100%"
        document.getElementById("shot-ball").style.top = "-50px"
    }

    if (count > 335 & count < 356) {
        localStorage.setItem("runs", (parseInt(localStorage.getItem("runs")) + 2).toString())
        localStorage.setItem("wickets", "0")
        const display = setTimeout(() => { document.getElementById("bg").src = "anim/match/two.png" }, 2000)
        document.getElementById("shot-ball").style.transitionDuration = "0.75s"
        document.getElementById("shot-ball").style.left = "90%"
        document.getElementById("shot-ball").style.top = "35%"
    }

    if (count < 336 | count > 415) {
        document.getElementById("shot-ball").style.visibility = "hidden"
        document.getElementById("bg").src = "anim/match/out.png"
        localStorage.setItem("wickets", (parseInt(localStorage.getItem("wickets")) + 1).toString())
        const display = setTimeout(() => { document.getElementById("bg").src = "anim/match/wicket.png" }, 2000)

        if (localStorage.getItem("wickets") == "5") {
            localStorage.setItem("runs", "0")
            localStorage.setItem("wickets", "0")
        }
    }

    document.getElementById("retry").style.display = "block"
    document.getElementById("frame").onclick = () => { }
}

tap = () => {
    document.getElementById("ball").style.left = "0"
    document.getElementById("bg").src = "anim/match/footwork.png"
    document.getElementById("frame").onclick = hit
    timing = setInterval(() => { count++ }, 1)
}