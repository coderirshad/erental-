import { Alert } from '@mui/material';
import {React, useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'

export default function Registration() {
    const [data, setdata] = useState({first_name:"",last_name:"",email:"",mobile:"",password:"",confirm_password:"",is_terms_read:false,subscribe:false})
    const [message,setmessage] = useState("");
    const [color,setcolor] = useState("2px 2px 20px 2px white");
    const navigate = useNavigate();
    const setValue = (e) =>{
        setcolor("2px 2px 20px 2px white");
        setmessage("");
       setdata((pre)=>{
           return{
               ...pre,
               [e.target.name]:e.target.value.trim()
           }})
    }    
    const Submit = (e) =>{
            e.preventDefault()
                 
                 if(data.first_name===""){
                    setmessage("please fill first name");
                    setcolor("2px 2px 20px 2px red");
                 }
                 else if(data.last_name===""){
                    setmessage("please fill last name");
                    setcolor("2px 2px 20px 2px red");
                 }
                 else if(data.email===""){
                    setmessage("please fill email");
                    setcolor("2px 2px 20px 2px red");
                 }
                 else if(data.mobile===""){
                    setmessage("please fill mobile number");
                    setcolor("2px 2px 20px 2px red");
                 }
                 else if(data.password===""){
                    setmessage("please fill password");
                    setcolor("2px 2px 20px 2px red");
                 }
                 else if(data.confirm_password===""){
                    setmessage("please fill confirm password");
                    setcolor("2px 2px 20px 2px red");
                 }
                 else if(data.is_terms_read===false){
                    setmessage("please select terms and condition");
                    setcolor("2px 2px 20px 2px red");
                }
                else{
                    fetch(`http://${process.env.REACT_APP_URL}/register`,{
                        method:"POST",
                        body:JSON.stringify(data)
                    }).then((response)=>{
                        if(response.status==200){
                            navigate('/login')  
                        }
                        else{
                            setmessage("some error occure");
                        }
                        
                        return response.json();
                    })
            }
     }

  return (
    <div>
      {/* <!-- Register --> */}
        <section className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">                      
                        <form action="#" style={{boxShadow:color}}> 
                            {message?<Alert style={{fontSize:"20px",color:"red"}}>{message}</Alert>:""}
                            <h5>Registration</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>First Name*</label>
                                    <input onChange={setValue} type="text" name="first_name" placeholder="Your first name"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Last Name*</label>
                                    <input onChange={setValue} type="text" name="last_name" placeholder="Your Last name"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Email Address*</label>
                                    <input onChange={setValue} type="text" name="email" placeholder="Your email address"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Phone Number*</label>
                                    <input onChange={setValue} type="text" name="mobile" placeholder="Your phone number"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Password*</label>
                                    <input onChange={setValue} type="password" name="password" placeholder="Password should be more than 6 character"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Confirm Password*</label>
                                    <input onChange={setValue} type="password" name="confirm_password" placeholder="Confirm your password"/>
                                </div>
                                <div className="col-md-7">
                                    <div>
                                        <input onClick={setValue} type="checkbox" name="is_terms_read" id="t-box" value="true"/>
                                        <label for="t-box">I have read the terms and condition.<Link to={'/terms&conditions'} style={{color:"blue"}}>Read</Link></label>
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
