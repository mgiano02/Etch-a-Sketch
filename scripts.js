// Selects container div
const container = document.querySelector('#container');

// Loop that creates grid
function mkGrid() {
    for(let i = 1; i <= 16; i++){
        let col = document.createElement('div');
        container.appendChild(col);
        col.classList.add('section');
        for (let j = 1; j <= 16; j++){
            let box = document.createElement('div');
            box.classList.add('grid');
            box.innerText = '---------------';
            col.appendChild(box);
        }
    }
}

mkGrid();

const box = document.querySelectorAll('.grid');

// Add hover effect
const hover = box.forEach(box => {
    box.addEventListener('mouseover', function(){
        box.classList.add('hovered');
    });
});

// Add button popup
const btn = document.querySelector('#btn');

// Button popup event - Gives prompt
btn.addEventListener('click', function(){
    let num = prompt("How many squares per side did you want to play with?", "16");
        if (num > 1 && num <= 100) {
            remove();
            // Make new grid and new hover
            for(let i = 1; i <= num; i++){
                let col = document.createElement('div');
                container.appendChild(col);
                col.classList.add('section');
                for (let j = 1; j <= num; j++){
                    let box = document.createElement('div');
                    box.classList.add('grid');
                    box.innerText = '---------------';
                    col.appendChild(box);
                }
            }
            const box2 = document.querySelectorAll('.grid');
            box2.forEach(box => {
                box.addEventListener('mouseover', function(){
                    box.classList.add('hovered');
                });
            });
        } else {
            alert("Please enter a suitable number!");
         }
})

const allGrid = document.querySelectorAll('.section', '.grid');

// Function that removes the grid
function remove() {
    allGrid.forEach(allGrid => {
        allGrid.remove();
    });
};


// Next Steps
// Make button event remove existing grid
// - Function that removes div elements that make up the grid
// -- Select all columns and grid box
// -- Remove them
    // Add new grid with new number of squares
    // - Function that starts the loop again with enters nuumber of squares
    // Confirm dimensions