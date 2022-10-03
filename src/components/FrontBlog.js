import React, { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

const FrontBlog = ( ) => {
     const [data, setData] = useState([]);
     const [loader, setLoader] = useState(true);
     const fetchData = ()=>{
        fetch(`http://${process.env.REACT_APP_URL}/news`).then((response)=>{
            return response.json();
        }).then((data)=>{
            setData(data)
            setLoader(false);
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

     return(
        <section className="f-blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sec-title">
                            <h5>Latest Service</h5>
                        </div>
                        {!loader && 
                        <OwlCarousel className="fb-slider owl-carousel" items={4} nav loop>                       
                        {data.map((data) =>{
                            return(
                            <div className="blog-item">
                                <div className="blog-img">
                                    <a href={data.video_url} target={"_blank"}><img src={data.thumbnail} alt="" className="img-fluid"/></a>
                                </div>
                                <div className="blog-content">
                                    <h5><a href={data.video_url} target={"_blank"}>{data.title}</a></h5>
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><i className="fa fa-user-o"></i><a href="">John</a></li>
                                        <li className="list-inline-item"><i className="fa fa-calendar"></i>{data.date}</li>
                                    </ul>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        )})}
                        </OwlCarousel>
                    }
                        
                    </div>
                </div>
            </div>
        </section>
     )
}
export default FrontBlog;