export interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
}

export interface PokemonType {
  english: string;
  japanese: string;
  chinese: string;
}

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
