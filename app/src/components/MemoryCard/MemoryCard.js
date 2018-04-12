import React from 'react';
import './MemoryCard.css';

const MemoryCard = props => {

  return(

    <div className="img-container">
      <img alt={props.name} src={props.img}/>
    </div>

  )
}

export default MemoryCard;
