const pokedex = document.querySelector(".container");

for (let i = 1; i <= 151 ; i++) {
  const pokemon = document.createElement("img")
  pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  pokedex.appendChild(pokemon);
};


