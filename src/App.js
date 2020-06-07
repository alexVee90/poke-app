import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from './components/Pokedex';
import PokeDetails from './components/PokeDetails';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
   axios.get('https://pokeapi.co/api/v2/pokemon?limit=25').then(response => {
    setPokemons(response.data.results.filter(item => item.name.includes(search)));
   });
  }, [search]);

  const handleSearch = (text) => {
    setSearch(text);
  }

  return (
    <>
      <Navbar search={handleSearch} />
      <Switch>
        <Route exact path="/" render={routerParams => <Pokedex {...routerParams} pokemons={pokemons} /> } />
        <Route exact path="/:pokemonId" component={PokeDetails} />
      </Switch>
    </>
  );
}

export default App;
