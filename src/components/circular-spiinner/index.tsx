import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

type CirularSpinnerProps = {
  size: number;
};

export const CirularSpinner = ({ size }: CirularSpinnerProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress size={size} />
    </Box>
  );
};
