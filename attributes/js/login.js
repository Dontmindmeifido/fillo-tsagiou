window.onload = () => {
    document.getElementById("submit").addEventListener("click", () => {
        let login = document.getElementById("login").value
        let password = document.getElementById("password").value

        const xhr = new XMLHttpRequest()
        xhr.open("GET", "http://127.0.0.1:5500/attributes/data/user_login_data.json", false) // false for no ascynchroneity
        let jsonResponse = ""
        xhr.onload = function() {
                jsonResponse = xhr.responseText
        }
        xhr.send()

        let login_data = JSON.parse(jsonResponse)

        for (let i = 0; i < login_data.data.login.length; i++) {
            if (login_data.data.login[i] == login && login_data.data.password[i] == password) {
                window.location.href = "http://127.0.0.1:5500/main.html"
                document.getElementById("response").style = "visibility: hidden; position: absolute;"
                localStorage.setItem("loggedin", "true")
                return
            }
        }

        document.getElementById("response").style = "visibility: visible; position: relative;"
    })

    document.addEventListener("keypress", (event) => {
        if (event.key == "Enter") {
            let login = document.getElementById("login").value
            let password = document.getElementById("password").value

            const xhr = new XMLHttpRequest()
            xhr.open("GET", "http://127.0.0.1:5500/attributes/data/user_login_data.json", false) // false for no ascynchroneity
            let jsonResponse = ""
            xhr.onload = function() {
                    jsonResponse = xhr.responseText
            }
            xhr.send()

            let login_data = JSON.parse(jsonResponse)

            for (let i = 0; i < login_data.data.login.length; i++) {
                if (login_data.data.login[i] == login && login_data.data.password[i] == password) {
                    window.location.href = "http://127.0.0.1:5500/main.html"
                    document.getElementById("response").style = "visibility: hidden; position: absolute;"
                    localStorage.setItem("loggedin", "true")
                    return
                }
            }

            document.getElementById("response").style = "visibility: visible; position: relative;"
        }
    })
}