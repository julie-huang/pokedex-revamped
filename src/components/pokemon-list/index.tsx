import {
  LazyLoadComponent,
  trackWindowScroll,
  ScrollPosition,
} from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => {
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
        })
      ) : (
        <Box py={2}>
          <Typography>No results</Typography>
        </Box>
      )}
    </Grid>
  );
};

export default trackWindowScroll(PokemonList);
