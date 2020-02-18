import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './profileCard.css';
import './groupPage.css';


const profileCard = (props) => {

    return (
      <Grid className = "GroupPageContainer" container alignItems = "center" justify = "space-around" direction = "row" >
        <Card className="cardSize">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              src= {"https://source.unsplash.com/800x450/?" + props.selectedDog.breed}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.selectedDog.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.selectedDog.information}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick = {props.backButtonClicked}>
              Back
            </Button>
          </CardActions>
        </Card>
    </Grid>
    )

}

export default profileCard;