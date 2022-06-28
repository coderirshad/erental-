
import './App.css';
import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkout from './components/Checkout';
import FeatureProduct from './components/FeatureProduct';
import New from './components/New';
import TopSeller from './components/TopSeller';
import SideBar from './components/SideBar';
import AddProduct from './components/AddProduct';
import Payment from './components/Payment';
import Report from './components/Report';
import Product_list from './components/Product_list';
import Product from './components/Product';
import Dash_side from './components/Dash_side';
import Order_review from './components/Order_review';
import Order_Dash from './components/Order_Dash';
import AboutProduct from './components/AboutProduct';


class App extends React.Component {

  render() {
  
    return(  
      // <BrowserRouter>
          
      //     <Router>
      //       <Route path="/" Component={AddProduct}></Route>
            
      //     </Router>
      // </BrowserRouter>
      <>
      <AddProduct></AddProduct>
      <AboutProduct></AboutProduct>
      <Checkout></Checkout>
      <Dash_side></Dash_side>
      </>
      ) 

    
  }
}
export default App;
