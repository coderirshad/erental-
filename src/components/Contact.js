import React from 'react'
import SimpleMap from './SimpleMap';

export default function Contact() { 
    
  return (
    <div id='contact'><section className="contact-area">
    <div className="container" style = {{ marginTop : "50px"}}>
        <div className="row">
            <div className="col-lg-4 col-md-5">
                <div className="contact-box-tp">
                    <h4>Contact Info</h4>
                </div>
                <div className="row">
                    
                    <div className="col-md-12">
                        <div className="contact-box d-flex">
                            <div className="contact-icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="contact-content">
                                <h6>Email Address</h6> <br></br>
                                <p>Info@erentals.in <br/> <br></br>Info@erentals.in</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact-box d-flex">
                            <div className="contact-icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="contact-content">
                                <h6>Our Location</h6> <br></br>
                                <p>CITY CENTER MALL , <br/> <br></br>MUMBAI</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact-box d-flex">
                            <div className="contact-icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="contact-content">
                                <h6>Phone Number</h6> <br></br>
                                <p>+91 9867348165 <br/> <br></br>+91 9867348165</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-link">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="fa fa-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="fa fa-youtube"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                    <h4>Get In Touch</h4>
                    <form action="/">
                        <div className="row">
                            
                            <div className="col-md-12">
                                <p><input type="text" id="subject" name="subject" placeholder="Subject"/></p>
                            </div>
                            <div className="col-md-12">
                                <p><textarea name="message" id="message" placeholder="Message" required="true"/></p>
                            </div>
                            <div className="col-md-12">
                                <button type="submit">Send Message</button>
                            </div>
                        </div>
                        <div id="form-messages"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div id='map' style = {{ marginTop : "20px" , marginBottom : "150px" , marginLeft : "250px" , width : "1000px"}}>
          <SimpleMap></SimpleMap>
    </div>
</section>
</div>
  )
}
