import React from "react";
import { Link, useNavigate , useLocation  ,useHistory  } from 'react-router-dom';
export default function AboutProduct( {product} ) {

  const navigation = useNavigate();
  const navigate = useNavigate() ;

  const handleClick = async ( productId ) =>{
    navigate('/aboutUs');
  }
  return (
    
    <div class="child">
      
    <button className = "button1" onClick= {() => handleClick( product.id ) } >
          <a>
          <img class = "productImage"src= {product.image } alt="Italian Trulli"></img>
          <div className="productDetails">
            <h4 >{product.name}</h4>
            <p>Stock : {product.Stock}</p>
            <p>Price : ₹{product.price}  ₹<del>599</del></p>
            <h7>Discount : ₹{ 599 - product.price } <span class='special-word'>( 75%off )</span></h7>
         </div>
         
         <i className="fa fa-angle-right"></i></a>                                                      
    </button>
    </div>      
      
    
  );
}

/*

<h7>Price : ₹{product.price}  ₹<del>599</del></h7>
            <h7>Discount : ₹{ 599 - product.price } 75%off</h7>

            */