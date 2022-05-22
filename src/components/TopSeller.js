import React,{useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

export default function Top() {
    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch("http://144.24.99.210:4545/top-sold-product")
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
    <div className="top-slr">
        <div className="sec-title">
            <h5>Top Seller</h5>
        </div>
        <OwlCarousel items={3}  className="slr-slider owl-carousel"   nav   loop >  
        {
        product.map((data) => (
            <div className="slr-items">
                <div className="slr-box d-flex">
                    <div className="slr-img">
                        <a href="#"><img src="images/sbar-6.png" alt=""/></a>
                    </div>
                    <div className="slr-content">
                        <p><a href="">{data.name}</a></p>
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
                </div>
                {/* <div className="slr-box d-flex">
                    <div className="slr-img">
                        <a href="#"><img src="images/sbar-7.png" alt=""/></a>
                    </div>
                    <div className="slr-content">
                        <p><a href="">Items Title Here</a></p>
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
                </div>
                <div className="slr-box d-flex">
                    <div className="slr-img">
                        <a href="#"><img src="images/sbar-8.png" alt=""/></a>
                    </div>
                    <div className="slr-content">
                        <p><a href="">Items Title Here</a></p>
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
                </div> */}
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
