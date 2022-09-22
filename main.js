const container = document.querySelector('#container');

for (let i = 0; i <= 32; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('item');
    container.appendChild(newDiv);
}

