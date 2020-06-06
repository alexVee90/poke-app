import React from 'react';

import PokeCard from './PokeCard';

const Pokedex = props => {
  const { pokemons } = props;
  console.log(pokemons);
  return (
    <div>
      <PokeCard />
      <PokeCard />
      <PokeCard />
    </div>
  )
}

export default Pokedex;