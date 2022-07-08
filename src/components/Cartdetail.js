import React from 'react'

export default function cartdetail() {
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
                            <tr>
                                <td className="t-pro d-flex">
                                    <div className="t-img">
                                        <a href=""><img src="images/sbar-1.png" alt=""/></a>
                                    </div>
                                    <div className="t-content">
                                        <p className="t-heading"><a href="">Samsung Smart Led Tv</a></p>
                                        <ul className="list-unstyled list-inline rate">
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                        </ul>
                                        <ul className="list-unstyled col-sz">
                                            <li><p>Color : <span>Red</span></p></li>
                                            <li><p>Size : <span>M</span></p></li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="t-price">$189.00</td>
                                <td className="t-qty">
                                    <div className="qty-box">
                                        <div className="quantity buttons_added">
                                            <input type="button" value="-" className="minus"/>
                                            <input type="number" step="1" min="1" max="10" value="1" className="qty text" size="4" readonly/>
                                            <input type="button" value="+" className="plus"/>
                                        </div>
                                    </div>
                                </td>
                                <td className="t-total">$189.00</td>
                                <td className="t-rem"><a href=""><i className="fa fa-trash-o"></i></a></td>
                            </tr>
                            <tr>
                                <td className="t-pro d-flex">
                                    <div className="t-img">
                                        <a href=""><img src="images/sbar-3.png" alt=""/></a>
                                    </div>
                                    <div className="t-content">
                                        <p className="t-heading"><a href="">Samsung Smart Led Tv</a></p>
                                        <ul className="list-unstyled list-inline rate">
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                        </ul>
                                        <ul className="list-unstyled col-sz">
                                            <li><p>Color : <span>Green</span></p></li>
                                            <li><p>Size : <span>L</span></p></li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="t-price">$129.00</td>
                                <td className="t-qty">
                                    <div className="qty-box">
                                        <div className="quantity buttons_added">
                                            <input type="button" value="-" className="minus"/>
                                            <input type="number" step="1" min="1" max="10" value="1" className="qty text" size="4" readonly/>
                                            <input type="button" value="+" className="plus"/>
                                        </div>
                                    </div>
                                </td>
                                <td className="t-total">$129.00</td>
                                <td className="t-rem"><a href=""><i className="fa fa-trash-o"></i></a></td>
                            </tr>
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
                        <li>Subtotal <span>$328.00</span></li>
                        <li>Shipping & Tax <span>$00.00</span></li>
                        <li>Grand Total <span>$328.00</span></li>
                    </ul>
                    <div className="cart-btns text-right">
                        <button type="button" className="up-cart">Update Cart</button>
                        <button type="button" className="chq-out">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
