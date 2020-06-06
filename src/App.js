import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from './components/Pokedex';
import PokeDetails from './components/PokeDetails';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
   axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=100').then(response => setPokemons(response.data.results));
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={routerParams => <Pokedex {...routerParams} pokemons={pokemons} /> } />
        <Route exact path="/:pokemonId" component={PokeDetails} />
      </Switch>
    </>
  );
}

export default App;
