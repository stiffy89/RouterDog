import React, {Component} from 'react';

import NavBar from './UIElements/navBar';
import Grid from '@material-ui/core/Grid';
import DogProfileCard from'./UIElements/profileCard';
import GroupPage from './UIElements/groupPage';


class App extends Component {

  state = {

    dog: [
      {breed: "Pug", age: 15, name: "Pugsie", image: "https://source.unsplash.com/800x450/?pug", information: "Pugsie loves to go on for long walks on the beach with his owner. He also finds birds interesting to chase."},
      {breed: "Staffy", age: 3, name: "Flower", image: "https://source.unsplash.com/800x450/?staffy", information: "Flower is the most loyal companion you would ever have the pleasure of finding."},
      {breed: "German Shepherd", age: 5, image: "https://source.unsplash.com/800x450/?germanshepherd", name: "Detective Maxmuller", information: "Maxmuller is the ultimate detective. He will guarentee to solve any case of lost or hidden treats."},
      {breed: "Greyhound", age: 7, name: "Gonzalez", image: "https://source.unsplash.com/800x450/?greyhound", information: "Gonzalez, as you're familiar with is speedy and this is no exception. Gonzo loves to chase squirrels at the park."}
    ],

    pageStatus: "Group",

    chosenDog: null
    
  }

  //this is where we click on the dog in our navbar
  onClickedHandler = (dogName) => {
    this.setState({
      pageStatus: "Individual",
      chosenDog: dogName
    })
  }

  onClickBackHandler = () => {
    this.setState({
      pageStatus: "Group",
      chosenDog: null
    })
  }

  individualPage = (dogName) => {
    return (
      <DogProfileCard selectedDog = {dogName} backButtonClicked = {this.onClickBackHandler}/>
    )
  }

  groupPage = () => {
    return (
      <GroupPage GroupPageClicked = {(dogName) => this.onClickedHandler(dogName)} currentDogState = {this.state.dog}/>
    )
  }




  /*pageToRender(dogName) {
    
    if (this.state.pageStatus === "Individual")
    {
      this.setState({pageStatus: "Group", chosenDog : null});

      return (
        <GroupPage GroupPageClicked = {(dogName) => this.onClickedHandler(dogName)} currentDogState = {this.state.dog}/>
      )
    }

    else if (this.state.pageStatus === "Group")
    {
      this.setState({pageStatus: "Individual" , chosenDog : dogName});
      return (
        <DogProfileCard Name = {dogName.Name} Description = {dogName.information}/>
      )
    }
  }*/

  render () {

    let chosenComponent = null;

    //lets look at the status
    if (this.state.pageStatus === "Individual")
    {
      chosenComponent = this.individualPage(this.state.chosenDog);
    }
    else if (this.state.pageStatus === "Group")
    {
      chosenComponent = this.groupPage();
    }


    return (
      <div>
        <Grid container >
            <NavBar currentDogState = {this.state.dog} clicked={(dogName) => this.onClickedHandler(dogName)}/>
        </Grid>
        
        {chosenComponent}
        
      </div>
    )
  }
}


export default App;
