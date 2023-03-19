import { Pokemon } from "../service";

const checkPokemonNameMatch = (pokemon: Pokemon, name: string) => {
  return pokemon.name.english.toLowerCase().includes(name.toLowerCase());
};

const checkPokemonTypeMatch = (pokemon: Pokemon, types: string[]) => {
  return types.every((t) => pokemon.type.includes(t));
};

const filterPokemonListByNameAndType = (
  pokemonList: Pokemon[],
  name: string,
  types: string[]
) =>
  pokemonList.filter((pokemon) => {
    return (
      checkPokemonNameMatch(pokemon, name) &&
      checkPokemonTypeMatch(pokemon, types)
    );
  });

export {
  checkPokemonNameMatch,
  checkPokemonTypeMatch,
  filterPokemonListByNameAndType,
};
