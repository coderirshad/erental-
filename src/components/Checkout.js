import {React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {  Button } from '@material-ui/core/';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import Address from './Adresses';


export default function Checkout() {
 const navigate = useNavigate();
 const [payment, setPayment] = useState("")
 const [orderReview,setOrderReview]=useState({})
 const [paymentMethod,setPaymentMethod]=useState([])
 const [cartsummary, setcartsummary] = useState({})
 const [day, setDay] = useState();
 const [Quantity, setQuantity] = useState();
 const [cartproduct, setcartproduct] = useState([])
 const [shippingChecked, setShippindChecked] = useState(false)
 
 const UpdateQuantity = async (cart_item_id1,finalquantity,Day)=>{
    const response = await fetch(`http://${process.env.REACT_APP_URL}/cart`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
          },
        body: JSON.stringify(
            {
                cart_item_id:cart_item_id1,
                quantity:finalquantity,
                color:'',
                size:'',
                day:Day,
                length:'',
                width: '',
            }
        )
    });
    const data = await response.json();
    setcartproduct(data.cart)
    setcartsummary(data); 
}
const Increment = (id1,quantity,day,type) =>{
    if(type) day = day + 1;
    else quantity = quantity + 1;
    UpdateQuantity(id1,quantity,day);
}
const Decrement = (id1,quantity,day,type) =>{
    if(type) day = day - 1;
    else quantity = quantity - 1;
    UpdateQuantity(id1,quantity,day);
}

 
 
 
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

  const fetchDataCart = () =>{
    fetch(`http://${process.env.REACT_APP_URL}/cart`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
          }          
    })
    .then((response)=>{
        return response.json();
    }).then((data)=>{
         setcartsummary(data);
         setOrderReview(data)
         setcartproduct(data.cart);     
    })

}


 const fetchData = ( ) =>{
    fetch(`http://${process.env.REACT_APP_URL}/payment-method`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
        }
    }).then((response)=>{
        return response.json();
    }).then((pay)=>{
        console.clear()
         console.log(pay)
         setPaymentMethod(pay);
    })
 }
 const handleSubmit = (e) =>{
    if(addresses.length === 0){
        navigate("/myaccount/Adresses");
        alert("Please Add Address First");
    }
    else{
        e.preventDefault();
        placeOrder();
    }
 }

 const HandleAddress = (e) =>{
    e.preventDefault();
    navigate("/myaccount/Adresses");
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
            shipping_address_id:Shippinggaddress,
        })
    })
    
    navigate('/myaccount/Orders');
  }
  useEffect(() => {
    fetchData()
    fetchAddress()
    fetchDataCart();
  }, [])

 const [addresses, setAddresses] = useState( [] );
 const [Billingaddress , setBillingAddress] = useState( '' );
 const [Shippinggaddress , setShippingAddress] = useState( '' );

 const toAddressBlock = ()=>{
    navigate("/myaccount/Adresses");
 }

 return (
            <div>
                <div className='Checkout'>
                    <div className='Checkout_header'>
                        <h1>Shopping Cart</h1>
                        <div className='Checkout_header_content'>
                            <KeyboardBackspaceIcon style={{fontSize:"2.2rem", marginRight:"0.5rem"}} />
                            <Link to="/"><p style={{textDecoration:"underline", color:"white"}}>Continue Shopping</p></Link>
                        </div>
                    </div>  
                </div>
                <div className='Chockout_product'>
                    <div className='Chockout_product_box'>
                        <table className='Checkout_product_table'>
                            <thead>
                                <td>Prodcut</td>
                                <td>Price</td>
                                <td>Day</td>
                                <td>Quantity</td>
                                <td>Total</td>
                                <td></td>
                            </thead>
                            <tbody> 
                                {cartproduct.length === 0 ? <h1 style={{textAlign:"center", padding:"20rem"}}>Please Add Item To Cart</h1> : 
                                
                                cartproduct.map(data => 
                                    <tr> 
                                        <td>
                                            <div className='Checkout_product_imgbox'>
                                                <div className='checkout_product_img'>
                                                    <img src={data.image} alt='Product_image'/>
                                                </div>
                                                <div className='checkout_product_img_content'>
                                                    <h3>{data.name}</h3>
                                                    <p>Lorem Ipsum</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.price}</td>
                                        <td>
                                            <div className='Checkout_product_day'>
                                                <button onClick={()=>Decrement(data.cart_item_id,data.quantity,data.day,true)}>-</button>
                                                <input type='number' value={data.day} />
                                                <button onClick={()=>Increment(data.cart_item_id,data.quantity,data.day,true)}>+</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='Checkout_product_day quantity'>
                                                <button onClick={()=>Decrement(data.cart_item_id,data.quantity,data.day)}>-</button>
                                                <input type='number' value={data.quantity}/>
                                                <button onClick={()=>Increment(data.cart_item_id,data.quantity,data.day)}>+</button>
                                            </div>
                                        </td>
                                        <td>{data.total}</td>
                                        <td><DeleteIcon style={{fontSize:"2.4rem", cursor:"pointer"}} onClick={()=>UpdateQuantity(data.cart_item_id)}/></td>
                                    </tr> 
                                )}
                                
                                {/* here product image over */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* here next address and payment start */}
                <div className='Checkout_address_paymen'>
                   <div className='Checkout_address_paymen_box'>
                       <div className='Checkout_address'>
                           <h3 className='Checkout_Heder'>Address</h3>
                           <div className='Checkout_header_content_'>
                             <h3>Billing Address</h3>
                             <button onClick={(e) =>HandleAddress(e)}>Add New Address</button>
                           </div>
                           <div className='Checkout_address_box'>
                                 {addresses.length === 0 ?
                                   <h1>Please Add your Address</h1>
                                   :
                                   addresses.map((address) => 
                                   <div className='Checkout_address_box_mini'>
                                        <Checkbox onChange={() =>setBillingAddress(address.address_id)} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                                        <div>
                                            <p> Name - <span>{address.name}</span></p>
                                            <p>Address - <span>{address.street_add}</span></p>
                                            <p>Landmark - <span>{address.locality}</span></p>
                                            <p>Phone No - <span>{address.phone_number}</span></p>
                                            <p>GST No - <span>{address.gstn}</span></p>
                                            <p>Billing Date - <span>{address.ship_date}</span></p>
                                        </div>
                                    </div>
                                   )
                                }
                           </div>

                           <div className='Checkout_again_address'>
                                <input type='checkbox' onChange={(e) =>setShippindChecked(e.target.checked)} />
                                <p>Shipping Address is Different</p>
                           </div>
                            <div className='Checkout_address_box' style={{marginBottom:"2rem"}}>
                                 {shippingChecked === false ?
                                   <h1 style={{color:"black", paddingBottom:"3rem"}}>Please Add your Address</h1>
                                   :
                                   addresses.map((address) => 
                                   <div className='Checkout_address_box_mini'>
                                        <Checkbox onChange={() =>setShippingAddress(address.address_id)} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                                        <div>
                                            <p> Name - <span>{address.name}</span></p>
                                            <p>Address - <span>{address.street_add}</span></p>
                                            <p>Landmark - <span>{address.locality}</span></p>
                                            <p>Phone No - <span>{address.phone_number}</span></p>
                                            <p>GST No - <span>{address.gstn}</span></p>
                                            <p>Billing Date - <span>{address.ship_date}</span></p>
                                        </div>
                                    </div>

                                   )
                                }
                           </div>
                           <div className='Checkout_map_location'>
                              <div className='Checkout_map_location_input'>
                                <input type='text'  placeholder='Enter your delivery location'/>
                                <button>Add Address</button>
                              </div>
                              <p>Lorem ipsum dolor sit amet consectetur. Sit vestibulum mauris massa neque. Ullamcorper orci massa bibendum condimentum blandit. </p>
                           </div>


                       </div>

                       {/* Cart payment details */}

                       <div className='Checkout_payment'>
                           <h1>Cart Summary</h1>
                           <div className='Checkout_payment_price'>
                                <div>
                                    <p>Subtotal :</p>
                                    <p>INR  {cartsummary.sub_total}</p>
                                </div>
                                <div>
                                    <p>Transportation Charge :</p>
                                    <p>INR  {cartsummary.transportation_charge}</p>
                                </div>
                                <div>
                                    <p>CGST (9%) :</p>
                                    <p>INR  {cartsummary.cgst}</p>
                                </div>
                                <div>
                                    <p>SGST :</p>
                                    <p>INR  {cartsummary.sgst}</p>
                                </div>
                                <div>
                                    <p>Grand Total :</p>
                                    <p>INR  {cartsummary.total}</p>
                                </div>
                           </div>
                           <hr></hr>
                           <div className='Checkout_Payment_metod'>
                              
                             {paymentMethod.map((payment) =>
                              <div className='Checkout_Google_pay'>
                                 <div className='Checkout_Google_pay_box'>
                                     <div className='Checkout_Flex_icon'>
                                          <div>
                                             <img src='' alt='icont_image' />
                                          </div>
                                          {payment.name}
                                     </div>
                                 </div>
                                 <input type='radio' onClick={() =>setPayment(payment.id)} name='googlepay' />
                               </div>
                             
                             )} 
                             

                              <div className='Checkout_Google_pay'>
                                <div className='Checkout_Google_pay_box'>
                                    <div className='Checkout_Flex_icon'>
                                         <div>
                                            <img src='' alt='icont_image' />
                                         </div>
                                         Card Payment
                                    </div>
                                </div>
                                <input type='radio' name='googlepay' />
                              </div>

                              <div className='Checkout_Google_pay'>
                                <div className='Checkout_Google_pay_box'>
                                    <div className='Checkout_Flex_icon'>
                                         <div>
                                            <img src='' alt='icont_image' />
                                         </div>
                                         Cash on Delivery
                                    </div>
                                </div>
                                <input type='radio' name='googlepay' />
                              </div>


                           </div>

                           <div className='Checkout_button_box'>
                              <button onClick={handleSubmit} className='Checkout_button'>Check Out</button>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
  );
}





