let pokemonRepository = (function () {
let pokemonList = []
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
function add(pokemon) {
  pokemonList.push(pokemon);
}
  
 function getAll() {
  return pokemonList;
 }

 function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('p');
  let button = document.createElement('button');
  button.innerText = (pokemon.name);
  button.classList.add('button-class');
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  button.addEventListener('click', function() {showDetails(pokemon)});
}
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
} 
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

let modalContainer = document.querySelector('#modal-container');

function showModal(pokemon) {
  modalContainer.innerHTML = '';

  let modal = document.createElement('div'); //add modal div
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button'); //add close button in modal
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'X';
  closeButtonElement.addEventListener('click', hideModal);

  let modalPokemonName = document.createElement('h1'); //add h1 in modal for pokemon name
  modalPokemonName.innerText = pokemon.name;

  let modalPokemonImg = document.createElement('img'); //add pokemon image in modal
  modalPokemonImg.src = pokemon.imageUrl;

  let modalPokemonHeight = document.createElement('p'); //add paragraph to display height of pokemon
  modalPokemonHeight.innerText = 'Height: ' + pokemon.height;

  modal.appendChild(closeButtonElement);
  modal.appendChild(modalPokemonName);
  modal.appendChild(modalPokemonImg);
  modal.appendChild(modalPokemonHeight);

  pokemon.types.forEach(item => {
        let modalPokemonTypes = document.createElement('p'); //add paragraphs to display types of pokemon
        modalPokemonTypes.innerText = ('Type: ') + item.type.name;
        modal.appendChild(modalPokemonTypes);
    });

  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible'); //when showModal function runs, the class is-visible is added to modal to display it via css
}

function hideModal() {
  modalContainer.classList.remove('is-visible'); //when hideModal function runs, the class is-visible is removed from modal to stop displaying it via css
}

window.addEventListener('keydown', (e) => { //run hideModal function when using Escape key if modal is currently visible
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => { //run hideModal function when clicking outside of modal if modal is currently visible
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
// Now the data is loaded!
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
});
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
  if (pokemon.height >= 15 && pokemon.height <= 17){
    console.log(pokemon.name + ' is a juvinille!' );
  } else if (pokemon.height > 20 && pokemon.height > 25 || pokemon.height > 28){
  console.log(pokemon.name + ' is fully evolved!')
  } else {
   console.log(pokemon.name + ' is a baby!');
  };
});

pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
})

fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then(function (response) {
  return response.json(); // This returns a promise!
}).then(function (pokemonList) {
  console.log(pokemonList); // The actual JSON response
}).catch(function () {
  // Error
});
