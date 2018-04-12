import React from 'react';
import './Navbar.css';

const Navbar = props => {

  return(
  <nav className="navbar fixed-top navbar-light bg-light">
    <a className="navbar-brand" href="#">
      <img src={props.logo} className="App-logo" alt="React" />

    </a>
  </nav>)

}

export default Navbar;
