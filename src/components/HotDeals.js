import React,{useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function HotDeals() {
    const [product, setproduct] = useState([]);    
    const fetchData = ()=>{
        fetch("http://140.238.230.250:4545/hot-deal").then((response)=>{
            return response.json();
        }).then((data)=>{
            setproduct(data)
        })
    }
   
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className="container">
    <section className="product-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bt-deal">
                                <div className="sec-title">
                                    <h6>Hot Deals</h6>
                                </div>
                               
                                <OwlCarousel key={`carousel_${product.length}`} className="bt-body owl-carousel" items={1}  nav   loop  >
                                    {product.map((data,id)=>(
                                        <div className="bt-items" key={id}>                                       
                                            <div className="bt-box d-flex">
                                                <div className="bt-img">
                                                    <a href="#"><img src="./images/about.jpg" alt=""/></a>
                                                </div>
                                                <div className="bt-content">
                                                    <p><a href="/product">{data.name}</a></p>
                                                    <ul className="list-unstyled list-inline fav">
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <ul className="list-unstyled list-inline price">
                                                        <li className="list-inline-item">INR {data.price}</li>
                                                        <li className="list-inline-item">INR {data.price+data.discounted_price}</li>
                                                    </ul>
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
</div>
  )
}
