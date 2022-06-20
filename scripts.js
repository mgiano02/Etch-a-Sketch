// Selects container div
const container = document.querySelector('#container');

// Create 4 divs to be used as rows
const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');

// Creates and selects 16 divs
// const div1 = document.createElement('div');
// const div2 = document.createElement('div');
// const div3 = document.createElement('div');
// const div4 = document.createElement('div');
// const div5 = document.createElement('div');
// const div6 = document.createElement('div');
// const div7 = document.createElement('div');
// const div8 = document.createElement('div');
// const div9 = document.createElement('div');
// const div10 = document.createElement('div');
// const div11 = document.createElement('div');
// const div12 = document.createElement('div');
// const div13 = document.createElement('div');
// const div14 = document.createElement('div');
// const div15 = document.createElement('div');
// const div16 = document.createElement('div');

// container.appendChild(row1);
// container.appendChild(row2);
// container.appendChild(row3);
// container.appendChild(row4);

// Inserts divs into container div as children
// row1.appendChild(div1);
// row1.appendChild(div2);
// row1.appendChild(div3);
// row1.appendChild(div4);
// row2.appendChild(div5);
// row2.appendChild(div6);
// row2.appendChild(div7);
// row2.appendChild(div8);
// row3.appendChild(div9);
// row3.appendChild(div10);
// row3.appendChild(div11);
// row3.appendChild(div12);
// row4.appendChild(div13);
// row4.appendChild(div14);
// row4.appendChild(div15);
// row4.appendChild(div16);

// Adds text to each child div
// div1.textContent = "1";
// div2.textContent = "2";
// div3.textContent = "3";
// div4.textContent = "4";
// div5.textContent = "5";
// div6.textContent = "6";
// div7.textContent = "7";
// div8.textContent = "8";
// div9.textContent = "9";
// div10.textContent = "10";
// div11.textContent = "11";
// div12.textContent = "12";
// div13.textContent = "13";
// div14.textContent = "14";
// div15.textContent = "15";
// div16.textContent = "16";

// Next steps
// Create 4 rows and put divs in them

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

const box = document.querySelectorAll('.grid');

// Add hover effect
box.forEach(box => {
    box.addEventListener('mouseover', function(){
        box.classList.add('hovered');
    });
});

// Add button popup
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    let num =prompt("How many squares per side did you want to play with?", "16");
        if (num > 1) {
            console.log("Add in commented part below this once loop is created");
         }
})

//     i = num;
        // } else {
        //     alert("Please enter a suitable number!");