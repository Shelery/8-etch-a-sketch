const canvas = document.querySelector('#canvas');
// Connect it to the input of #range
//      NOTE its return value is string
//      remove grids of previous input
//     LATER:
//      remove colored grids of previous input
const range = document.querySelector('#range');
let value = range.addEventListener('click', ()=>{
    // remove grid of previous input
    removeGrids();
    value = range.value;
    console.log(value)
    //return value;
    
    for (let i = 0; i < value; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < value; j++){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);
        }
        canvas.appendChild(row);
}
})
// JS function 
//      to dinamically create 25x25 grid




// Make grids colored when mouse down
//      using classList.switch(?)
// Randomise color

// FUNCTIONS
function removeGrids(){
    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
     }
}