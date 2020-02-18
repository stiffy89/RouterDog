import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {spacing} from '@material-ui/system';

const navButton = (props) => {

    return (
        <Button variant="contained" color="primary" size = "medium" onClick = {() => props.clicked(props.dogName)}>
            {props.dogName.name}
        </Button>
    )

}

export default navButton;