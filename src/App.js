import React from 'react';

import Title from './components/title/Title';
import Score from './components/score/Score';
import CartContainer from './components/cart-container/CartContainer';
import GameOver from './components/game-over/GameOver';

import './App.css';

const App = () => {
  return (
    <>
      <div className='header'>
        <Title/>
        <GameOver/>
        <Score/>
      </div>
      <CartContainer/>
    </>  
  )
}

export default App;