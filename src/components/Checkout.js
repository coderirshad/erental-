import {React, useState, useEffect } from 'react';
import GetAuthorization from './GetAuthorization';

export default function Checkout() {
 const [data, setdata] = useState({fname:"",lname:"",email:"",phone:"",companyName:"",address1:"",address2:"",country:"",townCity:"",stateProvince:"",postalZipCode:"",orderNote:"",payment:"Cash On Delivery"})
 const [orderReview,setOrderReview]=useState({})
 const [cart,setcart]=useState([])
 const [paymentMethod,setPaymentMethod]=useState([])
 const setValue = (e) =>{
    setdata((pre)=>{
        return{
            ...pre,
            [e.target.name]:e.target.value.trim()
        }})
   
 }
 const fetchData = ( ) =>{
    fetch(`http://${process.env.REACT_APP_URL}/order-review`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
        }
    }).then((response)=>{
        return response.json();
    }).then((review)=>{
         setOrderReview(review)
         setcart(review.cart);
    })
    fetch(`http://${process.env.REACT_APP_URL}/payment-method`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
        }
    }).then((response)=>{
        return response.json();
    }).then((pay)=>{
         setPaymentMethod(pay);
    })
 }

 const placeOrder = (e) =>{
    e.preventDefault()
    fetch(`http://${process.env.REACT_APP_URL}/place-order`,{
        method:"PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
          },
        body:JSON.stringify(data)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
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
                                    {cart.map((singleProduct,id)=>(
                                        <li key={id} className="d-flex justify-content-between">
                                            <div className="pro">
                                                <img src="images/sbar-1.png" alt=""/>
                                                <p>{singleProduct.name}</p>
                                                <span>{singleProduct.quantity} X ${singleProduct.price}</span>
                                            </div>
                                            <div className="prc">
                                                <p>${singleProduct.total}</p>
                                            </div>
                                        </li>
                                    ))}
                                   
                                    <li>Sub Total <span>${orderReview.subTotal}</span></li>
                                    <li>Shipping & Tax <span>${orderReview.shiipingTax}</span></li>
                                    <li>Grand Total <span>${orderReview.grandTotal}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="pay-meth">
                            <h5>Payment Method</h5>
                            <div class="pay-box">
                                <ul class="list-unstyled">
                                    {paymentMethod.map((pay,id)=>(
                                        <li key={id}>
                                            <input onClick={setValue} type="radio" id="pay1" name="payment" value={pay.name} checked/>
                                            <label for={pay.id}><span><i className="fa fa-circle"></i></span>{pay.name}</label>
                                            <p>{pay.details}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <button onClick={placeOrder} href="/" type="button" name="button" className="ord-btn">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
