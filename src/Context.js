import React, {useState, useEffect} from "react";

import dogs from './data';

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
  const [randomDogs, setRandomDogs] = useState([]);

  const random = () => {
    let arr = [];
  
    while (arr.length < 16) {
      const id = Math.floor(Math.random() * dogs.length);
      if (!arr.includes(id)) arr.push(id);
    } 

    arr = arr.map(idx => dogs[idx]);
    
    setRandomDogs(arr);
    console.log(arr);
  }

  useEffect(() => {
    random();
  }, []);

  return (
    <CartContext.Provider value={{randomDogs}}>{children}</CartContext.Provider>
  )
}