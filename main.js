const container = document.querySelector('#container');

for (let i = 1; i <= 256; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.style.height = '10px';
    newDiv.style.width = '10px';
    container.appendChild(newDiv);
}

const items = document.querySelectorAll('.item');

//When you hover over the grid, you change the div background color
items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    });    
});

