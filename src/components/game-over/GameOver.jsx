import React, {useContext} from 'react';

import { CartContext } from '../../Context';

import './GameOver.css';

const GameOver = () => {
  const {gameOver, startAgain, continueGame, resetGame} = useContext(CartContext);

  return (
    <div className='game-over__container'>
      <h2 className={`${(gameOver || startAgain) && 'game-over--show'} game-over`}>Game over</h2>
      <button onClick={continueGame} className={`${gameOver && 'btn__continue--show'} btn`}>Continue</button>
      <button onClick={resetGame} className={`${startAgain && 'btn__reset--show'} btn`}>Start Again</button>
    </div>
  )
}

export default GameOver