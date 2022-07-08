import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const [data, setdata] = useState({email:"",password:""})
    const navigate = useNavigate();
    const setValue = (e) =>{
       setdata((pre)=>{
           return{
               ...pre,
               [e.target.name]:e.target.value.trim()
           }})
      
    }
    
    const Submit = (e) =>{
            e.preventDefault()
            fetch("http://140.238.230.250:4545/login",{
                method:"PUT",
                body:data
            }) 
            navigate('/')     
     }
  return (
    <div>
        <section className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="/">
                            <h5>Login</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Email Address*</label>
                                    <input onChange={setValue} type="text" name="email" placeholder="Enter your registered email address"/>
                                </div>
                                {/* <div className="col-md-12">
                                    <label>Phone Number*</label>
                                    <input type="text" name="phn" placeholder="Your phone number"/>
                                </div> */}
                                <div className="col-md-12">
                                    <label>Password*</label>
                                    <input onChange={setValue} type="text" name="password" placeholder="Enter your password"/>
                                </div>
                                <div className="col-md-5 text-right">
                                    <button onClick={Submit} type="button" name="button">Submit</button>
                                    <a href='/register' style={{color: "red",marginLeft:"30px"}}>new account?</a>
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
