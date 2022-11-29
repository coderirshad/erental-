import React from "react";

const Service = () =>{
    return (
            <div className="container-xxl mt-lg-5">
                <div className="row d-flex justify-content-center align-item-center">
                    <div className="col-md-4 mb-2 shadow-sm">
                        <div className="p-4 d-flex">
                            <div className="sr-img">
                                <img src="images/service-1.png" alt=""/>
                            </div>
                            <div>
                                <h6 className="serviceheading">Affordable Transportation</h6>
                                <p>Ullam et rem cum totam accusantium quos dolorem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 shadow-sm">
                        <div className="p-4 d-flex">
                            <div className="sr-img">
                                <img src="images/service-2.png" alt=""/>
                            </div>
                            <div>
                                <h6 className="serviceheading">Money Back Guarantee</h6>
                                <p>Ullam et rem cum totam accusantium quos dolorem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 shadow-sm">
                        <div className="p-4 d-flex">
                            <div className="sr-img">
                                <img src="images/service-3.png" alt=""/>
                            </div>
                            <div className="">
                                <h6 className="serviceheading">Secure Payment</h6>
                                <p>Ullam et rem cum totam accusantium quos dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Service;