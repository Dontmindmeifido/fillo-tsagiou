let pages = new Array() // Use of array class
pages.push("index.html")
pages.push("about_us.html")
pages.push("products.html")
pages.push("locations.html")
pages.push("contacts.html")

function get_page_index(pages) {
    current = window.location.href.split("/") // Use of string class
    current = current[current.length - 1]

    for (let i = 0; i < pages.length; i++) {
        if (pages[i] == current) {
            return i
        }
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
        let next_page = get_page_index(pages) + 1

        if (next_page != pages.length) {
            window.location.href = `http://127.0.0.1:5500/${pages[next_page]}`
        }
    } else if (event.key == "ArrowLeft") {
        let next_page = get_page_index(pages) - 1

        if (next_page != -1) {
            window.location.href = `http://127.0.0.1:5500/${pages[next_page]}`
        }
    }
})