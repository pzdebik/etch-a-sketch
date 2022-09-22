const container = document.querySelector('#container');
const body = document.querySelector('body');

const generateButton = document.createElement('button');
generateButton.textContent = 'Generate your canvas!';
body.appendChild(generateButton);

let gridSize = 0;

generateButton.addEventListener('click', () => {
    gridSize = +prompt('Enter the amount of squares per side: ');
    makeGrid(gridSize * gridSize);
});

function makeGrid(size) {

    if (size > 10000) {
        alert('Too high, my brother. Try less than 100.');
    } else {
        for (let i = 1; i <= size; i++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.style.height = '10px';
            newDiv.style.width = '10px';
            container.appendChild(newDiv);
        }
    }

    const items = document.querySelectorAll('.item');

    //When you hover over the grid, you change the div background color
    items.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        });    
    }); 
};

const resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.textContent = "Reset";
body.appendChild(resetButton);

resetButton.addEventListener('click', () => {
    container.innerHTML = '';
});






