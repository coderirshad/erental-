import React from "react";

const FullBanner = () =>{
    return (
        <section className="f-banner">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="f-bnr-img">
                        <a href="#"><img src="images/f-banner-1.jpg" alt="" className="img-fluid"/></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="f-bnr-img">
                        <a href="#"><img src="images/f-banner-2.jpg" alt="" className="img-fluid"/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default FullBanner;