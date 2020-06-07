import React, { useEffect } from 'react';

import axios from 'axios';

const PokeDetails = props => { 
  const id = props.match.params.pokemonId;
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`

useEffect(() => {
  axios.get(url).then(result => console.log(result.data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return(
    <div style={{marginTop: '5rem'}}>
      <h1>Pokemon {url}</h1>
    </div>
  )
}

export default PokeDetails;