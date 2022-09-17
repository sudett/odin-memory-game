import React, {useContext} from 'react';

import { CartContext } from '../../Context';

import './Score.css';

const Score = () => {
  const {score, bestScore} = useContext(CartContext);

  return (
    <div>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  )
}

export default Score