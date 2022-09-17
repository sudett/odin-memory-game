import ReactDom from 'react-dom/client';
import App from './App';
import { CartProvider } from './Context';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App/>
  </CartProvider>
)