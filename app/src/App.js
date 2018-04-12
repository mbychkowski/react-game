import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron';
import MemoryCard from './components/MemoryCard';
import Navbar from './components/Navbar';
// import Wrapper from './components/Wrapper';

class App extends Component {
  render() {
    return (

      <div className="App">

        <Navbar
          logo={logo}/>

        <Jumbotron
          title="Clicky Game!"
          description="Click a different tile everytime"/>

        <div className="container">
        <MemoryCard
          name="card-1"
          img="http://www.color-hex.com/palettes/8227.png" />
        </div>

      </div>
    );
  }
}

export default App;
