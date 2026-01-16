function handle_add(parent, button) {
    button.remove()
    parent.style = "background-color: #f4e7ceff;"

    let button_remove = document.createElement("button")
    button_remove.classList.add("addcart")
    button_remove.innerHTML = "REMOVE FROM CART"

    setTimeout(() => { 
        button_remove.addEventListener("click", (event) => {
            handle_remove(parent, event.target)
        })
    }, 10)

    parent.appendChild(button_remove)



    let buttons = document.getElementsByTagName("button")
    let index = 0
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].parentElement.innerHTML == parent.innerHTML) {
            index = i
            break
        }
    }
    localStorage.setItem("cart", localStorage.getItem("cart") + index + " ")
}

function handle_remove(parent, button) {
    button.remove()
    parent.style = "background-color: rgba(219, 202, 202, 0.231);"

    let button_add = document.createElement("button")
    button_add.classList.add("addcart")
    button_add.innerHTML = "ADD TO CART"

    setTimeout(() => { 
        button_add.addEventListener("click", (event) => {
            handle_add(parent, event.target)
        })
    }, 10)

    parent.appendChild(button_add)



    let buttons = document.getElementsByTagName("button")
    let index = 0
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].parentElement.innerHTML == parent.innerHTML) {
            index = i
            break
        }
    }

    let cart = localStorage.getItem("cart").split(" ")
    let temp = ""
    for (let i = 0; i < cart.length; i++) {
        if (cart[i] != index) {
            temp += cart[i] + " "
        }
    }
    localStorage.setItem("cart", temp)
}



window.onload = () => {
    window.addEventListener("keypress", (event) => {
        if (event.key == "r") {
            localStorage.setItem("cart", "")
            alert("Local Storage Reset!") // debug
        }
    })
    

    let buttons = document.getElementsByTagName("button")

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (event) => {
            handle_add(buttons[i].parentElement, buttons[i])
            event.stopPropagation()
        })
    }

    for (let i = 0; i < localStorage.getItem("cart").split("").length; i++) {
        if (localStorage.getItem("cart").split(" ")[i] != "") {
            let button = buttons[Math.floor(localStorage.getItem("cart").split(" ")[i])]
            let parent = button.parentElement

            button.remove()
            parent.style = "background-color: #f4e7ceff;"

            let button_remove = document.createElement("button")
            button_remove.classList.add("addcart")
            button_remove.innerHTML = "REMOVE FROM CART"

            setTimeout(() => { 
                button_remove.addEventListener("click", (event) => {
                    handle_remove(parent, event.target)
                })
            }, 10)

            parent.appendChild(button_remove)
        }
    }
}