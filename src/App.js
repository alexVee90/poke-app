import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from './components/Pokedex';
import PokeDetails from './components/PokeDetails';
import axios from 'axios';



function App() {

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
   axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=100').then(response => setPokemons(response.data.results));
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" render={routerParams => <Pokedex {...routerParams} pokemons={pokemons} /> } />
        <Route exact path="/:pokemonId" component={PokeDetails} />
      </Switch>
    </div>
  );
}

export default App;
