import React from "react";
import "./App.css";
import { PokemonCard } from "./components/pokemon-card";
import Grid from "@mui/material/Grid";
import pokemons from "./service/pokedex.json";
import MissingAssetIcon from "./assets/missing-asset-icon.jpg";

function App() {
  const getPokemonImageName = (id: number) => {
    let idString = id.toString();
    while (idString.length < 3) {
      idString = "0" + idString;
    }
    return idString;
  };

  const getPokemonImage = (id: number) => {
    try {
      return require(`./assets/images/${getPokemonImageName(id)}.png`);
    } catch (error) {
      return MissingAssetIcon;
    }
  };

  return (
    <Grid
      columns={{ xs: 12, sm: 6, md: 4 }}
      spacing={2}
      container
      direction="row"
      alignItems="flex-start"
    >
      {pokemons.map((pokemon) => {
        return (
          <Grid item>
            <PokemonCard
              name={pokemon.name.english}
              image={getPokemonImage(pokemon.id)}
              types={pokemon.type}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default App;
