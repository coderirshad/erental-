
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Checkout from './components/Checkout';
import Report from './components/Report';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import BreadCrumb from './components/BreadCrumb';
import Login from './components/Login';
import FooterArea from './components/FooterArea';
import Coupon from './components/Coupon';
import CategoryBox from './components/CategoryBox';
import Cartdetail from './components/Cartdetail';
import AdminHome from './components/AdminHome';
import Registration from './components/Registration';
import Withdraw from './components/Withdraw';
import Wishlist from './components/Wishlist';
import Brand from './components/Brand';
import AboutUs from './components/AboutUs';
import EachCategory from './components/EachCategory';
import ProductList from './components/ProductList';
import SingalProduct from './components/SingalProduct';
import AboutProduct from './components/AboutProduct';


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
          <Route exact path='/product/:id' element={<SingalProduct/>}></Route>
          
          <Route exact path='/admin' element={<AdminHome/>}></Route>
          <Route exact path='/admin/report' element={<Report/>}></Route>
          <Route exact path='/admin/withdraw' element={<Withdraw/>}></Route>
          <Route exact path='/aboutProduct' element={<AboutProduct/>} />
          <Route exact path='/aboutUs' element={<AboutUs/>} />
          <Route exact path='/eachCategory' element={<EachCategory/>} />
          <Route exact path='/productList' element={<ProductList/>} />
        </Routes>
        <Brand></Brand>
        <FooterArea></FooterArea>
        <BreadCrumb></BreadCrumb>
      </div>
      ) 
  }
}
export default App;
