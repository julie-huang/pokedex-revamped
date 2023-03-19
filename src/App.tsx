import "./App.css";
import { useEffect, useState } from "react";
import { PageLayout } from "./components/page-layout";
import PokemonList from "./components/pokemon-list";
import { PokemonSearchFilters } from "./components/pokemon-search-filters";
import { fetchPokemonData, Pokemon } from "./service";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [typeFilter, setTypeFilter] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemon = await fetchPokemonData();
      setPokemonList(pokemon);
    };
    fetchPokemon();
  }, []);

  const filteredPokemonList = pokemonList.filter((pokemon) => {
    return (
      pokemon.name.english.toLowerCase().includes(searchQuery.toLowerCase()) &&
      typeFilter.every((type) => pokemon.type.includes(type))
    );
  });

  return (
    <PageLayout>
      <PokemonSearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setTypeFilter={setTypeFilter}
      />
      <PokemonList pokemons={filteredPokemonList} />
    </PageLayout>
  );
};

export default App;
