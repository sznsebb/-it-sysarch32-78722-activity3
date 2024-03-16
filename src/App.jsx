import React from "react";
import Header from "./Header";
import Pokedex from "./Pokedex"
import Card from "./Card";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Pokedex />
    </div>
  );
};

export default App;