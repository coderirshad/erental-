import React from "react";
import { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { Link } from "react-router-dom";
const BestOffer = ( ) =>{
    const [newProduct, setnewProduct] = useState([]);
    const [hotOffer, sethotOffer] = useState([]);
    const [topRated, settopRated] = useState([]);
    const fetchData = ()=>{
        fetch('http://140.238.230.250:4545/new-product')
        .then((response)=>{ 
            return response.json();
        })
        .then((data)=>{       
            setnewProduct(data);
        }
        )

        fetch('http://140.238.230.250:4545/new-product')
        .then((response)=>{ 
            return response.json();
        })
        .then((data)=>{       
            sethotOffer(data);
        }
        )

        fetch('http://140.238.230.250:4545/new-product')
        .then((response)=>{ 
            return response.json();
        })
        .then((data)=>{       
            settopRated(data);
        }
        )
    }
    useEffect(() => {
      fetchData();    
    }, [])
    return (
        <section class="best-ofr">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="bst-slider">
                            <div class="sec-title">
                                <h6>New Product</h6>
                            </div>
                            <OwlCarousel key={`carousel_${newProduct.length}`} class="bst-body owl-carousel" items={1} nav  loop>
                            <div class="bst-items">
                            {newProduct.map((data,id)=>(                           
                                <div class="bst-items" key={id}>
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <Link to={`/product/${data.product_id}`}><img src="images/sbar-9.png" alt="" class="img-fluid"/></Link>
                                        </div>
                                        <div class="bst-content">
                                            <p><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">INR {data.price}</li>
                                                <li class="list-inline-item">INR {data.price + data.discounted_price}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))} 
                            </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="bst-slider">
                            <div class="sec-title">
                                <h6>Hot Offer</h6>
                            </div>
                            <OwlCarousel  key={`carousel_${hotOffer.length}`} class="bst-body owl-carousel" items={1} nav  loop>
                        
                                <div class="bst-items">
                                {hotOffer.map((data)=>(
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <Link to={`/product/${data.product_id}`}><img src="images/sbar-9.png" alt="" class="img-fluid"/></Link>
                                        </div>
                                        <div class="bst-content">
                                            <p><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">INR {data.price}</li>
                                                <li class="list-inline-item">INR {data.price + data.discounted_price}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            </OwlCarousel>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="bst-slider">
                            <div class="sec-title">
                                <h6>Top Rated</h6>
                            </div>
                            <OwlCarousel  key={`carousel_${topRated.length}`} class="bst-body owl-carousel" items={1} nav  loop>
            
                                <div class="bst-items">
                                {topRated.map((data)=>(
                                    <div class="bst-box d-flex">
                                        <div class="bst-img">
                                            <Link to={`/product/${data.product_id}`}><img src="images/sbar-7.png" alt="" class="img-fluid"/></Link>
                                        </div>
                                        <div class="bst-content">
                                            <p><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></p>
                                            <ul class="list-unstyled list-inline fav">
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul class="list-unstyled list-inline price">
                                                <li class="list-inline-item">INR {data.price}</li>
                                                <li class="list-inline-item">INR {data.price + data.discounted_price}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    ))}
                                </div>                           
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BestOffer;