
// Tarea(clase 77 - ada online)
// 1. Convertir el fetch en un async / await
// 2. Recibir el input del usuario y mostrar el pokemon correspondiente 
// 3. PUNTOS EXTRA asignar las variables con destructuring 

const form = document.querySelector('form')
const valorIngresado = document.querySelector('.valor-ingresado')


buscarPokemon = async (pokemonABuscar) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonABuscar}`)
  const result = await data.json()
console.log(result)
  const { name, id, sprites: { front_default }, types } = result 
  
  const pokemon = {
    name: name,
    id: id,
    image: front_default,
    type: types.map(t => t.type.name).join(', '),
  };
  displayPokemon(pokemon);
}

const displayPokemon = pokemon => {
  const pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = `
  <li class="card">
      <img class="card-image" src="${pokemon.image}"/>
      <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
      <p class="card-subtitle">Type: ${pokemon.type}</p>
  </li>
  `;
};

form.onsubmit = e => {
  e.preventDefault();
  buscarPokemon(valorIngresado.value);
}
