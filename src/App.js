
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
import ContousrolledCarel from './components/ContousrolledCarel';
import Coupon from './components/Coupon';
import CategoryBox from './components/CategoryBox';
import Cart from './components/Cart';
import CartBody from './components/CartBody';
import Cartdetail from './components/Cartdetail';
import AdminHome from './components/AdminHome';
import Registration from './components/Registration';
import Withdraw from './components/Withdraw';
import Wishlist from './components/Wishlist';
import Brand from './components/Brand';


class App extends React.Component {

  render() {
    
    return(  
      <div className='App'>
        
        <NavigationBar></NavigationBar>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/register' element={<Registration/>}></Route>
          <Route exact path='/checkout' element={<Checkout/>}></Route>
          <Route exact path='/wishlist' element={<Wishlist/>}></Route>
          <Route exact path='/myaccount' element={<Checkout/>}></Route>
          <Route exact path='/coupon' element={<Coupon/>}></Route>
          <Route exact path='/category' element={<CategoryBox/>}></Route>
          <Route exact path='/cart' element={<Cartdetail/>}></Route>
          <Route exact path='/product/:id' element={<AboutProduct/>}></Route>

          <Route exact path='/admin' element={<AdminHome/>}></Route>
          <Route exact path='/admin/report' element={<Report/>}></Route>
          <Route exact path='/admin/withdraw' element={<Withdraw/>}></Route>
        </Routes>
        <Brand></Brand>
        <FooterArea></FooterArea>
        <BreadCrumb></BreadCrumb>
      </div>
      ) 

    
  }
}
export default App;
