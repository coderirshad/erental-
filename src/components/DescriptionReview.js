import React from 'react'


function DescriptionReview() {
  return (
    <div>
        <div class="container-fluid text-left" style={{"text-align":"left",width:"78%"}}>
        <div class="row justify-content-between p-3">
           <div class="col-6">
              <h5 class="p-3 text-left" style={{"font-size":"25px","font-weight":"600"}}>REVIEW</h5>
              <p class="p-3 h4">no review yet</p>
           </div>
           <div class="col-6 p-3">
                <h5 style={{"font-size":"25px","font-weight":"600"}}>ADD A REVIEW</h5>
                <p className='mt-3 h5'>Your email address will not be published. Required fields are marked <sup style={{color:"red"}}>*</sup></p>
                <p className='mt-4 h4'>Your rating <sup style={{color:"red"}}>*</sup> :</p>
                <div class="form-group">
                  <label htmlFor="exampleFormControlTextarea1" className="mt-5 h4">Your review <sup style={{color:"red"}}>*</sup> :</label>
                  <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="6" col="50"></textarea>
                </div>
                <form>
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
                            <label htmlFor="formGroupExampleInput" className='mb-3'>Full Name<sup style={{color:"red"}}>*</sup></label>
                            <input type="email" class="form-control p-3" id="formGroupExampleInput" placeholder="Full Name" />
                          </div>
                  </div>
                  <div class="row">
                    <div class="col-1 mt-4">
                      <button type="submit" class="btn btn-success btn-lg p-3">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionReview