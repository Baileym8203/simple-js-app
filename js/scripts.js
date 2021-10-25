let pokemonList = [
{name: 'bulbassour', height: 12, type: 'nature'},
{name: 'charmander', height: 10, type:'fire'},
{name:'eve', height: 30, type: ['shock', 'water','fire']}];

console.log(pokemonList);
console.log(pokemonList[0].name);
console.log(pokemonList[1].name);
console.log(pokemonList[2].name);
console.log(pokemonList[0].type);
console.log(pokemonList[1].type);
console.log(pokemonList[2].type);

for (let i = 0; i < pokemonList.length; i++){
if (pokemonList[i].height > 15 && pokemonList[i].height > 17){
  console.log(pokemonList[i].name + ' is a juvinille!' );
} else if (pokemonList[i].height > 20 && pokemonList[i].height > 25 || pokemonList[i].height > 28){
console.log(pokemonList[i].name + ' is fully evolved!')
} else
 console.log(pokemonList[i].name + ' is a baby!');
}
for (let i = 0; i < pokemonList.length; i++){
  document.write('<li>')
  document.write(pokemonList[i].name + ' - Height: ' + pokemonList[i].height +'m');
  if (pokemonList[i].height > 12) document.write("   Wow, thats tall!");
  document.write("</li>");
}
