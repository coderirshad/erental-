import React from "react";
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function AboutOrder( {product} ) {

  const navigate = useNavigate();
  const handleClick = async ( id ) =>{
    navigate(`/product/${id}`);
  }
  return (
    
    <div className="aboutProduct">
      
    <button className = "buttonMyProduct" onClick= {() => handleClick( product.id ) } >
          <a>
            <div className="myProductImage">
              <img class = "myProductImage"src= {product.images[0] } alt="Italian Trulli"></img>
            </div>
            <div className="myProductDetails">
              <h4 >{product.name}</h4>
              <p>Quantity : 25</p>
            </div>
            <div className="myProductDetails">
            <p>Price : ₹{product.price} </p>
            </div>
            <div className="myProductDetails">
              <p1><CheckCircleOutlineIcon style={{ color : "green" , marginRight:"5px"}}></CheckCircleOutlineIcon>Delivered On July 16 , 2022</p1>
            </div>
         
         <i className="fa fa-angle-right"></i></a>                                                      
    </button>
    </div>      
  );
}
