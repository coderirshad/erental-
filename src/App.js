import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Checkout from "./components/Checkout";
import Report from "./components/Report";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/Login";
import FooterArea from "./components/FooterArea";
import Coupon from "./components/Coupon";
import CategoryBox from "./components/CategoryBox";
import Cartdetail from "./components/Cartdetail";
import Registration from "./components/Registration";
import Withdraw from "./components/Withdraw";
import Wishlist from "./components/Wishlist";
import Dash_RightContent from "./components/Dash_RightContent";
import AboutUs from "./components/AboutUs";
import EachCategory from "./components/EachCategory";
import ProductList from "./components/ProductList";
import SingalProduct from "./components/SingalProduct";
import AboutProduct from "./components/AboutProduct";
import AddProduct from "./components/AddProduct";
import SocialMediaLink from "./components/SocialMediaLink";
import TagProductList from "./components/TagProductList";
import AllProductList from "./components/AllProductList";
import MyAccount from "./components/MyAccount";
import ShowAccountDetails from "./components/ShowAccountDetails" ;
import { CheckAuth } from "./components/CheckAuth";
const App = () =>{
    const [login,setlogin]= React.useState(CheckAuth());
    return (      
      <div className="App">
        <NavigationBar login={login} setlogin={setlogin}></NavigationBar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login setlogin={setlogin} />}></Route>
          <Route exact path="/register" element={<Registration />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/myaccount" element={<MyAccount />}></Route>
          <Route exact path="/myaccount/:id" element={<MyAccount />}></Route>
          <Route exact path="/coupon" element={<Coupon />}></Route>
          <Route exact path="/category" element={<CategoryBox />}></Route>
          <Route exact path="/cart" element={<Cartdetail />}></Route>
          <Route exact path="/product/:id" element={<SingalProduct />}></Route>

          <Route exact path="/admin/:id" element={<Dash_RightContent/>}></Route>
          <Route exact path="/addproduct" element={<AddProduct />}></Route>
          <Route exact path="/admin/report" element={<Report />}></Route>
          <Route exact path="/admin/withdraw" element={<Withdraw />}></Route>
          <Route exact path="/aboutProduct" element={<AboutProduct />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/eachCategory" element={<EachCategory />} />
          <Route exact path="/productList" element={<ProductList />} />
          <Route exact path='/tagProductList' element={<TagProductList/>} />
          <Route exact path='/allProductList' element={<AllProductList/>} />
        </Routes>
        <SocialMediaLink></SocialMediaLink>
        <FooterArea></FooterArea>
      </div>
    );
}
export default App;
