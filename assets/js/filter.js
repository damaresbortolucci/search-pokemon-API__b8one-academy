/* funções para popular os button types de pokemons por meio de chamada a api */

/* ================ POPULAR OS FILTROS DE TYPES DE POKEMONS =================*/


/* traz os types de pokemons */
async function fetchPokemonsTypes(){
  const response = await fetch("https://pokeapi.co/api/v2/type");
  const responseJsonType = await response.json();
  return responseJsonType.results
}

/* popula array de types */
function populateFilterListTypes(TypesPokemons){
  const types = []

  for (const typePokemon of TypesPokemons) {
      types.push(typePokemon.name)
  }

  return insertPokemonTypeHtml(types);
}


/* insere button de cada type no html */
function insertPokemonTypeHtml(types){

  const pokemonTypeUl = document.querySelector(".pokemon-filter-list");

  for (const type of types) {

      let typeLi = `
      <li class="pokemon-filter-item">
          <button class="pokemon-filter-button" data-pokemon-type-name= ${type}>
              ${type}
          </button>
      </li>
      `
      pokemonTypeUl.insertAdjacentHTML("beforeend", typeLi)
  }
}


/* 
add à função main()

const TypesPokemons = await fetchPokemonsTypes();
populateFilterListTypes(TypesPokemons);

*/