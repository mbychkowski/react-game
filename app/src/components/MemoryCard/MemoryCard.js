import React from 'react';
import './MemoryCard.css';

const MemoryCard = props => {

  return(
    <div className="card" data-id={props.id} onClick={() => props.updateMemoryCard(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
    </div>

  )
}

export default MemoryCard;
