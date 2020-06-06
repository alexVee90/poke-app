import React from 'react';

const PokeDetails = props => { 
  const id = props.match.params.pokemonId;
  return(
    <div>
      <h1>Pokemon {id}</h1>
    </div>
  )
}

export default PokeDetails;