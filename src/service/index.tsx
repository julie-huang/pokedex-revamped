import { Pokemon, PokemonType } from "../types";

const fetchPokemonData = async (): Promise<Pokemon[]> => {
  const result = await fetch(
    "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
  );
  const data = await result.json();
  return data as Pokemon[];
};

const fetchPokemonTypeList = async (): Promise<PokemonType[]> => {
  const result = await fetch(
    "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json"
  );
  const data = await result.json();
  return data as PokemonType[];
};

export { fetchPokemonData, fetchPokemonTypeList };
