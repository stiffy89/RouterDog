import React, {Component} from 'react';

import NavBar from './UIElements/navBar';
import Grid from '@material-ui/core/Grid';
import DogProfileCard from'./UIElements/profileCard';

class App extends Component {

  state = {

    dog: [
      {breed: "Pug", age: 15, name: "Pugsie", information: "Pugsie loves to go on for long walks on the beach with his owner. He also finds birds interesting to chase."},
      {breed: "Staffy", age: 3, name: "Flower", information: "Flower is the most loyal companion you would ever have the pleasure of finding."},
      {breed: "German Shepherd", age: 5, name: "Detective Maxmuller", information: "Maxmuller is the ultimate detective. He will guarentee to solve any case of lost or hidden treats."},
      {breed: "Greyhound", age: 7, name: "Gonzalez", information: "Gonzalez, as you're familiar with is speedy and this is no exception. Gonzo loves to chase squirrels at the park."}
    ]
    
  }

  //this is where we click on the dog in our navbar
  onClickedHandler = (dogName) => {
    console.log(dogName);
  }

  render () {
    return (
      <div>
        <Grid container>
            <NavBar currentDogState = {this.state.dog} clicked={(dogName) => this.onClickedHandler(dogName)}/>
        </Grid>
        <Grid container>
          <Grid item>
            <DogProfileCard/>
          </Grid>
        </Grid>
      </div>
    )
  }
}


export default App;
