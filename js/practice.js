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

//let container = document.querySelector('.container');
//container.innerHTML = '<button>Click Me</button>';
//console.log(container.innerHTML);

//-- HTML --
//<div class='container'>
//<p>This is a paragraph</p>
//</div>

//-- JAVASCRIPT --
//let elementToRemove = document.querySelector('p');
//elementToRemove.parentElement.removeChild(elementToRemove);

 let pokemon1 = document.querySelector('p');
console.log(pokemon1.innerText);
pokemon1.innerText = 'No Way this just can\'t be real!!!!';
console.log(pokemon1.innerText);



let tetrisExtra = (function() {
let tetrisArray = [
{name: 'hello', timer: 2 },
{name: 'square', timer: 4}];

function add(tetris) {
tetrisArray.push(tetris);
}

function getAll() {
return tetrisArray
}

return {
add: add,
getAll: getAll
}

})();

tetrisExtra.getAll().forEach(function(tetris) {
document.write('<li>');
if (tetris.timer >= 0 && tetris.timer <= 10) {
console.log(tetris.name + ' is a small shape!!');
} else if (tetris.timer >= 11 && tetris.timer <= 20) {
console.log(tetris.name + ' is a bigger shape');
} else {
console.log(tetris.name + ' shape is moderatly sized!!');
}
});


let tetrisGood = (function () {
let tetrisGreat = [
{name: '007', timer: 2},
{name: 'we\'ve', timer: 10},
{name: '911', timer: 15}];

function add(tetris) {
tetrisGreat.push(tetris)
}
function getAll() {
return tetrisGreat
}
return {
add: add,
getAll: getAll
  }
 }
)();

tetrisGood.getAll().forEach(function(tetris) {
document.write('<li>');
if (tetris.timer >= 0 && tetris.timer <= 10) {
console.log(tetris.name + ' is coming next!');
} else if (tetris.timer >= 11 && tetris.timer <= 20) {
console.log(tetris.name + ' is coming soon!');
} else {
console.log(tetris.name + ' is far from coming!!')
}
});

console.log(tetrisGood.getAll());
console.log(tetrisGood.add({name: 'square', timer: 20}));

console.log(tetrisGood[1]);

let paragraph = document.querySelector('p');
console.log(paragraph.innerText);
paragraph.innerText = 'There just is no way back!!'
console.log(paragraph.innerText);

document.querySelector('.show-More').addEventListener('click', function() {
document.querySelector('.num1')
.classList.toggle('notSee');
});

let counter = 1;
function numhigher() {
 counter = counter * 2
}
// async practice \\
setTimeout(function() {
console.log('first number', counter);
numhigher();
}, 10000);

let exampleEasy = new Promise(function (resolve, reject) {
  let divisor;
  setTimeout(function() {
   divisor = 6/2;
   if(divisor < 3) {
   resolve(divisor);
   } else {
   reject('this is not working as intended!');
   }
  }, 2000);
 });
 // promise practice \\
 console.log('I was walkin the other day!');
 exampleEasy.then(function(result){
 console.log(result);
 }).catch(function(error) {
   console.log(error);
 });
 console.log('I was walkin the other day!');
// JSON practice \\
 let jsonStringFromServer = '{"name":"Lisa","age":27}';
let lisa = JSON.parse(jsonStringFromServer);
console.log(lisa.name, lisa.age); // 'Lisa', 27

let john = {
  name: 'John',
  age: 31
};
let jsonString = JSON.stringify(john);
console.log(jsonString); // '{"name":"John","age":31}'
// JSOn parse makes it avalible for JSON string does the oppisite making it good for JS \\
let list = [1, 2, 3];
console.log(JSON.stringify(list)); // '[1,2,3]'
let otherList = JSON.parse('[3,4,5]'); // [3, 4, 5]
// you can use the copy to create a complete copy of a object if it DOESN"T INCLUDE FUNCTIONS! \\
let copy = JSON.parse(JSON.stringify(obj))

