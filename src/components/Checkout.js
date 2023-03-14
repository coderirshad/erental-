import {React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {  Button } from '@material-ui/core/';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';


export default function Checkout() {
 const navigate = useNavigate();
 const [payment, setPayment] = useState("")
 const [orderReview,setOrderReview]=useState({})
 const [cart,setcart]=useState([])
 const [paymentMethod,setPaymentMethod]=useState([])
 const [cartsummary, setcartsummary] = useState({})
 const [day, setDay] = useState();
 const [Quantity, setQuantity] = useState();
 const [cartproduct, setcartproduct] = useState([])
 
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
                length:"",
                width: "",
            }
        )
    });
    const data = await response.json();
    setcartproduct(data.cart)
    setcartsummary(data); 
    console.clear();
    console.log("hello",data.cart)
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
         setcart(data.cart);     
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
         setPaymentMethod(pay);
    })
 }
 const handleSubmit = (e) =>{
    if(addresses.length === 0){
        navigate("/myaccount/Adresses");
        alert("Please Add Address First");
    }
    else{
        e.preventDefault()
        placeOrder();
    }
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
    
    navigate('/myaccount/Orders');
  }
  useEffect(() => {
    fetchData()
    fetchAddress()
    fetchDataCart();
  }, [day, Quantity])

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
                            <p style={{textDecoration:"underline"}}>Continue Shopping</p>
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
                               <tr> 
                                    <td>
                                        <div className='Checkout_product_imgbox'>
                                            <div className='checkout_product_img'>
                                                <img src='https://drive.google.com/uc?export=view&id=13tS9doCqrMN6FObi2nL_cZT8UsR-sh9y' alt='Product_image'/>
                                            </div>
                                            <div className='checkout_product_img_content'>
                                                <h3>Product Name</h3>
                                                <p>Lorem Ipsum</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>199.00</td>
                                    <td>
                                        <div className='Checkout_product_day'>
                                            <button>-</button>
                                            <input type='number' />
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='Checkout_product_day'>
                                            <button>-</button>
                                            <input type='number' />
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td>199.00</td>
                                    <td><DeleteIcon style={{fontSize:"2.4rem"}}/></td>
                                </tr> 

                                {cartproduct.map(data => 
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
                                                    <button onClick={()=>Decrement(data.cart_item_id,data.quantity,data.day,true)}>-</button>
                                                    <input type='number' onChange={(e) => setQuantity(e.taraget.value)} value={data.quantity}/>
                                                    <button onClick={()=>Increment(data.cart_item_id,data.quantity,data.day,true)}>+</button>
                                                </div>
                                            </td>
                                            <td>{data.total}</td>
                                            <td><DeleteIcon style={{fontSize:"2.4rem"}} onClick={()=>UpdateQuantity(data.cart_item_id)}/></td>
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
                             <button>Add New Address</button>
                           </div>
                           <div className='Checkout_address_box'>
                                 <div className='Checkout_address_box_mini'>
                                     <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                                     <div>
                                        <p> Name - <span>Suraj</span></p>
                                        <p>Address - <span>Hanuman nagar nai basti</span></p>
                                        <p>Landmark - <span>4 mandir ke pass</span></p>
                                        <p>Phone No - <span>8839931558</span></p>
                                        <p>GST No - <span>jfksduf3555</span></p>
                                        <p>Billing Date - <span>28/12/25</span></p>
                                     </div>
                                 </div>
                                 <div className='Checkout_address_box_mini'>
                                     <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                                     <div>
                                        <p> Name - <span>Suraj</span></p>
                                        <p>Address - <span>Hanuman nagar nai basti</span></p>
                                        <p>Landmark - <span>4 mandir ke pass</span></p>
                                        <p>Phone No - <span>8839931558</span></p>
                                        <p>GST No - <span>jfksduf3555</span></p>
                                        <p>Billing Date - <span>28/12/25</span></p>
                                     </div>
                                 </div>
                           </div>

                           <div className='Checkout_again_address'>
                                <input type='checkbox'  />
                                <p>Shipping Address is Different</p>
                           </div>

                           <div className='Checkout_map_location'>
                              <h1>Add Your Shipping Address</h1>
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
                                    <p>INR  597.00</p>
                                </div>
                                <div>
                                    <p>Transportation Charge :</p>
                                    <p>INR  597.00</p>
                                </div>
                                <div>
                                    <p>CGST (9%) :</p>
                                    <p>INR  597.00</p>
                                </div>
                                <div>
                                    <p>SGST :</p>
                                    <p>INR  597.00</p>
                                </div>
                                <div>
                                    <p>Grand Total :</p>
                                    <p>INR  597.00</p>
                                </div>
                           </div>
                           <hr></hr>
                           <div className='Checkout_Payment_metod'>
                              <div className='Checkout_Google_pay'>
                                <div className='Checkout_Google_pay_box'>
                                    <div className='Checkout_Flex_icon'>
                                         <div>
                                            <img src='' alt='icont_image' />
                                         </div>
                                         Google pay
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
                              <button className='Checkout_button'>Check Out</button>
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