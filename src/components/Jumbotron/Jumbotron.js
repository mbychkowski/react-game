import React from 'react';
import './Jumbotron.css';

const Jumbotron = props => {

  return(
  <div className="jumbotron jumbotron-fluid">
    <div className="container pt-5">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.description}</p>
    </div>
  </div>)

}

export default Jumbotron;
