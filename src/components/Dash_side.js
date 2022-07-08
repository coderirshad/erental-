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
                        <li><Link to= {`/admin/${data.name}`}> <img src="images/sm.png" alt=""/>{data.name}</Link></li>
                        // <li><a href=""><img src="images/com.png" alt=""/>Orders</a></li>
                        // <li><a href=""><img src="images/tv.png" alt=""/>Coupons</a></li>
                        // <li><a href=""><img src="images/shoe.png" alt=""/>Reports</a></li>
                        // <li><a href=""><img src="images/kid.png" alt=""/>Reviews</a></li>
                        // <li><a href=""><img src="images/watch.png" alt=""/>Withdraw</a></li>
                        // <li><a href=""><img src="images/health.png" alt=""/>Return Request</a></li>
                        // <li><a href=""><img src="images/car.png" alt=""/>Staff </a></li>
                        // <li><a href=""><img src="images/sport.png" alt=""/>Followers</a></li>
                        // <li><a href=""><img src="images/sport.png" alt=""/>Analytics</a></li>
                        // <li><a href=""><img src="images/sport.png" alt=""/>Announcment</a></li>
                        // <li><a href=""><img src="images/sport.png" alt=""/>Tools</a></li>
                        // <li><a href=""><img src="images/sport.png" alt=""/>Inbox</a></li>
                        // <li><a href=""><img src="images/sport.png" alt=""/>Support</a></li>
                        // <li><a href=""><img src="images/sport.png" alt=""/>Settings</a></li>
                        ))} 
                    </ul>
                </div>
            </div>
        
        </div>
    </div>
</section>
  );
}
