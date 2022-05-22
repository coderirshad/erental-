import React,{useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

 function FeatureProduct() {

    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch("http://144.24.99.210:4545/feature-product")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             console.log(data);
         
          
            setProduct(data)

          
        })
    }
    useEffect(()=>{
        fetchData();
    
    },[product])

  return (
    <section className="product-area">
<div className="container">
    <div className="row">
       
        <div className="col-lg-9 col-md-8">
            <div className="row">
                <div className="col-md-12 padding-fix-l20">
                    <div className="ftr-product">
                        <div className="tab-box d-flex justify-content-between">
                            <div className="sec-title">
                                <h5>Feature Product</h5>
                            </div>
                      
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
                            {
                               product.map((data) => (
                            <OwlCarousel   className="tab-slider owl-carousel"items={3}  nav   loop >
                          
                                    <div className="tab-item">
                                        <div className="tab-heading">
                                            <ul className="list-unstyled list-inline" key={data.product_id}>
                                                <li className="list-inline-item"><a href="#"></a></li>
                                                <li className="list-inline-item"><a href="#">{data.sub_category}</a></li>
                                            </ul>
                                            <p><a href="">Samsung Smart Led Tv 42"</a></p>
                                        </div>
                                        <div className="tab-img">
                                            <img className="main-img img-fluid" src="images/tab-1.png" alt=""/>
                                            <img className="sec-img img-fluid" src="images/tab-16.png" alt=""/>
                                            <div className="layer-box">
                                                <a href="" className="it-comp" data-toggle="tooltip" data-placement="left" title="Compare"><img src="images/it-comp.png" alt=""/></a>
                                                <a href="" className="it-fav" data-toggle="tooltip" data-placement="left" title="Favourite"><img src="images/it-fav.png" alt=""/></a>
                                            </div>
                                        </div>
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
                                                    <li className="list-inline-item">$120.00</li>
                                                    <li className="list-inline-item">$150.00</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <a href="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><img src="images/it-cart.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                 
                                
                                </OwlCarousel>
                               ))}
                            </div>
       
                        </div>
                    </div>
                </div>
                <div className="col-md-12 padding-fix-l20">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner">
                                <a href="#"><img src="images/banner-1.png" alt="" className="img-fluid"/></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner">
                                <a href="#"><img src="images/banner-2.png" alt="" className="img-fluid"/></a>
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="col-md-12 padding-fix-l20">
                    <div className="banner-two">
                        <a href="#"><img src="images/banner-3.png" alt="" className="img-fluid"/></a>
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
export default FeatureProduct