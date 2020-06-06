import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/:pokemonId" component={Pokemon} />
      </Switch>
    </div>
  );
}

export default App;
