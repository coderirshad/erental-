import React from "react";
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const Brand = ( ) => {
    return (
        <section class="brand2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    <OwlCarousel class="tp-bnd owl-carousel" items={6} nav loop>
                            <div class="bnd-items">
                                <a href="#"><img src="images/brand-01.png" alt="" class="img-fluid"/></a>
                            </div>
                            <div class="bnd-items">
                                <a href="#"><img src="images/brand-02.png" alt="" class="img-fluid"/></a>
                            </div>
                            <div class="bnd-items">
                                <a href="#"><img src="images/brand-03.png" alt="" class="img-fluid"/></a>
                            </div>
                            <div class="bnd-items">
                                <a href="#"><img src="images/brand-04.png" alt="" class="img-fluid"/></a>
                            </div>
                            <div class="bnd-items">
                                <a href="#"><img src="images/brand-05.png" alt="" class="img-fluid"/></a>
                            </div>
                            <div class="bnd-items">
                                <a href="#"><img src="images/brand-06.png" alt="" class="img-fluid"/></a>
                            </div>
                            <div class="bnd-items">
                                <a href="#"><img src="images/brand-07.png" alt="" class="img-fluid"/></a>
                            </div>
                        
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brand;