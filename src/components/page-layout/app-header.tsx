import Typography from "@mui/material/Typography";

export const AppHeader = () => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: "bold",
        background:
          "-webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(7,53,150,1) 54%, rgba(0,212,255,1) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      My Pokédex
    </Typography>
  );
};
