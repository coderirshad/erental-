import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Alert } from '@mui/material';
import { CheckAuth } from './CheckAuth';
export default function Login({setlogin}) {
    const [data, setdata] = useState({user_id:"",password:""})
    const [message, setmessage] = useState("")
    const [status, setstatus] = useState(0);
    const [cookieData, setCookieData] = useState({});
    const navigate = useNavigate();
    const setValue = (e) =>{
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
                    setstatus(response.status); 
                    if(response.status!=200){
                       if(response.status==401){
                        setmessage("invaild password!")
                       }
                       else
                       {
                        setmessage("some error occure");
                       }                       
                    }           
                    return response.json();
                }).then((cookieData1)=>{
                    setCookieData(cookieData1)                    
                })               
            }
            catch(error){
                if(error.message){
                    setmessage(error.response.data.message)
                }
                else if(error.request){
                    setmessage(error.request);
                }
                else{
                    setmessage("Error",error.message);
                }
            }       
    }
    const navigateAfter = async (e) =>{
        e.preventDefault()
        await Submit();
        setlogin(true);        
        navigate('/')
        window.location.reload();
        CheckAuth()        
    }
    const setCookie = () =>{
        Cookies.set('authToken',cookieData?.authToken,{path:'/'})
        Cookies.set('refreshToken',cookieData?.refreshToken,{path:'/'})   
    }
    useEffect(() => {
        if(status==0){
            setmessage("")
        }
        else if(status!=200){
            setmessage(cookieData.message);
        }
        else{
            setCookie()    
        }
     }, [cookieData])  
    
  return (
    <div>
        <section className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="/">
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
