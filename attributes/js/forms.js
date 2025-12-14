window.onload = () => {
    document.getElementById("application-send").addEventListener("click", (event) => {
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let age = document.getElementById("age").value
        let experience = document.getElementById("experience").value
        let parttime = document.getElementById("part-time").checked
        let fulltime = document.getElementById("full-time").checked
        let before = document.getElementById("before").checked
        let position = document.getElementById("position").value
        let more = document.getElementById("more").value


        if (age < 18 || age > 64) {
            alert("Sorry! Your age does not comply with our current requirements. All good! Life moves on i guess.")
        }
        if (experience <= 2) {
            alert("Sorry! Your current tea-ful experience does not match what we are looking for! All good, come back next year with more experience!")
        }
    })

    document.getElementById("application-send").addEventListener("mouseover", (event) => {
        let current = getComputedStyle(event.target).background
        let r = current.split(",")[0].split("(")[1]
        let g = current.split(",")[1].split(" ")[1]
        let b = current.split(",")[2].split(")")[0]

        event.target.style = `background-color: rgb(${Math.floor(r) + Math.random() * 50 - 25}, ${Math.floor(g) + Math.random() * 50 - 25}, ${Math.floor(b) + Math.random() * 50 - 25})`

        let today = new Date()
        event.target.innerHTML = `Send Application on ${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    })
}