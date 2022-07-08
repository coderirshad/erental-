import React from 'react'

export default function MobileMenu() {
  return (
    <section className="mobile-menu-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mobile-menu">
                            <nav id="dropdown">
                                <a href=""><img src="images/logo.png" alt=""/></a>
                                <a href=""><span>Sign In</span></a>
                                <ul className="list-unstyled">
                                    <li><a href="">Home</a>
                                        <ul className="list-unstyled">
                                            <li><a href="index.html">Home Style 1</a></li>
	                                        <li><a href="02-home-two.html">Home Style 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Pages</a>
                                        <ul className="list-unstyled">
                                            <li><a href="03-about-us.html">About Us</a></li>
                                            <li><a href="04-category.html">Category</a></li>
                                            <li><a href="05-single-product.html">Single Product</a></li>
                                            <li><a href="06-shopping-cart.html">Shopping Cart</a></li>
                                            <li><a href="07-checkout.html">Checkout</a></li>
                                            <li><a href="08-login.html">Log In</a></li>
                                            <li><a href="09-register.html">Register</a></li>
                                            <li><a href="10-wishlist.html">Wishlist</a></li>
                                            <li><a href="11-compare.html">Compare</a></li>
                                            <li><a href="15-track-order.html">Track Order</a></li>
                                            <li><a href="12-terms-condition.html">Terms & Condition</a></li>
                                            <li><a href="13-faq.html">Faq</a></li>
                                            <li><a href="14-404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Blog</a>
                                        <ul className="list-unstyled">
                                            <li><a href="16-blog-one.html">Blog Style 1</a></li>
                                            <li><a href="17-blog-two.html">Blog Style 2</a></li>
                                            <li><a href="18-blog-three.html">Blog Style 3</a></li>
                                            <li><a href="19-blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="20-contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
