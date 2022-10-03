import React from "react";

const Service = ( ) =>{
    return (
        <section className="service-area" id = "services">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="service-box d-flex">
                            <div className="sr-img">
                                <img src="images/service-1.png" alt=""/>
                            </div>
                            <div className="">
                                <h6>Affordable Transportation</h6>
                                <p>Ullam et rem cum totam accusantium quos dolorem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box d-flex">
                            <div className="sr-img">
                                <img src="images/service-2.png" alt=""/>
                            </div>
                            <div className="">
                                <h6>Money Back Guarantee</h6>
                                <p>Ullam et rem cum totam accusantium quos dolorem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box d-flex">
                            <div className="sr-img">
                                <img src="images/service-3.png" alt=""/>
                            </div>
                            <div className="">
                                <h6>Secure Payment</h6>
                                <p>Ullam et rem cum totam accusantium quos dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;