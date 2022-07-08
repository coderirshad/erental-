import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
export default function Dash_side() {

    
    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch("http://140.238.230.250:4545/dashboard-sidebar")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             console.log(data);
             setProduct(data)          
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    
    <section className="sliderbar">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-0">
                <div className="menu-widget">
                <p><i className="fa fa-bars"></i>Dashboard</p>
                    <ul className="list-unstyled">
                    {
                    product.map(data => (
                        <>
                        <li><Link to= {`/admin/${data.name}`}> <img src="images/sm.png" alt=""/>{data.name}</Link></li>
                       
                        <li><a href={data.id}><img src="images/sm.png" alt=""/>{data.name}</a></li>
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
