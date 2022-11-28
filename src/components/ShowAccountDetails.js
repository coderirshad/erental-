import React from "react";
import { useParams } from "react-router-dom";
import MyOrders from "./MyOrders";
import ProfileInformation from "./ProfileInformation";
import Address from "./Adresses";
import MyPaymentMethods from "./MyPaymentMethods";
import AboutUs from "./AboutUs";
import MyQuotes from "./MyQuotes";

const ShowAccountDetails = ()=>{

  const params = useParams();
  const id=params.id;
  
     return (
        <div className="accountDetails"> 
            {id==='ProfileInformation' && <ProfileInformation/>}
            {id==='Quotes' && <MyQuotes/>}
            {id==='Orders' && <MyOrders/>}
            {id==='Downloads' && <AboutUs/>}
            {id==='Adresses' && <Address/>}
            {id==='PaymentMethod' && <MyPaymentMethods/>}
        </div>
     )
}

export default ShowAccountDetails;