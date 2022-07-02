import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Withdraw() {
  return (
      <div>
      <div className="container-sm py-5">
    
    <div className="card">
    <div className="card-header">
   <p><strong> Balance</strong></p>
    </div>
    <div className="card-body">
      <div className="row">
      <p className="card-text">Your Balance: ₹0.00</p>
       <p className="card-text">   Minimum Withdraw Amount: ₹5,000.00</p>
         <p className="card-text"> Withdraw Threshold: 0 days</p>
         </div>
         <div className="float-end">
         <a href="#" className="btn btn-danger">Request Withdraw</a>
         </div>
         </div>
  </div>
  </div>

  <div className="container-sm py-5">
    
    <div className="card">
    <div className="card-header">
   <p><strong> Payment Details</strong></p>
    </div>
    <div className="card-body">
      <div className="row">
      <p className="card-text">Last Payment:</p>
       <p className="card-text">   You do not have any approved withdraw yet:</p>

         </div>
         <div className="float-end">
         <a href="#" className="btn btn-danger">VIEW PAYMENT </a>
         </div>
         </div>
  </div>
  </div>

  <div className="container-sm py-5">
    
    <div className="card">
    <div className="card-header">
   <p><strong> Payment Methods</strong></p>
    </div>
    <div className="card-body">
      <div className="row">
      <p className="card-text" ><i class="bi bi-paypal"></i>
PayPal No information found</p>
      <hr></hr>
       <p className="card-text"> <i class="bi bi-bank2"></i> Bank Transfer No information found</p>
    
         </div>
  <div className="float-end">
         <a href="#" className="btn btn-danger">Request Withdraw</a>
         </div>
         </div>
  </div>
  </div>

  </div>
  
  )
}
