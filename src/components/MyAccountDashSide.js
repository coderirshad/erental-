import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
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
    console.log ( userData ) ;

    const [options, setOptions] =  useState(['ProfileInformation' ,'Quotes' , 'Orders' , 'Downloads' , 'PaymentMethod' , 'Adresses']);
  return (
    <section className="sliderbar">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-0">
                <div className="menu-widget" id = "DashboardShift">
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
