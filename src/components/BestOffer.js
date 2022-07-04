import React from "react";
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const BestOffer = ( ) =>{
    return (
        <section class="best-ofr">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="bst-slider">
                            <div class="sec-title">
                                <h6>New Product</h6>
                            </div>
                            <OwlCarousel class="bst-body owl-carousel" items={1} nav  loop>
                            {/* <div class="bst-body owl-carousel"> */}
                                <div class="bst-items">
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-1.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-2.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-3.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-4.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="bst-items">
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-5.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-6.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-7.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-8.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                            </OwlCarousel>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="bst-slider">
                            <div class="sec-title">
                                <h6>Hot Offer</h6>
                            </div>
                            <OwlCarousel class="bst-body owl-carousel" items={1} nav  loop>
                        
                                <div class="bst-items">
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-9.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-10.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-11.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-12.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="bst-items">
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-13.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-14.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-3.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-6.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            
                            </OwlCarousel>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="bst-slider">
                            <div class="sec-title">
                                <h6>Top Rated</h6>
                            </div>
                            <OwlCarousel class="bst-body owl-carousel" items={1} nav  loop>
            
                                <div class="bst-items">
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-7.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-13.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-11.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-8.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="bst-items">
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-3.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-5.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-2.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <a href="#"><img src="images/sbar-9.png" alt="" class="img-fluid"/></a>
                                        </div>
                                        <div class="bst-content">
                                            <p><a href="">Items Title Name Here</a></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">$120.00</li>
                                                <li class="list-inline-item">$150.00</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                           
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BestOffer;