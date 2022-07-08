import React from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
export default function TopBar() {
  return (
       <section className="top-bar2">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="top-left d-flex">
                        <div className="lang-box">
                            <span><img src="images/fl-eng.png" alt=""/>English<i className="fa fa-angle-down"></i></span>
                            <ul className="list-unstyled">
                                <li><img src="images/fl-eng.png" alt=""/>English</li>
                                <li><img src="images/fl-fra.png" alt=""/>French</li>
                                <li><img src="images/fl-ger.png" alt=""/>German</li>
                                <li><img src="images/fl-bra.png" alt=""/>Brazilian</li>
                            </ul>
                        </div>
                        <div className="mny-box">
                            <span>USD<i className="fa fa-angle-down"></i></span>
                            <ul className="list-unstyled">
                                <li>USD</li>
                                <li>GBP</li>
                                <li>EUR</li>
                            </ul>
                        </div>
                        <div className="call-us">
                            <p><img src="images/phn.png" alt=""/>+1 (111) 426 6573</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="top-right text-right">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item"><Link to="/myaccount"><AccountCircleIcon></AccountCircleIcon>My Account</Link></li>
                            <li className="list-inline-item"><Link to="wishlist"><FavoriteBorderIcon></FavoriteBorderIcon>Wishlist</Link></li>
                            <li className="list-inline-item"><Link to="/checkout"><ReplyAllIcon></ReplyAllIcon>Checkout</Link></li>
                            <li className="list-inline-item"><Link to="/login"><LockOpenIcon></LockOpenIcon>Login</Link></li> 
                            <li className="list-inline-item"><Link to="/register"><LockOpenIcon></LockOpenIcon>register</Link></li>
                            <li className="list-inline-item"><Link to="/cart"><AddShoppingCartIcon></AddShoppingCartIcon>Cart</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
