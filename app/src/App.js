import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron';
import MemoryCard from './components/MemoryCard';
import Navbar from './components/Navbar';
import memoryCards from './memoryCards.json';
// import Wrapper from './components/Wrapper';

class App extends Component {

  state = {
    memoryCards
  };

  updateMemoryCard = id => {

  }

  render() {
    return (

      <div className="App">

        <Navbar
          logo={logo}/>

        <Jumbotron
          title="Clicky Game!"
          description="Click a different tile everytime"/>

        <div className="container">
          {this.state.memoryCards.map(memoryCard => (

            <MemoryCard
              id={memoryCard.id}
              name={memoryCard.name}
              image={memoryCard.image} />

          ))}
        </div>

      </div>
    );
  }
}

export default App;
