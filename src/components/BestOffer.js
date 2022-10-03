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
        fetch(`http://${process.env.REACT_APP_URL}/new-product`)
        .then((response)=>{ 
            return response.json();
        })
        .then((data)=>{       
            setnewProduct(data);
            console.log("datanewproduct", data);
        }
        )

        fetch(`http://${process.env.REACT_APP_URL}/best-deal`)
        .then((response)=>{ 
            return response.json();
        })
        .then((data)=>{       
            sethotOffer(data);
        }
        )

        fetch(`http://${process.env.REACT_APP_URL}/top-sold-product`)
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
        <section className="best-ofr">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="bst-slider">
                            <div className="sec-title">
                                <h6>New Product</h6>
                            </div>
                            <OwlCarousel key={`carousel_${newProduct.length}`} className="bst-body owl-carousel" items={1} nav  loop>
                            <div className="bst-items">
                            {newProduct.map((data,id)=>(                           
                                <div className="bst-items" key={id}>
                                    <div className="bst-box d-flex">
                                        <div className="bst-img">
                                            <Link to={`/product/${data.product_id}`}><img src={data.image} style={{height:"80px",width:"80px"}} alt="" className="img-fluid"/></Link>
                                        </div>
                                        <div className="bst-content">
                                            <p><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></p>
                                            <ul className="list-unstyled list-inline fav">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul className="list-unstyled list-inline price">
                                                <li className="list-inline-item">INR {data.discounted_price}</li>
                                                <li className="list-inline-item">INR {data.price}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))} 
                            </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bst-slider">
                            <div className="sec-title">
                                <h6>Best Deal</h6>
                            </div>
                            <OwlCarousel  key={`carousel_${hotOffer.length}`} className="bst-body owl-carousel" items={1} nav  loop>
                        
                                <div className="bst-items">
                                {hotOffer.map((data)=>(
                                    <div className="bst-box d-flex">
                                        <div className="bst-img">
                                            <Link to={`/product/${data.product_id}`}><img src={data.image} style={{height:"80px",width:"80px"}} alt="" className="img-fluid"/></Link>
                                        </div>
                                        <div className="bst-content">
                                            <p><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></p>
                                            <ul className="list-unstyled list-inline fav">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul className="list-unstyled list-inline price">
                                                <li className="list-inline-item">INR {data.discounted_price}</li>
                                                <li className="list-inline-item">INR {data.price}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bst-slider">
                            <div className="sec-title">
                                <h6>Top Sold</h6>
                            </div>
                            <OwlCarousel  key={`carousel_${topRated.length}`} className="bst-body owl-carousel" items={1} nav  loop>
            
                                <div className="bst-items">
                                {topRated.map((data)=>(
                                    <div className="bst-box d-flex">
                                        <div className="bst-img">
                                            <Link to={`/product/${data.product_id}`}><img src={data.image} style={{height:"80px",width:"80px"}} alt="" className="img-fluid"/></Link>
                                        </div>
                                        <div className="bst-content">
                                            <p><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></p>
                                            <ul className="list-unstyled list-inline fav">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                            <ul className="list-unstyled list-inline price">
                                                <li className="list-inline-item">INR {data.discounted_price}</li>
                                                <li className="list-inline-item">INR {data.price}</li>
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