import React from 'react';
import './Navbar.css';

const Navbar = props => {

  return(

    <nav className="navbar fixed-top navbar-light bg-light justify-content-around">
      <a className="navbar-brand" href="#">
        <img src={props.logo} className="App-logo" alt="React" />
      </a>
      <h3>{props.message}</h3>
      <h3>Top score: {props.score}</h3>

    </nav>

  )
}

export default Navbar;
