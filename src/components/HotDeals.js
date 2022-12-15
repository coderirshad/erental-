import React,{useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
export default function HotDeals() {
    const [product, setproduct] = useState([]);    
    const fetchData = ()=>{
        fetch(`http://${process.env.REACT_APP_URL}/hot-deal`).then((response)=>{
            return response.json();
        }).then((data)=>{
            setproduct(data);
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className="container-fluid bg-light pt-5 pb-1">
        <h1 className='text-center text-decoration-underline mb-5'>Hot Deals</h1>
         <div class="row mb-2 d-flex justify-content-center">
         <OwlCarousel key={`carousel_${product.length}`} 
                             className="tab-slider owl-carousel"  
                             responsive={{
                                0: {
                                    items: 2,
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
                                loop
                                autoPlay
                                autoplayTimeout={1000}
                                 >
            {product.map((data, id) =>{
                return(
                  <div class="card">
                     <Link to={`/product/${data.product_id}`}><img class="card-img-top" src={data.image} alt="Card image cap" /></Link>
                    <div style={{fontWeight:"700"}} className='text-dark'><Link to={`/product/${data.product_id}`}>{data.product_name}</Link>
                        <ul className="list-unstyled list-inline fav">
                            <li className="list-inline-item"><i className="fa fa-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star-o text-warning"></i></li>
                        </ul>  
                    </div>
                    <div className='mt-2 d-flex justify-content-between align-itmes-center px-3 mb-2 text-dark'>
                      <div ><del>INR {data.price}</del></div>
                      <div style={{fontWeight:"700"}}> INR{data.discounted_price}</div>
                    </div>
                </div>
                )

            })}
            </OwlCarousel>
       </div>
    </div>
  )
}