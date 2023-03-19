import React from "react";
import "./App.css";
import { PageLayout } from "./components/page-layout";
import PokemonList from "./components/pokemon-list";

function App() {
  return (
    <PageLayout>
      <PokemonList />
    </PageLayout>
  );
}

export default App;
