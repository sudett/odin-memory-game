import React from 'react';

import './Cart.css';

const Card = ({image, id}) => {
  return (
    <div className='card' style={{backgroundImage: `url(${image})`}}></div>
  )
}

export default Card;