import React from "react";
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const Brand = ( ) => {
    return (
        <section className="brand2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <OwlCarousel className="tp-bnd owl-carousel" items={6} nav loop>
                            <div className="bnd-items">
                                <a href="#"><img src="images/brand-01.png" alt="" className="img-fluid"/></a>
                            </div>
                            <div className="bnd-items">
                                <a href="#"><img src="images/brand-02.png" alt="" className="img-fluid"/></a>
                            </div>
                            <div className="bnd-items">
                                <a href="#"><img src="images/brand-03.png" alt="" className="img-fluid"/></a>
                            </div>
                            <div className="bnd-items">
                                <a href="#"><img src="images/brand-04.png" alt="" className="img-fluid"/></a>
                            </div>
                            <div className="bnd-items">
                                <a href="#"><img src="images/brand-05.png" alt="" className="img-fluid"/></a>
                            </div>
                            <div className="bnd-items">
                                <a href="#"><img src="images/brand-06.png" alt="" className="img-fluid"/></a>
                            </div>
                            <div className="bnd-items">
                                <a href="#"><img src="images/brand-07.png" alt="" className="img-fluid"/></a>
                            </div>
                        
                    </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brand;