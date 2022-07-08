import React from 'react'

export default function Login() {
  return (
    <div>
        <section className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="#">
                            <h5>Login</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Email Address*</label>
                                    <input type="text" name="mail" placeholder="Enter your registered email address"/>
                                </div>
                                {/* <div className="col-md-12">
                                    <label>Phone Number*</label>
                                    <input type="text" name="phn" placeholder="Your phone number"/>
                                </div> */}
                                <div className="col-md-12">
                                    <label>Password*</label>
                                    <input type="text" name="pas" placeholder="Enter your password"/>
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
    </div>
  )
}
