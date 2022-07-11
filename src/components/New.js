import React,{useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

 function New() {

    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch("http://localhost:8080/new-product")
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
    <div className="col-lg-9 col-md-8">
    <div className="row">
    <div className="col-md-12 padding-fix-l20">
                    <div className="new-product">
                        <div className="sec-title">
                            <h5>New Product</h5>
                        </div>
                        <OwlCarousel key={`carousel_${product.length}`}  className="new-slider owl-carousel" items={3}  nav  loop   >  
                        {
        product.map(data => (
                            <div className="new-item">
                                <div className="tab-heading">
                                    <ul className="list-unstyled list-inline" key={data.product_id}>
                                        <li className="list-inline-item"><a href="">{data.category},</a></li>
                                        <li className="list-inline-item"><a href="#">{data.sub_category}</a></li>
                                    </ul>
                                    <p><a href="">{data.product_name}</a></p>
                                </div>
                                <div className="new-img">
                                    <img className="main-img img-fluid" src="images/tab-11.png" alt=""/>
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
                                            <li className="list-inline-item">{data.price}</li>
                                            <li className="list-inline-item">{data.discounted_price}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a href="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><img src="images/it-cart.png" alt=""/></a>
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
                </section>

  );
}
export default New