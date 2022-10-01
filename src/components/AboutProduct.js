import React from "react";
import { Link, useNavigate , useLocation  ,useHistory  } from 'react-router-dom';
export default function AboutProduct( {product} ) {
   
  const navigate = useNavigate();
  const handleClick = async () =>{
    console.log(product)
    navigate(`/product/${product.product_id}`);
  }
  return (
    
    <div class="child">
      
    <button className = "button1" onClick= {() => handleClick()} >
          <a>
          <img class = "productImage"src= {product.images[0]} alt="Italian Trulli"></img>
          <div className="productDetails">
            <p onClick= {() => handleClick()}><a>{product.product_name}</a></p>
            <p>Price : ₹{product.discounted_price}  ₹<del>{product.price}</del></p>
         </div>
         
         <i className="fa fa-angle-right"></i></a>                                                      
    </button>
    </div>      
  );
}
