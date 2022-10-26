import React, {useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { Link } from 'react-router-dom';

 function SimilarProducts({category}) {

    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch(`http://${process.env.REACT_APP_URL}/category/${category[0]}/product`,{
            method:"GET"          
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{     
            setProduct(data) 
        })
    }
   
    useEffect(()=>{
        fetchData();    
    },[category])

  return (
    <section className="product-area">
        <div className="container" >
            <div className="ftr-row" style={{width:"100%"}}>
        <div className="col-md-8" style={{width:"100%"}}>
            <div className="ftr-row" >
                <div className="col-md-12 padding-fix-l20" >
                    <div className="ftr-product" >                       
                         <div className="tab-content">
                              <h2>Similar Products</h2>
                            <div className="tab-pane fade show active" id="all" role="tabpanel">
                            <OwlCarousel key={`carousel_${product.length}`} 
                             className="tab-slider owl-carousel"  
                             responsive={{
                                0: {
                                    items: 1,
                                },
                                400: {
                                    items: 2,
                                },
                                600: {
                                    items: 3,
                                },
                                700: {
                                    items: 4,
                                },
                                1000: {
                                    items: 5,

                                }}}  nav 
                                margin={5} 
                                loop={true} >
                            {
                               product.map((data) => (                      
                                    <div className="tab-item" style={{margin:"5px"}}>
                                        <div className="tab-heading">
                                            <ul className="list-unstyled list-inline" key={data.product_id}>
                                                <li className="list-inline-item"><a href="#">{data.category}</a></li>
                                                <li className="list-inline-item"><a href="#">{data.sub_category}</a></li>
                                            </ul>
                                            <div style={{height:"20px",overflow:"hidden"}}><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></div>
                                        </div>
                                        <Link to={`/product/${data.product_id}`}>
                                        <div className="tab-img">
                                            <img className="main-img img-fluid" src={data.images[0]} style={{height:"200px",width:"100%"}} alt=""/>
                                            <div className="layer-box">
                                                <a href="" className="it-comp" data-toggle="tooltip" data-placement="left" title="Compare"><img src="images/it-comp.png" alt=""/></a>
                                                <a href="" className="it-fav" data-toggle="tooltip" data-placement="left" title="Favourite"><img src="images/it-fav.png" alt=""/></a>
                                            </div>
                                        </div>
                                        </Link>
                                        <div className="img-content d-flex justify-content-between">
                                            <div>
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
                                            <div>
                                                <Link to={`/product/${data.product_id}`} data-toggle="tooltip" data-placement="top" title="Add to Cart"><img src="images/it-cart.png" alt=""/></Link>
                                            </div>
                                        </div>
                                    </div>
                                 
                                    ))}
                                </OwlCarousel>   
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
        <div className="col-md-12">
            <div className="tp-bnd owl-carousel">
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-01.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-02.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-03.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-04.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-05.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-06.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-07.png" alt="" className="img-fluid"/></a>
                </div>
            </div>
        </div>
            </div>
        </div>
    </section>
  );
}

export default SimilarProducts;