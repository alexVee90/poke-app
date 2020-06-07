import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'

import axios from 'axios';

import PokeCardStyles from '../styles/PokeCardStyles';

const useStyles = makeStyles(PokeCardStyles);

const PokeCard = (props) => {
  const classes = useStyles();

  const {
    pokemon: { url, name }
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {pokemon ? (
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardActionArea onClick={ () => props.history.push(`/${pokemon.id}`)    }>
              <CardMedia
                component='img'
                className={classes.media}
                alt={name}
                image={pokemon.sprites.front_default}
                title={name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ) : (
        <div className={classes.circle}>
          <CircularProgress color='inherit' />
        </div>
      )}
    </>
  );
};

export default withRouter(PokeCard);
