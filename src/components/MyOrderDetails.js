import React , {useState , useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function MyOrderDetails () {

  const location = useLocation();
  const [product, setProduct] = useState( location.state.product );
  const [cart_items, setCart_items] = useState( product.Cart_item );
  const navigate = useNavigate();
  const downloadInvoice = () => {
    navigate("/DownloadInvoice",{state:{product : product }});
  };

  return (
    <div>
        
        <div className="container text-center my-4 shadow">
          <div className="row border border-primary p-3 shadow">
            <div className="col">
              <h5>Shipping Address</h5>
              <p><strong>{product?.shipping_address?.name}</strong></p>
              <p>{product?.shipping_address?.locality}</p>
              <p>{product?.shipping_address?.city}, {product?.billing_address?.pincode} </p>

              <p><strong>Phone Number</strong></p>
              <p>{product?.shipping_address?.phone_number}</p>
            </div>

            <div className="col">
              <h5>Billing Address</h5>
              <p><strong>{product?.billing_address?.name}</strong></p>
              <p>{product?.billing_address?.locality}</p>
              <p>{product?.billing_address?.city}, {product?.billing_address?.pincode} </p>

              <p><strong>Phone Number</strong></p>
              <p>{product?.billing_address?.phone_number}</p>
            </div>
            <div className="col my-auto">
            <button onClick={downloadInvoice} ><strong>Download Invoice</strong></button>
            </div>
          </div>

          <div className='row p-3'>
            {cart_items.map((items)=>(
              <div className="row border-bottom border-secondary">
            <div className="col">
              <img className="myProductImage"src= {items.image} alt="Italian Trulli"></img>
            </div>
            <div className="col my-auto">
              <h4 >{product?.name}</h4>
              <p>Quantity : {items.quantity}</p>
            </div>
            <div className="col my-auto">
              <p>Price : ₹{items.total} </p>
            </div>
            <div className="col my-auto">
            <p1><CheckCircleOutlineIcon style={{ color : "green" , marginRight:"5px"}}></CheckCircleOutlineIcon>Delivered On July 16 , 2022</p1>
            </div>
            </div>
            ))}
          </div>
        </div>

    </div>   
  );
}
