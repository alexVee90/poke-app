import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

import circularProgressStyles from '../styles/circularProgressStyles';

const useStyles = makeStyles(circularProgressStyles);

const PokeCard = props => {

  const classes = useStyles();

  const { pokemon : { url, name } } = props;

  const [pokemon, setPokemon] = useState(null);


  useEffect(() => { 
    axios.get(url).then(res => setPokemon(res.data));
  }, []);

  console.log(pokemon)

  return (
    <>
    {pokemon ? (<Grid item xs={12} md={4} >
      <p>{name}</p> 
      <img src={pokemon.sprites.front_default} alt={name}/>
     </Grid>) : (
       <div className={classes.circle}>
         <CircularProgress color="inherit" />
       </div>
     )}
    
    </>
  )
}

export default PokeCard;