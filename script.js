window.addEventListener('DOMContentLoaded', (event) => {
    //const canvas = document.querySelector('#canvas');
    const range = document.querySelector('#range');
    let value = range.value;

    // Create initial grid
    createGrids(value);
    let grids = document.querySelectorAll('.grid')
    grids.forEach(grid => grid.addEventListener('mousedown', paintGrids));

    // Adjust grids to range value
    range.addEventListener('click', ()=>{
        // remove grid of previous input
        removeGrids();
        value = range.value;
        // Create grid according to range input
        createGrids(value);
        grids = document.querySelectorAll('.grid')
        grids.forEach(grid => grid.addEventListener('mousedown', paintGrids));
    })


});

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

function paintGrids(e){
    let grids = document.querySelectorAll('.grid');
    // Paint clicked grid
    paintGrid(e);
    
    // Paint hovered grids
    //NOTE: there is paintGrid and paintGrids!
    grids.forEach(grid => grid.addEventListener('mouseover', paintGrid));
    function paintGrid(e){
        e.target.setAttribute('style',
         'background-color: darkslateblue; border: .1px darkslateblue solid;')
     };
     // Stop painting when mouse up
     grids.forEach(grid => grid.addEventListener('mouseup', stopPainting));
     function stopPainting() {
        grids.forEach(grid => grid.removeEventListener('mouseover', paintGrid))
    };
}
// DOESNT WORK ON DIFFERENT GRIDS
// not that it worked anyways... i couldnt remove anonym function
// Hey! no worries, yesterday me, i fixed at least that one :)