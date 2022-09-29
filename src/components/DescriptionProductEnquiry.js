import React from 'react'

function DescriptionProductEnquiry() {
  return (
    <div>
        <div class="container-fluid" style={{"text-align":"left",width:"60%"}}>
        <div class="row justify-content-between p-3">
           <div class="col-12 p-3">
                <h5 style={{"font-size":"25px","font-weight":"600"}}>Product Enquiry</h5>
                <p className='mt-2 h5'>Your email address will not be published. Required fields are marked <sup style={{color:"red"}}>*</sup></p>
                <div class="row justify-content-between  mt-5">
                  <div class="col-6">
                    
                      <div class="form-group h4">
                        <label htmlFor="formGroupExampleInput" className='mb-3'>Email<sup style={{color:"red"}}>*</sup></label>
                        <input type="email" class="form-control p-3 mb-3" id="formGroupExampleInput" aria-describedby="emailHelp" placeholder="Email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group h4">
                        <label htmlFor="formGroupExampleInput" className='mb-3'>Name<sup style={{color:"red"}}>*</sup></label>
                        <input type="text" class="form-control p-3" id="formGroupExampleInput" placeholder="Full Name" />
                      </div>
              </div>
              <div class="form-group">
                  <label htmlFor="exampleFormControlTextarea1" className="mt-3 h4">Your Enquiry <sup style={{color:"red"}}>*</sup> :</label>
                  <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="10" col="50"></textarea>
                </div>
              <div class="row">
                <div class="col mt-4">
                  <button type="button" class="btn-success btn-lg p-3">Submit Enquiry</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionProductEnquiry