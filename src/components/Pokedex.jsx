import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PokeDexStyles from '../styles/PokeDexStyles';

import PokeCard from './PokeCard';

const useStyles = makeStyles(PokeDexStyles);

const Pokedex = props => {

  const { pokemons } = props;
  const classes = useStyles();

  return (  
    <>
      {pokemons ? (
        <Grid container spacing={4} className={classes.root}>
          {pokemons.map(p => <PokeCard key={p.name} pokemon={p} /> )}
        </Grid>
      ) : (
        <div className={classes.circle}>
          <CircularProgress color="inherit" />
        </div>
      )}
    </>

  )
}

export default Pokedex;