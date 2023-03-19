import { PokemonCard } from "../pokemon-card";
import pokemons from "../../service/pokedex.json";
import {
  LazyLoadComponent,
  trackWindowScroll,
  ScrollPosition,
} from "react-lazy-load-image-component";
import Grid from "@mui/material/Grid";

interface PokemonListProps {
  scrollPosition: ScrollPosition;
}

const PokemonList = ({ scrollPosition }: PokemonListProps) => {
  return (
    <Grid
      columns={{ xs: 12, sm: 6, md: 3 }}
      spacing={2}
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
    >
      {pokemons.map((pokemon) => {
        return (
          <LazyLoadComponent scrollPosition={scrollPosition} key={pokemon.id}>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name.english}
              types={pokemon.type}
              key={pokemon.id}
              scrollPosition={scrollPosition}
            />
          </LazyLoadComponent>
        );
      })}
    </Grid>
  );
};

export default trackWindowScroll(PokemonList);
