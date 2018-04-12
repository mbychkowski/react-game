import React from 'react';
import './Jumbotron.css';

const Jumbotron = prop => {

  return(
  <div className="jumbotron jumbotron-fluid">
    <div className="container pt-5">
      <h1 className="display-4">Fluid jumbotron</h1>
      <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
  </div>)

}

export default Jumbotron;
