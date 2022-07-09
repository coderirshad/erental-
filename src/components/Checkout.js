import React from 'react';
import { useState } from 'react';
import Order_review from './Order_review';

export default function Checkout() {
 const [data, setdata] = useState({fname:"",lname:"",email:"",phone:"",companyName:"",address1:"",address2:"",country:"",townCity:"",stateProvince:"",postalZipCode:"",orderNote:"",payment:"Cash On Delivery"})
 const setValue = (e) =>{
    setdata((pre)=>{
        return{
            ...pre,
            [e.target.name]:e.target.value.trim()
        }})
   
 }
 
 const placeOrder = (e) =>{
    e.preventDefault()
    fetch("http://140.238.230.250:4545/place-order",{
        method:"PUT",
        body:JSON.stringify(data)
    })
  }
 return (
    <section class="checkout">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <form   action="/">
                    <h5>Billing Information</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <label>First Name*</label>
                            <input onChange={setValue} type="text" name="fname"  placeholder="Your first name"/>
                        </div>
                        <div class="col-md-6">
                            <label>Last Name*</label>
                            <input onChange={setValue} type="text" name="lname"  placeholder="Your last name"/>
                        </div>
                        <div class="col-md-6">
                            <label>Email Address*</label>
                            <input onChange={setValue} type="text" name="email"  placeholder="Your email address"/>
                        </div>
                        <div class="col-md-6">
                            <label>Phone*</label>
                            <input onChange={setValue} type="text" name="phone"  placeholder="Your phone number"/>
                        </div>
                        <div class="col-md-12">
                            <label>Company Name</label>
                            <input onChange={setValue} type="text" name="companyName"  placeholder="Your company name (optional)"/>
                        </div>
                        <div class="col-md-12">
                            <label>Address*</label>
                            <input onChange={setValue} type="text" name="address1"  placeholder="Address line 1"/>
                            <input onChange={setValue} type="text" name="address2"  placeholder="Address line 2"/>
                        </div>
                        <div class="col-md-6 contry">
                            <label>Country*</label>
                            <select onChange={setValue} name="country" class="country">
                                <option>United State</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label>Town/City*</label>
                            <input onChange={setValue} type="text" name="townCity"  placeholder="Your town or city name"/>
                        </div>
                        <div class="col-md-6">
                            <label>State/Province*</label>
                            <input onChange={setValue} type="text" name="stateProvince"  placeholder="Your state or province"/>
                        </div>
                        <div class="col-md-6">
                            <label>Postal/Zip Code*</label>
                            <input onChange={setValue} type="text" name="postalZipCode"  placeholder="Your postal or zip code"/>
                        </div>
                        <div class="col-md-12">
                            <ul class="list-unstyled">
                                <li><input type="checkbox" id="samsung" name="createAccount"/><label for="samsung">Create An Account?</label></li>
                                <li><input type="checkbox" id="apple" name="shipToSameAddress"/><label for="apple">Ship To Same Address?</label></li>
                            </ul>
                        </div>
                        <div class="col-md-12">
                            <label>Order Note</label>
                            <textarea onChange={setValue} name="orderNote" placeholder="Note for your order (optional). Example- special notes for delivery"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="order-review">
                            <h5>Order Review</h5>
                            <div class="review-box">
                                <ul class="list-unstyled">
                                    <li>Product <span>Total</span></li>
                                    <li class="d-flex justify-content-between">
                                        <div class="pro">
                                            <img src="images/sbar-1.png" alt=""/>
                                            <p>Product name here</p>
                                            <span>1 X $49.00</span>
                                        </div>
                                        <div class="prc">
                                            <p>$49.00</p>
                                        </div>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <div class="pro">
                                            <img src="images/sbar-2.png" alt=""/>
                                            <p>Product name here</p>
                                            <span>1 X $89.00</span>
                                        </div>
                                        <div class="prc">
                                            <p>$89.00</p>
                                        </div>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <div class="pro">
                                            <img src="images/sbar-3.png" alt=""/>
                                            <p>Product name here</p>
                                            <span>1 X $29.00</span>
                                        </div>
                                        <div class="prc">
                                            <p>$29.00</p>
                                        </div>
                                    </li>
                                    <li>Sub Total <span>$167.00</span></li>
                                    <li>Shipping & Tax <span>$00.00</span></li>
                                    <li>Grand Total <span>$167.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="pay-meth">
                            <h5>Payment Method</h5>
                            <div class="pay-box">
                                <ul class="list-unstyled">
                                    <li>
                                        <input onClick={setValue} type="radio" id="pay1" name="payment" value="Cash On Delivery" checked/>
                                        <label for="pay1"><span><i class="fa fa-circle"></i></span>Cash On Delivery</label>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sint placeat illo animi quis minus accusantium ad doloribus, odit explicabo asperiores quidem.</p>
                                    </li>
                                    <li>
                                        <input onClick={setValue} type="radio" id="pay2" name="payment" value="Direct Bank Transfer"/>
                                        <label for="pay2"><span><i class="fa fa-circle"></i></span>Direct Bank Transfer</label>
                                    </li>
                                    <li>
                                        <input onClick={setValue} type="radio" id="pay3" name="payment" value="Cheque Payment"/>
                                        <label for="pay3"><span><i class="fa fa-circle"></i></span>Cheque Payment</label>
                                    </li>
                                    <li>
                                        <input onClick={setValue} type="radio" id="pay4" name="payment" value="Paypal"/>
                                        <label for="pay4"><span><i class="fa fa-circle"></i></span>Paypal</label>
                                    </li>
                                    <li>
                                        <input onClick={setValue} type="radio" id="pay5" name="payment" value="Payoneer"/>
                                        <label for="pay5"><span><i class="fa fa-circle"></i></span>Payoneer</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button onClick={placeOrder} href="/" type="button" name="button" class="ord-btn">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
