window.onload = () => {
    let ageobj = document.getElementById("age")
    let agediv = document.getElementsByClassName("agenum")[0]

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

        // Regex + LOGIC
        let re = /\w+/g;
        name = name.match(re)
        if (name.length < 2) {
            alert("Please introduce full name!")
        } else if (name[0][0].toLowerCase() == name[0][0] || name[1][0].toLowerCase() == name[1][0]) {
            alert("Please write your name in correct casing!")
        } else if (name[0].length < 2 || name[1].length < 2) {
            alert("Please write your name correctly!")
        }

        // Pure regex!!
        re = /^\w+@\w+\.com/g;
        if (!re.test(email)) {
            alert("Please write a valid email adress!")
        }

        // This also handles gracefully negative numbers!! Let's go!! I am going insane.
        re = /^\d+$/g;
        if (!re.test(experience)) {
            alert("Please write a valid experience!")
        }

        if (age < 18 || age > 64) {
            alert("Sorry! Your age does not comply with our current requirements.")
        }
        if (experience <= 2) {
            alert("Sorry! Your current tea experience does not match what we are looking for! All good, come back next year with more experience!")
        }
    })
    
    document.getElementById("age").addEventListener("change", () => {
        agediv.innerHTML = ageobj.value
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

    // Logout hack, prevents window.onload overwriting
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.setItem("loggedin", "false")
        window.location.href = "http://127.0.0.1:5500/index.html"
    })
}
