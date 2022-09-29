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
        <section class="f-blog">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="sec-title">
                            <h5>Latest Service</h5>
                        </div>
                        {!loader && 
                        <OwlCarousel className="fb-slider owl-carousel" items={4} nav loop>                       
                        {data.map((data) =>{
                            return(
                            <div class="blog-item">
                                <div class="blog-img">
                                    <a href={data.video_url} target={"_blank"}><img src={data.thumbnail} alt="" class="img-fluid"/></a>
                                </div>
                                <div class="blog-content">
                                    <h5><a href={data.video_url} target={"_blank"}>{data.title}</a></h5>
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item"><i class="fa fa-user-o"></i><a href="">John</a></li>
                                        <li class="list-inline-item"><i class="fa fa-calendar"></i>{data.date}</li>
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