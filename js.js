for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item")
    div.textContent = i + 1
    document.querySelector(".grid-container").appendChild(div)
}