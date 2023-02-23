import React from 'react'
import "../StaticHome.css"
import Service from './Service'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Locations from './Locations'
import FooterArea from './FooterArea'
import sarf from '../qoute/Catalog_All Items_eRentals.pdf'

 function StaticHome() {

  // const saveFile = () => {
  //   fileSaver.saveAs(
  //     process.env.REACT_APP_CLIENT_URL + "./qoute/Resume-Sarf raj shekh (15)",
  //     "MyCV.pdf"
  //   );
  // }
  return (
    <div>
        <header className='container-fluid' id='header'>
            <nav className='container-fluid py-1 flexitem sticky' id='home' >
                <div>
                   <img src="images/logo3.png" alt="" className="img-logo" />
                </div>
                <div>
                   <ul className='d-flex justify-content-center align-items-center ulstyle'>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#service'>Services</a></li>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                        {/* <li><Link><button className='btn'>Call</button></Link></li>
                        <li><Link><button className='btn'>View catalogue</button></Link></li> */}
                   </ul>
                </div>
            </nav>
        </header>

        {/* carousel */}
        <div className='container-fluid-md' style={{marginTop:"5rem"}} id='home'>
          <div className='row'>
            <div className='col-12'>
                  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner" style={{maxHeight:"80vh"}}>
                  <div class="carousel-item active img-fluid">
                    <img src="images/banner4.JPEG" class="d-block w-100 h-100 img-fluid" alt="..." />
                    <div class="carousel-caption">
                      <h5 className="crouselheading">A rental platform for your events!</h5>
                      <p className='crouselcontent'>Corporate events, conferences, party, marriage, exhibitions, expo, festives </p>
                      <div className='flexcenter'>
                          <a href="https://api.whatsapp.com/send?phone=8652348165" target="_blank"><button className='btn mt-2'><i className="fa fa-whatsapp text-white" style={{fontSize:"24px"}}></i></button></a>
                          <a href={sarf} download ><button className='btn btn-quoto mt-2' style={{marginLeft:"1rem"}}>View Catalog</button></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="images/banner5.JPEG" class="d-block w-100 h-100 img-fluid" alt="..." />
                    <div class="carousel-caption2">
                      <h5 className="crouselheading">A rental platform for your need!</h5>
                      <p className='crouselcontent'>Furniture, cold storage, light & sound, octanorm, electricals appliance</p>
                      <div className='flexcenter'>
                          <a href="https://api.whatsapp.com/send?phone=8652348165" target="_blank"><button className='btn mt-2'><i className="fa fa-whatsapp text-white" style={{fontSize:"24px"}}></i></button></a>
                          <a href={sarf} download><button className='btn btn-quoto mt-2' style={{marginLeft:"1rem"}}>View Catalog</button></a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="images/banner6.JPEG" class="d-block w-100 h-100 img-fluid" alt="..." />
                    <div class="carousel-caption3">
                      <h5 className="crouselheading">Rent any item any time with eRentals!</h5>
                      <p className='crouselcontent'>Electronics, electrical gadgets, home appliances, smart devices</p>
                      <div className='flexcenter'>
                          <a href="https://api.whatsapp.com/send?phone=8652348165" target="_blank"><button className='btn mt-2'><i className="fa fa-whatsapp text-white" style={{fontSize:"24px"}}></i></button></a>
                          <a href={sarf} download><button className='btn btn-quoto mt-2' style={{marginLeft:"1rem"}}>View Catalog</button></a>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
               </div>
            </div>
          </div>
      </div>
      <div className='bg-light pt-4 h2' id='service' style={{color:"#073b4c", fontWeight:"700"}}>Our Service</div>
       <Service />
       <div className='bg-light pt-5 pb-5 h2' style={{color:"#073b4c", fontWeight:"700"}}>ABOUT US</div>
       <div id="about"><AboutUs /></div>
       <Locations />
       <div id="contact"><Contact /></div>
       <FooterArea />
    </div>
  )
}


export default StaticHome;