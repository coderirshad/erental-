import "./App.css";
import React, { useState } from "react";
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
import ProductSearch from "./components/ProductSearch";
import SingalProduct from "./components/SingalProduct";
import AboutProduct from "./components/AboutProduct";
import AddProduct from "./components/AddProduct";
import TagProductList from "./components/TagProductList";
import AllProductList from "./components/AllProductList";
import MyAccount from "./components/MyAccount";
import { CheckAuth } from "./components/CheckAuth";
import MyOrderDetails from "./components/MyOrderDetails";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import TermsAndConditions from "./components/TermsAndConditions";
import PaymentPolicy from "./components/PaymentPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DescriptionData from "./components/DescriptionData";
import DescriptionReview from "./components/DescriptionReview";
import DescriptionShippingDelivery from "./components/DescriptionShippingDelivery";
import DescriptionProductEnquiry from "./components/DescriptionProductEnquiry";
import DescriptionQuestionAns from "./components/DescriptionQuestionAns";
import DescriptionTermCon from "./components/DescriptionTermCon";
import DownloadInvoice from "./components/DownloadInvoice";
import StudentProfile from "./components/StudentProfile";
import EventManagerProfile from "./components/EventMangerProfile";
import EmployeeProfile from "./components/EmployeeProfile";
import Invoice from "./components/Invoice";
import ScrollToTop from "./components/ScrollToTop";
import Locations from "./components/Locations"
import DocumentRequired from "./components/DocumentRequired"
import StaticHome from  "./components/StaticHome"
const App = () =>{
    const [login,setlogin]= React.useState(CheckAuth());
    const [loginrole,setloginrole]= React.useState("customer");
    const [newpage, setNewpage] = useState(true);
    return (      
      <div className="App">
        {/* {newpage ? <div>
          
          <Routes>
            <Route path='/'  element={<StaticHome />} />
          </Routes>

        </div>
        
        :  */}
        
        
           <div>
          <NavigationBar login={login} setlogin={setlogin} setloginrole={setloginrole}></NavigationBar>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login setlogin={setlogin} />}></Route>
          <Route exact path="/register" element={<Registration />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/myaccount" element={<MyAccount />}></Route>
          <Route exact path="/myaccount/:id" element={login ? <MyAccount /> : <Login />}>
             <Route index element={<StudentProfile />} />
             <Route exact path="StudentProfile"  element={<StudentProfile />}></Route>
             <Route exact path="eventmangerprofile"  element={<EventManagerProfile />}></Route>
             <Route exact path="employeeprofile"  element={<EmployeeProfile />}></Route>
          </Route>
          <Route exact path="/coupon" element={<Coupon />}></Route>
          <Route exact path="/category" element={<CategoryBox />}></Route>
          <Route exact path="/cart" element={login?<Cartdetail />:<Login/>}></Route>
          <Route exact path="/ProductSearch" element={<ProductSearch />}></Route>
          <Route exact path="/product/:id" element={<SingalProduct login={login}/>}>
              <Route index element={<DescriptionData />} />
              <Route exact path="Discription"  element={<DescriptionData />}></Route>
              <Route exact path="Reviews"  element={<DescriptionReview />} />
              <Route exact path="Shipping"  element={<DescriptionQuestionAns />} />
              <Route exact path="Delivery"  element={<DescriptionShippingDelivery />} />
              <Route exact path="ProductEnquiry"  element={<DescriptionProductEnquiry />} />
              <Route exact path="termandcondition" element={<DescriptionTermCon />} />
          </Route>

          <Route exact path="/admin/:id" element={loginrole==="admin"?<Dash_RightContent/>:<NotFound/>}></Route>
          <Route exact path="/addproduct" element={loginrole==="admin"?<AddProduct />:<NotFound/>}></Route>
          <Route exact path="/addproduct/:id" element={loginrole==="admin"?<AddProduct />:<NotFound/>}></Route>
          <Route exact path="/admin/report" element={loginrole==="admin"?<Report />:<NotFound/>}></Route>
          <Route exact path="/admin/withdraw" element={loginrole==="admin"?<Withdraw />:<NotFound/>}></Route>
          <Route exact path="/aboutProduct" element={<AboutProduct />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/eachCategory" element={<EachCategory />} />
          <Route exact path="/productList" element={<ProductList />} />
          <Route exact path='/tagProductList' element={<TagProductList/>} />
          <Route exact path='/allProductList' element={<AllProductList/>} />
          <Route exact path = "/myOrderDetails" element = {<MyOrderDetails/>}></Route>
          <Route exact path = "/locations" element = {<Locations />}></Route>
          <Route exact path = "/contact" element = {<Contact/>}></Route>
          <Route exact path = "/termsAndConditions" element = {<TermsAndConditions/>}></Route>
          <Route exact path = "/documentrequired" element = {<DocumentRequired/>}></Route>
          <Route exact path = "/paymentPolicy" element = {<PaymentPolicy/>}></Route>
          <Route exact path = "/privacyPolicy" element = {<PrivacyPolicy/>}></Route>
          <Route exact path = "/Quotation" element = {<DownloadInvoice/>}></Route>
          <Route exact path = "/Invoice" element = {<Invoice/>}></Route>
        </Routes>
        <FooterArea></FooterArea>
          
          </div>
          {/* } */}

        
        <div onClick={() => setNewpage(!newpage)} style={{width:"24px", height:"24px", background:"white", position:"fixed", bottom:"10px", zIndex:"2000"}}><i class="fa-sharp fa-solid fa-down" style={{background:"white"}}></i></div>
        
      </div>
    );
}
export default App;
