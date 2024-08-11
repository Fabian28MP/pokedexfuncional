import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonList({ onPokemonClick }) {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        setPokemons(response.data.results);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="pokemon-list-container">
      <input
        type="text"
        placeholder="Search Pokémon"
        className="search-bar"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="pokemon-list">
        {filteredPokemons.map((pokemon) => (
          <button
            key={pokemon.name}
            className="pokemon-item"
            onClick={() => onPokemonClick(pokemon)}
          >
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
