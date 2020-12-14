import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: 'auto',
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper
      },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
  }));

  export const CountryInput = (props) => {
    const classes = useStyles();

    return (
      <Paper  className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Enter Country Name"
          inputProps={{ 'aria-label': 'Enter Country Name' }}
          onChange={((e) => props.searchCountry(e.target.value))}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        
      </Paper>
    );
  }