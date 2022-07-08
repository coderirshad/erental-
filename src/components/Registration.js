import {React, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Registration() {
    const [data, setdata] = useState({fname:"",lname:"",email:"",phone:"",password:"",cpassword:"",isTermsRead:"false",subscribe:"false"})
    const navigate = useNavigate();
    const setValue = (e) =>{
       setdata((pre)=>{
           return{
               ...pre,
               [e.target.name]:e.target.value.trim()
           }})
      
    }
    
    const Submit = (e) =>{
        console.log(data)
            e.preventDefault()
            fetch("http://localhost:4545/register",{
                method:"POST",
                body:data
            })    
           navigate('/login')  
     }

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
                                    <input onChange={setValue} type="text" name="fname" placeholder="Your first name"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Last Name*</label>
                                    <input onChange={setValue} type="text" name="lname" placeholder="Your Last name"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Email Address*</label>
                                    <input onChange={setValue} type="text" name="email" placeholder="Your email address"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Phone Number*</label>
                                    <input onChange={setValue} type="text" name="phone" placeholder="Your phone number"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Password*</label>
                                    <input onChange={setValue} type="text" name="password" placeholder="Password should be more than 6 character"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Confirm Password*</label>
                                    <input onChange={setValue} type="text" name="cpassword" placeholder="Confirm your password"/>
                                </div>
                                <div className="col-md-7">
                                    <div>
                                        <input onClick={setValue} type="checkbox" name="isTermsRead" id="t-box" value="true"/>
                                        <label for="t-box">I have read the terms and condition.</label>
                                    </div>
                                    <div>
                                        <input onClick={setValue} type="checkbox" name="subscribe" id="c-box" value="true"/>
                                        <label for="c-box">Subscribe for newsletter</label><br></br>
                                        <a href='/login'>already have account?</a>
                                    </div>
                                </div>
                                <div className="col-md-5 text-right">
                                    <button onClick={Submit} type="button" name="button">Submit</button>
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
