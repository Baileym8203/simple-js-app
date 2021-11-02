for (i = 0; i < 1000; i++) {
console.log(i)
}









let tetrisRepository = (function() {
    let tetrisList = [
        {name: 'block', timer: 12.0},
        {name: 'square', timer: 7.0},
        {name: 'brick', timer: 20.0},
        {name: 'circle', timer: 25.0}];


function add(tetris) {
tetrisList.push(tetris);
}

function getAll() {
return tetrisList;
}
return {
add: add,
getAll: getAll
};
})();


tetrisRepository.getAll().forEach(function(tetris) {
document.write('<li>')
document.write(tetris.name + ' ' + tetris.timer + ' ' + ' seconds');
if (tetris.timer >= 10 && tetris.timer <= 20) {
console.log(tetris.name + ' is bigg!!!');
} else if (tetris.timer >= 0 && tetris.timer <=10) {
console.log(tetris.name + ' is little');
} else {
console.log(tetris.name + ' is hugeee!!');
 }
});

tetrisRepository.getAll().forEach(function(tetris) {
document.write('<li>')
if (tetris.timer >=10 && tetris.timer <= 20) {
document.write(tetris.name + ' is bigg!!');
} else if (tetris.timer >= 10 && tetris.timer <=10) {
 document.write(tetris.name + ' is little');
} else {
 document.write(tetris.name + ' is hugeee!!');
}
});

console.log(tetrisRepository);
console.log(tetrisRepository.getAll());
console.log(tetrisRepository.add({name: 'left', timer: 2.0 }));



document.querySelectorAll('img');

//let element = document.querySelector('.bob');
//element.parentElement; // Get the parent node of the element
//element.nextElementSibling; // Get the next sibling element, or null if it’s the last one
//element.previousElementSibling; // Get the previous sibling element, or null if it’s the first one
//element.firstElementChild; // The first child of the element
//element.lastElementChild; // The last child of the element
//element.childElementCount; // The number of children this element has
//element.children; // (IMPORTANT: Not recommended) The direct children of this element

let mainTitle = document.querySelector('h1');
console.log(mainTitle.innerText); // -> <h1></h1>
mainTitle.innerText = 'THIS IS EPIC';
console.log(mainTitle.innerText); // -> <h1>THIS IS EPIC</h1>

let container = document.querySelector('.container');
container.innerHTML = '<button>Click Me</button>';
console.log(container.innerHTML);

//-- HTML --
//<div class='container'>
  //<p>This is a paragraph</p>
//</div>

//-- JAVASCRIPT --
//let elementToRemove = document.querySelector('p');
//elementToRemove.parentElement.removeChild(elementToRemove);