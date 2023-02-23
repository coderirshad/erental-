import React from 'react'
import sarf from '../qoute/Catalog_All Items_eRentals.pdf'

const Staticrowsel = () => {
  return (
    <div>
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
    </div>
  )
}

export default Staticrowsel