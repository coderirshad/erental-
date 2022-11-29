import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";

const EventManagerProfile = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const handleclick = (url) =>{
      setShow(true);
      navigate(url)
    }
  return (
      <div>
            {show ? (
              <div>
                  <div style={{textAlign:"left"}}>
            <div className='container d-flex justify-content-between align-items-center px-5 py-2 shadow-sm'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 37.4-12.25-6.7V21l-5.6-3L24 8.3 41.85 18v12.7H40.3V18.9L36.2 21v9.7Zm0-11.45L38.6 18 24 10.15 9.4 18Zm0 9.7 10.7-5.85v-7.85L24 27.7l-10.7-5.8v7.9Zm0-9.7Zm0 2.35Zm0 0Z"/></svg>
                    </div>
                    <div style={{marginLeft:"5px", marginTop:"10px"}}>
                      <h5 className='text-muted'>Event Manager</h5>
                    </div>
                </div>
                <div>
                  <button onClick={() =>setShow(!show)} className='btn-style-student'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 15.75h.958l8.063-8.062-.959-.959L4.5 14.792Zm10.958-8.667-2.27-2.291.52-.521q.417-.438 1-.438.584 0 1 .438l.625.625q.271.25.25.667-.021.416-.271.666Zm-.625.605-8.979 8.979H3.583v-2.271l8.979-8.979Zm-1.791-.48-.48-.479.959.959Z"/></svg>Edit</button>
                </div>
            </div>
            <div className='container' style={{padding:0, margin:0}}>
              <div id="accordionExample">
                <div className='accordion-item px-5 shadow-sm' style={{padding:"19px 0"}}>
                      <div 
                        class="accordion-button accordation-style d-flex justify-content-between" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseOne" 
                        aria-expanded="true" 
                        aria-controls="collapseOne">
                              <div className='d-flex justify-content-center align-items-center'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M7.5 34.875q-1 0-1.688-.687-.687-.688-.687-1.688V15.792q0-1 .687-1.688.688-.687 1.688-.687h9.458V6.458q0-.541.396-.937t.938-.396h3.416q.584 0 .959.396t.375.937v6.959H32.5q1 0 1.688.687.687.688.687 1.688V32.5q0 1-.687 1.688-.688.687-1.688.687Zm0-1.333h25q.458 0 .75-.292t.292-.75V15.792q0-.459-.292-.75-.292-.292-.75-.292h-9.458q0 .833-.459 1.104-.458.271-1.25.271h-2.666q-.792 0-1.25-.271-.459-.271-.459-1.104H7.5q-.458 0-.75.292-.292.291-.292.75V32.5q0 .458.292.75t.75.292Zm2.958-4.667h8.875v-.167q0-.583-.291-1.062-.292-.479-.792-.688-.958-.375-1.771-.52-.812-.146-1.521-.146-.791 0-1.625.166-.833.167-1.75.5-.541.25-.833.709-.292.458-.292 1.041Zm12.959-2.625h6.75v-1.333h-6.75Zm-8.459-1.333q.75 0 1.313-.563.562-.562.562-1.312 0-.792-.562-1.354-.563-.563-1.313-.563-.791 0-1.354.563-.562.562-.562 1.354 0 .75.562 1.312.563.563 1.354.563Zm8.459-2.5h6.75v-1.334h-6.75Zm-5.125-7.667h3.416V6.458h-3.416ZM20 24.125Z"/></svg>
                                    </div>
                                    <div style={{marginLeft:"5px", marginTop:"10px"}}>
                                      <h5 className='text-muted'>Adhar ID</h5>
                                    </div>
                              </div>
                        </div>
                      <div id="collapseOne" 
                        class="accordion-collapse collapse mt-3 " 
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                         <div>
                           <div className='container border py-3 px-5'>
                             <div className='d-flex justify-content-between align-items-center flex-wrap'>
                                <div>
                                   <div className='border img-fluid mb-3' style={{height:"250px", width:"250px"}}>
                                   <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' className='img-fluid' style={{height:"250px",width:"250px"}}/>
                                   </div>
                                   <form>
                                    <div class="form-group mt-3">
                                      <label for="exampleFormControlFile1">Upload Adhar Card front</label><br></br>
                                      <input type="file" className=" my-2 form-control-file" id="exampleFormControlFile1" /><br></br>
                                      <button type='submit' className='btn  btn-primary'> Submit</button>
                                    </div>
                                  </form>
                                </div>
                                <div>
                                   <div className='border img-fluid mb-3' style={{height:"250px", width:"250px"}}>
                                   <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' className='img-fluid' style={{height:"250px",width:"250px"}}/>
                                   </div>
                                   <form>
                                    <div class="form-group mt-3">
                                      <label for="exampleFormControlFile1">Upload Adhar Card Back</label><br></br>
                                      <input type="file" className=" my-2 form-control-file" id="exampleFormControlFile1" /><br></br>
                                      <button type='submit' className='btn  btn-primary'> Submit</button>
                                    </div>
                                  </form>
                                </div>
                             </div>
                           </div>
                         </div>
                      </div>
                  </div>
                </div>

                {/* card */}
                <div className='accordion-item px-5 shadow-sm' style={{padding:"19px 0"}}>
                      <div 
                        class="accordion-button accordation-style d-flex justify-content-between" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseTwo" 
                        aria-expanded="true" 
                        aria-controls="collapseTwo">
                              <div className='d-flex justify-content-center align-items-center'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M7.5 34.875q-1 0-1.688-.687-.687-.688-.687-1.688V15.792q0-1 .687-1.688.688-.687 1.688-.687h9.458V6.458q0-.541.396-.937t.938-.396h3.416q.584 0 .959.396t.375.937v6.959H32.5q1 0 1.688.687.687.688.687 1.688V32.5q0 1-.687 1.688-.688.687-1.688.687Zm0-1.333h25q.458 0 .75-.292t.292-.75V15.792q0-.459-.292-.75-.292-.292-.75-.292h-9.458q0 .833-.459 1.104-.458.271-1.25.271h-2.666q-.792 0-1.25-.271-.459-.271-.459-1.104H7.5q-.458 0-.75.292-.292.291-.292.75V32.5q0 .458.292.75t.75.292Zm2.958-4.667h8.875v-.167q0-.583-.291-1.062-.292-.479-.792-.688-.958-.375-1.771-.52-.812-.146-1.521-.146-.791 0-1.625.166-.833.167-1.75.5-.541.25-.833.709-.292.458-.292 1.041Zm12.959-2.625h6.75v-1.333h-6.75Zm-8.459-1.333q.75 0 1.313-.563.562-.562.562-1.312 0-.792-.562-1.354-.563-.563-1.313-.563-.791 0-1.354.563-.562.562-.562 1.354 0 .75.562 1.312.563.563 1.354.563Zm8.459-2.5h6.75v-1.334h-6.75Zm-5.125-7.667h3.416V6.458h-3.416ZM20 24.125Z"/></svg>
                                    </div>
                                    <div style={{marginLeft:"5px", marginTop:"10px"}}>
                                      <h5 className='text-muted'>visiting card</h5>
                                    </div>
                              </div>
                        </div>
                      <div id="collapseTwo" 
                        class="accordion-collapse collapse mt-3 " 
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                          <div>
                           <div className='container border py-3 px-5'>
                             <div className='d-flex justify-content-start align-items-center flex-wrap'>
                               <div className='border img-fluid mb-3' style={{height:"250px", width:"250px"}}>
                               <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' className='img-fluid' style={{height:"250px",width:"250px"}}/>
                               </div>
                             </div>
                             <form>
                                <div class="form-group mt-3">
                                  <label for="exampleFormControlFile1">Upload College ID</label><br></br>
                                  <input type="file" className=" my-2 form-control-file" id="exampleFormControlFile1" /><br></br>
                                  <button type='submit' className='btn  btn-primary'> Submit</button>
                                </div>
                              </form>
                           </div>
                         </div>
                      </div>
                  </div>
                  {/* card */}

                  <div id="accordionExample">
                    <div className='accordion-item px-5 shadow-sm' style={{padding:"19px 0"}}>
                          <div 
                            class="accordion-button accordation-style d-flex justify-content-between" 
                            type="button" data-bs-toggle="collapse" 
                            data-bs-target="#collapsefour" 
                            aria-expanded="true" 
                            aria-controls="collapsefour">
                                  <div className='d-flex justify-content-center align-items-center'>
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M7.5 34.875q-1 0-1.688-.687-.687-.688-.687-1.688V15.792q0-1 .687-1.688.688-.687 1.688-.687h9.458V6.458q0-.541.396-.937t.938-.396h3.416q.584 0 .959.396t.375.937v6.959H32.5q1 0 1.688.687.687.688.687 1.688V32.5q0 1-.687 1.688-.688.687-1.688.687Zm0-1.333h25q.458 0 .75-.292t.292-.75V15.792q0-.459-.292-.75-.292-.292-.75-.292h-9.458q0 .833-.459 1.104-.458.271-1.25.271h-2.666q-.792 0-1.25-.271-.459-.271-.459-1.104H7.5q-.458 0-.75.292-.292.291-.292.75V32.5q0 .458.292.75t.75.292Zm2.958-4.667h8.875v-.167q0-.583-.291-1.062-.292-.479-.792-.688-.958-.375-1.771-.52-.812-.146-1.521-.146-.791 0-1.625.166-.833.167-1.75.5-.541.25-.833.709-.292.458-.292 1.041Zm12.959-2.625h6.75v-1.333h-6.75Zm-8.459-1.333q.75 0 1.313-.563.562-.562.562-1.312 0-.792-.562-1.354-.563-.563-1.313-.563-.791 0-1.354.563-.562.562-.562 1.354 0 .75.562 1.312.563.563 1.354.563Zm8.459-2.5h6.75v-1.334h-6.75Zm-5.125-7.667h3.416V6.458h-3.416ZM20 24.125Z"/></svg>
                                        </div>
                                        <div style={{marginLeft:"5px", marginTop:"10px"}}>
                                          <h5 className='text-muted'>Gst Certificate</h5>
                                        </div>
                                  </div>
                            </div>
                          <div id="collapsefour" 
                            class="accordion-collapse collapse mt-3 " 
                            aria-labelledby="headingfour"
                            data-bs-parent="#accordionExample">
                            <div>
                              <div className='container border py-3 px-5'>
                                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                                    <div>
                                      <div className='border img-fluid mb-3' style={{height:"250px", width:"250px"}}>
                                      <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' className='img-fluid' style={{height:"250px",width:"250px"}}/>
                                      </div>
                                      <form>
                                        <div class="form-group mt-3">
                                          <label for="exampleFormControlFile1">Upload GST Certificate Picture</label><br></br>
                                          <input type="file" className=" my-2 form-control-file" id="exampleFormControlFile1" /><br></br>
                                          <button type='submit' className='btn  btn-primary'> Submit</button>
                                        </div>
                                      </form>
                                    </div>
                                    <div>
                                        OR 
                                    </div>  
                                    <div>
                                      <div className='img-fluid mb-3' style={{height:"250px", width:"250px"}}>
                                        <div> GST Number : 252252155224</div>
                                      </div>
                                      <form>
                                        <div class="form-group mt-3">
                                          <label for="exampleFormControlFile1">Upload GST Certificate Number</label><br></br>
                                          <input type="number" className=" my-2 form-control-file" id="exampleFormControlFile1" /><br></br>
                                          <button type='submit' className='btn  btn-primary'> Submit</button>
                                        </div>
                                      </form>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>

                  {/* card */}
                <div className='accordion-item px-5 shadow-sm' style={{padding:"19px 0"}}>
                      <div 
                        class="accordion-button accordation-style d-flex justify-content-between" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapseThree" 
                        aria-expanded="true" 
                        aria-controls="collapseThree">
                              <div className='d-flex justify-content-center align-items-center'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M23.25 26.75h1.55v-6h6V19.2h-6v-6h-1.55v6h-6v1.55h6ZM24 41.1q6.45-5.6 9.975-11.2 3.525-5.6 3.525-9.5 0-6.1-3.875-10Q29.75 6.5 24 6.5t-9.6 3.9q-3.85 3.9-3.85 10 0 3.9 3.525 9.5T24 41.1Zm0 2.1q-7.55-6.7-11.25-12.45Q9.05 25 9.05 20.4q0-7.05 4.525-11.225T24 5q5.9 0 10.45 4.175Q39 13.35 39 20.4q0 4.6-3.725 10.35T24 43.2Zm0-22.8Z"/></svg>
                                    </div>
                                    <div style={{marginLeft:"5px", marginTop:"10px"}}>
                                      <h5 className='text-muted'>Address Proof</h5>
                                    </div>
                              </div>
                        </div>
                      <div id="collapseThree" 
                        class="accordion-collapse collapse mt-3 " 
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                          <div>
                           <div className='container border py-3 px-5'>
                             <div className='d-flex justify-content-start align-items-center flex-wrap'>
                               <div className='border img-fluid mb-3' style={{height:"250px", width:"250px"}}>
                                 <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' className='img-fluid' style={{height:"250px",width:"250px"}}/>
                               </div>
                             </div>
                             <form>
                                <div class="form-group mt-3">
                                  <label for="exampleFormControlFile1">Upload Address Proof</label><br></br>
                                  <input type="file" className=" my-2 form-control-file" id="exampleFormControlFile1" /><br></br>
                                  <button type='submit' className='btn  btn-primary'> Submit</button>
                                </div>
                              </form>
                           </div>
                         </div>
                      </div>
                  </div>
                
            </div>
        </div>
          </div>
         ) 
         : 
         (<div className='conteiner' style={{textAlign:"left"}}>
           <p className='mx-5 mt-4'> let's Begin With Your Profession</p>
            <div className='mx-5 mt-5  d-flex flex-wrap justify-content-between align-items-center'>
                <div onClick={() =>{handleclick("/myaccount/ProfileInformation/StudentProfile")}} className='p-4 shadow mb-5 d-flex justify-content-center align-items-center flex-column' style={{minWidth:"250px", cursor:"pointer"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7.9 43q-1.2 0-2.05-.85Q5 41.3 5 40.1V17.9q0-1.2.85-2.05Q6.7 15 7.9 15h11.7V7.25q0-.9.7-1.575Q21 5 21.9 5h4.25q.9 0 1.575.675.675.675.675 1.575V15h11.7q1.2 0 2.05.85.85.85.85 2.05v22.2q0 1.2-.85 2.05-.85.85-2.05.85Zm0-2.25h32.2q.3 0 .475-.175t.175-.475V17.9q0-.3-.175-.475t-.475-.175H28.4q0 1.2-.725 1.75t-1.875.55h-3.6q-1.1 0-1.85-.55t-.75-1.75H7.9q-.3 0-.475.175t-.175.475v22.2q0 .3.175.475t.475.175Zm4.1-5.6h11.35v-.45q0-.8-.4-1.425T21.9 32.4q-1.4-.5-2.325-.675-.925-.175-1.775-.175-.95 0-2 .2t-2.3.65q-.65.25-1.075.875Q12 33.9 12 34.7Zm16.3-3.25h8.35v-2.05H28.3Zm-10.5-2.05q1 0 1.725-.725.725-.725.725-1.725 0-1.05-.725-1.775Q18.8 24.9 17.8 24.9q-1.05 0-1.775.725-.725.725-.725 1.775 0 1 .725 1.725.725.725 1.775.725Zm10.5-3.1h8.35v-2H28.3Zm-6.4-9.5h4.25v-10H21.9ZM24 29Z"/></svg>
                    <h5 className='mt-3'>Student</h5>
                  </div>
              <div onClick={() =>{handleclick("/myaccount/ProfileInformation/eventmangerprofile")}} className='p-4 shadow mb-5 d-flex justify-content-center align-items-center flex-column' style={{minWidth:"250px", cursor:"pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M4.9 43.5q1.1-3.45 1.625-7.3.525-3.85.675-8.3-2.05-.6-3.375-2.5Q2.5 23.5 2.5 20.9v-2.4q5.65-1.95 11.5-5.775T24 4.6q4.15 4.3 10 8.125T45.5 18.5v2.4q0 2.6-1.3 4.5t-3.35 2.5q.1 4.3.65 8.175.55 3.875 1.65 7.425Zm3.05-24.85h32.1q-4.1-1.9-8.075-4.6Q28 11.35 24 7.75q-3.8 3.5-7.825 6.25T7.95 18.65Zm21.15 7.2q1.8 0 2.875-1.5t1.075-3.45h-7.9q0 1.95 1.075 3.45 1.075 1.5 2.875 1.5Zm-10.2 0q1.85 0 2.9-1.5 1.05-1.5 1.05-3.45h-7.9q0 1.95 1.1 3.45 1.1 1.5 2.85 1.5Zm-10.15 0q1.8 0 2.875-1.5T12.7 20.9H4.75q0 1.95 1.1 3.45 1.1 1.5 2.9 1.5Zm-.85 15.4h7.4q.45-2.9.725-6.075Q16.3 32 16.5 27.7q-.65-.3-1.45-1-.8-.7-1.15-1.5-.75 1.25-1.9 1.975-1.15.725-2.55.875-.1 3.65-.475 6.875T7.9 41.25Zm9.7 0h12.85q-.5-2.9-.75-6.075Q29.45 32 29.3 28q-1.8 0-3.275-.825-1.475-.825-2.125-2.325-.7 1.5-2.075 2.325Q20.45 28 18.75 28q-.15 3.4-.4 6.675t-.75 6.575Zm15.15 0h7.4q-.8-3.2-1.15-6.475-.35-3.275-.4-6.725-1.4-.15-2.475-.875-1.075-.725-1.825-2.025-.5.95-1.275 1.6-.775.65-1.525.95.15 3.1.425 6.425.275 3.325.825 7.125Zm6.55-15.4q1.8 0 2.875-1.5t1.075-3.45h-7.9q0 1.95 1.075 3.45 1.075 1.5 2.875 1.5Z"/></svg>
                <h5 className='mt-3'>Event Manager</h5>
              </div>
              <div onClick={() =>{handleclick("/myaccount/ProfileInformation/employeeprofile")}} className='p-4 shadow mb-5 d-flex justify-content-center align-items-center flex-column' style={{minWidth:"250px", cursor:"pointer"}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 42q-1.2 0-2.1-.9Q4 40.2 4 39V15q0-1.2.9-2.1.9-.9 2.1-.9h9V7q0-1.2.9-2.1.9-.9 2.1-.9h10q1.2 0 2.1.9.9.9.9 2.1v5h9q1.2 0 2.1.9.9.9.9 2.1v24q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V15H7v24Zm12-27h10V7H19ZM7 39V15v24Z"/></svg>
                <h5 className='mt-3'>Employee</h5>
              </div>
              <div className='p-4 shadow mb-5 d-flex justify-content-center align-items-center flex-column' style={{minWidth:"250px", cursor:"pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>
                <h5 className='mt-3'>Other</h5>
              </div>
            </div>
         </div>
         )}
      </div>
  )
}

export default EventManagerProfile