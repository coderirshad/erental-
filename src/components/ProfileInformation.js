import React,{useEffect,useState} from 'react';
import GetAuthorization from './GetAuthorization';
export default function ProfileInformation() {

    const [userData, setuserData] =  useState([]);
    const fetchData = async() =>{
      await fetch(`http://${process.env.REACT_APP_URL}/user`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }  
        })
        .then((response)=>{
            return  response.json();
        }).then((data)=>{
            setuserData(data)          
        })
    }
    useEffect(()=>{
        fetchData();
    },[]) ;
  return (
    
    <div style={{marginLeft:"30%", marginTop:"-18%" , marginBottom : "3%" , height : "300px" , borderStyle: "ridge" , borderWidth: "1.5px" }} >
        <h1 style = { { textTransform : "uppercase"}}>My Details</h1>
        <div style={{ textAlign : "left" , margin : "25px" , marginTop : "35px"}} >
            <h5><strong>Name : {userData.user_name}</strong></h5>
        </div>
        <div style={{ textAlign : "left" , margin : "25px"}} >
            <h5><strong>E-Mail : {userData.email}</strong></h5>
        </div>
        <div style={{ textAlign : "left" , margin : "25px"}} >
            <h5><strong>Contact No : +91 996-658-2456</strong></h5>
        </div>
    </div>
  );
}
