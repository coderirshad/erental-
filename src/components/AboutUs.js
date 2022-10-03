import React from 'react';
export default function AboutUs() {
    
  return (
    <div>
        <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="wc-box">
                            
                            <h4>Welcome to <span>XeMart</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.!</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="wc-img">
                            <img src="images/about.jpg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row his-mis">
                            <div className="col-md-4">
                                <div className="about-bnr">
                                    <a href="#"><img src="images/banner-1.png" alt="" className="img-fluid"/></a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-bnr">
                                    <a href="#"><img src="images/banner-2.png" alt="" className="img-fluid"/></a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-bnr">
                                    <a href="#"><img src="images/banner-3-1.png" alt="" className="img-fluid"/></a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="history">
                                    <h5>Our History</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut iure doloribus ratione quia nam ducimus nemo, culpa vero eveniet magni fugit non nemo quas dolorum nisi ducimus laboriosam.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-check"></i>Numquam nesciunt, ex obcaecati libero asperiores</li>
                                        <li><i className="fa fa-check"></i>Ipsa ut iure doloribus ratione quia nam ducimus</li>
                                        <li><i className="fa fa-check"></i>Reprehenderit ratione minus commodi magni</li>
                                        <li><i className="fa fa-check"></i>Porro et laudantium, atque similique</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="history">
                                    <h5>Our Mission</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut iure doloribus ratione quia nam ducimus nemo, culpa vero eveniet magni fugit non nemo quas dolorum nisi ducimus laboriosam.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-check"></i>Numquam nesciunt, ex obcaecati libero asperiores</li>
                                        <li><i className="fa fa-check"></i>Ipsa ut iure doloribus ratione quia nam ducimus</li>
                                        <li><i className="fa fa-check"></i>Reprehenderit ratione minus commodi magni</li>
                                        <li><i className="fa fa-check"></i>Porro et laudantium, atque similique</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
       <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sec-title">
                            <h4>Meet Our Team</h4>
                        </div>
                        <div >
                            <div className="team-box" id = 'lst'>
                                <img src="images/team-1.jpg" alt="" className="img-fluid"/>
                                <h5>Kevin Smith</h5>
                                <p>Founder</p>
                            </div>
                            <div className="team-box" id = 'lst'>
                                <img src="images/team-2.jpg" alt="" className="img-fluid"/>
                                <h5>Alisha Doe</h5>
                                <p>Chief Officer</p>
                            </div>
                            <div className="team-box" id = 'lst' >
                                <img src="images/team-3.jpg" alt="" className="img-fluid"/>
                                <h5>Kevin Smith</h5>
                                <p>Exicutive</p>
                            </div>
                            <div className="team-box" id = 'lst' >
                                <img src="images/team-4.jpg" alt="" className="img-fluid"/>
                                <h5>Angel Kim</h5>
                                <p>Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}