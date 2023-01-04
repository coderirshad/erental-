import React, {useEffect,useState} from 'react';
import { useNavigate} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { Link } from 'react-router-dom';

 function CategorySlider() {
    const navigate = useNavigate();
    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch(`http://${process.env.REACT_APP_URL}/category`,{
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
    },[])
    const List = [] ;
    const handleClick1 = async ( category ) =>{
        category.subcategory.map ( (subcategory) => (
            List.push ( subcategory.id )
        ) ) ;
        navigate('/allProductList',{state:{ list : List }});
    }

  return (
    <section className="product-area">
        <div className="container-fluid" >
            <div className="ftr-row" style={{width:"100%"}}>
        <div className="col-md-8" style={{width:"100%"}}>
            <div className="ftr-row" >
                <div className="col-md-12 padding-fix-l20" >
                    <div className="ftr-product" >                       
                         <div className="tab-content">
                              <h2 className='py-5' style={{color:"#144169", fontWeight:"bold"}}>TOP CATEGORIES</h2>
                            <div className="tab-pane fade show active" id="all" role="tabpanel">
                            <OwlCarousel key={`carousel_${product.length}`} 
                             className="tab-slider owl-carousel"  
                             items={5}  
                             nav
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

                                }}}   
                             loop >
                            {
                               product.map((data) => (                      
                                    <div className="tab-item" style={{margin:"5px"}}>
                                        <button className = "button1" onClick= {() => handleClick1 ( data ) } >
                                            <a>
                                            <img class = "productImage"src= {data.image}></img>
                                            <h4>{data.name}</h4>
                                            </a>                                                      
                                        </button>
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

export default CategorySlider;
