import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartBody from './components/CartBody';
import Cartdetail from './components/Cartdetail';
import Report from './components/Report';
import Withdraw from './components/Withdraw';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      {/* <Route exact path='/cart' element={<Cartdetail/>}></Route> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
