let count = 0

if (Object.keys(localStorage).includes("runs") == false) {
    localStorage.setItem("runs", "0")
    localStorage.setItem("bat", "ss")
    localStorage.setItem("wickets", "0")
}

try {
    setValue("runs", `${localStorage.getItem("runs")}`)
    document.getElementById("bat").src = `anim/bats/${localStorage.getItem("bat")}.png`
} catch {
    console.log("Err")
}

hit = () => {
    console.log(count)
    document.getElementById("bg").src = "anim/match/shot.png"
    document.getElementById("ball").style.display = "none"

    if (count > 395 & count < 416) {
        localStorage.setItem("runs", (parseInt(localStorage.getItem("runs")) + 2).toString())
        localStorage.setItem("wickets", "0")
        const display = setTimeout(() => { document.getElementById("bg").src = "anim/match/two.png" }, 2000)
    }

    if (count > 375 & count < 396) {
        localStorage.setItem("runs", (parseInt(localStorage.getItem("runs")) + 4).toString())
        localStorage.setItem("wickets", "0")
        const display = setTimeout(() => { document.getElementById("bg").src = "anim/match/four.png" }, 2000)
    }

    if (count > 355 & count < 376) {
        localStorage.setItem("runs", (parseInt(localStorage.getItem("runs")) + 6).toString())
        localStorage.setItem("wickets", "0")
        const display = setTimeout(() => { document.getElementById("bg").src = "anim/match/six.png" }, 2000)
    }

    if (count > 335 & count < 356) {
        localStorage.setItem("runs", (parseInt(localStorage.getItem("runs")) + 2).toString())
        localStorage.setItem("wickets", "0")
        const display = setTimeout(() => { document.getElementById("bg").src = "anim/match/two.png" }, 2000)
    }

    if (count < 336 | count > 415) {
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