// <section className="checkout">
// <div className="container">
//     <div className="row">
//         <div className="col-md-7">
//             {addresses.length === 0 ? (<button onClick={()=>toAddressBlock()} className="btn border-dark bg-primary" style={{marginTop:"17rem"}}><strong>Add New Address</strong></button>):(
//                 <>
//             <div>
//             <button onClick={()=>toAddressBlock()} className="btn border-dark bg-primary" style={{marginRight:"43rem"}}><strong>Add New Address</strong></button>
//                 <h3><strong>Billing Address</strong></h3>
//                 <div className="row">

//                 {   
//                     addresses.map ( ( address ) => (
//                     <div className='address'>
//                         <Button onClick={() => setBillingAddress (address.address_id)} style={{ color: 'black' }} size="small">
//                         { ( address.address_id === Billingaddress ) ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/> }
//                         </Button>
//                         <h5 className='spaceBetweenAddressDetails'><strong>Name : {address.name}</strong></h5>
//                         <p>Address : {address.street_add}</p>
//                         <p>Landmark : {address.locality}</p>
//                         <p>City : {address.city}</p>
//                         <p>Pincode : {address.pincode}</p>
//                         <p>Phone Number : {address.phone_number}</p>
//                         <p>GST Number : {address.gstn}</p>
//                         <p>Billing Date : {address.ship_date}</p>
//                     </div>
//                     )
//                     )
//                 }
//                 </div>
//             </div>
//             <div >
//                 <h3><strong>Shipping Address</strong></h3>
//                 <div className="row">

