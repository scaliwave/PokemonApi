import { useEffect, useState } from "react";
import * as PokemonApi from "../API/PokemonApi";

import { PokemonItem } from "../components/PokemonItem";

export function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  const listPokemon = async () => {
    try {
      const res = await PokemonApi.listPokemon();
      const data = await res.json();
      setPokemons(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    listPokemon();
  }, []);

  return (
    <div className="row">
      {pokemons.map((pokemon) => {
        return <PokemonItem name={pokemon.name} key={pokemon.id} />;
      })}
    </div>
  );
}
