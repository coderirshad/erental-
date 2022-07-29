import {React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {  Button } from '@material-ui/core/';
import MyBillingAddress from './MyBillingAddress';
export default function Checkout() {
 const navigate = useNavigate();
 const [payment, setPayment] = useState("")
 const [orderReview,setOrderReview]=useState({})
 const [cart,setcart]=useState([])
 const [paymentMethod,setPaymentMethod]=useState([])
 const fetchAddress = async() =>{
    await fetch(`http://${process.env.REACT_APP_URL}/address`,{
          method:"GET",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': GetAuthorization()
            }  
      })
      
      .then((response)=>{
          return response.json();
      }).then((data)=>{
        setAddresses ( data ) ;   
      })
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
 const handleSubmit = (e) =>{
    e.preventDefault()
    placeOrder();
 }
 const placeOrder = async () =>{
    await fetch(`http://${process.env.REACT_APP_URL}/checkout`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
          },
        body:JSON.stringify({
            payment_method_id:payment,
            billing_address_id:Billingaddress,
            shipping_address_id:Shippinggaddress
        })
    })
    navigate('/myaccount/Orders')
  }
  useEffect(() => {
    fetchData()
    fetchAddress()
  }, [])

 const [addresses, setAddresses] = useState( [] );
 const [Billingaddress , setBillingAddress] = useState( '' );
 const [Shippinggaddress , setShippingAddress] = useState( '' );

 return (
    <section class="checkout">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div >
                    <h3><strong>Billing Address</strong></h3>
                    <div class="row">

                    {   
                        addresses.map ( ( address ) => (
                        <div className='address' >
                            <Button onClick={() => setBillingAddress (address.address_id)} style={{ color: 'black' }} size="small">
                            { ( address.address_id == Billingaddress ) ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/> }
                            </Button>
                            <h5 className='spaceBetweenAddressDetails'><strong>Name : {address.name}</strong></h5>
                            <p>Locality : {address.locality}</p>
                            <p>City : {address.city}</p>
                            <p>Pincode : {address.pincode}</p>
                            <p>Phone Number : {address.phone_number}</p>
                        </div>
                        )
                        )
                    }
                    </div>
                </div>
                <div >
                    <h3><strong>Shipping Address</strong></h3>
                    <div class="row">

                    {   
                        addresses.map ( ( address ) => (
                        <div className='address' >
                            <Button onClick={() => setShippingAddress (address.address_id)} style={{ color: 'black' }} size="small">
                                { ( address.address_id == Shippinggaddress ) ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/> }
                            </Button>
                            <h5 className='spaceBetweenAddressDetails'><strong>Name : {address.name}</strong></h5>
                            <p>Locality : {address.locality}</p>
                            <p>City : {address.city}</p>
                            <p>Pincode : {address.pincode}</p>
                            <p>Phone Number : {address.phone_number}</p>
                        </div>
                        )
                        )
                    }
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="order-review">
                            <h5>Order Review</h5>
                            <div className="review-box">
                                <ul className="list-unstyled">
                                    <li>Product <span>Total</span></li>
                                    {cart.map((singleProduct,id)=>(
                                        <li key={id} className="d-flex justify-content-between">
                                            <div className="pro">
                                                <img src={singleProduct.image} alt=""/>
                                                <p>{singleProduct.name}</p>
                                                <span>{singleProduct.quantity} X {singleProduct.price}</span>
                                            </div>
                                            <div className="prc">
                                                <p>INR {singleProduct.total}</p>
                                            </div>
                                        </li>
                                    ))}
                                   
                                    <li className="total">Sub Total <span >INR {orderReview.subTotal}</span></li>
                                    <li className="total">Shipping & Tax <span>INR {orderReview.shiipingTax}</span></li>
                                    <li className="total">Grand Total <span>INR {orderReview.grandTotal}</span></li>
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
                                            <input onClick={()=>setPayment(pay.id)} type="checkbox" id="pay1" name="payment" value={pay.name} />
                                            <label for={pay.id}><span><i className="fa fa-circle"></i></span>{pay.name}</label>
                                            <p>{pay.details}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <button onClick={handleSubmit} href="myaccount/Orders" type="button" name="button" className="ord-btn">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
