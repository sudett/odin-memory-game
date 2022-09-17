import React, {useContext} from 'react';

import { CartContext } from '../../Context';

import Card from '../cart/Cart';

import './CartContainer.css';

const CardContainer = () => {
  const {randomDogs} = useContext(CartContext);
  
  return (
    <div className='card-container'>
      {randomDogs.map(dog => <Card key={dog.id} {...dog}/>)}
    </div>
  )
}

export default CardContainer