// JS function 
//      to dinamically create 25x25 grid
const canvas = document.querySelector('#canvas')
for (let i = 0; i < 25; i++){
const grid = document.createElement('div')
grid.classList.add('grid')
canvas.appendChild(grid)
}
// Connect it to the input of #range
//      NOTE its return value is string
// Make grids colored when mouse down
//      switch
// Randomise color