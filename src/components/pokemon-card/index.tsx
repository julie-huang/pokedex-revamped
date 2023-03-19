import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TypeBadge } from "./type-badge";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface PokemonProps {
  name: string;
  image: string;
  types: string[];
}

export const PokemonCard = (pokemon: PokemonProps) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 200, padding: 3 }}>
      <CardMedia image={pokemon.image} title={pokemon.name} component="img" />
      <CardContent>
        <Typography variant="h4">{pokemon.name}</Typography>
        <Box mt={2} display="flex" flexDirection="column" alignItems="center">
          <Stack spacing={1}>
            <Typography variant="h6">Type</Typography>
            <Stack direction="row" spacing={1}>
              {pokemon.types.map((type, index) => {
                return <TypeBadge type={type} id={`${type}-${index}`} />;
              })}
            </Stack>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
