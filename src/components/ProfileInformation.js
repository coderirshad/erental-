import React,{useEffect,useState} from 'react';
import { Outlet } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
import StudentProfile from './StudentProfile';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SchoolIcon from '@mui/icons-material/School';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import BadgeIcon from '@mui/icons-material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ImageUploder from './ImageUploder';
export default function ProfileInformation() {
    const [userData, setuserData] =  useState([]);
    const [userUpdatedData, setuserUpdatedData] =  useState({avtr:null,firstName:'',lastName:'',email:'',mobile:'',dob:'',professsion:'',adharFront:null,adharBack:null,collegeId:null,addressProof:null});
    const [state, setState] = useState({activeProofession:"Student"})
    var fileData = new FormData();
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
    const handleActiveProofession = (value) => {
        setuserUpdatedData(prev=>({
            ...prev,
            professsion:value,
        }))
        setState(prev=>({
            ...prev,
            activeProofession:value
        }))
    }
    const handleFiles = async (e) => {
        await fileData.append("file",e.target.files[0])
        await fileData.append("tag",e.target.name)
        // for (var [key, value] of fileData.entries()) {
        //     console.log(key, value)
        // }
    }
    const handleInformation = async (e) => {
        setuserUpdatedData(prev=>({
            ...prev,
            [e.target.name]:e.target.value.trim(),
        }))       
    }
    const handleSubmit = () => {
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
            },
            body: fileData,
            redirect: 'follow'
          };
          
          fetch(`http://${process.env.REACT_APP_URL}/upload`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{ 
        fetchData();
    },[]) ;
  return (
    <div className='profile'>
        <div className='header'>
           <span>Personal Information</span>
           <button><LogoutIcon></LogoutIcon>LogOut</button>
        </div>
        <div className='avtr'>
            <img className='pic' src='/images/user.png'></img>
            <input type="file" id='files' name='USER_PROFILE_PIC' onChange={handleFiles} />
            <label for="files">Select file</label>
            <button className='delete' style={{color:'#B00020'}} ><DeleteForeverIcon ></DeleteForeverIcon>Delete</button>
        </div>
        <div className='information'>
            <ul>
                <li>
                    <label>First Name</label><br></br>
                    <input type='text' name='firstName' onChange={handleInformation} placeholder={userData.f_name} value={userUpdatedData.firstName}/>
                </li>
                <li>
                    <label>Last Name</label><br></br>
                    <input type='text' name='lastName' onChange={handleInformation} placeholder={userData.l_name} value={userUpdatedData.lastName} />
                </li>
                <li>
                    <label>Email</label><br></br>
                    <input type='email' name='email' onChange={handleInformation} placeholder={userData.email} value={userUpdatedData.email} />
                </li>
                <li>
                    <label>Mobile Number</label><br></br>
                    <div style={{display:'flex'}}>
                        <input style={{width:'18%',marginRight:'5px'}} name='mobile' onChange={handleInformation} type='text' placeholder='+91'></input>
                        <input type='mobile' placeholder={userData.mobile} value={userUpdatedData.mobile}/>
                    </div>
                </li>
                <li>
                    <label>Date of birth [{userData.dob}]</label><br></br>
                    <input type='date' name='dob' onChange={handleInformation}/>
                </li>
            </ul>
        </div>
        <div className='header'>
           <span>Your Profession</span>
        </div>
        <div className='professionList'>
             <ul>
                <li name='profession' onClick={()=>handleActiveProofession("Student")} className={`${state.activeProofession === "Student" ? "active" : "inactive"}`}>
                    <div><SchoolIcon></SchoolIcon></div>
                    <label>Student</label>
                </li>
                <li name='profession' onClick={()=>handleActiveProofession("Event Manager")} className={`${state.activeProofession === "Event Manager" ? "active" : "inactive"}`}>
                    <div><OtherHousesIcon></OtherHousesIcon></div>
                    <label>Event Manager</label>
                </li>
                <li name='profession' onClick={()=>handleActiveProofession("Employee")} className={`${state.activeProofession === "Employee" ? "active" : "inactive"}`}>
                    <div><BadgeIcon></BadgeIcon></div>
                    <label>Employee</label>
                </li>
                <li name='profession' onClick={()=>handleActiveProofession("Other")} className={`${state.activeProofession === "Other" ? "active" : "inactive"}`}>
                    <div><SearchIcon></SearchIcon></div>
                    <label>Other</label>
                </li>
             </ul>
        </div>
        <div className='header'>
           <span>Adhar ID</span>
        </div>
        <div className='adharId'>
           <ImageUploder heading='adharcard Front' fieldName='ADHAR_FRONT' handleFile={handleFiles}></ImageUploder>
           <ImageUploder heading='adharcard Back' fieldName='ADHAR_BACK' handleFile={handleFiles}></ImageUploder>
        </div>
        <div className='header'>
           <span>College ID / Company ID</span>
        </div>
        <div className='collegeId'>
            <ImageUploder heading='college ID' fieldName='INSTITUTE_ID' handleFile={handleFiles}></ImageUploder>
        </div>
        <div className='header'>
           <span>Address Proof</span>
        </div>
        <div className='addressProof'>
            <ImageUploder heading='Address Proof' fieldName='ADDRESS_PROOF' handleFile={handleFiles}></ImageUploder>
        </div>
        <div className='header'>
           <span></span>
           <button style={{background: '#003459',color:'white'}} onClick={handleSubmit}>Save Changes</button>
        </div>
        <div>
            {/* <StudentProfile /> */}
            {/* <Outlet /> */}
        </div>
    </div>
  );
}