import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Withdraw() {
  return (

      <div className="container" style={{marginLeft:"30%", position:"absolute", top:"25%"}}>

<div class="section-title"style={{marginRight:"80%"}} >
          <h2><strong>Withdraw</strong></h2>
         
        </div>
    
    <div className="card" style={{width:"50%"}}>
   <h5 className='card-header'>Balance</h5>
    <div className="card-body">
    <div class="row">
  <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 '>
      <p className="card-text">Your Balance: ₹0.00</p>
       <p className="card-text">   Minimum Withdraw Amount: ₹5,000.00</p>
         <p className="card-text"> Withdraw Threshold: 0 days</p>
         </div>

         <div className='col-lg-6 order-1 order-lg-2'>
         <a href="#" className="btn btn-danger">Request Withdraw</a>
         </div>
         </div>
         </div>
  </div>

<br></br>
<br></br>
<div class="card" style={{width:"50%"}}>
  <h5 class="card-header">Payement Details</h5>
  <div class="card-body">
  <div class="row">
  <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 '>
  <p class="card-text">Last Payement</p>
    <p class="card-text">You donot have any withdraw yet</p>
 </div>
 <div className='col-lg-6 order-1 order-lg-2'>
         <a href="#" className="btn btn-danger">View Payemnts</a>
         </div>
         </div>
  </div>
</div>



<br></br>
<br></br>
<div class="card" style={{width:"50%"}}>
  <h5 class="card-header">Payement Details</h5>
  <div class="card-body">
   
  <div class="row">
  <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 '>
    <p class="card-text">Paypal</p>
    </div>
    <div className='col-lg-6 order-1 order-lg-2'>
    <a href="#" className="btn btn-danger">Setup</a>
    </div>
  </div>
  <br></br>
  <div class="row">
  <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 '>
    <p class="card-text">Bank Transfer</p>
    </div>
    <div className='col-lg-6 order-1 order-lg-2'>
    <a href="#" className="btn btn-danger">Setup</a>
    </div>
  </div>
 
    {/* <div className="float-end">
         <a href="#" className="btn btn-danger">View Payemnts</a>
         </div> */}
  </div>
</div>
  </div>

 


  
  )
}
