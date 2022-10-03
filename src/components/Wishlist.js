import React from "react";

const Wishlist = ()=>{
    return (
        <section className="shopping-cart">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="cart-table wsh-list table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="t-pro">Product</th>
                                    <th className="t-price">Price</th>
                                    <th className="t-qty">Stock</th>
                                    <th className="t-total">Add To Cart</th>
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
                                    <td className="t-stk">In Stock</td>
                                    <td className="t-add"><button type="button" name="button">Add to Cart</button></td>
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
                                                <li><p>Size : <span>M</span></p></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="t-price">$129.00</td>
                                    <td className="t-stk">In Stock</td>
                                    <td className="t-add"><button type="button" name="button">Add to Cart</button></td>
                                    <td className="t-rem"><a href=""><i className="fa fa-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="t-pro d-flex">
                                        <div className="t-img">
                                            <a href=""><img src="images/sbar-4.png" alt=""/></a>
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
                                                <li><p>Color : <span>Grey</span></p></li>
                                                <li><p>Size : <span>M</span></p></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="t-price">$239.00</td>
                                    <td className="t-stk">In Stock</td>
                                    <td className="t-add"><button type="button" name="button">Add to Cart</button></td>
                                    <td className="t-rem"><a href=""><i className="fa fa-trash-o"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="t-pro d-flex">
                                        <div className="t-img">
                                            <a href=""><img src="images/sbar-5.png" alt=""/></a>
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
                                                <li><p>Color : <span>Blue</span></p></li>
                                                <li><p>Size : <span>M</span></p></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="t-price">$149.00</td>
                                    <td className="t-stk">In Stock</td>
                                    <td className="t-add"><button type="button" name="button">Add to Cart</button></td>
                                    <td className="t-rem"><a href=""><i className="fa fa-trash-o"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Wishlist;