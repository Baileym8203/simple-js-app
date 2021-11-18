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
  pokemonList.classList.add('group-list')
  let listPokemon = document.createElement('li');
  listPokemon.classList.add('group-list-item')
  let button = document.createElement('button');
  button.innerText = (pokemon.name);
  button.classList.add('button-class');
  button.setAttribute("data-target", "#exampleModal");
  button.setAttribute("data-toggle", "modal");


  button.classList.add('btn-light')
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

function showModal(item) {
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");
  let modalHeader = $(".modal-header");
  modalHeader.empty();
  modalTitle.empty();
  modalBody.empty();
  //modalHeader.empty();
  // creating element for name in modal \\
  let nameElement = $("<h1>" + item.name + "</h1>");
  // creating the image in modal content
  let imageElementFront = $('<img class="modal-img" style="width:50%">');
  imageElementFront.attr("src", item.imageUrl);
  // creating element for height in modal content \\
  let heightElement = $("<p>" + "height : " + item.height + "</p>");
  // creating element for the weight in the modal content \\
  let typesElement = $(
      "<p>" + "types : " + item.types.map((t) => t.type.name).join(",") + "</p>"
    );
 
  modalTitle.append(nameElement);
  modalBody.append(imageElementFront);
  modalBody.append(heightElement);
  modalBody.append(typesElement);
  
 }

  return {
    
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    
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
