import React, {useContext} from 'react';

import { CartContext } from '../../Context';

import './Cart.css';

const Card = ({image, id}) => {
  const {select} = useContext(CartContext);

  return (
    <div className='card' onClick={() => select(id)} style={{backgroundImage: `url(${image})`}}></div>
  )
}

export default Card;