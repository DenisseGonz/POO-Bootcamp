//Ahora creamos los objetos a partir de la clase

const Charmander = new Pokemon('Charmander','Fire', ['Charmeleon','Charizard']);
const Squirtle = new Pokemon('Squirtle','Water', ['Wartortle','Blastoise']);

console.log(`${Charmander.name} es un pokemon de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));
console.log(Charmander.attack());

console.log(`${Squirtle.name} es un pokemon de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));