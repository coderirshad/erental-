import React from 'react'

export default function FooterArea() {
  return (
    <section className="footer-top">
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="f-contact">
                    <h5>Contact Info</h5>
                    <div className="f-add">
                        <i className="fa fa-map-marker"></i>
                        <span>Address :</span>
                        <p>795 South Park Avenue, New York, NY USA 94107</p>
                    </div>
                    <div className="f-email">
                        <i className="fa fa-envelope"></i>
                        <span>Email :</span>
                        <p>enquery@domain.com</p>
                    </div>
                    <div className="f-phn">
                        <i className="fa fa-phone"></i>
                        <span>Phone :</span>
                        <p>+1 908 875 7678</p>
                    </div>
                    <div className="f-social">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item"><a href=""><i className="fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href=""><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href=""><i className="fa fa-linkedin"></i></a></li>
                            <li className="list-inline-item"><a href=""><i className="fa fa-google-plus"></i></a></li>
                            <li className="list-inline-item"><a href=""><i className="fa fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="f-cat">
                    <h5>Categories</h5>
                    <ul className="list-unstyled">
                        <li><a href=""><i className="fa fa-angle-right"></i>Clothing</a></li>
                        <li><a href=""><i className="fa fa-angle-right"></i>Electronics</a></li>
                        <li><a href=""><i className="fa fa-angle-right"></i>Smartphones & Tablets</a></li>
                        <li><a href=""><i className="fa fa-angle-right"></i>Computer & Office</a></li>
                        <li><a href=""><i className="fa fa-angle-right"></i>Home Appliances</a></li>
                        <li><a href=""><i className="fa fa-angle-right"></i>Leather & Shoes</a></li>
                        <li><a href=""><i className="fa fa-angle-right"></i>Kids & Babies</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="f-link">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/account"><i className="fa fa-angle-right"></i>My Account</a></li>
                        <li><a href="/cart"><i className="fa fa-angle-right"></i>Shopping Cart</a></li>
                        <li><a href="/wishlist"><i className="fa fa-angle-right"></i>My Wishlist</a></li>
                        <li><a href="/checkout"><i className="fa fa-angle-right"></i>Checkout</a></li>
                        <li><a href="/order/history"><i className="fa fa-angle-right"></i>Order History</a></li>
                        <li><a href="/login"><i className="fa fa-angle-right"></i>Log In</a></li>
                        <li><a href="/location"><i className="fa fa-angle-right"></i>Our Locations</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="f-sup">
                    <h5>Support</h5>
                    <ul className="list-unstyled">
                        <li><a href="/contact"><i className="fa fa-angle-right"></i>Contact Us</a></li>
                        <li><a href="/"><i className="fa fa-angle-right"></i>Payment Policy</a></li>
                        <li><a href="/"><i className="fa fa-angle-right"></i>Return Policy</a></li>
                        <li><a href="/"><i className="fa fa-angle-right"></i>Privacy Policy</a></li>
                        <li><a href="/"><i className="fa fa-angle-right"></i>Frequently asked questions</a></li>
                        <li><a href="/termsandconditions"><i className="fa fa-angle-right"></i>Terms & Condition</a></li>
                        <li><a href="/"><i className="fa fa-angle-right"></i>Delivery Info</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
