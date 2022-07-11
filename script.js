window.addEventListener('DOMContentLoaded', (event) => {
    

//const canvas = document.querySelector('#canvas');
// Connect it to the input of #range
//      NOTE its return value is string
//      remove grids of previous input
//     LATER:
//      remove colored grids of previous input
    const range = document.querySelector('#range');
    let value = range.value;

    createGrids(value);
    let grids = document.querySelectorAll('.grid')
    grids.forEach(grid => grid.addEventListener('mousedown', paintGrid));

    range.addEventListener('click', ()=>{
        // remove grid of previous input
        removeGrids();
        value = range.value;
        //return value;
        createGrids(value);
    })


});     

// [] Make grids colored when mouse down
//      using classList.switch(?)

// []Randomise color - IDEA pride month edition - colors always change

// FUNCTIONS
// JS function 
//      to dinamically create 25x25 grid
function createGrids(value){
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
    
}
function removeGrids(){
    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
     }
}

function paintGrid(e){
    e.target.setAttribute('style', 'background-color: black;')
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', ()=>{
        grid.setAttribute('style', 'background-color: black;')
     }));
    //grids.forEach(grid => grid.addEventListener('mouseover', paint()));
    // grids.forEach(grid => grid.addEventListener('mouseup', (e)=> {
    //     grid.removeEventListener('mouseover')
    // }));
}
// DOESNT WORK ON DIFFERENT GRIDS
// not that it worked anyways... i couldnt remove anonym function