
const createGridButton = document.querySelector("#create-grid");
const gridContainer = document.querySelector(".grid-container");

function getGridSize() {
    gridSizeInput = prompt("Please provide grid size")
    alert(gridSizeInput);
    return gridSizeInput;
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.textContent = i + 1;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "yellow";
        })
        gridContainer.appendChild(div);
    }
}

function resetGrid(gridSize) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
};

// create grid button function
createGridButton.addEventListener("click", () => {
    const gridSize = getGridSize();
    
    // reset grid
    resetGrid(gridSize);

    // create grid 
    createGrid(gridSize);
})