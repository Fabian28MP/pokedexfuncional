import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import './App.css';
import pokeball from "./assets/pokeball.png";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="app-container">
      <div className="pokedex-container">
      <div className="header">
      <img src={pokeball} alt="Pokéball" className="pokeball-icon" />
      <h1>Pokédex</h1>
        </div>
        <PokemonList onPokemonClick={handlePokemonClick} />
        {selectedPokemon && (
          <div className="pokemon-detail-container">
            <PokemonDetail pokemon={selectedPokemon} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
