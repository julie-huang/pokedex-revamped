import Chip from "@mui/material/Chip";

type TypeBadgeProps = {
  type: string;
  id: string;
};

export const TypeBadge = ({ type, id }: TypeBadgeProps) => {
  return <Chip label={type} color="primary" key={id} />;
};
