import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
import ProfileInformation from './ProfileInformation';
import ShowAccountDetails from './ShowAccountDetails';
export default function MyAccountDashSide() {

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
            return response.json();
        }).then((data)=>{
             setuserData(data)          
        })
    }
    useEffect(()=>{
        fetchData();
    },[]) ;
    const [options, setOptions] =  useState(['ProfileInformation' ,'Quotes' , 'Orders' , 'Downloads' , 'PaymentMethod' , 'Adresses']);
  return (
    <section>
    <div className="container-fluid sliderbar my-5">
        <div className="row">
            <div className="col-3 shadow h-100" style={{width:"20%"}}>
                <div className="menu-widget" style={{textAlign:"left"}}>
                <p><i className="fa fa-bars"></i>Hello {userData.user_name}</p>
                    <ul className="list-unstyled">
                    {
                    options.map( option  => (
                        <>
                        <li><Link to= {`/myaccount/${option}`}> <img src="images/sm.png" alt=""/>My {option}</Link></li>
                        </>
                        ))} 
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
