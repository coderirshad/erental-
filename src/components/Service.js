import React from "react";

const Service = () =>{
    return (
            <div className="container-fluid bg-light pt-5">
                <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="border d-flex p-3 flex-column mx-2 bg-white shadow-sm mt-lg-0 mb-2 servicebox">
                                <div className="d-flex justify-content-center">
                                  <img src="images/Timelydeliveryservice2.png" width={70}  className='sr-img'/>
                                </div>
                                <h5 className="mt-1 text-dark">DELIVERY & SETUP</h5>
                                <p className="mt-2">eRentals provides timely product delivery along with setup and installation facility based on customer choice</p>
                            </div>
                            <div className="border p-3 d-flex flex-column mx-2 bg-white shadow-sm mt-lg-0 mb-2 servicebox">
                                <div className="d-flex justify-content-center">
                                  <img src="images/betteroptionservice3.png" width={70}  className='sr-img'/>
                                </div>
                                <h5 className="mt-1 text-dark">BETTER OPTIONS</h5>
                                <p className="mt-2">eRentals provides a wide range of categories, more product options, and better choices at affordable cost to customer</p>
                            </div>
                            <div className="border p-3 d-flex flex-column mx-2 bg-white shadow-sm mt-lg-0 mb-2 servicebox">
                                <div className="d-flex justify-content-center">
                                  <img src="images/shorttermservice1.png" width={70}  className='sr-img'/>
                                </div>
                                <h5 className="mt-1 text-dark">SHORT TERM ITEMS</h5>
                                <p className="mt-2">eRentals provides short term rental services and products mainly for events, functions, expo and exhibitions</p>
                            </div>
                            
                        </div>
                </div>
            </div>
    )
}

export default Service;