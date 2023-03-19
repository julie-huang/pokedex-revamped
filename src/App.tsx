import { useEffect, useState } from "react";
import PokemonList from "./components/pokemon-list";
import { CirularSpinner } from "./components/circular-spiinner";
import { PageLayout } from "./components/page-layout";
import { PokemonSearchFilters } from "./components/pokemon-search-filters";
import { fetchPokemonData, Pokemon } from "./service";
import { filterPokemonListByNameAndType } from "./utils";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const isReady = pokemonList.length > 0;

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemon = await fetchPokemonData();
      setPokemonList(pokemon);
    };
    fetchPokemon();
  }, []);

  const filteredPokemonList = filterPokemonListByNameAndType(
    pokemonList,
    searchQuery,
    typeFilter
  );

  return (
    <PageLayout>
      <PokemonSearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setTypeFilter={setTypeFilter}
      />
      {isReady ? (
        <PokemonList pokemons={filteredPokemonList} />
      ) : (
        <CirularSpinner size={100} />
      )}
    </PageLayout>
  );
};

export default App;
