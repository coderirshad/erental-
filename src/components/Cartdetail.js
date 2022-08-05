import React,{useEffect,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import GetAuthorization from './GetAuthorization';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
export default function Cartdetail() {
    const [cartproduct, setcartproduct] = useState([])
    const [cartsummary, setcartsummary] = useState({})
    const navigate = useNavigate();
    const UpdateQuantity = async (cart_item_id1,finalquantity)=>{
        await fetch(`http://${process.env.REACT_APP_URL}/cart`, {
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
                    size:''
                }
            )
        });
        fetchData();
    }
    const Increment = (id1,quantity) =>{
        UpdateQuantity(id1,quantity+1);
    }
    const Decrement = (id1,quantity) =>{
        UpdateQuantity(id1,quantity-1);
    }
    
    const fetchData = () =>{
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
             setcartproduct(data)       
        })
        fetch(`http://${process.env.REACT_APP_URL}/cart-summary`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }          
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             setcartsummary(data)       
        })

    }
    const placeOrder = () =>{
        if(cartproduct.length==0){
            alert("please first you have to add product!!!")
        }
        else{
            navigate('/checkout')
        }
    }
    useEffect(() => {
        fetchData()            
     }, [])


  return (
    <section className="shopping-cart">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="cart-table table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="t-pro">Product</th>
                                <th className="t-price">Price</th>
                                <th className="t-qty">Quantity</th>
                                <th className="t-total">Total</th>
                                <th className="t-rem"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartproduct.length==0?<h1 style={{color:"red",margin:"50px",borderBottom:"2px solid red"}}>EMPTY CART<RemoveShoppingCartIcon style={{fontSize:"60px"}}></RemoveShoppingCartIcon></h1>:cartproduct.map(data=>(
                                <tr>
                                    <td className="t-pro d-flex">
                                        <div className="t-img">
                                            <a href=""><img src={data.image} style={{height:"80px",width:"80px"}} alt=""/></a>
                                        </div>
                                        <div className="t-content">
                                            <p className="t-heading"><a href="">{data.name}</a></p>
                                            <ul className="list-unstyled list-inline rate">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            
                                        </div>
                                    </td>
                                    <td className="t-price"><CurrencyRupeeTwoToneIcon></CurrencyRupeeTwoToneIcon>INR {data.price}</td>
                                    <td className="t-qty">
                                        <div className="qty-box">
                                            <div className="quantity buttons_added">
                                                <input onClick={()=>Decrement(data.cart_item_id,data.quantity)} style={{color:"red",fontSize:"25px"}} type="button" value="-" className="minus"/>
                                                <input onChange={()=>UpdateQuantity(data.cart_item_id,this.value)} type="number" step="1" min="1" max="10" value={data.quantity} className="qty text" size="4"/>
                                                <input onClick={()=>Increment(data.cart_item_id,data.quantity)} style={{color:"green",fontSize:"25px"}} type="button" value="+" className="plus"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="t-total"><CurrencyRupeeTwoToneIcon></CurrencyRupeeTwoToneIcon>{data.total}</td>
                                    <td onClick={()=>UpdateQuantity(data.cart_item_id,0)} className="t-rem"><Link to="/cart"><DeleteForeverTwoToneIcon style={{color:"red",fontSize:"40px"}}></DeleteForeverTwoToneIcon></Link></td>
                                </tr>   
                            ))}
                        </tbody>
                        
                    </table>
                </div>
            </div>
            <div className="col-md-4">
                <div className="shipping">
                    <h6>Calculate Shipping and Tax</h6>
                    <p>Enter your destination to get shipping estimate</p>
                    <form action="#">
                        <div className="country-box">
                            <select className="country">
                                <option>Select Country</option>
                                <option>United State</option>
                                <option>United Kingdom</option>
                                <option>Germany</option>
                                <option>Australia</option>
                            </select>
                        </div>
                        <div className="state-box">
                            <select className="state">
                                <option>State/Province</option>
                                <option>State 1</option>
                                <option>State 2</option>
                                <option>State 3</option>
                                <option>State 4</option>
                            </select>
                        </div>
                        <div className="post-box">
                            <input type="text" name="zip" value="" placeholder="Zip/Postal Code"/>
                            <button type="button">Get Estimate</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-4">
                <div className="coupon">
                    <h6>Discount Coupon</h6>
                    <p>Enter your coupon code if you have one</p>
                    <form action="#">
                        <input type="text" name="zip" value="" placeholder="Your Coupon"/>
                        <button type="button">Apply Code</button>
                    </form>
                </div>
            </div>
            <div className="col-md-4">
                <div className="crt-sumry">
                    <h5>Cart Summery</h5>
                    <ul className="list-unstyled">

                        <li>Subtotal <span><CurrencyRupeeTwoToneIcon></CurrencyRupeeTwoToneIcon>{cartsummary.sub_total}</span></li>
                        <li>Shipping & Tax <span><CurrencyRupeeTwoToneIcon></CurrencyRupeeTwoToneIcon>{cartsummary.tax}</span></li>
                        <li>Grand Total <span><CurrencyRupeeTwoToneIcon></CurrencyRupeeTwoToneIcon>{cartsummary.grand_total}</span></li>
                        
                    </ul>
                    <div className="cart-btns text-right">
                        {/* <button type="button" className="up-cart">Update Cart</button> */}
                        <button onClick={placeOrder} type="button" className="chq-out" >Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
