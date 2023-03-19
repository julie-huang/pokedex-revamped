import "./App.css";
import { useState } from "react";
import { PageLayout } from "./components/page-layout";
import PokemonList from "./components/pokemon-list";
import pokemons from "./service/pokedex.json";
import { PokemonSearchFilters } from "./components/pokemon-search-filters";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemonList] = useState(pokemons);
  const [typeFilter, setTypeFilter] = useState([]);

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