//                 {   
//                     addresses.map ( ( address ) => (
//                     <div className='address' >
//                         <Button onClick={() => setShippingAddress (address.address_id)} style={{ color: 'black' }} size="small">
//                             { ( address.address_id === Shippinggaddress ) ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/> }
//                         </Button>
//                         <h5 className='spaceBetweenAddressDetails'><strong>Name : {address.name}</strong></h5>
//                         <p>Address : {address.street_add}</p>
//                         <p>Landmark : {address.locality}</p>
//                         <p>City : {address.city}</p>
//                         <p>Pincode : {address.pincode}</p>
//                         <p>Phone Number : {address.phone_number}</p>
//                         <p>GST Number : {address.gstn}</p>
//                         <p>Shipping Date : {address.ship_date}</p>
//                     </div>
//                     )
//                     )
//                 }
//                 </div>
//             </div>
//             </>)}
//         </div>
//         <div className="col-md-5">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="order-review">
//                         <h5>Order Review</h5>
//                         <div className="review-box">
//                             <ul className="list-unstyled">
//                                 <li>Product <span>Total</span></li>
//                                 {cart.map((singleProduct,id)=>(
//                                     <li key={id} className="d-flex justify-content-between">
//                                         <div className="pro">
//                                             <img src={singleProduct.image} alt=""/>
//                                             <p>{singleProduct.name}</p>
//                                             <span>{singleProduct.quantity} X {singleProduct.price}</span>
//                                         </div>
//                                         <div className="prc">
//                                             <p>INR {singleProduct.total}</p>
//                                         </div>
//                                     </li>
//                                 ))}
                               
//                                 <li className="total">Subtotal :<span>INR {cartsummary.sub_total}</span></li>
//                                 <li className="total">Transportation Charge :<span>INR {cartsummary.transportation_charge}</span></li>
//                                 <li className="total">Cgst :<span>INR {cartsummary.cgst}</span></li>
//                                 <li className='total'>sgst :<span>INR {cartsummary.sgst}</span></li>
//                                 <li className='total'>Grand Total : <span>INR {cartsummary.total}</span></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-12">
//                     <div className="pay-meth">
//                         <h5>Payment Method</h5>
//                         <div className="pay-box">
//                             <ul className="list-unstyled">
//                                 {paymentMethod.map((pay,id)=>(
//                                     <li key={id}>
//                                         <input onClick={()=>setPayment(pay.id)} type="checkbox" id="pay1" name="payment" value={pay.name} />
//                                         <label for={pay.id}><span><i className="fa fa-circle"></i></span>{pay.name}</label>
//                                         <p>{pay.details}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                     <button onClick={handleSubmit} href="myaccount/Orders" type="button" name="button" className="ord-btn">Place Order</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </section>