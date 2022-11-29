import React,{useEffect,useState} from 'react';
import { Outlet } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
import StudentProfile from './StudentProfile';
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
            setuserData(data);        
        })
    }
    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) ;
  return (
    <div className='shadow mt-2'>
        <div className='container shadow-sm d-flex justify-content-between px-5 py-4  h5 text-muted' style={{textAlign :"left"}}>
            <div>
                <div>Name : {userData.user_name}</div>
                <div>Email : {userData.email}</div>
            </div>
            <div>
                <div>Contact Number : {userData.mobile}</div>
            </div>
        </div>
        <div>
            {/* <StudentProfile /> */}
            <Outlet />
        </div>
    </div>
  );
}