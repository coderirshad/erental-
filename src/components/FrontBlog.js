import React from "react";
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

const FrontBlog = ( ) => {
     return(
        <section class="f-blog">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sec-title">
                            <h5>Latest News</h5>
                        </div>
                        <OwlCarousel className="fb-slider owl-carousel" items={4} nav loop>                       
                            <div class="blog-item">
                                <div class="blog-img">
                                    <a href="#"><img src="images/news-1.jpg" alt="" class="img-fluid"/></a>
                                </div>
                                <div class="blog-content">
                                    <h5><a href="">Sint eius inventore magni quod.</a></h5>
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item"><i class="fa fa-user-o"></i><a href="">John</a></li>
                                        <li class="list-inline-item"><i class="fa fa-calendar"></i>Feb 10, 2020</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectet adipisicing elit. Delectus, expedita dolorum tenetur soluta. sunt in culpa qui...</p>
                                </div>
                            </div>
                            <div class="blog-item">
                                <div class="blog-img">
                                    <a href="#"><img src="images/news-2.jpg" alt="" class="img-fluid"/></a>
                                </div>
                                <div class="blog-content">
                                    <h5><a href="">Sint eius inventore magni quod.</a></h5>
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item"><i class="fa fa-user-o"></i><a href="">John</a></li>
                                        <li class="list-inline-item"><i class="fa fa-calendar"></i>Feb 10, 2020</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectet adipisicing elit. Delectus, expedita dolorum tenetur soluta. sunt in culpa qui...</p>
                                </div>
                            </div>
                            <div class="blog-item">
                                <div class="blog-img">
                                    <a href="#"><img src="images/news-3.jpg" alt="" class="img-fluid"/></a>
                                </div>
                                <div class="blog-content">
                                    <h5><a href="">Sint eius inventore magni quod.</a></h5>
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item"><i class="fa fa-user-o"></i><a href="">John</a></li>
                                        <li class="list-inline-item"><i class="fa fa-calendar"></i>Feb 10, 2020</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectet adipisicing elit. Delectus, expedita dolorum tenetur soluta. sunt in culpa qui...</p>
                                </div>
                            </div>
                            <div class="blog-item">
                                <div class="blog-img">
                                    <a href="#"><img src="images/news-4.jpg" alt="" class="img-fluid"/></a>
                                </div>
                                <div class="blog-content">
                                    <h5><a href="">Sint eius inventore magni quod.</a></h5>
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item"><i class="fa fa-user-o"></i><a href="">John</a></li>
                                        <li class="list-inline-item"><i class="fa fa-calendar"></i>Feb 10, 2020</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectet adipisicing elit. Delectus, expedita dolorum tenetur soluta. sunt in culpa qui...</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
     )
}
export default FrontBlog;