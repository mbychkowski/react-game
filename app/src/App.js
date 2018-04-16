import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron';
import MemoryCard from './components/MemoryCard';
import Navbar from './components/Navbar';
import memoryCards from './memoryCards.json';
// import Wrapper from './components/Wrapper';

let idArr = [0,1,2,3,4,5,6,7,8,9,10,11];
let guessArr = [];

class App extends Component {

  state = {
    memoryCards,
    score: 0,
    message: 'Click an image to begin!',
  };

  updateMemoryCard = id => {

    let guess = this.state.memoryCards[id];

    this.state.memoryCards.map(memoryCard => {

      let randNum = Math.floor(Math.random() * idArr.length);
      memoryCard.id = idArr[randNum];
      idArr.splice(randNum, 1);

    });

    let memoryCards = this.state.memoryCards.sort((a, b) => {
      return a.id - b.id
    });

    // Check if memory card has been clicked before
    if(guessArr.includes(guess)) {
      this.state.score = 0;
      this.state.message = 'Try Again!'
      guessArr = [];

    } else {
      this.state.score++
      this.state.message = 'Correct!';
      guessArr.push(guess);

    }

    this.setState({ memoryCards });

    idArr = [0,1,2,3,4,5,6,7,8,9,10,11];

  }

  render() {
    return (

      <div className="App">

        <Navbar
          logo={logo}
          score={this.state.score}
          message={this.state.message}/>

        <Jumbotron
          title="Clicky Game!"
          description="Click a different tile everytime"/>

        <div className="container">
          {this.state.memoryCards.map(memoryCard => (

            <MemoryCard
              updateMemoryCard={this.updateMemoryCard}
              id={memoryCard.id}
              key={memoryCard.id}
              name={memoryCard.name}
              image={memoryCard.image}
              onClick={this.updateMemoryCard}/>

          ))}
        </div>

      </div>
    );
  }
}

export default App;
