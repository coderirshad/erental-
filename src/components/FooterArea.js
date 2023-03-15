import React , { useState , useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FooterArea() {
    const [tagList, settagList] = useState([]);
    const fetchdata = async() =>{
        const response = await fetch(`http://${process.env.REACT_APP_URL}/tag`);
        const now = await response.json() ;
        let sz = now.length ;
        for ( let i = 0 ; i < sz - 6 ; i ++ ) {
            now.pop() ;
        }
        settagList(now);
    }
    useEffect(() => {
        fetchdata();
    }, []);


    const navigate = useNavigate();
    const handleClick = async ( tagIid ) =>{
        navigate('/tagProductList',{state:{id:  tagIid }});
    }
  return (
         <div className='Footer' id='footer'>
            <div className='Footer_box'>
                <div className='Footer_logobox'>
                     <div className='FooterLogo_img'>
                         <img src="images/eRentalLogoWhite.png" alt="eRentalLogo" />
                        <div className='Footer_Logo_icon'>
                          <a href="https://www.facebook.com/erentals.in" target="_blank"><FacebookIcon style={{fontSize:"35px"}}></FacebookIcon></a>
                          <a href="https://www.youtube.com/channel/UC6zM6tvtMNeBqZ9yLKs36qQ" target="_blank"><YouTubeIcon  style={{fontSize:"35px"}}></YouTubeIcon></a>
                          <a href="https://www.instagram.com/erentalshnd/" target="_blank"><InstagramIcon style={{fontSize:"35px"}}></InstagramIcon></a>
                          <a href="https://www.linkedin.com/company/erentals/" target="_blank"><LinkedInIcon style={{fontSize:"35px"}}></LinkedInIcon></a>
                          <a href="https://wa.me/918652348165?text=" target="_blank"><WhatsAppIcon style={{fontSize:"35px"}}></WhatsAppIcon></a>
                        </div>
                     </div>
                </div>
                <div className='Footer_Service'>
                     <div className='Footer_thead'>
                        <div className='Footer_Tags FooterTageafter'>
                              <h6 className='Footer_tags_head'>Tags</h6>
                              <ul>
                                {tagList.map((tag, index) =>
                                    <li key={index} onClick= {() => handleClick(tag.id )} style={{cursor:"pointer"}}>{tag.name}</li>
                                )}
                              </ul>
                        </div>
                        <div className='Footer_Tags FooterQuickLinks'>
                              <h6 className='Footer_tags_head'>Quick Links</h6>
                              <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/myaccount/ProfileInformation">My Account</Link></li>
                                <li><Link to="/cart">Shopping Cart</Link></li>
                                <li><Link to="/cart">Checkout</Link></li>
                                <li><Link to="/myaccount/Orders">Order History</Link></li>
                                <li><Link Link to="/locations">Our Locations</Link></li>
                              </ul>
                        </div>
                        <div className='Footer_Tags FooterCoutomer'>
                              <h6 className='Footer_tags_head'>Customer Service</h6>
                              <ul>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/documentrequired">Return Policy</Link></li>
                                <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
                                <li><Link to="/termsAndConditions">Term & Conditions</Link></li>
                                <li><Link to="/paymentPolicy">Payment Policy</Link></li>
                                <li><Link to="/aboutUs">About Us</Link></li>
                              </ul>
                        </div>
                     </div>

                     <div className='Footer_ContactBox'>
                            <div className='Footer_ContactBoxContent'>
                                 <h3>Subscribe to Our Newsletter</h3>
                                 <p>Monthly Digest of what’s new and exciting from us.</p>
                                 <div className='Footer_input'>
                                  <input type='text' placeholder='Email address'/>
                                  <button className='Footer_input_btn'><ArrowForwardIcon style={{fontSize:"54px", color:"D3D3D3"}}></ArrowForwardIcon></button>
                                 </div>
                            </div>
                     </div>
                </div>
            </div>
            <hr></hr>
            <div className='Footer_text_last'>© 2022 All rights reserved. eRentalshop</div>
         </div>
  )
}



/* <div id='footer'>
<div className="bg-secondary">
<div className="container text-light ">
  <footer className="py-5 ">
    <div className="row">
      <div className="col-6 col-md-3 mb-3 text-start">
        <h5 className='fw-bold'>Contact Info</h5>
        <ul className="nav flex-column text-start">
          <li className="nav-item mb-2">
            <i className="fa fa-map-marker px-2"></i> 
            City Center Mall, Mumbai, India
          </li>
          <li className="nav-item mb-2">
            <i className="fa fa-envelope px-2"></i> 
            Info@erentals.in
          </li>
          <li className="nav-item mb-2">
            <i className="fa fa-phone px-2"></i> 
            +919867348165
          </li>
          <li className="nav-item mb-2">
            <i className="fa fa-whatsapp px-2"></i> 
            +918652348165
          </li>
          <li className="nav-item mb-2">
            <i className="fa fa-facebook px-2"></i> 
            /erentals.in
          </li>
          <li className="nav-item mb-2">
            <i className="fa fa-linkedin px-2"></i> 
            /company/erentals
          </li>
        </ul>
      </div>

      <div className="col-6 col-md-3 mb-3 text-start">
        <h5 className='fw-bold'>Tags</h5>
        <ul className="nav flex-column text-start">
                    {tagList.map((tag) => (  
                         <li className="nav-item mb-2">                 
                             <Link className='nav-link p-0 text-light' to="/tagProductList" onClick= {() => handleClick ( tag.id )}><i className="fa fa-angle-right px-2"></i>{tag.name}</Link>
                        </li>
                     ))}
                     <li className="nav-item mb-2">                 
                             <Link className='nav-link p-0 text-light' to="/tagProductList"><i className="fa fa-angle-right px-2"></i>Wedding</Link>
                        </li>
                     <li className="nav-item mb-2">                 
                             <Link className='nav-link p-0 text-light' to="/tagProductList"><i className="fa fa-angle-right px-2"></i>Concert</Link>
                        </li>
        </ul>
      </div>

      <div className="col-6 col-md-3 mb-3 text-start">
        <h5 className='fw-bold'>Quick Links</h5>
        <ul className="nav flex-column text-start">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Home</Link></li>
          <li className="nav-item mb-2"><Link to="/myaccount/ProfileInformation" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>My Account</Link></li>
          <li className="nav-item mb-2"><Link to="/cart" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Shopping Cart</Link></li>
          <li className="nav-item mb-2"><Link to="/checkout" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Checkout</Link></li>
          <li className="nav-item mb-2"><Link to="/myaccount/Orders" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Order History</Link></li>
          <li className="nav-item mb-2"><Link to="/locations" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Our Locations</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-3 mb-3 text-start">
        <h5 className='fw-bold'>Support</h5>
        <ul className="nav flex-column text-start">
          <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Contact Us</Link></li>
          <li className="nav-item mb-2"><Link to="/documentrequired" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Documents Required</Link></li>
          <li className="nav-item mb-2"><Link to="/privacyPolicy" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Privacy Policy</Link></li>
          <li className="nav-item mb-2"><Link to="/termsAndConditions" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Terms & Condition</Link></li>
          <li className="nav-item mb-2"><Link to="/paymentPolicy" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>Payment Policy</Link></li>
          <li className="nav-item mb-2"><Link to="/aboutUs" className="nav-link p-0 text-light"><i className="fa fa-angle-right"></i>About Us</Link></li>
        </ul>
      </div>

      <div className="col-md-4 offset-md-3 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className='fw-bold'>&copy; 2022 ERENTALS HND PVT LTD - All Rights Reserved</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-light" href="https://www.facebook.com/erentals.in" target="_blank" ><FacebookIcon></FacebookIcon></a></li>
        <li className="ms-3"><a className="text-light" href="https://www.youtube.com/channel/UC6zM6tvtMNeBqZ9yLKs36qQ" target="_blank" ><YouTubeIcon></YouTubeIcon></a></li>
        <li className="ms-3"><a className="text-light" href="https://www.instagram.com/erentalshnd/" target="_blank" ><InstagramIcon></InstagramIcon></a></li>
        <li className="ms-3"><a className="text-light" href="https://www.linkedin.com/company/erentals/" target="_blank" ><LinkedInIcon></LinkedInIcon></a></li>
        <li className="ms-3"><a className="text-light" href="https://wa.me/918652348165?text=" target="_blank" ><WhatsAppIcon></WhatsAppIcon></a></li>
      </ul>
    </div>
  </footer>
</div>
</div>
</div> */