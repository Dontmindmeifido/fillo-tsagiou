if (localStorage.getItem("loggedin") == "true") {
    // Great!
} else {
    window.location.href = "http://127.0.0.1:5500/index.html"
}

window.onload = () => {
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.setItem("loggedin", "false")
        window.location.href = "http://127.0.0.1:5500/index.html"
    })
}