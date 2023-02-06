import React from 'react'

export default function Contact() { 
    
  return (
        <div>
            <div>
                <h5 className="pb-3 pt-4" style={{fontWeight:"700", color:"#144169"}}>
                    CONTACT US
                </h5>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-md-3 border p-3' style={{height:"55vh"}}>
                      <h5 className='formatcolor' style={{fontSize:"17px", color:"#144169"}}>CONTACT INFO</h5>
                      <div className='mt-3' style={{textAlign:"left"}}>
                          <div className='mb-1'>
                            <h5 style={{fontSize:"15px"}} className="mt-4 formatcolor"><span><i className="fa fa-envelope formatcolor px-2" style={{fontSize:"16px"}}></i></span>EMAIL ADDRESS</h5>
                            <p className='px-5 pt-2'>Info@erentals.in</p>
                            <p className='px-5 pt-1'>Sale@erentals.in </p>
                            <p className='px-5 pt-1'>saleserentals@gmail.com </p>
                          </div>
                          <div className='mb-1'>
                            <h5 style={{fontSize:"15px"}} className="mt-4 formatcolor"><span><i className="fa fa-phone formatcolor px-2" style={{fontSize:"16px"}}></i></span>PHONE NUMBER</h5>
                            <p className='px-5 pt-2'>8652348165</p>
                            <p className='px-5 pt-1'>8652348115</p>
                          </div>
                          <div className='mt-5' style={{textAlign:'center'}}>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item border rounded-circle px-2 bg-primary py-1"><a href="https://www.facebook.com/erentals.in" target="_blank"><i className="fa fa-facebook text-white"></i></a></li>
                                <li className="list-inline-item border rounded-circle px-2 bg-dark py-1"><a href="https://www.instagram.com/erentalshnd/" target="_blank"><i className="fa fa-instagram text-white"></i></a></li>
                                <li className="list-inline-item border rounded-circle px-2 bg-primary py-1"><a href="https://www.linkedin.com/company/erentals/" target="_blank"><i className="fa fa-linkedin text-white"></i></a></li>
                                <li className="list-inline-item border rounded-circle px-2 bg-danger py-1"><a href="https://www.youtube.com/channel/UC6zM6tvtMNeBqZ9yLKs36qQ" target="_blank"><i className="fa fa-youtube text-white"></i></a></li>
                                <li className="list-inline-item border rounded-circle px-2 bg-info py-1"><a href="https://wa.me/918652348165?text=" target="_blank"><i className="fa fa-whatsapp text-white"></i></a></li>
                            </ul>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-9 px-5 pt-2'>
                            <div className="row justify-content-between  mt-5" style={{textAlign:"left"}}>
                            <div className="col-6">
                                <div className="form-group h4">
                                    <label htmlFor="formGroupExampleInput" className='mb-3'>Email<sup style={{color:"red"}}>*</sup></label>
                                    <input type="email" className="form-control p-3 mb-3" id="formGroupExampleInput" aria-describedby="emailHelp" placeholder="Email" />
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="form-group h4">
                                    <label htmlFor="formGroupExampleInput" className='mb-3'>Name<sup style={{color:"red"}}>*</sup></label>
                                    <input type="text" className="form-control p-3" id="formGroupExampleInput" placeholder="Full Name" />
                                </div>
                        </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1" className="mt-3 h4">Your Enquiry <sup style={{color:"red"}}>*</sup></label>
                                <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="10" col="50"></textarea>
                            </div>
                        </div>
                            <div className="row pb-3" style={{textAlig:"center"}}>
                                <div className="col mt-4">
                                <button type="button" style={{backgroundColor:"#144169"}} className="btn btn-primary btn-lg p-3">Submit Enquiry</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>    
    </div>
  )
}
