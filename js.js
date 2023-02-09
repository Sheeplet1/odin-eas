const gridSizeInput = document.querySelector("#grid-size");
const createGrid = document.querySelector("#create-grid");
const gridContainer = document.querySelector(".grid-container");

// create grid button function
createGrid.addEventListener("click", () => {
    // reset grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    // get grid input from user input as integer
    const gridSize = parseInt(gridSizeInput.value);
    
    // set grid template
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // create grid 
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.textContent = i + 1;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "yellow";
        })
        gridContainer.appendChild(div);
    }
})