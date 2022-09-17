import { CartProvider } from './Context';

import Title from './components/title/Title';
import Score from './components/score/Score';
import CartContainer from './components/cart-container/CartContainer';

import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className='header'>
        <Title/>
        <Score/>
      </div>
      <CartContainer/>
    </CartProvider>
  )
}

export default App;