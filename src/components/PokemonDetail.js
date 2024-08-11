import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonDetail({ pokemon }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(pokemon.url)
      .then((response) => {
        setPokemonData(response.data);
      });
  }, [pokemon]);

  if (!pokemonData) return null;

  return (
    <div className="pokemon-detail">
      <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
        className="pokemon-image"
      />
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Type: {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    </div>
  );
}

export default PokemonDetail;
