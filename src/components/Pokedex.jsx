import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import circularProgressStyles from '../styles/circularProgressStyles';

import PokeCard from './PokeCard';

const useStyles = makeStyles(circularProgressStyles);

const Pokedex = props => {

  const { pokemons } = props;
  const classes = useStyles();

  return (  
    <>
      {pokemons ? (
        <Grid container spacing={2}>
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