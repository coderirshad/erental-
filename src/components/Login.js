import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Alert } from '@mui/material';
import { CheckAuth } from './CheckAuth';
export default function Login({setlogin}) {
    const [data, setdata] = useState({user_id:"",password:""})
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
    const Submit = async () =>{    
                try{
                    await fetch(`http://${process.env.REACT_APP_URL}/login`,{
                        method:"POST",
                        body:JSON.stringify(data)
                    }).then((response)=>{
                        if(response.status!=200){
                           if(response.status==401){
                            setmessage("invaild password!")
                            setcolor("2px 2px 20px 2px red");
                           }
                           else
                           {
                            setmessage("some error occure");
                            setcolor("2px 2px 20px 2px red");
                           }                       
                        }           
                        return response.json();
                    }).then((cookieData1)=>{
                        setCookie(cookieData1)
                        localStorage.setItem('profile', JSON.stringify({ data }));                  
                    })               
                }
                catch(error){
                    if(error.message){
                        setmessage(error.response.data.message)
                        setcolor("2px 2px 20px 2px red");
                    }
                    else if(error.request){
                        setmessage(error.request);
                        setcolor("2px 2px 20px 2px red");
                    }
                    else{
                        setmessage("Error",error.message);
                        setcolor("2px 2px 20px 2px red");
                    }
                }
                   
    }
    const navigateAfter = async (e) =>{
        e.preventDefault()
        if(data.user_id==""){
            setmessage("Please enter email");
            setcolor("2px 2px 20px 2px red");
        }         
        else if(data.password==""){
            setmessage("Please enter password");
            setcolor("2px 2px 20px 2px red");
        } 
        else{
            await Submit();
            setlogin(true);        
            navigate('/')
            window.location.reload();
            CheckAuth()
        }
               
    }

    console.log("Hey ####################################")
    const setCookie = (cookieData) =>{
        Cookies.set('authToken',cookieData?.authToken,{path:'/'})
        Cookies.set('refreshToken',cookieData?.refreshToken,{path:'/'})   
    } 
    
  return (
    <div>
        <section className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="/" style={{boxShadow:color}}>
                            {message?<Alert style={{fontSize:"20px",color:"red"}}>{message}</Alert>:""}
                            <h5>Login</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Email Address*</label>
                                    <input onChange={setValue} type="text" name="user_id" placeholder="Enter your registered email address"/>
                                </div>
                                <div className="col-md-12">
                                    <label>Password*</label>
                                    <input onChange={setValue} type="password" name="password" placeholder="Enter your password"/>
                                </div>
                                <div className="col-md-5 text-right">
                                    <button onClick={navigateAfter} type="button" name="button">Submit</button>
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
