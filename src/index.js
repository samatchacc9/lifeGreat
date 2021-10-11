import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/authContext';
import { ProductContextProvider } from './contexts/productContext';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
