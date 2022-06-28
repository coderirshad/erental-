import React from 'react'

export default function StickyMenu() {
  return (
    <section className="sticky-menu">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-3">
                        <div className="sticky-logo">
                            <a href="index.html"><img src="images/logo.png" alt="" className="img-fluid"/></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="main-menu">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a>HOME <i className="fa fa-angle-down"></i></a>
                                    <ul className="dropdown list-unstyled">
                                        <li><a href="index.html">Home Style 1</a></li>
                                        <li><a href="02-home-two.html">Home Style 2</a></li>
                                    </ul>
                                </li>
                                <li className="list-inline-item mega-menu"><a>MEGA MENU <i className="fa fa-angle-down"></i></a>
                                    <div className="mega-box">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="clt-area">
                                                    <h6>Clothing</h6>
                                                    <div className="link-box">
                                                        <a href="">- Western Clothing</a>
                                                        <a href="">- Traditional Clothing</a>
                                                        <a href="">- Winter Clothing</a>
                                                        <a href="">- Summer Clothing</a>
                                                        <a href="">- Inner Wear</a>
                                                        <a href="">- Night Wear</a>
                                                        <a href="">- Mens Clothing</a>
                                                        <a href="">- Womens Clothing</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="sm-phn">
                                                    <h6>Smartphones</h6>
                                                    <div className="dept-box">
                                                        <a href="">- Samsung</a>
                                                        <a href="">- Huawei</a>
                                                        <a href="">- One Plus</a>
                                                        <a href="">- Xiaomi</a>
                                                        <a href="">- Iphone</a>
                                                        <a href="">- Blackberry</a>
                                                        <a href="">- Nokia</a>
                                                        <a href="">- Oppo</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="lt-news">
                                                    <h6>Latest News</h6>
                                                    <div className="news-box d-flex">
                                                        <div className="news-img">
                                                            <img src="images/mega-img-1.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-con">
                                                            <p>Lorem ipsum dolor sit...</p>
                                                            <span>Feb 10, 2020</span>
                                                        </div>
                                                    </div>
                                                    <div className="news-box d-flex">
                                                        <div className="news-img">
                                                            <img src="images/mega-img-2.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-con">
                                                            <p>Lorem ipsum dolor sit...</p>
                                                            <span>Feb 12, 2020</span>
                                                        </div>
                                                    </div>
                                                    <div className="news-box d-flex">
                                                        <div className="news-img">
                                                            <img src="images/mega-img-3.jpg" alt=""/>
                                                        </div>
                                                        <div className="news-con">
                                                            <p>Lorem ipsum dolor sit...</p>
                                                            <span>Feb 21, 2020</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="m-slider owl-carousel">
                                                    <div className="slider-item">
                                                        <img src="images/mega-1.jpg" alt="" className="img-fluid"/>
                                                        <span>-65%</span>
                                                    </div>
                                                    <div className="slider-item">
                                                        <img src="images/mega-2.jpg" alt="" className="img-fluid"/>
                                                        <span>-50%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mega-bnr">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <a href="#" className="bnr-box text-center">
                                                                <img src="images/mega-b-1.jpg" alt=""/>
                                                                <span>Camera</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <a href="#" className="bnr-box text-center">
                                                                <img src="images/mega-b-2.jpg" alt=""/>
                                                                <span>Mouse</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <a href="#" className="bnr-box text-center">
                                                                <img src="images/mega-b-3.jpg" alt=""/>
                                                                <span>Earphone</span>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <a href="#" className="bnr-box text-center">
                                                                <img src="images/mega-b-4.jpg" alt=""/>
                                                                <span>Speaker</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item"><a>PAGES <i className="fa fa-angle-down"></i></a>
                                    <ul className="dropdown list-unstyled">
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
                                <li className="list-inline-item"><a>BLOG <i className="fa fa-angle-down"></i></a>
                                    <ul className="dropdown list-unstyled">
                                        <li><a href="16-blog-one.html">Blog Style 1</a></li>
                                        <li><a href="17-blog-two.html">Blog Style 2</a></li>
                                        <li><a href="18-blog-three.html">Blog Style 3</a></li>
                                        <li><a href="19-blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li className="list-inline-item"><a href="20-contact.html">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-2">
                        <div className="carts-area d-flex">
                            <div className="src-box">
                                <form action="#">
                                    <input type="text" name="search" placeholder="Search Here"/>
                                    <button type="button" name="button"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div className="wsh-box ml-auto">
                                <a href="" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                    <img src="images/heart.png" alt="favorite"/>
                                    <span>0</span>
                                </a>
                            </div>
                            <div className="cart-box ml-4">
                                <a href="" data-toggle="tooltip" data-placement="top" title="Shopping Cart" className="cart-btn">
                                    <img src="images/cart.png" alt="cart"/>
                                    <span>2</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
