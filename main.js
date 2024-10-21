const sketchArea = document.getElementById('sketchArea');
const resetBtn = document.getElementById('resetBtn');
let isDrawing = false;  // Track if the mouse is held down

// Function to remove all child nodes from an element
function clearGrid() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

// Function to create a grid
function createGrid(size) {
    clearGrid(); // Makes sure the grid is clear.

    sketchArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        // Add event listener for mouseover to "draw" on the grid
        cell.addEventListener('mouseover', () => {
            if (isDrawing) {
                cell.style.backgroundColor = 'black'; // Change color when hovered over
            }
        });

        sketchArea.appendChild(cell); // Append each cell to the grid
    }
}

// Detect when the mouse button is pressed and released
sketchArea.addEventListener('mousedown', () => {
    isDrawing = true; // Enable drawing
});

document.addEventListener('mouseup', () => {
    isDrawing = false; // Disable drawing
});

// Reset button functionality
// We did this differently in the lecture where we re-rendered the whole thing instead.
resetBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
});

// Initial grid creation
createGrid(16); // 16x16 grid as default