import React, {useState, useEffect} from "react";

import dogs from './data';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
  const [randomDogs, setRandomDogs] = useState([]);
  const [selectedDogs, setSelectedDogs] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [startAgain, setStartAgain] = useState(false);

  // create random dogs array
  const random = () => {
    let arr = [];
  
    while (arr.length < 16) {
      const id = Math.floor(Math.random() * dogs.length);
      if (!arr.includes(id)) arr.push(id);
    } 

    arr = arr.map(idx => dogs[idx]);
    
    setRandomDogs(arr);
    // console.log(arr);
  }

  // Select cart
  const select = (id) => {
    if (selectedDogs.includes(id)) {
      // GAme over
      setGameOver(true);

      if (score > bestScore) setBestScore(score);
      setScore(0); 
    }
    else {
      // Continue game
      setSelectedDogs(prevSelectedDogs => ([...prevSelectedDogs, id]));
      setScore(prevScore => prevScore + 1);
      random();
    }
  }

  // Continue game
  const continueGame = () => {
    setGameOver(false);
    random();
    setSelectedDogs([]);
  }

  // Start game again
  const resetGame = () => {
    setStartAgain(true);
    random();
    setSelectedDogs([]);
    setBestScore(0);
  }

  useEffect(() => {
    random();
  }, []);

  return (
    <CartContext.Provider value={{randomDogs, select, score, bestScore, gameOver, startAgain, continueGame, resetGame}}>{children}</CartContext.Provider>
  )
}