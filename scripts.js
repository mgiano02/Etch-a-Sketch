const container = document.querySelector('#container');

// Loop that creates grid
function mkGrid() {
    for(let i = 1; i <= 16; i++){
        let row = document.createElement('div');
        container.appendChild(row);
        row.classList.add('section');
        for (let j = 1; j <= 16; j++){
            let box = document.createElement('div');
            box.classList.add('grid');
            row.appendChild(box);
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

const btn = document.querySelector('#btn');

// Button popup event - Gives prompt
btn.addEventListener('click', function(){
    let num = prompt("How many squares per side did you want to play with?", "16");
        if (num > 1 && num <= 100) {
            // Removes old grid
            const allGrid = document.querySelectorAll('.section', '.grid');
            allGrid.forEach(allGrid => {
                allGrid.remove();
            });
            // Makes new grid
            for(let i = 1; i <= num; i++){
                let row = document.createElement('div');
                container.appendChild(row);
                row.classList.add('section');
                for (let j = 1; j <= num; j++){
                    let box = document.createElement('div');
                    box.classList.add('grid');
                    row.appendChild(box);
                    box.style.width = "100%";
                    let dimensions = 500 / parseInt(num);
                    box.style.height = `${dimensions}px`;
                    box.style.width = `${dimensions}px`;
                }
            }
            // Add hover for new grid
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
