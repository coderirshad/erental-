import React from "react";
import { Link, useNavigate , useLocation  ,useHistory  } from 'react-router-dom';
export default function AboutProduct( {product} ) {

  const navigate = useNavigate();
  const handleClick = async ( id ) =>{
    navigate(`/product/${id}`);
  }
  return (
    
    <div class="child">
      
    <button className = "button1" onClick= {() => handleClick( product.id ) } >
          <a>
          <img class = "productImage"src= {product.image } alt="Italian Trulli"></img>
          <div className="productDetails">
            <h4 >{product.name}</h4>
            <p>Stock : {product.Stock}</p>
            <p>Price : ₹{product.price}  ₹<del>{product.price+product.discounted_price}</del></p>
            <h7>Discount : ₹{ product.discounted_price } <span class='special-word'>( {product.discounted_percent}%off )</span></h7>
         </div>
         
         <i className="fa fa-angle-right"></i></a>                                                      
    </button>
    </div>      
  );
}
