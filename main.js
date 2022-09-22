const container = document.querySelector('#container');

for (let i = 0; i <= 32; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.style.height = '20px';
    newDiv.style.width = '20px';
    container.appendChild(newDiv);
}

const items = document.querySelectorAll('.item');

//When you hover over the grid, you change the div background color
items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    });
    
});

