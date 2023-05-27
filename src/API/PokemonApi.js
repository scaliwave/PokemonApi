const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

//function listPokemon
export const listPokemon = async () => {
    return await fetch(API_URL);
}

//get pokemon by id
export const getPokemonByName = async (name) => {
    return await fetch(API_URL, name);
}
