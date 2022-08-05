import React from 'react';
export default function AboutUs() {
    
  return (
    <div>
        <section class="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="wc-box">
                            
                            <h4>Welcome to <span>XeMart</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.!</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="wc-img">
                            <img src="images/about.jpg" alt="" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row his-mis">
                            <div class="col-md-4">
                                <div class="about-bnr">
                                    <a href="#"><img src="images/banner-1.png" alt="" class="img-fluid"/></a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="about-bnr">
                                    <a href="#"><img src="images/banner-2.png" alt="" class="img-fluid"/></a>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="about-bnr">
                                    <a href="#"><img src="images/banner-3-1.png" alt="" class="img-fluid"/></a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="history">
                                    <h5>Our History</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut iure doloribus ratione quia nam ducimus nemo, culpa vero eveniet magni fugit non nemo quas dolorum nisi ducimus laboriosam.</p>
                                    <ul class="list-unstyled">
                                        <li><i class="fa fa-check"></i>Numquam nesciunt, ex obcaecati libero asperiores</li>
                                        <li><i class="fa fa-check"></i>Ipsa ut iure doloribus ratione quia nam ducimus</li>
                                        <li><i class="fa fa-check"></i>Reprehenderit ratione minus commodi magni</li>
                                        <li><i class="fa fa-check"></i>Porro et laudantium, atque similique</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="history">
                                    <h5>Our Mission</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut iure doloribus ratione quia nam ducimus nemo, culpa vero eveniet magni fugit non nemo quas dolorum nisi ducimus laboriosam.</p>
                                    <ul class="list-unstyled">
                                        <li><i class="fa fa-check"></i>Numquam nesciunt, ex obcaecati libero asperiores</li>
                                        <li><i class="fa fa-check"></i>Ipsa ut iure doloribus ratione quia nam ducimus</li>
                                        <li><i class="fa fa-check"></i>Reprehenderit ratione minus commodi magni</li>
                                        <li><i class="fa fa-check"></i>Porro et laudantium, atque similique</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
       <section class="team">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sec-title">
                            <h4>Meet Our Team</h4>
                        </div>
                        <div >
                            <div class="team-box" id = 'lst'>
                                <img src="images/team-1.jpg" alt="" class="img-fluid"/>
                                <h5>Kevin Smith</h5>
                                <p>Founder</p>
                            </div>
                            <div class="team-box" id = 'lst'>
                                <img src="images/team-2.jpg" alt="" class="img-fluid"/>
                                <h5>Alisha Doe</h5>
                                <p>Chief Officer</p>
                            </div>
                            <div class="team-box" id = 'lst' >
                                <img src="images/team-3.jpg" alt="" class="img-fluid"/>
                                <h5>Kevin Smith</h5>
                                <p>Exicutive</p>
                            </div>
                            <div class="team-box" id = 'lst' >
                                <img src="images/team-4.jpg" alt="" class="img-fluid"/>
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