import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NavButton from './navBarButtons';



const navBar = (props) => {

    const dogArray = props.currentDogState;
    const dogArrayComponents = [];

    dogArray.forEach(dog => dogArrayComponents.push(<NavButton dogName = {dog.name} clicked = {(dogName) => props.clicked(dogName)}/>));
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container direction="row" justify="space-evenly">
                    {dogArrayComponents}
                </Grid>
            </Toolbar>
      </AppBar>
    )

}

export default navBar;