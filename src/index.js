import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <App />  
    </CookiesProvider> 
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
