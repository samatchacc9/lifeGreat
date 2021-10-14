import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/authContext';
import { ProductContextProvider } from './contexts/productContext';
import { CartContextProvider } from './contexts/cartContext';
import { OrderContextProvider } from './contexts/orderContext';
import { SearchProvider } from './contexts/searchContext';
// import { CartContextProvider } from './contexts/cartContext';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <OrderContextProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </OrderContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
