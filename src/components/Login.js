import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { Alert } from '@mui/material';
export default function Login() {
    const [cookies, setCookie] = useCookies(['user']);
    const [data, setdata] = useState({user_id:"",password:""})
    const [message, setmessage] = useState("welcome to erentals login")
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
    const Submit = async (e) =>{
            
            e.preventDefault()
            try{
                await fetch(`http://${process.env.REACT_APP_URL}/login`,{
                    method:"POST",
                    body:JSON.stringify(data)
                }).then((response)=>{
                    setstatus(response.status);               
                    return response.json();
                }).then((cookieData1)=>{
                    setCookieData(cookieData1)                    
                })

               
            }
            catch(error){
                if(error.message){
                    console.log(error.response.data.message)
                }
                else if(error.request){
                    console.log(error.request);
                }
                else{
                    console.log("Error",error.message);
                }
            }       
     }
     useEffect(() => {
        console.log(status)
        if(status==0){
            setmessage("welcome to erentals login")
        }
        else if(status!=200){
            setmessage(cookieData.message);
        }
        else{
            setCookie('authToken',cookieData?.authToken,{path:'/'})
            setCookie('refreshToken',cookieData?.refreshToken,{path:'/'})
            navigate('/') 
        }
     }, [cookieData]) 
  return (
    <div>
        <section className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="/">
                            <Alert style={{fontSize:"20px",color:"red"}}>{message}</Alert>
                            <h5>Login</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Email Address*</label>
                                    <input onChange={setValue} type="text" name="user_id" placeholder="Enter your registered email address"/>
                                </div>
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
