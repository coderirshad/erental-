import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
export default function Dash_side() {

    
    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch(`http://${process.env.REACT_APP_URL}/dashboard-sidebar`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }  
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             setProduct(data)          
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    
    <section className="sliderbar" >
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2">
                <div className="menu-widget">
                <p style={{textAlign:"left"}}><i className="fa fa-bars"></i>Dashboard</p>
                    <ul className="list-unstyled">
                    {
                    product.map(data => (
                        <>
                        <li><Link className='border' style={{textAlign:"left"}} to= {`/admin/${data.name}`}> <img src="images/sm.png" alt=""/>{data.name}</Link></li>                       
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
