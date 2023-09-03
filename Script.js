const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos',
    'Elon Musk',
    'Bernard Arnold',
    ',Musk Zukerburg',
    'Warren Buffet',
    'Larry Ellison',
    'Larry page',
    'Sergey Brin',
];

const listItems = [];

let dragStartIndex;

createList();

function createList(){
    [...richestPeople]
    .map(a =>({value:a, sort: Math.random() }))
    .forEach((person, index) => {
        console.log(person);
    const listItem = document.createElement('li');
    
    listItem.setAttribute('data-index', index);

    listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable = "true">
        <p class"person-name">${person}</p>
        <i class="fa-solid fa-grip-lines"></i>
    </div>`;

    listItems.push(listItem);
    draggable_list.appendChild(listItem);

})
}




