import React, {useState,useEffect} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import GetAuthorization from './GetAuthorization';

const MyQuotes = () => {
    const navigate = useNavigate();

    const [quoteproduct, setquoteproduct] = useState([]);
    const [quotesummary, setquotesummary] = useState({});
    const [name, setName] = useState("");
    const [org_name, setorg_name] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [receive_date, setreceive_date] = useState("");
    const [return_date, setreturn_date] = useState("");
    const [message, setMessage] = useState("");
    const [delivery_location, setDeliveryLocation] = useState("");
    const [gst, setgst] = useState("");
    const [trans_charge, setTransCharge] = useState("");
    
    const toMyQuotation = async ()=>{
        if(name === "" || org_name === "" || email === "" || mobile === "" || receive_date === ""){
            alert("Please fill all fields marked with *");
        }
        else{
        let data = {name,org_name,email,mobile,receive_date,return_date,message,trans_charge, delivery_location, gst}
        await fetch(`http://${process.env.REACT_APP_URL}/quote/metadata`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
        },
        body: JSON.stringify(data)
        }).then((result) => {

        })
        navigate("/Quotation");
    }
    }

    const UpdateQuantity = async (cart_item_id1,finalquantity,Day)=>{
        const response = await fetch(`http://${process.env.REACT_APP_URL}/cart`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
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
                    type:"quote"
                }
            )
        });
        const data = await response.json();
        setquoteproduct(data.cart)
        setquotesummary(data); 
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

    const fetchData = () =>{
        fetch(`http://${process.env.REACT_APP_URL}/cart?type=quote`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }          
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setquoteproduct(data.cart)
            setquotesummary(data);       
        })

    }

    useEffect(() => {
        fetchData()                                                                                                                                     
     }, []);
    
  return (
    <div className="m-4" style={{minWidth: "100%"}}>
        <h2 id = 'spacing1' className='shadow-sm text-dark p-3 mb-4'>Request a Quote</h2>
        <div className="col-md-12">
                <div className="cart-table table-responsive" style={{minWidth:"100%"}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="t-pro">Product</th>
                                <th className="t-price">Day</th>                                                                                                                                     
                                <th className="t-qty">Quantity</th>
                                <th className="t-rem"></th>
                            </tr>
                        </thead>
                    {quoteproduct.map(data=>(
                        <tbody>
                                <tr>
                                    <td className="t-pro d-flex justify-content-center">
                                        <div className="t-img">
                                            <a href=""><img src={data.image} style={{height:"80px",width:"80px"}} alt=""/>{data.name}</a>
                                        </div>
                                    </td>
                                    <td className="t-qty">
                                        <div className="qty-box">
                                            <div className="quantity buttons_added">
                                                <input onClick={()=>Decrement(data.cart_item_id,data.quantity,data.day,true)} style={{color:"red",fontSize:"25px"}} type="button" value="-" className="minus"/>
                                                <input type="number" step="1" min="1" max="10" value={data.day} className="qty text" size="4" disabled/>
                                                <input onClick={()=>Increment(data.cart_item_id,data.quantity,data.day,true)} style={{color:"green",fontSize:"25px"}} type="button" value="+" className="plus"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="t-qty">
                                        <div className="qty-box">
                                            <div className="quantity buttons_added">
                                                <input  onClick={()=>Decrement(data.cart_item_id,data.quantity,data.day)} style={{color:"red",fontSize:"25px"}} type="button" value="-" className="minus"/>
                                                <input type="number" step="1" min="1" max="10" value={data.quantity} className="qty text" size="4" disabled/>
                                                <input onClick={()=>Increment(data.cart_item_id,data.quantity,data.day)} style={{color:"green",fontSize:"25px"}} type="button" value="+" className="plus"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="t-rem" onClick={()=>UpdateQuantity(data.cart_item_id)}><Link to="/myaccount/Quotes"><DeleteForeverTwoToneIcon style={{color:"red",fontSize:"40px"}}></DeleteForeverTwoToneIcon></Link></td>
                                </tr>   
                        </tbody>
                        
                        ))}
                    </table>
                </div>
            </div>

            <div className='text-start text-dark'>
                <h4>Send the request</h4>
                <div className="input-group flex-nowrap p-4">
                    <span className="input-group-text p-3" id="addon-wrapping">Name<span className='text-danger fs-4'>*</span></span>
                    <input type="text p-3" className="form-control p-3" aria-label="Name" aria-describedby="addon-wrapping" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="input-group flex-nowrap p-4">
                    <span className="input-group-text p-3" id="addon-wrapping">Organization name<span className='text-danger fs-4'>*</span></span>
                    <input type="text p-3" className="form-control p-3" aria-label="Organization_name" aria-describedby="addon-wrapping" value={org_name} onChange={(e)=>{setorg_name(e.target.value)}}/>
                </div>
                <div className="input-group flex-nowrap p-4">
                    <span className="input-group-text p-3" id="addon-wrapping">E-mail<span className='text-danger fs-4'>*</span></span>
                    <input type="text" className="form-control p-3" aria-label="e-mail" aria-describedby="addon-wrapping" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="input-group flex-nowrap p-4">
                    <span className="input-group-text p-3" id="addon-wrapping">Phone Number<span className='text-danger fs-4'>*</span></span>
                    <input type="number" className="form-control p-3" aria-label="phnumber" aria-describedby="addon-wrapping" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
                </div>
                <div className="input-group flex-nowrap p-4">
                    <span className="input-group-text p-3" id="addon-wrapping">Delivery Date<span className='text-danger fs-4'>*</span></span>
                    <input type="date" className="form-control p-3" aria-label="phnumber" aria-describedby="addon-wrapping" value={receive_date} onChange={(e)=>{setreceive_date(e.target.value)}}/>
                </div>
                <div className="input-group flex-nowrap p-4">
                    <span className="input-group-text p-3" id="addon-wrapping">Message</span>
                    <textarea type="text" className="form-control p-3" aria-label="phnumber" rows="4" cols="5" aria-describedby="addon-wrapping" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                </div>
                <div className="input-group flex-nowrap p-4">
                    <span className="input-group-text p-3" id="addon-wrapping">Delivery location</span>
                    <textarea type="text" className="form-control p-3" aria-label="phnumber" rows="4" cols="5" aria-describedby="addon-wrapping" value={delivery_location} onChange={(e)=>{setDeliveryLocation(e.target.value)}}/>
                </div>
                <div className="input-group flex-nowrap p-4">
                    <span className="input-group-text p-3" id="addon-wrapping">GST number</span>
                    <textarea type="text" className="form-control p-3" aria-label="phnumber" rows="4" cols="5" aria-describedby="addon-wrapping" value={gst} onChange={(e)=>{setgst(e.target.value)}}/>
                </div>
                <div className="input-group flex-nowrap p-4">
                    <span className="input-group-text p-3" id="addon-wrapping">Transportation Charge<span className='text-danger fs-4'>*</span></span>
                    <input type="number" className="form-control p-3" aria-label="trans_charge" aria-describedby="addon-wrapping" value={trans_charge} onChange={(e)=>{setTransCharge(e.target.value)}}/>
                </div>
            </div>
                <button type="button" className="btn btn-dark btn-lg" onClick={toMyQuotation}>Send Request</button>
            </div>
  )
}

export default MyQuotes;
