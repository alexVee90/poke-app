import React from 'react';

const Pokemon = props => {
  const id = props.match.params.pokemonId;
  console.log(id); 
  return (
    <div>
      <h1>Pokemon {id}</h1>
    </div>
  )
}

export default Pokemon;