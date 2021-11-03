let pokemonRepository = (function () {
let pokemonList = [{name: 'bulbassour', height: 12, type: 'nature'},
{name: 'charmander', height: 10, type:'fire'},
{name:'eve', height: 30, type: ['shock', 'water','fire']}];

function add(pokemon) {
  pokemonList.push(pokemon);
}
  
 function getAll() {
  return pokemonList;
 }

 function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = (pokemon.name);
  button.classList.add('button-class');
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  button.addEventListener('click', function() {showDetails(pokemon)});
}
 function showDetails(pokemon) {
   console.log(pokemon)
 }
   return {
add: add,
getAll: getAll,
addListItem: addListItem
};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'pikachu', height: 7, type: 'shock'});
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

document.querySelector('.show-more').addEventListener('click', function () {
  document.querySelector('.additional-information')
    .classList.toggle('is-visible');
});