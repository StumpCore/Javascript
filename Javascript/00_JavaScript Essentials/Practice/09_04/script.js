/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

// get the grid
const gridContainer = document.querySelector(".container");

//change the grid

gridContainer.addEventListener('mouseenter', ()=>{
    gridContainer.style.backgroundColor = "red";
    gridContainer.style.outline = "3px solid black";
})

gridContainer.addEventListener('mouseleave', ()=>{
    gridContainer.style.backgroundColor = "white";
    gridContainer.style.outline = "None";
})

//Get every item in GridContainer
const gridCells = document.querySelectorAll(".cell");
gridCells.forEach(cell => {
    cell.addEventListener('mouseenter', ()=>{
        cell.style.backgroundColor = "green";
        cell.style.outline = "5px solid black";
        cell.innerText = "Touched."
    })

    gridContainer.addEventListener('mouseleave', ()=>{
        cell.style.backgroundColor = "hsl(0, 0%, 90%)";
        cell.style.outline = "None";
        cell.innerText = null;
    })
});