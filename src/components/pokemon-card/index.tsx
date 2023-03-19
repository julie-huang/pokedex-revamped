import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TypeBadge } from "./type-badge";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { LazyLoadImage, ScrollPosition } from "react-lazy-load-image-component";

interface PokemonProps {
  id: number;
  name: string;
  types: string[];
  scrollPosition: ScrollPosition;
}

const getPokemonImageName = (id: number) => {
  let idString = id.toString();
  while (idString.length < 3) {
    idString = "0" + idString;
  }
  return idString;
};

const getPokemonImage = (id: number, scrollPosition: ScrollPosition) => {
  const pokemonImageName = getPokemonImageName(id);
  const imageUrl = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemonImageName}.png`;
  return (
    <LazyLoadImage
      height={150}
      width={150}
      src={imageUrl}
      scrollPosition={scrollPosition}
      placeholderSrc="https://via.placeholder.com/100"
    />
  );
};

export const PokemonCard = (pokemon: PokemonProps) => {
  const image = getPokemonImage(pokemon.id, pokemon.scrollPosition);
  return (
    <Grid item width={300}>
      <Card variant="outlined" sx={{ padding: 3 }}>
        {image}
        <CardContent>
          <Typography variant="h4">{pokemon.name}</Typography>
          <Box mt={2} display="flex" flexDirection="column" alignItems="center">
            <Stack spacing={1}>
              <Typography variant="h6">Type</Typography>
              <Stack direction="row" spacing={1}>
                {pokemon?.types?.map((type, index) => {
                  return (
                    <TypeBadge
                      type={type}
                      id={`${type}-${index}`}
                      key={`${pokemon.name}-${type}`}
                    />
                  );
                })}
              </Stack>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
