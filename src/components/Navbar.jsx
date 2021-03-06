import React from 'react';
import { withRouter } from 'react-router-dom';
import navbarStyles from '../styles/navbarStyles';
import { makeStyles } from '@material-ui/core/styles';

import { Search as SearchIcon } from '@material-ui/icons';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';

const useStyles = makeStyles(navbarStyles);

const Navbar = (props) => {

  const classes = useStyles();
  
  const handleClick = () => props.history.push('/');

  const showSearch = props.location.pathname === '/' ? true : false;

  const handleSearch = (e) => {
    props.search(e.target.value);
  }
  
  return (
    <header className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            <span className={classes.logo} onClick={handleClick}>PokeDex</span>
          </Typography>
          {showSearch && (<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleSearch}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>)}    
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withRouter(Navbar);
