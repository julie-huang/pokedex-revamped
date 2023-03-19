import { ReactNode } from "react";
import { AppHeader } from "./app-header";
import Container from "@mui/material/Container";

interface Props {
  children: ReactNode;
}

export const PageLayout = ({ children }: Props) => {
  return (
    <Container sx={{ textAlign: "center" }}>
      <AppHeader />
      {children}
    </Container>
  );
};
