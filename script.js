// JS function 
//      to dinamically create 25x25 grid
const canvas = document.querySelector('#canvas')
for (let i = 0; i < 25; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 25; j++){
        const grid = document.createElement('div')
        grid.classList.add('grid')
        row.appendChild(grid)
    }
    canvas.appendChild(row)

}
// Connect it to the input of #range
//      NOTE its return value is string
const range = document.querySelector('#range');
let value = range.addEventListener('click', ()=>{
    value = range.value;
    console.log(value)
    return value;
})


// Make grids colored when mouse down
//      switch
// Randomise color