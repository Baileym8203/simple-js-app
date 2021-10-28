let pokemonList = [
{name: 'bulbassour', height: 12, type: 'nature'},
{name: 'charmander', height: 10, type:'fire'},
{name:'eve', height: 30, type: ['shock', 'water','fire']}];

pokemonList.forEach (function(pokemon){
if (pokemon.height >= 15 && pokemon.height <= 17){
  console.log(pokemon.name + ' is a juvinille!' );
} else if (pokemon.height > 20 && pokemon.height > 25 || pokemon.height > 28){
console.log(pokemon.name + ' is fully evolved!')
} else {
 console.log(pokemon.name + ' is a baby!');
};
 pokemonList.forEach(function(pokemon){
  document.write('<ul>');
  document.write(pokemon.name + ' - Height: ' + pokemon.height +'m');
  if (pokemon.height > 12) document.write("   Wow, thats tall!");
  document.write("</ul>");
 }
)});

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

return {
add: add,
getAll: getAll
};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'pikachu', height: 7, type: 'shock'});
console.log(pokemonRepository.getAll());