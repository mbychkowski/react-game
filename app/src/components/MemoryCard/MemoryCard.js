import React from 'react';
import './MemoryCard.css';

const MemoryCard = props => {

  return(
    <div className="card">
      <div className="img-container">
        <img id={props.id} alt={props.name} src={props.image}/>
      </div>
    </div>

  )
}

export default MemoryCard;