// www. is where you place the JSON api link \\
fetch('www.').then(function (response) {
  return response.json();
  }).then(function (pokemonList) {
    console.log(pokemonList);
  }).catch(function () {
  
  });

  fetch('https://www.youtube.com', { // finds the API \\
method: 'get' // gets the API using http response \\
}).then(function (response) { // then function is response \\
  return response.json(); // function gives the response \\
}).then(function (json) { // then function is json \\
  console.log(json); //the console logs json \\
}).catch(function () { // it then catches if it can't find the link or failed to work with an error \\

});




fetch('youtube.com', {
method: 'get'
}).then(function (response) {
return response.json();
}).then(function (json) {
console.log(json);
}).catch(function() {
return console.log('error')
});

(function() {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');
  
  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper
    
    // Remove an existing error
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    
    // Now add the error, if the message is not empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
  
  function validateEmail() { // responsive validation form password and email \\
    let value = emailInput.value;
    
    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.');
      return false;
    }
    
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }
    
    showErrorMessage(emailInput, null);
    return true;
  }
  
  function validatePassword() {
    let value = passwordInput.value;
    
    if (!value) {
      showErrorMessage(passwordInput, 'Password is a required field.');
      return false;
    }
    
    if (value.length < 8) {
      showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
      return false;
    }
    
    showErrorMessage(passwordInput, null);
    return true;
  }
  
  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  });
  
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
})();

(function() { // drawing canvas
  let canvas = document.querySelector('#canvas');
  let isDrawing = false;
  let previousX = null;
  let previousY = null;

  
  function handleStart(e) {
    isDrawing = true;
     // Initiate previousX/previousY
    let x = e.pageX; // X-coordinate of click/touch
    let y = e.pageY; // Y-coordinate of click/touch
    previousX = x;
    previousY = y;

  }

  function handleEnd() {
    isDrawing = false;
  }

  function handleMove(e) {
    // To prevent drawing on hover
    if (!isDrawing) {
      return;
    }
    
    let x = e.pageX; // X-coordinate of click/touch
    let y = e.pageY; // Y-coordinate of click/touch
   
    // This is canvas specific—we can use the context to draw shapes
    let ctx = canvas.getContext('2d');
    
    // Draw a line from previousX/previousY to x/y
    ctx.beginPath();
    ctx.moveTo(previousX, previousY);
    ctx.lineTo(x, y);
    
    // Set the style of the line
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
    
    // Set previous coordinates for next move event
    previousX = x;
    previousY = y;
  }

  canvas.addEventListener("pointerdown", handleStart);
  canvas.addEventListener("pointerup", handleEnd);
  canvas.addEventListener("pointercancel", handleEnd);
  canvas.addEventListener("pointermove", handleMove);
})();

let pokemonRepository = (function() { // modal and show diolog
  let modalContainer = document.querySelector('#modal-container');
  function showModal(title, text) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);


    modalContainer.classList.add('is-visible');
  }

  let dialogPromiseReject; // This can be set later, by showDialog

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');

    if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }

  function showDialog(title, text) {
  showModal(title, text);

  // We want to add a confirm and cancel button to the modal
  let modal = modalContainer.querySelector('.modal');

  let confirmButton = document.createElement('button');
  confirmButton.classList.add('modal-confirm');
  confirmButton.innerText = 'Confirm';

  let cancelButton = document.createElement('button');
  cancelButton.classList.add('modal-cancel');
  cancelButton.innerText = 'Cancel';

  modal.appendChild(confirmButton);
  modal.appendChild(cancelButton);

  // We want to focus the confirmButton so that the user can simply press Enter
  confirmButton.focus();
  return new Promise((resolve, reject) => {
  cancelButton.addEventListener('click', hideModal);
  confirmButton.addEventListener('click', () => {
    dialogPromiseReject = null; // Reset this
    hideModal();
    resolve();
  });
  // This can be used to reject from other functions
  dialogPromiseReject = reject;
});
}

document.querySelector('#show-dialog').addEventListener('click', () => {
  showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
    alert('confirmed!');
  }, () => {
    alert('not confirmed');
  });
});

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

})();

