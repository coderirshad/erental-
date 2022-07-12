import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
export default function Login() {
    const [cookies, setCookie] = useCookies(['user']);
    const [data, setdata] = useState({user_id:"",password:""})
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
            try{
                fetch(`http://${process.env.REACT_APP_URL}/login`,{
                    method:"POST",
                    body:JSON.stringify(data)
                }).then((response)=>{
                    return response.json();
                }).then((cookieData)=>{
                    console.log(".........",cookieData.authToken);
                    setCookie('authToken',cookieData.authToken,{path:'/'})
                    setCookie('refreshToken',cookieData.refreshToken,{path:'/'})
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
