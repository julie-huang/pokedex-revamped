import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TypeBadge } from "./type-badge";
import Stack from "@mui/material/Stack";

type PokemonProps = {
  name: string;
  image: string;
  types: string[];
};

export const PokemonCard = (pokemon: PokemonProps) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 250 }}>
      <CardMedia image={pokemon.image} title={pokemon.name} component="img" />
      <CardContent>
        <Typography>{pokemon.name}</Typography>
        <Typography variant="h2">Type</Typography>
        <Stack direction="row" spacing={1}>
          {pokemon.types.map((type, index) => {
            return <TypeBadge type={type} id={`${type}-${index}`} />;
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};
