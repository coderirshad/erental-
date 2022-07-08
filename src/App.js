
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
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
import TopBar from './components/TopBar';
import Home from './components/Home';
import StickyMenu from './components/StickyMenu';
import NavigationBar from './components/NavigationBar';
import BreadCrumb from './components/BreadCrumb';
import Login from './components/Login';
import FooterArea from './components/FooterArea';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Registration from './components/Registration';
import AboutUs from './components/AboutUs';
import TermsAndConditions from './components/EachCategory';
import EachCategory from './components/EachCategory';
import ProductList from './components/ProductList'

class App extends React.Component {
  render() {
    return(  
      <div className='App'>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/registration' element={<Registration/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
          <Route exact path='/wishlist' element={<Checkout/>} />
          <Route exact path='/myaccount' element={<Checkout/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/aboutProduct' element={<AboutProduct/>} />
          <Route exact path='/aboutUs' element={<AboutUs/>} />
          <Route exact path='/eachCategory' element={<EachCategory/>} />
          <Route exact path='/productList' element={<ProductList/>} />
        </Routes>
        <FooterArea></FooterArea>
        <BreadCrumb></BreadCrumb>
      </div>
      )
  }
}
export default App;

/*

<Dash_side></Dash_side>

*/
