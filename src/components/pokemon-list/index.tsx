import {
  LazyLoadComponent,
  trackWindowScroll,
  ScrollPosition,
} from "react-lazy-load-image-component";
import Grid from "@mui/material/Grid";
import { PokemonCard } from "../pokemon-card";

type Pokemon = {
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
};

type PokemonListProps = {
  scrollPosition: ScrollPosition;
  pokemons: Pokemon[];
};

const PokemonList = ({ scrollPosition, pokemons }: PokemonListProps) => {
  return (
    <Grid
      columns={{ xs: 12, sm: 6 }}
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
