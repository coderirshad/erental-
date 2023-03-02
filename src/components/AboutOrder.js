import React from "react";
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function AboutOrder( {product} ) {

  const navigate = useNavigate();
  const handleClick = async ( product ) =>{
    navigate('/myOrderDetails',{state:{product : product }});
  }
  return (
  <div className = "card p-3 col-3 row" style={{width: "18rem"}}>
              <img class = "card-img-top"src= {product.Cart_item[0].image} alt="Italian Trulli"></img>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Quantity : {product.Cart_item[0].quantity}</p>
              <p className="card-text">Price : ₹{product.grandtotal} </p>
              
            </div><p1><CheckCircleOutlineIcon style={{ color : "green" , marginRight:"5px"}}></CheckCircleOutlineIcon>Order Date: {product.order_date}</p1>
            <a class="btn btn-primary" onClick= {() => handleClick( product ) }>View Order Details</a>                                               
    </div> 
  // <div className = "card p-3" style={{width: "18rem"}}>
  //             <img class = "card-img-top"src= {product.Cart_item[0].image} alt="Italian Trulli"></img>
  //           <div className="card-body">
  //             <h5 className="card-title">{product.name}</h5>
  //             <p className="card-text">Quantity : {product.Cart_item[0].quantity}</p>
  //             <p className="card-text">Price : ₹{product.grandtotal} </p>
  //             <p1><CheckCircleOutlineIcon style={{ color : "green" , marginRight:"5px"}}></CheckCircleOutlineIcon>Delivered On July 16 , 2022</p1>
  //           </div>
  //           <a class="btn btn-primary" onClick= {() => handleClick( product ) }>View Order Details</a>                                               
  //   </div> 
  );
}