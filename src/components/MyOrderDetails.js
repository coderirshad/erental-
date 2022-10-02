import React , {useState , useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function MyOrderDetails () {

  const location = useLocation();
  const [product, setProduct] = useState( location.state.product );
  
  const navigate = useNavigate();
  const handleClick = async ( id ) =>{
    //navigate(`/product/${id}`);
  }

  const downloadInvoice = () => {
    navigate("/DownloadInvoice",{state:{product : product }});
  };

  return (
    <div style = {{height : "400px" , marginTop : "40px" , width : "1000px" ,
     borderStyle: "ridge" , borderWidth : "1.5px" , marginLeft : "240px" , padding : "20px" , marginBottom : "40px" }} >
      
        <div className='upDiv'>
            
            <div className = "addressBar" style = {{ marginLeft : "-10px" , width : "350px"}}>
              <h5 style = {{marginBottom : "10px"}} >Shipping Address</h5>
              <p><strong>{product?.shipping_address?.name}</strong></p>
              <p>{product?.shipping_address?.locality}</p>
              <p style = {{marginBottom : "10px" }}  >{product?.shipping_address?.city}, {product?.billing_address?.pincode} </p>

              <p><strong>Phone Number</strong></p>
              <p>{product?.shipping_address?.phone_number}</p>
            </div>          

            <div className = "addressBar" style = {{ width : "350px" , marginLeft : "0px" }}>
              <h5 style = {{marginBottom : "10px" }} >Billing Address</h5>
              <p><strong>{product?.billing_address?.name}</strong></p>
              <p>{product?.billing_address?.locality}</p>
              <p style = {{marginBottom : "10px" }}  >{product?.billing_address?.city}, {product?.billing_address?.pincode} </p>

              <p><strong>Phone Number</strong></p>
              <p>{product?.billing_address?.phone_number}</p>
            </div>   

            <div className = "addressBar" style = {{ width : "200px" , marginLeft : "0px" }}>
              <button onClick={downloadInvoice} ><strong>Download Invoice</strong></button>
            </div>   

        </div>

        <div className='downDiv'>
            <div className="myProductImage">
              <img class = "myProductImage"src= {product?.Cart_item[0].image} alt="Italian Trulli"></img>
            </div>
            <div className="myProductDetails">
              <h4 >{product?.name}</h4>
              <p>Quantity : {product?.Cart_item[0].quantity}</p>
            </div>
            <div className="myProductDetails">
            <p>Price : ₹{product?.grandtotal} </p>
            </div>
            <div className="myProductDetails">
              <p1><CheckCircleOutlineIcon style={{ color : "green" , marginRight:"5px"}}></CheckCircleOutlineIcon>Delivered On July 16 , 2022</p1>
            </div>                                              
        </div>

    </div>   
  );
}

/*
<div className="aboutProduct">
      
    <button className = "buttonMyProduct" onClick= {() => handleClick( product ) } >
          <a>
            <div className="myProductImage">
              <img class = "myProductImage"src= {product.Cart_item[0].image} alt="Italian Trulli"></img>
            </div>
            <div className="myProductDetails">
              <h4 >{product.name}</h4>
              <p>Quantity : {product.Cart_item[0].quantity}</p>
            </div>
            <div className="myProductDetails">
            <p>Price : ₹{product.grandtotal} </p>
            </div>
            <div className="myProductDetails">
              <p1><CheckCircleOutlineIcon style={{ color : "green" , marginRight:"5px"}}></CheckCircleOutlineIcon>Delivered On July 16 , 2022</p1>
            </div>
         
         <i className="fa fa-angle-right"></i></a>                                                      
    </button>
    </div>      
*/
