import React from 'react'

function DescriptionProductEnquiry() {
  return (
    <div>
        <div className="container-fluid" style={{"text-align":"left",width:"60%"}}>
        <div className="row justify-content-between p-3">
           <div className="col-12 p-3">
                <h5 style={{"font-size":"25px","font-weight":"600"}}>Product Enquiry</h5>
                <p className='mt-2 h5'>Your email address will not be published. Required fields are marked <sup style={{color:"red"}}>*</sup></p>
                <div className="row justify-content-between  mt-5">
                  <div className="col-6">
                    
                      <div className="form-group h4">
                        <label htmlFor="formGroupExampleInput" className='mb-3'>Email<sup style={{color:"red"}}>*</sup></label>
                        <input type="email" className="form-control p-3 mb-3" id="formGroupExampleInput" aria-describedby="emailHelp" placeholder="Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group h4">
                        <label htmlFor="formGroupExampleInput" className='mb-3'>Name<sup style={{color:"red"}}>*</sup></label>
                        <input type="text" className="form-control p-3" id="formGroupExampleInput" placeholder="Full Name" />
                      </div>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1" className="mt-3 h4">Your Enquiry <sup style={{color:"red"}}>*</sup> :</label>
                  <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="10" col="50"></textarea>
                </div>
              <div className="row">
                <div className="col mt-4">
                  <button type="button" className="btn-success btn-lg p-3">Submit Enquiry</button>
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