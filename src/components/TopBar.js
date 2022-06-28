import React from 'react'
import { Link } from 'react-router-dom'

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
                            <li className="list-inline-item"><a href="/myaccount"><img src="images/user.png" alt=""/>My Account</a></li>
                            <li className="list-inline-item"><a href="wishlist"><img src="images/wishlist.png" alt=""/>Wishlist</a></li>
                            <li className="list-inline-item"><a href="/checkout"><img src="images/checkout.png" alt=""/>Checkout</a></li>
                            <li className="list-inline-item"><a href="/login"><img src="images/login.png" alt=""/>Login</a></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
