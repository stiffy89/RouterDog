import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';

import './groupPage.css';


class GroupPage extends Component {


    dogArrayAvatar = (dogObject) => {

        return (
            <Card className = "Avatar" onClick = {() => this.props.GroupPageClicked(dogObject)}>
                <CardActionArea>
                    <CardMedia height="250"  component = "img" src ={dogObject.image}/>
                </CardActionArea>
            </Card>
        )
        
    }


    render() {
    
        //this should take the props and pass the array of the elements
        const dogArray = this.props.currentDogState;
        const dogArrayComponents = [];
        
        dogArray.forEach(dog => dogArrayComponents.push(this.dogArrayAvatar(dog)))
        
    
        return (
    
            <div>
                <Grid className = "GroupPageContainer" container alignItems = "center" justify = "space-around"  direction = "row" >
                    {dogArrayComponents}
                </Grid>
            </div>
            
        )

    }

}

export default GroupPage;