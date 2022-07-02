import React from 'react'

export default function Registration() {
  return (
    <div>
      {/* <!-- Register --> */}
        <section className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="#">
                            <h5>Registration</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>First Name*</label>
                                    <input type="text" name="f-name" placeholder="Your first name"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Last Name*</label>
                                    <input type="text" name="l-name" placeholder="Your Last name"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Email Address*</label>
                                    <input type="text" name="mail" placeholder="Your email address"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Phone Number*</label>
                                    <input type="text" name="phn" placeholder="Your phone number"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Password*</label>
                                    <input type="text" name="pas" placeholder="Password should be more than 6 character"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Confirm Password*</label>
                                    <input type="text" name="c-pas" placeholder="Confirm your password"/>
                                </div>
                                <div className="col-md-7">
                                    <div>
                                        <input type="checkbox" name="t-box" id="t-box"/>
                                        <label for="t-box">I have read the terms and condition.</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="c-box" id="c-box"/>
                                        <label for="c-box">Subscribe for newsletter</label><br></br>
                                        <a href='/login'>already have account?</a>
                                    </div>
                                </div>
                                <div className="col-md-5 text-right">
                                    <button type="button" name="button">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Register --> */}
    </div>
  )
}
