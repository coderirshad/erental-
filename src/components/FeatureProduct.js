import React,{useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { Link } from 'react-router-dom';

 function FeatureProduct() {

    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch("http://140.238.230.250:4545/feature-product")
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
    <section className="product-area">
        <div className="container">
            <div className="row">
                <div class="col-md-4">
                    <div class="sec-title">
                        <h5>Feature Product</h5>
                    </div>
                    <div class="feat-box">
                        <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" class="img-fluid"/>
                        <div class="ft-bx-content">
                            <h5>Feature Product</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit.Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit.Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit.</p>
                        </div>
                    </div>
                </div>
        <div className="col-md-8">
            <div className="row">
                <div className="col-md-12 padding-fix-l20">
                    <div className="ftr-product">
                        <div className="tab-box d-flex justify-content-between">
                            
                      
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#all">All</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#elec">Electronics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#smart">Smartphones</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#shoe">Shoes</a>
                                </li>
                            </ul>
                        </div>
                         <div className="tab-content">
                    
                            <div className="tab-pane fade show active" id="all" role="tabpanel">
                            <OwlCarousel key={`carousel_${product.length}`}  className="tab-slider owl-carousel"items={3}  nav   loop >
                            {
                               product.map((data) => (                      
                                    <div className="tab-item">
                                        <div className="tab-heading">
                                            <ul className="list-unstyled list-inline" key={data.product_id}>
                                                <li className="list-inline-item"><a href="#">{data.category}</a></li>
                                                <li className="list-inline-item"><a href="#">{data.sub_category}</a></li>
                                            </ul>
                                            <p><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></p>
                                        </div>
                                        <Link to={`/product/${data.product_id}`}>
                                        <div className="tab-img">
                                            <img className="main-img img-fluid" src={data.image} alt=""/>
                                            <img className="sec-img img-fluid" src={data.image} alt=""/>
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
                                                    <li className="list-inline-item">INR {data.price}</li>
                                                    <li className="list-inline-item">INR {data.price + data.discounted_price}</li>
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
                {/* <div className="col-md-12 padding-fix-l20">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner">
                                <a href="#"><img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner">
                                <a href="#"><img src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid"/></a>
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="col-md-12 padding-fix-l20">
                    <div className="banner-two">
                        <a href="#"><img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWlycm9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid"/></a>
                    </div>
                </div> */}
                
             
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
export default FeatureProduct