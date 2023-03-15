import React from 'react'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
import { useNavigate } from 'react-router-dom'

const HotDealBox = ({data, login}) => {
    console.clear()
    console.log(data)
    const [value, setValue] = useState(4)
    const [quantity, setquantity] = useState(1);
    const [color, setcolor] = useState("");
    const [size, setsize] = useState("");
    const [day, setday] = useState(1)
    const [id, setId] = useState("")
    const [service_id, setServiceid] = useState("without_service");
    const navigate = useNavigate();


    const AddToCart = async (id) => {
        if (login) {
            const response = await fetch(`http://${process.env.REACT_APP_URL}/cart`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': GetAuthorization(),
                },
                body: JSON.stringify(
                    {
                        cart_item_id: id,
                        quantity: quantity,
                        color: color,
                        size: size,
                        day: day,
                        service_id:service_id,
                        type:"cart"
            
                    }
                )
            })
            if(!response.ok){
                alert("something went wrong")
                return;
            }
        }
        else {
            alert("please login!!")
            navigate('/login')
        }
    }

    const AddToQuote = async (id) => {
        if (login) {
            const response = await fetch(`http://${process.env.REACT_APP_URL}/cart`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': GetAuthorization(),
                },
                body: JSON.stringify(
                    {
                        cart_item_id: id,
                        quantity: quantity,
                        color: color,
                        size: size,
                        day: day,
                        service_id:service_id,
                        type:"quote"
            
                    }
                )
            })
            navigate('/myaccount/Quotes');
        }
        else {
            alert("please login!!")
            navigate('/login')
        }
    }

    const DirectCheckout = () =>{
        if(login){
            navigate('/checkout'); 
        }else{
            alert("please login!!")
            navigate('/login')  
        }
    }


              return (
                      <div className='Hotdeals_item' key={data.product_id}>
                           <div className='Hotdeal_image'>
                              <Link to={`/product/${data.product_id}`}><img src={data.image} alt="img_product" /></Link>
                              <div className='Hotdeal_image_discount'>56%<div style={{lineHeight:"4px"}}>OFF</div></div>
                           </div>
                           <div className='Hotdeal_content'>
                             <Link to={`/product/${data.product_id}`}><h3>{data.product_name}</h3></Link>
                              <div className='Hotdeal_rating text-secoundry'>
                                <div>
                                   <Rating 
                                    value={data.rating}
                                    readOnly 
                                   />
                                </div>
                                <div style={{color:"#9B9B9B", position:'relative',bottom:"3px", marginLeft:"2px"}}>
                                    ({data.review})
                                </div>
                              </div>
                              <hr></hr>
                              <div className='Hotdeal_price dBetween'>
                                <h5><del>₹{data.price}</del></h5>
                                <h5>₹{data.discounted_price}</h5>
                              </div>
                           </div>
                           <div className='Hotdeal_cart_quote'>
                                <div onClick={() => AddToQuote(data.product_id)}>
                                    <div className='Hotdeal_quote_image'>
                                        <img src="images/2.png" alt='quote' />Quote
                                    </div>
                                </div>
                                <div onClick={() => AddToCart(data.product_id)}>
                                    <div className='Hotdeal_cart_image'>
                                        <img src="images/1.png" alt='quote' />Cart
                                    </div>
                                </div>
                           </div>
                           <div className='Hotdeal_addrental'>
                                 <div onClick={DirectCheckout}>Add To Rental</div>
                           </div>
                       </div>
                   )
               }

export default HotDealBox