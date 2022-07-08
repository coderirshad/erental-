import React,{useEffect,useState} from 'react';
export default function Cart() {
  return (
    <div>
        <h1>Cartrghrhrthrthf</h1>
        <div className="cart-body">
            <div className="close-btn">
                <button className="close-cart"><img src="images/close.png" alt=""/>Close</button>
            </div>
            <div className="crt-bd-box">
                <div className="cart-heading text-center">
                    <h5>Shopping Cart</h5>
                </div>
                <div className="cart-content">
                    <div className="content-item d-flex justify-content-between">
                        <div className="cart-img">
                            <a href=""><img src="./images/cart1.png" alt="error"/></a>
                        </div>
                        <div className="cart-disc">
                            <p><a href="">SMART LED TV</a></p>
                            <span>1 x $199.00</span>
                        </div>
                        <div className="delete-btn">
                            <a href=""><i className="fa fa-trash-o"></i></a>
                        </div>
                    </div>
                    <div className="content-item d-flex justify-content-between">
                        <div className="cart-img">
                            <a href=""><img src="./images/cart2.png" alt="error"/></a>
                        </div>
                        <div className="cart-disc">
                            <p><a href="">SMART LED TV</a></p>
                            <span>1 x $199.00</span>
                        </div>
                        <div className="delete-btn">
                            <a href=""><i className="fa fa-trash-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="cart-btm">
                    <p className="text-right">Sub Total: <span>$398.00</span></p>
                    <a href="/">Checkout</a>
                </div>
            </div>
        </div>
        <div className="cart-overlay"></div>
    </div>
  )
}
