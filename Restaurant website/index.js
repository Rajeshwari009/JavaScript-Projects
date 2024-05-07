import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from "./Store/CartProvider";
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
      <CartProvider>
          <App />
      </CartProvider>
    </BrowserRouter>,
    document.getElementById('root')
  );
